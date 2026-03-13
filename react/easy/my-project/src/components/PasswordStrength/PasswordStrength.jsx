import React, { useState } from "react";
import "./style.css";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  let score = 0;
  const hasLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpetial = /[^A-Za-z0-9]/.test(password);

  if (hasLength) score++;
  if (hasUppercase) score++;
  if (hasNumber) score++;
  if (hasSpetial) score++;

  let strengthLabel = "";
  let strengthColor = "";

  if (score <= 1) {
    strengthLabel = "Weak";
    strengthColor = "red";
  } else if (score === 2 || score === 3) {
    strengthLabel = "Medium";
    strengthColor = "orange";
  } else {
    strengthLabel = "Strong";
    strengthColor = "green";
  }

  const strengthPercent = (score / 4) * 100;

  return (
    <div>
      <h2 className="title">Password Strength Checker</h2>

      <div className="strength-bar">
        <div
          className="strength-fill"
          style={{
            width: `${strengthPercent}%`,
            backgroundColor: strengthColor,
          }}
        ></div>
      </div>
      <div className="password-input">
        <input
          className="input"
          type={showPassword ? "text" : "password"}
          value={password}
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="toggle-password"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <div>
        <ul className="password-rules">
          <li className={hasLength ? "green" : "red"}>
            {hasLength ? "✔" : "✖"} At least 8 characters
          </li>
          <li className={hasUppercase ? "green" : "red"}>
            {hasUppercase ? "✔" : "✖"} Contains uppercase letter
          </li>
          <li className={hasNumber ? "green" : "red"}>
            {hasNumber ? "✔" : "✖"} Contains number
          </li>
          <li className={hasSpetial ? "green" : "red"}>
            {hasSpetial ? "✔" : "✖"} Contains special character
          </li>
        </ul>
      </div>

      <p className="display-password">
        Password Strength:{" "}
        <strong style={{ color: strengthColor }}>{strengthLabel}</strong>
      </p>
    </div>
  );
};

export default PasswordStrength;
