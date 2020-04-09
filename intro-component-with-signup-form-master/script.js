const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = form["firstname"].value;
  const lastName = form["lastname"].value;
  const password = form["password"].value;
  const email = form["email"].value;

  if (firstName === "") {
    addError("firstname");
  } else {
    removeError("firstname");
  }

  if (lastName === "") {
    addError("lastname");
  } else {
    removeError("lastname");
  }

  if (email === "") {
    addError("email");
  } else if (!validateEmail(email)) {
    const small = form["email"].parentNode.querySelector("small");
    small.innerHTML = "Looks like this is not an email";
    addError("email");
  } else {
    removeError("email");
  }

  if (password === "") {
    addError("password");
  } else {
    removeError("password");
  }
});

function addError(field) {
  const small = form[field].parentNode.querySelector("small");
  small.style.display = "block";
  const img = form[field].parentNode.querySelector("img");
  img.style.display = "block";
  const color = (form[field].style.border = "solid 1px hsl(0, 100%, 74%)");
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function removeError(field) {
  const small = form[field].parentNode.querySelector("small");
  small.style.display = "none";
  const img = form[field].parentNode.querySelector("img");
  img.style.display = "none";
  const color = (form[field].style.border = "solid 1px hsl(246, 25%, 77%)");
}
