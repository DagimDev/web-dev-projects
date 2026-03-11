import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div onClick={closeModal} className="overlay">
          <div onClick={(e) => e.stopPropagation()} className="modal">
            <h2>My Modal</h2>
            <button onClick={() => setIsOpen(false)}>close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
