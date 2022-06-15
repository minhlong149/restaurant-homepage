import "./scss/style.scss";
import { homeElement } from "./ts/home";
import { menuElement } from "./ts/menu";

const webpage = document.body;
webpage.appendChild(homeElement);

(function addEvent() {
  const nav = document.querySelectorAll(".nav__tab");
  nav.forEach((tab) => {
    tab.addEventListener("click", () => {
      const oldElement = document.getElementById("content") as HTMLElement;
      webpage.removeChild(oldElement);
      switch (tab.innerHTML) {
        case "Home":
          webpage.appendChild(homeElement);
          break;
        case "Menu":
          webpage.appendChild(menuElement);
          break;
      }
      addEvent();
    });
  });
})();
