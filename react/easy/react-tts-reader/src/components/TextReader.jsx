import { useState, useRef, useEffect } from "react";

function TextReader() {
  const wordRefs = useRef([]);
  const [text, setText] = useState("");
  const [speed, setSpeed] = useState(1);
  const [voice, setVoice] = useState("");
  const [voices, setVoices] = useState([]);
  // const [wordStart, setWordStart] = useState(0);
  // const [wordEnd, setWordEnd] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);

  const utteranceRef = useRef(new SpeechSynthesisUtterance());

  function handlePlay() {
    // Resume if paused
    if (speechSynthesis.paused && speechSynthesis.speaking) {
      speechSynthesis.resume();
      return;
    }

    if (speechSynthesis.speaking) return;

    const utterance = utteranceRef.current;

    utterance.text = text;
    utterance.rate = speed;

    speechSynthesis.speak(utterance);

    // Set the selected voice
    if (voice) {
      const selectedVoice = voices.find((v) => v.name === voice);
      if (selectedVoice) utterance.voice = selectedVoice;
    }

    utterance.onboundary = (event) => {
      const charIndex = event.charIndex;

      const textBefore = text.substring(0, charIndex);

      const wordIndex = textBefore.split(" ").length - 1;

      setCurrentWordIndex(wordIndex);
    };

    utterance.onend = () => {
      setCurrentWordIndex(-1);
    };
  }
  const words = text.split(" ");
  // console.log(words)

  function handlePause() {
    if (speechSynthesis.speaking) {
      speechSynthesis.pause();
    }
  }

  function handleStop() {
    speechSynthesis.cancel();
  }

  useEffect(() => {
    function loadVoices() {
      const availableVoices = speechSynthesis.getVoices();
      setVoices(availableVoices);
    }

    // Load voices immediately
    loadVoices();
    // Some browsers (Chrome) load voices asynchronously
    speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  useEffect(() => {
    const currentWord = wordRefs.current[currentWordIndex];

    if (currentWord) {
      currentWord.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [currentWordIndex]);

  return (
    <div className="container">
      <h1>Text To Speech Reader</h1>

      <div className="controls">
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleStop}>Stop</button>
      </div>

      <div className="settings">
        <label>Speed: {speed}</label>

        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />

        <label>Select Voice</label>

        <select value={voice} onChange={(e) => setVoice(e.target.value)}>
          <option value="">Default Voice</option>
          {voices.map((v, index) => (
            <option key={index} value={v.name}>
              {v.name} ({v.lang})
            </option>
          ))}
        </select>
      </div>

      <textarea
        placeholder="Type text you want the computer to read..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="text-display">
        {words.map((word, index) => {
          let className = "";

          if (index < currentWordIndex) {
            className = "spoken";
          } else if (index === currentWordIndex) {
            className = "current";
          }

          return (
            <span
              key={index}
              ref={(el) => (wordRefs.current[index] = el)}
              className={className}
            >
              {word + " "}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default TextReader;
