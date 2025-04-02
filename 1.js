let save = document.querySelector(".save");
let show = document.querySelector(".show");
let input = document.querySelector("input");
let p = document.querySelector("p");
save.onclick = function () {
  window.sessionStorage.setItem("name", input.value);
  input.value = "";
}
show.onclick = function () {
  p.innerHTML = window.sessionStorage.name;
  window.sessionStorage.removeItem("name");
}