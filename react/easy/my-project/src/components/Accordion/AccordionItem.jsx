import { useState, useRef } from "react";

function AccordionItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <button className="accordion-header" onClick={toggleAccordion}>
        <span>{title}</span>

        <span className={`accordion-icon ${isOpen ? "rotate" : ""}`}>▼</span>
      </button>

      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? "open" : ""}`}
      >
        {children}
      </div>
    </div>
  );
}

export default AccordionItem;
