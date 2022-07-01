import Title from "./components/layout/Title";
import People from "./components/lists/People";
import AddPerson from "./components/forms/AddPerson";
import AddCar from "./components/forms/AddCar";

const Home = () => {
  return (
    <div className="App">
      <Title />
      <AddPerson />
      <AddCar />
      <People />
    </div>
  );
};

export default Home;
