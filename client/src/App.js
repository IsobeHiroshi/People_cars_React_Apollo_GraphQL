import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home'
import ShowPage from "./components/ShowPage";


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
})

const App = ()=> {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<ShowPage />} />
        </Routes>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
