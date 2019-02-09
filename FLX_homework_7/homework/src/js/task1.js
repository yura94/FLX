let Login = prompt("please enter login", "");
let current_time = new Date().getHours();

if (Login === "") {
  alert("Canceled");
} else if (Login.length < 4) {
  alert("I don't know any users having name length less than 4 symbols");
} else if (Login === "User" || Login === "Admin") {
  let Password = prompt("please enter password", "");
  if (Login === "User" && Password === "UserPass") {
    if (current_time < 20) {
      alert("Good day, dear User!");
    } else {
      alert("Good evening, dear User!");
    }
  } else if (Login === "Admin" && Password === "RootPass") {
    if (current_time < 20) {
      alert("Good day, dear Admin!");
    } else {
      alert("Good evening, dear Admin!");
    }
  } else if (Password === "") {
    alert("Canceled.");
  } else {
    alert("Wrong password");
  }
}
