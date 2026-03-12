import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Dynamic Modal</h1>
      </Modal>
    </div>
  );
}

export default App;
