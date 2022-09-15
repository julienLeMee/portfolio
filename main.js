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

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
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
