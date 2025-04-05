let body = document.querySelector("body");
let input = document.querySelector("input");
let button = document.querySelector("button");
if (window.localStorage.getItem("text") !== null) {
    let p = document.createElement("p");
    p.innerHTML = window.localStorage.getItem("text");
    body.appendChild(p);
button.addEventListener("click", function() {
        window.localStorage.setItem("text", input.value);
        let p = document.createElement("p");
        p.innerHTML = window.localStorage.getItem("text");
        body.appendChild(p);
        let pPop = document.querySelectorAll("p");
    pPop.forEach(item => {
        item.addEventListener("click", function() {
            item.remove()
        window.localStorage.removeItem("text")})
        })
    input.value = "";
})
} else {
    window.localStorage.setItem("text", "");
}
