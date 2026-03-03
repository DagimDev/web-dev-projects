const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(element, message) {
  element.innerText = message;
}

function clearErrors() {
  nameError.innerText = "";
  emailError.innerText = "";
  passwordError.innerText = "";
}

form.addEventListener("submit", (e) => {
  clearErrors();

  let isValid = true;

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const passwordValue = passwordInput.value;

  // Name validation
  if (nameValue === "") {
    showError(nameError, "Name is required *");
    nameInput.classList.add("error");
    isValid = false;
  } else {
    nameInput.classList.remove("error");
    nameInput.classList.add("success");
  }

  // Email validation
  if (emailValue === "") {
    showError(emailError, "Email is required *");
    emailInput.classList.add("error");
    isValid = false;
  } else if (!emailPattern.test(emailValue)) {
    showError(emailError, "Enter a valid email address");
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailInput.classList.remove("error");
    emailInput.classList.add("success");
  }

  // Password validation
  if (passwordValue === "") {
    showError(passwordError, "Password is required *");
    passwordInput.classList.add("error");
    isValid = false;
  } else if (passwordValue.length < 8) {
    showError(passwordError, "Password must be at least 8 characters");
    passwordInput.classList.add("error");
    isValid = false;
  } else if (passwordValue.length > 20) {
    showError(passwordError, "Password must be less than 20 characters");
    passwordInput.classList.add("error");
    isValid = false;
  } else {
    passwordInput.classList.remove("error");
    passwordInput.classList.add("success");
  }

  if (!isValid) {
    e.preventDefault();
  }
});

nameInput.addEventListener("input", () => {
  if (nameInput.value.trim() !== "") {
    nameError.innerText = "";
  }
});

emailInput.addEventListener("input", () => {
  if (emailPattern.test(emailInput.value)) {
    emailError.innerText = "";
  }
});

passwordInput.addEventListener("input", () => {
  if (passwordInput.value.length >= 8) {
    passwordError.innerText = "";
  }
});
