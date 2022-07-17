import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Col, Row, Container } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container className="container">
        <Row>
          <Col>
            <div className="skill-bx">
              <br />
              <h2>Skills</h2>
              <p>
                Languages, Frameworks, Libraries, and Databases
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay
                autoPlaySpeed={4000}
              >
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg" alt="TypeScript" />
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg" alt="Python" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-plain-wordmark.svg" alt="Ruby" />
                  <h5>Ruby</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg" alt="Rails" />
                  <h5>Rails</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" alt="TailwindCSS" />
                  <h5>TailwindCSS</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" alt="Node.JS" />
                  <h5>Node.JS</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="React.JS" />
                  <h5>React.JS</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg" alt="Express" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg" alt="jQuery" />
                  <h5>jQuery</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original-wordmark.svg" alt="Socket.IO" />
                  <h5>Socket.IO</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg" alt="Git" />
                  <h5>Git</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg" alt="PostgreSQL" />
                  <h5>PostgreSQL</h5>
                </div>
                <div className="item">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" alt="MongoDB" />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="skills-background-left"
      />
    </section>
  );
};
