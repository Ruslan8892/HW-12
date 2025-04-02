let [...buttons] = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.onclick = function () {
    window.localStorage.setItem("name", button.innerHTML);
  }
})
document.body.style.backgroundColor = localStorage.getItem("name")