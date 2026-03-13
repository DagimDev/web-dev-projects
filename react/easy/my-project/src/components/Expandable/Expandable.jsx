import React, { useState } from "react";

const Expandable = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="expandable">
      <button className="expandable-header" onClick={() => setIsOpen(!isOpen)}>
        {title}
      </button>

      {isOpen && <div className="expandable-content">{children}</div>}
    </div>
  );
};

export default Expandable;
