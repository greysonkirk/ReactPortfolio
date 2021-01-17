import React from "react";
import { Col, Row, Container } from "../Components/Grid";
import Me from "../MeFB.jpg";
import Resume from "../Greyson-Kirk.pdf";
function About() {
  return (
    <Container fluid>
      <div class="row ">
        <div class="col-sm p-3">
          <div class="container">
            <div class="col text-light">
              <img src={Me} alt="Greyson" class="float-left pr-3"></img> I got
              into programming back in 2014 when my daughter was born. Just
              looking at her, I knew she deserved everthing. I started off by
              learning a software called FileMaker. I was a contractor for a
              company called Alamark where I built anything from inventory
              tracking apps to CRM's, for companies ranging from a small
              landscaping company to a billion dollar international company. Not
              too long after, I took on a 6 month contract in downtown Dallas. I
              finished everything in a couple weeks, and they decided they would
              teach me SQL. I know if it wasn't for them, I wouldn't have gotten
              my first salary job at Sears as a Business Systems Analyst. Thats
              where I just dove right into programming. One of our first
              projects was to automate part of the National Claims Center for
              Sears. That project was the one that made me realize I could do
              this forever. After my time on that side of Sears, I went to the
              "more corporate" side where I was more involved in reporting. I
              had to build reporting websites, SSRS reports, Tableau reports,
              and DOMO reports. I even made the "How To" video for DOMO to teach
              all the excecutives how to utilize the service. Then in November
              of 2018 when Sears filed for bankruptcy, our entire department was
              laid off. I took a couple months off and in January of 2019, I
              started my new job as a SQL / C# Developer at a healthcare
              staffing company. I am still enjoying my career choice and strive
              to become better and learn new skills everyday.
            </div>
          </div>
        </div>
      </div>
      <div class="container p-3 my-3 bg-dark text-white">
        <div class="row">
          <div class="col ">
            <a id="resume" href={Resume} download>
              <i class="far fa-file"></i> Download Resume
            </a>
</div>
            <div class="col ">
            <a
              id="icon"
              href="https://www.linkedin.com/in/greysonkirk/"
              target="_blank"
            >
              <i class="fab fa-linkedin"></i> LinkedIn
            </a>
            </div>
            <div class="col ">
            <a
              id="icon"
              href="https://github.com/greysonkirk?tab=repositories"
              target="_blank"
            >
              <i class=" fab fa-github"></i> GitHub
            </a>
            </div>
            <div class="col ">
            <a id="icon" href="mailto: GreysonKirk@yahoo.com">
              <i class="far fa-envelope"> GreysonKirk@Yahoo.com</i>
            </a>
            
          </div>
        </div>
      </div>
    </Container>
  );
}

export default About;
