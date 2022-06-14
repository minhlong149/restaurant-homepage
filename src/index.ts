import "./scss/style.scss";
import { homeTemplate } from "./ts/home";
import { menuTemplate } from "./ts/menu";

const element = document.createElement("div");
element.setAttribute("id", "content");
element.innerHTML = homeTemplate;

document.body.appendChild(element);

(function addEvent(){
  const nav = document.querySelectorAll(".nav__tab");
  nav.forEach((tab)=>{
    tab.addEventListener("click", ()=>{
    switch (tab.innerHTML) {
      case "Home":
        element.innerHTML = homeTemplate;
        addEvent();
        break;
    }
    })
  })
})()