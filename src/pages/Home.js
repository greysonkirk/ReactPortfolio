import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
import { Col, Row, Container } from "../Components/Grid";
import API from '../utils/API'
import Me from '../me.jpg'
// import API from "../utils/API";
 

function Home(props) {

 const [gitRepo, setgitRepo] = useState([{}])

 useEffect(() => {
  API.getProjects()
  .then(res => 
    setgitRepo(res.data)
  )
  .catch(err => console.log(err));
 },[])

 console.log(gitRepo)
 
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
 
            <h1 className="text-light"> I'm Greyson. 
               <p><img style={{borderRadius: '50%', marginTop:'15px'}} src={Me} height="350px" alt="me"></img> </p>
               a full stack developer
            </h1>
        
        </Col>
      </Row>
      <Container>
        <Row>
    
        <Col size="6">
 stuf <p>{gitRepo[0].name}</p>
  </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Home;
