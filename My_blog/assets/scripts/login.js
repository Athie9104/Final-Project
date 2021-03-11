
let users = [];

fetch("https://sleepy-mountain-15774.herokuapp.com/show-subscribers/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    users = data;
  });

function login() {
  const form = document.getElementById("login");
  let inputs = form.getElementsByTagName("input");

  let email = inputs[0].value;
  let cell = inputs[1].value;
  console.log(email);
  console.log(cell);
  let loggedIn = users.filter((user) => {
    return user.email == email && user.cell == cell;
  });

  console.log(loggedIn);

  

  if (loggedIn.length > 0) {
      localStorage.setItem("user", JSON.stringify(loggedIn[0]))
      JSON.parse(localStorage.getItem("user"))
    alert("You are now logged in");
    window.location.href = "home.html";
    console.log(window.location.href);
  } else {
    alert("Credentials invalid");
  }
}