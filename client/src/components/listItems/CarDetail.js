import { useState } from "react";
import { Card } from "antd";
import RemoveCar from "../buttons/RemoveCar";
import UpdateCar from "../forms/UpdateCar";

import { EditOutlined } from "@ant-design/icons";

const CarDetail = (props) => {
  const [id] = useState(props.id);
  const [, setYear] = useState(props.year);
  const [, setMake] = useState(props.make);
  const [, setModel] = useState(props.model);
  const [, setPrice] = useState(props.price);
  const [personId, setPersonId] = useState(props.personId);
  const [editMode, setEditMode] = useState(false);

  const handleButtonClick = () => {
    setEditMode(!editMode);
  };

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case "year":
        setYear(value);
        break;
      case "make":
        setMake(value);
        break;
      case "model":
        setModel(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "personId":
        setPersonId(value);
        break;
      default:
        break;
    }
  };

  const numberWithComma = new Intl.NumberFormat();
  const formattedPrice = numberWithComma.format(props.price);

  return (
    <div>
      {editMode ? (
        <UpdateCar
          id={props.id}
          year={props.year}
          make={props.make}
          model={props.model}
          price={props.price}
          personId={personId}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
        <Card
          type="inner"
          style={{
            width: "80%",
            margin: "5px auto",
            border: "1px solid darkgrey",
            marginBottom: "40px",
          }}
          actions={[
            <EditOutlined key="edit" onClick={handleButtonClick} />,
            <RemoveCar id={id} />,
          ]}
        >
          <p>
            <span className="car-detail-label">Year:</span> {props.year}
          </p>
          <p>
            <span className="car-detail-label">Make:</span> {props.make}
          </p>
          <p>
            <span className="car-detail-label">Model:</span> {props.model}
          </p>
          <p>
            <span className="car-detail-label">Price:</span> ${formattedPrice}
          </p>
          <p>
            <span className="car-detail-label">Owner</span> ID: {props.personId}
          </p>
        </Card>
      )}
    </div>
  );
};

export default CarDetail;
