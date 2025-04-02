// let body = document.querySelector("body");
// let input = document.querySelector("input");
// let button = document.querySelector("button");
// button.addEventListener("click", function() {
//     let p = document.createElement("p");
//     window.localStorage.setItem("task", input.value);
//     p.textContent = window.localStorage.getItem("task");
//     body.appendChild(p)
//     input.value = "";
// })
// let pPop = document.querySelectorAll("p");
//     pPop.forEach(item => {
//         item.addEventListener("click", function() {
//             item.remove()})
//         })
let input = document.querySelector("input")
let button = document.querySelector("button")
button.addEventListener("click", function() {
    window.localStorage.setItem("task", input.value)
    let p = document.createElement("p")
    body.appendChild(p)
    input.value = ""
})
let pPop = document.querySelectorAll("p")
pPop.forEach(item => {
    item.textContent = window.localStorage.getItem("task")
    item.addEventListener("click", function() {
        item.remove()})
})