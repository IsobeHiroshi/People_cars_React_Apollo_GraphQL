import { useState } from "react";
import { Card } from "antd";
import RemovePerson from "../buttons/RemovePerson";
import UpdatePerson from "../forms/UpdatePerson";

import { EditOutlined } from "@ant-design/icons";

const getStyles = () => ({
  card: {
    backgroundColor: "red",
    width: "500px",
  },
});

const Car = (props) => {
  const styles = getStyles();
  const [id] = useState(props.id);
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

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
            <RemovePerson id={id} />,
          ]}
          style={styles.card}
        >
          {firstName} {lastName}
          {props.ownCars.map(({ id, make, model }) => (
            <Card key={id}>
              {make} {model}
            </Card>
          ))}
        </Card>
      )}
    </div>
  );
};

export default Car;
