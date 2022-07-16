import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import { Contact } from "./Contact";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

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
              <a href="1">
                <img sec={navIcon1} alt="1" />
              </a>
              <a href="2">
                <img sec={navIcon2} alt="1" />
              </a>
              <a href="3">
                <img sec={navIcon3} alt="1" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved by John Chia</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
