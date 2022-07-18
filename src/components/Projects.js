import { ProjectCard } from "./ProjectCards";
import { Col, Container, Row, Tab, Nav } from "react-bootstrap";
import tinyapp from "../assets/img/tinyapp.png";
import tweeter from "../assets/img/tweeter.png";
import scheduler from "../assets/img/scheduler.png";
import wikimap from "../assets/img/wikimap.png";
import jungle from "../assets/img/jungle.png";
import lighthouseBnB from "../assets/img/lighthouseBnB.png";
import issSpotter from "../assets/img/issSpotter.png";
import toStrong from "../assets/img/toStrong.png";
import todolist from "../assets/img/todolist.png";
import aiMusing from "../assets/img/ai-musing.png";
import petBnB from "../assets/img/petbnb.png";
import walkieDoggie from "../assets/img/walkie-doggie.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects1 = [
    {
      title: "Tweeter",
      description:
        "A twitter clone that allows the user to public their opinions.",
      imgUrl: tweeter,
      projLink: "https://github.com/fluffyjohnny/tweeter",
    },
    {
      title: "Scheduler",
      description:
        "An React App that allows the users to schedule meetings with interviewers.",
      imgUrl: scheduler,
      projLink: "https://github.com/fluffyjohnny/Scheduler",
    },
    {
      title: "LighthouseBnB",
      description:
        "An AirBnB clone that allows users to view and book properties",
      imgUrl: lighthouseBnB,
      projLink: "https://github.com/fluffyjohnny/LightBnB",
    },
    {
      title: "TinyApp",
      description: "A bit.ly clone that allows users to shorten long URLs.",
      imgUrl: tinyapp,
      projLink: "https://github.com/fluffyjohnny/tinyapp",
    },
    {
      title: "Jungle",
      description: "An Ruby on Rails ecommerce App to buy and sell products.",
      imgUrl: jungle,
      projLink: "https://github.com/fluffyjohnny/jungle-rails",
    },
    {
      title: "ISS Spotter",
      description:
        "A backend program that allows users to find out when the satelite is on top of them",
      imgUrl: issSpotter,
      projLink: "https://github.com/fluffyjohnny/iss_spotter",
    },
  ];

  const projects2 = [
    {
      title: "WikiMap",
      description:
        "A custom map app that allows users to save specific markers with comments and pictures.",
      imgUrl: wikimap,
      projLink: "https://github.com/fluffyjohnny/Wiki_Map",
    },
    {
      title: "toStrong()",
      description:
        "Web app for a strength training planning and workout tracking app.",
      imgUrl: toStrong,
      projLink: "https://github.com/fluffyjohnny/toStrong",
    },
    {
      title: "To Do List",
      description: "A simple HTML to-do list",
      imgUrl: todolist,
      projLink: "https://github.com/fluffyjohnny/To-Do-List",
    },
    {
      title: "AI-musing",
      description:
        "An AI bot utilizing the OpenAI API that replies to any of your questions or commands",
      imgUrl: aiMusing,
      projLink: "https://github.com/fluffyjohnny/AI-musing",
    },
    {
      title: "Walkie-Doggie",
      description:
        "A Rover inspired app that helps connect pet owners to local pet sitters and walkers.",
      imgUrl: walkieDoggie,
      projLink: "https://github.com/fluffyjohnny/WalkieDoggie",
    },
    {
      title: "PetBnB",
      description: "AirBnb clone that focuses on the accommodation of pets.",
      imgUrl: petBnB,
      projLink: "https://github.com/fluffyjohnny/PetBnB",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <h2>Projects</h2>
                  <br />
                </div>
              )}
            </TrackVisibility>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Lighthouse Labs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Personal Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Internship</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <p>
                    Projects created under the guidance of Lighthouse Labs with
                    the purpose of learning how to code.
                  </p>
                  <br />
                  <Row>
                    {projects1.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <p>
                    Individual projects that are built for a specific purpose,
                    or for fun!
                    <br /> Created by myself or with teammates
                  </p>
                  <Row>
                    {projects2.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <p>Coming soon...</p>
                  <Row></Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="project-background"
        z-index="2"
      />
    </section>
  );
};
