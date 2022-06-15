const menuElement = document.createElement("div");
menuElement.setAttribute("id", "content");
menuElement.innerHTML = `
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

home.appendChild(homeTitle);

const menu = document.createElement("div");
menu.setAttribute("class", "menu");

const menuTitle = document.createElement("h2");
menuTitle.setAttribute("class", "menu__title");
menuTitle.innerText = "The Menu";

menu.appendChild(menuTitle);

interface Dishes {
  name: string;
  img: string;
  decs: string;
  price: string;
}

const menuDishes: Dishes[] = [
  {
    name: "Boiled Shrimp",
    img: "boiled-shrimp",
    decs: "boiled shrimp",
    price: "6.81",
  },
  {
    name: "Fatty tuna & Red meat tuna",
    img: "fatty-tuna-and-red-meat-tuna",
    decs: "Fatty tuna and red meat tuna",
    price: "6.84",
  },
  {
    name: "Salmon & Crab",
    img: "salmon-and-crab",
    decs: "salmon and cra",
    price: "7.35",
  },
  {
    name: "Salmon egg & Conger eel",
    img: "salmon-egg-and-conger-eel",
    decs: "Salmon egg and conger eel",
    price: "7.60",
  },
  {
    name: "Scallops & Squid",
    img: "scallops-and-squid",
    decs: "Scallops and squid",
    price: "3.50",
  },
];

menuDishes.forEach((dishes) => {
  const dishesElement = document.createElement("div");
  dishesElement.setAttribute("class", "menu__dishes");

  const dishesHeading = document.createElement("h3");
  dishesHeading.setAttribute("class", "dishes__heading");
  dishesHeading.innerText = dishes.name;

  const dishesImg = document.createElement("img");
  dishesImg.setAttribute("class", "dishes__img");
  dishesImg.src = require(`../asset/${dishes.img}.jpg`);
  dishesImg.alt = dishes.decs;

  const dishesPrice = document.createElement("p");
  dishesPrice.setAttribute("class", "dishes__price");
  dishesPrice.innerText = dishes.price;

  dishesElement.appendChild(dishesHeading);
  dishesElement.appendChild(dishesImg);
  dishesElement.appendChild(dishesPrice);

  menu.appendChild(dishesElement);
});

menuElement.appendChild(home);
menuElement.appendChild(menu);

export { menuElement };
