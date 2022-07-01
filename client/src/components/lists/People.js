import { useQuery } from '@apollo/client'
import { GET_PEOPLE_AND_CARS } from "../../queries";
import { List } from 'antd'
import Person from '../listItems/Person'

const getStyles = ()=> ({
  list: {
    display: 'flex',
    justifyContent: 'center',
  }
})

const People = ()=> {
  const styles = getStyles()
  const { loading, error, data } = useQuery(GET_PEOPLE_AND_CARS);
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`
  const peopleWithCars = data.people.map((person)=>{
    return {
      ...person,
      ownCars: data.cars.filter((car)=> car.personId === person.id)
    }
  })

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {peopleWithCars.map(({ id, firstName, lastName, ownCars }) => (
        <List.Item key={id}>
          <Person
            key={id}
            id={id}
            firstName={firstName}
            lastName={lastName}
            ownCars={ownCars}
          />
        </List.Item>
      ))}
    </List>
  );
}

export default People;