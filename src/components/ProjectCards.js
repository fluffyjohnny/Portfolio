import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img-url" />
        <div className="proj-txtx">
          <a href={projLink} ult={"proj-link"} target="_blank" rel="noreferrer">
            <h4>{title}</h4>
          </a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
