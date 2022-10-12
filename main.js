// const navbar = document.getElementById('navbar');
const navlinks = document.querySelectorAll('.nav-link');
const barre = document.querySelector('.barre');
const allTab = document.querySelectorAll('.tab');
const containerBubble = document.querySelector('.container-bubble-menu');
const btnBubble = document.querySelector('.bubble-btn');
const btnToTop = document.querySelector('.btn-to-top');
const textAnim = document.querySelector('.title-writer');
const darkMode = document.querySelector('.dark-mode-btn');
const homepage = document.querySelector('.main-content');
const contact = document.querySelectorAll('.intro a');
const about = document.querySelector('.about');
const tabBloc = document.querySelector('.tab-bloc');
const btnHomepage = document.getElementById('btn-homepage');


// window.addEventListener('scroll', () => {
//   if (window.scrollY > 300) {
//     btnToTop.classList.add('show');
//   } else {
//     btnToTop.classList.remove('show');
//   }
// });

new Typewriter(textAnim, {
  loop: true,
  delay: 75,
})
.pauseFor(2000)
.typeString('Développeur web <span style="color: #D8829D;">HTML</span>')
.pauseFor(1000)
.deleteChars(4)
.typeString('<span style="color: #8EDCE6;">CSS</span>')
.pauseFor(1000)
.deleteChars(3)
.typeString('<span style="color: #E9B44C;">Javascript</span>')
.pauseFor(1000)
.deleteChars(10)
.typeString('<span style="color: #FB4D3D;">Ruby</span>')
.pauseFor(1000)
.deleteChars(4)
.typeString('<span style="color: #FF6B35;">Ruby on Rails</span>')
.pauseFor(1000)
.deleteChars(13)
.start();


btnToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

btnBubble.addEventListener('click', () => {
  containerBubble.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    containerBubble.classList.remove('active');  if (window.scrollY > 100) {
    // navbar.classList.add('scrolled');
    navlinks.forEach((link) => {
      link.style = 'color: #DFDBD9';
    });
  } else {
    // navbar.classList.remove('scrolled');
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


darkMode.addEventListener('click', () => {
  homepage.classList.toggle('dark-mode');
  darkMode.classList.toggle('dark-mode');
  tabBloc.classList.toggle('dark-mode');
  darkMode.parentNode.classList.toggle('dark-mode');
  about.classList.toggle('dark-mode');
  contact.classList.toggle('dark-mode');
  btnHomepage.classList.toggle('dark-mode');
});

darkMode.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  homepage.classList.toggle('light-mode');
  darkMode.classList.toggle('light-mode');
  tabBloc.classList.toggle('light-mode');
  darkMode.parentNode.classList.toggle('light-mode');
  about.classList.toggle('light-mode');
  contact.forEach((link) => {
    link.classList.toggle('light-mode');
  });
  btnHomepage.classList.toggle('light-mode');
});
