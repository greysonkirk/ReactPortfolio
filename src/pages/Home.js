import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import { repos } from "../utils/repos";
import Me from "../me.jpg";
import Project from "../Components/Project";
import { Button } from "react-bootstrap";

function Home(props) {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <h1 className="text-light" style={{ fontFamily: "Abel" }}>
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
          <Col size="4">
            <a
              id="icon"
              href="https://github.com/greysonkirk?tab=repositories"
              target="_blank"
            >
              <Button variant="light">
                <i class=" fab fa-github"></i> GitHub
              </Button>
            </a>
          </Col>
          <Col size="4">
            <a
              id="icon"
              href="https://www.linkedin.com/in/greysonkirk/"
              target="_blank"
            >
              <Button variant="light">
                <i class="fab fa-linkedin"></i> LinkedIn
              </Button>
            </a>
          </Col>
          <Col size="4">
            <a id="icon" href="mailto: GreysonKirk@yahoo.com">
              <Button variant="light">
                {" "}
                <i class="far fa-envelope"> GreysonKirk@Yahoo.com</i>
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {repos.map((repo) => {
            return (
              <Col size="4">
                <Project {...repo}></Project>
              </Col>
            );
          })}
        </Row>
      </Container>
    </Container>
  );
}

export default Home;
