// Get Started Button
document.getElementById("getStartedBtn")?.addEventListener("click", () =>
  location.href = "login.html"
);

// ==============================
// REGISTER
// ==============================
function registerUser(e){
  e.preventDefault();

  const name = regName.value;
  const email = regEmail.value;
  const pass = regPassword.value;
  const confirm = regConfirmPassword.value;

  if(pass !== confirm) return alert("Passwords do not match!");

  localStorage.setItem("user", JSON.stringify({ name, email, pass }));

  alert("Registration Successful!");
  location.href = "login.html";
}

// ==============================
// LOGIN
// ==============================
function loginUser(e){
  e.preventDefault();

  const email = loginEmail.value;
  const pass = loginPassword.value;

  const user = JSON.parse(localStorage.getItem("user"));

  if(!user) return (alert("No account found!"), location.href="register.html");

  if(email === user.email && pass === user.pass){
    localStorage.setItem("login","true");
    alert("Login Successful!");
    location.href = "home.html";
  } else {
    alert("Invalid Email or Password!");
  }
}

// ==============================
// PROTECT PAGES
// ==============================
function checkLogin(){
  if(localStorage.getItem("login") !== "true"){
    alert("Please login first!");
    location.href = "login.html";
  }
}

// ==============================
// LOGOUT
// ==============================
function logoutUser(){
  localStorage.removeItem("login");
  location.href = "login.html";
}

// ==============================
// NAVIGATION
// ==============================
const openPage = page => location.href = page;

// ==============================
// BACK BUTTON
// ==============================
const goBack = () => history.back();