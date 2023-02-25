// console.log('1. +10 \n2. +20 \n3. +48 \n4. +12 \n5. +20')

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const menu = document.querySelector("#menu").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
 
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// Accordion

// const iconUpDown =  document.querySelectorAll(".icon");
// iconUpDown.forEach(icon => {
//   icon.addEventListener("click", e => {
//     icon.parentElement.classList.toggle("open");
    
//   })
// })

// const iconUpDownTwo =  document.querySelectorAll(".iconn");
// iconUpDownTwo.forEach(iconn => {
//   iconn.addEventListener("click", e => {
//     iconn.parentElement.classList.toggle("open");
    
//   })
// })

// const iconUpDownThree =  document.querySelectorAll(".iconnn");
// iconUpDownThree.forEach(iconnn => {
//   iconnn.addEventListener("click", e => {
//     iconnn.parentElement.classList.toggle("open");
    
//   })
// })

// const iconOpen = document.querySelectorAll(".position");

// const iconUpDown =  document.querySelector(".icon");
// const iconUpDownTwo =  document.querySelector(".iconn");
// const iconUpDownThree =  document.querySelector(".iconnn");

// iconOpen.addEventListener('click', () => {
//   iconListToggle() 
// })

// function iconListToggle() {
//   iconUpDown.classList.toggle('open')
//   iconUpDownTwo.classList.toggle('open')
//   iconUpDownThree.classList.toggle('open')
  
// }

// получаем нужные компоненты
const accordion = document.querySelector(".accordion");
const sections = accordion.querySelectorAll(" section");
const controls = Array.from(sections).map((section) =>
  section.querySelector("button.control")
);
// задаём стартовую вкладку
let activeSectionIndex = -1;

// функция, которая обработает данные и покажет нужную вкладку
const initAccordion = () => {
  sections.forEach((section, index) => {
    index !== activeSectionIndex
      ? section.classList.add("closed")
      : section.classList.remove("closed");
  });
};

// кнопки, которые должны реагировать на нажатия
controls.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    activeSectionIndex =
    activeSectionIndex === controls.indexOf(btn)
      ? null // если эта вкладка открыта, то закрываем
        : controls.indexOf(btn); // иначе открываем
    initAccordion();
  });
});

// стартовая инициализация
initAccordion();
