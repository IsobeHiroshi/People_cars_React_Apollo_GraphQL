import { useState } from "react";
import { Card } from "antd";
import RemoveCar from "../buttons/RemoveCar";
import UpdatePerson from "../forms/UpdatePerson";

import { EditOutlined } from "@ant-design/icons";

const Car = ({id, make, model}) => {
  /* const [id] = useState(id); */
  /* const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName); */
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  /* const updateStateVariable = (variable, value) => {
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
  }; */

  return (
    <Card
      type="inner"
      style={{
        width: '80%',
        margin: '5px auto',
      }}
      actions={[
        <EditOutlined key="edit" onClick={handleButtonClick} />,
        <RemoveCar id={id} />,
      ]}
    >
      {make} {model}
    </Card>
  );
};

export default Car;
