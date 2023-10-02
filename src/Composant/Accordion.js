import React, { useState } from "react";
import "../css/style.css";
import vector from "../images/Vector.png";

const Accordion = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? "open" : "closed"}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title">{title}</h3>
        <span className={`accordion-icon `}>
          <img className="vector" src={vector} alt="vector" />
        </span>
      </div>
      <div className="accordion-conten">
        <div
          className={`accordion-content ${isOpen ? "open" : "closed"}`}
          style={{ transform: `translateY(${isOpen ? "0" : "-220%"})` }}
        >
          <div className="accordion-description">{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
