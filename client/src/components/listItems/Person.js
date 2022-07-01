import { useState } from 'react'
import { Link } from "react-router-dom";
import { Card } from 'antd'
import RemovePerson from '../buttons/RemovePerson'
import UpdatePerson from '../forms/UpdatePerson'

import { EditOutlined } from '@ant-design/icons'
import Car from './Car'

const getStyles = () => ({
  card: {
    width: "500px",
    backgroundColor: "#d1fffd",
    marginBottom: '70px',
    border: '1px solid darkgrey',
  },
});

const Person = (props)=> {
  const styles = getStyles()
  const [id] =useState(props.id)
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = ()=> {
    setEditMode(!editMode)
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case "firstName":
        setFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      default:
        break;
    }
  };

  return (
    <div>
      {editMode ? (
        <UpdatePerson
          id={props.id}
          firstName={props.firstName}
          lastName={props.lastName}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Card
          actions={[
            <EditOutlined key="edit" onClick={handleButtonClick} />,
            <RemovePerson id={id} ownCars={props.ownCars}/>,
          ]}
          style={styles.card}
        >
          <p style={{
            fontWeight: 'bold',
            marginBottom: '20px',
            fontSize: '20px',
            }}>
            {firstName} {lastName}
          </p>
          {props.ownCars.map(({ id, make, model }) => (
            <Car key={id} id={id} make={make} model={model} />
          ))}
          <Link
            to={`/people/${id}`}
            style={{
              fontWeight: 'bold',
              textDecoration: 'underline',
              color: 'navy',
            }}
            >Learn More to Edit Car Info</Link>
        </Card>
      )}
    </div>
  );
}

export default Person;