import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PERSON_WITH_CARS } from "../queries";
import { Card } from "antd";
import CarDetail from './listItems/CarDetail'

const getStyles = () => ({
  card: {
    width: "500px",
    backgroundColor: "#d1fffd",
  },
});

const ShowPage = (props) => {
  const styles = getStyles();
  const { personId } = useParams();

  const { loading, error, data } = useQuery(GET_PERSON_WITH_CARS, {variables: {personId}});
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const { person, cars } = data;
  const personsCar = []

  for (let i=0; i<cars.length; i++) {
    if (cars[i].personId === person.id) {
      personsCar.push(cars[i])
    }
  }
  
  const personWithCars = {
    ...person,
    ownCars: personsCar
  }

  const {firstName, lastName, ownCars} = personWithCars

  console.log(personWithCars);

  return (
    <>
      <Card
        style={styles.card}
      >
        <p
          style={{
            fontWeight: "bold",
            marginBottom: "20px",
            fontSize: "20px",
          }}
        >
          {firstName} {lastName}
        </p>
        {ownCars.map(({
          id,
          year,
          make,
          model,
          price, 
        }) => (
          <CarDetail
            key={id}
            id={id}
            year={year}
            make={make}
            model={model}
            price={price} />
        ))}
      </Card>
      <Link to="/">GO BACK TO HOME</Link>
    </>
  );
};
export default ShowPage;