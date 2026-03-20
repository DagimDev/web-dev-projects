import { useState } from "react";
import "./passwordGenerator.css";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [uppercase, setUppercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  //   Character Codes

  const LOWERCASE_CHAR_CODES = characterCodes(97, 122);
  const UPPERCASE_CHAR_CODES = characterCodes(65, 90);
  const NUMBERS_CHAR_CODES = characterCodes(48, 57);
  const SYMBOLS_CHAR_CODES = characterCodes(33, 47)
    .concat(characterCodes(58, 64))
    .concat(characterCodes(58, 64))
    .concat(characterCodes(91, 96))
    .concat(characterCodes(123, 126));

  // FUNC TO GENARATE THE PASSWORD
  function generatePassword() {
    let charCodes = LOWERCASE_CHAR_CODES;
    if (uppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
    if (numbers) charCodes = charCodes.concat(NUMBERS_CHAR_CODES);
    if (symbols) charCodes = charCodes.concat(SYMBOLS_CHAR_CODES);

    let passwordCharacters = [];
    for (let i = 0; i <= length; i++) {
      passwordCharacters.push(
        String.fromCharCode(
          charCodes[Math.floor(Math.random() * charCodes.length)],
        ),
      );
    }

    return passwordCharacters.join("");
  }

  //   fUNC FOR LOOP THROUGH CHARACTER CODES
  function characterCodes(low, high) {
    const array = [];
    for (let i = low; i <= high; i++) {
      // console.log(`${i}: ${String.fromCharCode(i)}`);
      array.push(i);
    }
    return array;
  }

  return (
    <div>
      <h2>Password Generator</h2>

      <input className="home" value={password} readOnly />

      <div>
        <div>
          <label htmlFor="passwordLength">Password Length</label>
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="includeUppercase">Include Uppercase</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div>
          <label htmlFor="includeNumbers">Include Numbers</label>
          <input
            type="checkbox"
            checked={numbers}
            onChange={() => setNumbers(!numbers)}
          />
        </div>
        <div>
          <label htmlFor="includeSymbols">Include Symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
      </div>

      <button onClick={() => setPassword(generatePassword)}>
        Generate Password
      </button>
    </div>
  );
}

export default PasswordGenerator;
