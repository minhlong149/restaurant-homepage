const homeTemplate = `
    <ul class="nav">
      <li class="nav__tab">Home</li>
      <li class="nav__tab">Menu</li>
      <li class="nav__tab">Contact</li>
    </ul>
    <div class="home">
      <h1 class="home__title">Phút Diner</h1>
      <img class="home__hero"src="../src/asset/danis-lou-small.jpg"  alt="restaurant with people dining in photo">
      <button class="home__btn">Order now</button>
    </div>
`;

function homeComponent() {
  const element = document.createElement("div");
  element.setAttribute("id", "content");
  element.innerHTML = homeTemplate;
  return element;
}

export { homeComponent };
