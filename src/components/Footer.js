import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { Contact } from "./Contact";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Contact />
          <MailchimpForm />
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/john-chia-744b30161/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>
              <a
                href="https://www.facebook.com/fluffyjohnnny"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon2} alt="Facebook" />
              </a>
              <a
                href="https://www.instagram.com/fluffyjohnny/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>
              <a
                href="https://github.com/fluffyjohnny"
                target="_blank"
                rel="noreferrer"
              >
                <img src={navIcon4} alt="Github" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved by John Chia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
