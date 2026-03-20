import AccordionItem from "../components/Accordion/AccordionItem";
import PasswordGenerator from "../components/PasswordGenerator/PasswordGenerator";
import PasswordStrength from "../components/PasswordStrength/PasswordStrength";
import './home.css'

const Home = () => {
  return (
    <div>
      {/* Password Generator Checker Component */}
      <PasswordGenerator />

      {/* Password Strength Checker Component */}
      <PasswordStrength />

      <div className="bg-color">
        <h1>Expandable Content</h1>
        {/* Expandable Content Components */}
        {/*           
      <Expandable title="What is React?">
        React is a JavaScript library for building user interfaces.
      </Expandable>

      <Expandable title="What is JavaScript?">
        JavaScript is a programming language used for web development.
      </Expandable>
      */}

        <AccordionItem title="What is React?">
          React is a JavaScript library for building interfaces.
        </AccordionItem>

        <AccordionItem title="What is JavaScript?">
          JavaScript is the programming language of the web.
        </AccordionItem>

        {/* <div>
        <p>1️⃣ auto height animation (no fixed 200px)</p>
        <p>2️⃣ only one accordion open at a time</p>
        <p>3️⃣ keyboard navigation (↑ ↓)</p>
        <p>4️⃣ ARIA accessibility attributes</p>
        <p>5️⃣ React compound component pattern</p>
      </div>  */}
      </div>
    </div>
  );
};

export default Home;
