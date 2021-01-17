import React from "react";
import {CardColumns,Card, Button} from "react-bootstrap";


function Project(props) {
  return (
    <CardColumns>
    <Card style={{width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        {props.desc}
        </Card.Text>
        <a href={props.link}> <Button variant="primary">Repo</Button></a>
        <a href={props.deployed}> <Button variant="secondary">Deployed App</Button></a>
      </Card.Body>
    </Card>
    </CardColumns>

  );
}

export default Project;
