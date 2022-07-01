import { useState } from "react";
import { Card } from "antd";
import RemoveCar from "../buttons/RemoveCar";
import UpdateCar from "../forms/UpdateCar";

import { EditOutlined } from "@ant-design/icons";

const Car = ({id, make, model}) => {

  return (
    <Card
      type="inner"
      style={{
        width: "80%",
        margin: "30px auto",
        backgroundColor: "#ebebeb",
      }}
      actions={[<RemoveCar id={id} />]}
    >
      {make} {model}
    </Card>
  );
};

export default Car;
