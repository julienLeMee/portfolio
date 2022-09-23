// import { Controller } from "@hotwired/stimulus"
// import Typed from "typed.js"

// // Connects to data-controller="typed-js"
// export default class extends Controller {
//   connect() {
//     new Typed(this.element, {
//       strings: ["Have a break", "Have a KitKat"],
//       typeSpeed: 80,
//       loop: true
//     })
//   }
// }

const navbar = document.getElementById('navbar');
const navlinks = document.querySelectorAll('.nav-link');
const barre = document.querySelector('.barre');
const allTab = document.querySelectorAll('.tab');
const containerBubble = document.querySelector('.container-bubble-menu');
const btnBubble = document.querySelector('.bubble-btn');

btnBubble.addEventListener('click', () => {
  containerBubble.classList.toggle('active');
});


window.addEventListener('scroll', () => {
    containerBubble.classList.remove('active');  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
    navlinks.forEach((link) => {
      link.style = 'color: #DFDBD9';
    });
  } else {
    navbar.classList.remove('scrolled');
    navlinks.forEach((link) => {
      link.style = 'color: #rgba(21, 21, 21)';
    });
  }
});

allTab.forEach((tab) => {
  tab.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('open');
    // enlever la classe open sur les autres tab :
    allTab.forEach((tab) => {
      if (tab !== event.currentTarget) {
        tab.classList.remove('open');
      }
    })
  })

});
