import x from "./x.js";
import png from "./assets/1.jpg";
const div = document.getElementById("app");
div.innerHTML = `<img src='${png}'>`;
console.log(div.innerHTML);
console.log("hi");
console.log("hi2");
console.log(x);

//懒加载

const button = document.createElement("button")
button.innerText = "懒加载"
button.onclick = () => {
    const promise = import('./lazy.js')
    console.log(promise.then((fn) => {
        console.log(fn)
    }))
}
document.body.appendChild(button)