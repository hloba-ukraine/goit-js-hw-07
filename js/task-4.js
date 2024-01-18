const form = document.querySelector("form");
const user = {};
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  } else {
    user.email = email;
    user.password = password;
    console.log(user);
  }
  form.reset();
}
