import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Components/Grid";
import {repos} from "../utils/repos";
import Me from "../me.jpg";
import Carousel from 'react-bootstrap/Carousel'
 

// import API from "../utils/API";

function Home(props) {
  const [gitRepo, setgitRepo] = useState([]);
useEffect(() => {
  setgitRepo(repos)
}, [])


  console.log(gitRepo);

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 className="text-light">
            {" "}
            I'm Greyson.
            <p>
              <img
                style={{ borderRadius: "50%", marginTop: "15px" }}
                src={Me}
                height="350px"
                alt="me"
              ></img>{" "}
            </p>
            a full stack developer
          </h1>
        </Col>
      </Row>
      <Container>
        <Row>
          <Col size="6">
            <Carousel>
              {repos.map((repo) => {
                return(
              <Carousel.Item interval={1000}>
                <img
                key={repo.id}
                  className="d-block w-100"
                  src={repo.img}
                  alt= {repo.name}
                />
                <Carousel.Caption>
                  <h3>{repo.name}</h3>
                  <p>
                    {repo.desc}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              )
              })}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
