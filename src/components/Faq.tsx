import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Faq = ({accordionHeader, title, paragraph, eventKeyIndex}:any) => {
  
  return (
    <Accordion.Item eventKey={eventKeyIndex}>
      <Accordion.Header>{accordionHeader}</Accordion.Header>
      <Accordion.Body>
        <h2>{title}</h2>
        <p>
         {paragraph}
        </p>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default Faq;
