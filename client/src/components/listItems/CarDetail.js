import { useState } from "react";
import { Card } from "antd";
import RemoveCar from "../buttons/RemoveCar";
import UpdateCar from "../forms/UpdateCar";

import { EditOutlined } from "@ant-design/icons";

const CarDetail = ({ id, year, make, model, price }) => {
  return (
    <Card
      type="inner"
      style={{
        width: "80%",
        margin: "5px auto",
      }}
      actions={[<RemoveCar id={id} />]}
    >
      <p>Year: {year}</p>
      <p>Make: {make}</p>
      <p>Model: {model}</p>
      <p>Price: ${price}</p>
    </Card>
  );
};

export default CarDetail;
