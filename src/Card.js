import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Context } from "./Context";
import React, { useContext } from "react";

function BasicCard(props) {
  const changeData = useContext(Context);

  return (
    <Card style={{ width: "18rem", height: "28rem", margin: "1rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{ fontSize: "1.3rem", color: "rgb(250, 92, 92)" }}>
          {props.name}
        </Card.Title>
        <Card.Text style={{ fontSize: "1.2rem", fontWeight: 800 }}>
          {" "}
          {props.price}
        </Card.Text>
        <Button onClick={props.getDetails} variant="primary">
          Details
        </Button>
        <Button
          onClick={props.changeNumber}
          id="addBTN"
          style={{ marginLeft: "3rem" }}
          variant="secondary"
        >
          {props.cart}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default BasicCard;
