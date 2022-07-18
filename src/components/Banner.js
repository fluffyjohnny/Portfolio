import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(210 - Math.random() * 100);
  const period = 2000;
  const rolesToRotate = [
    "a Web Developer",
    "a Vet Operation Associate",
    "a Friend!",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % rolesToRotate.length;
    let fullText = rolesToRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__bounce" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 className="greetings">
                    {`Hi I'm John, `}
                    <br />
                    <span className="wrap">{text}</span>
                  </h1>
                  <p>
                    I am a <b>Full-Stack Web Developer</b> transitioned from{" "}
                    <b>Veterinary Science</b>. I've always had the passion in
                    technology and software and due to COVID19 I decided to take
                    a leap of faith and make a career change. I would like to
                    eventually become a bridge that connects the tech field with
                    the veterinary field to further help pet owners and their
                    pets. I graduated from <b>Lighthouse Labs</b> in May 2022,
                    which I went through an extensive and fast-paced training
                    for three months. I recently joined a pharmaceutical startup
                    named Confocal and is working as a Front-End Developer
                    intern.{" "}
                  </p>
                  <div id="skills" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header-img"></img>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
