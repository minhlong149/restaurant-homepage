const homeElement = document.createElement("div");
homeElement.setAttribute("id", "content");
homeElement.innerHTML = `
  <ul class="nav">
    <li class="nav__tab">Home</li>
    <li class="nav__tab">Menu</li>
    <li class="nav__tab">Contact</li>
  </ul>
`;

const home = document.createElement("div");
home.setAttribute("class", "home");

const homeTitle = document.createElement("h1");
homeTitle.setAttribute("class", "home__title");
homeTitle.innerText = "Phút Diner";

const homeHero = document.createElement("img");
homeTitle.setAttribute("class", "home__hero");
homeHero.src = require("../asset/danis-lou-small.jpg");
homeHero.alt = "restaurant with people dining in photo";

const homeButton = document.createElement("button");
homeButton.setAttribute("class", "home__btn");
homeButton.innerText = "Order now";

home.appendChild(homeTitle);
home.appendChild(homeHero);
home.appendChild(homeButton);

homeElement.appendChild(home);

export { homeElement };
