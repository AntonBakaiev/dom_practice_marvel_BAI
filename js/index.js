import { HOME_CONTENT, PHASE_FILMS } from "./points.js";
import { films } from "./chronology.js";


const contentDiv = document.getElementById("content");
const homeBtn = document.getElementById("logo-container");
const menuToggle = document.getElementById("menu_toggle");

function loadHomeContent(contentHome) {
  contentDiv.innerHTML = `
    <h2>${contentHome.title}</h2>
    <p>${contentHome.description}</p>
   `;
}

loadHomeContent(HOME_CONTENT);

homeBtn.addEventListener("click", () => {
  loadHomeContent(HOME_CONTENT);
});

const loadMainContent = (propName) => {
  const content = document.getElementById('content');
  menuToggle.click();
  content.innerHTML = `
  <div class = "imageDiv">
    <img class="content__image" src="${PHASE_FILMS[propName].imgSrc}" alt="picture of ${PHASE_FILMS[propName].title}">
  </div>
  <div class="textDiv">
  <h2 class="content__title">${PHASE_FILMS[propName].title}</h2>
  <p class="content__description">${PHASE_FILMS[propName].description}</p>
  </div>`;
};

const list = document.querySelector('.nav-box');

list.addEventListener('click', (event) => {
  if (!event.target.classList.contains('nav-item')) return;

  const linkNumber = event.target.dataset.number;

  loadMainContent(linkNumber);
});