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


// darkMode.addEventListener('click', () => {
//   homepage.classList.toggle('dark-mode');
//   darkMode.classList.toggle('dark-mode');
//   tabBloc.classList.toggle('dark-mode');
//   darkMode.parentNode.classList.toggle('dark-mode');
//   about.classList.toggle('dark-mode');
//   contact.classList.toggle('dark-mode');
//   btnHomepage.classList.toggle('dark-mode');
// });

// darkMode.addEventListener('click', () => {
//   document.body.classList.toggle('light-mode');
//   homepage.classList.toggle('light-mode');
//   darkMode.classList.toggle('light-mode');
//   tabBloc.classList.toggle('light-mode');
//   darkMode.parentNode.classList.toggle('light-mode');
//   about.classList.toggle('light-mode');
//   contact.forEach((link) => {
//     link.classList.toggle('light-mode');
//   });
//   btnHomepage.classList.toggle('light-mode');
// });

///////////////////// THREE JS //////////////////////

const canvas = document.querySelector('.webgl');

// Sizes
const sizes = {
    width: 800,
    height: 600
}

// Scene
const scene = new THREE.Scene()

// Object

const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32)
const sphereMaterial = new THREE.MeshBasicMaterial({color: 0xff0000})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight // définit le ratio de la caméra
  camera.updateProjectionMatrix() // met à jour la matrice de projection de la caméra
  renderer.setSize(window.innerWidth, window.innerHeight) // définit la taille du renderer
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // définit le ratio de pixel du renderer
})

let mouseX = 0 // position de la souris sur l'axe x
let mouseY = 0 // position de la souris sur l'axe y
window.addEventListener('mousemove', e => {
  mouseX = e.clientX // récupère la position de la souris sur l'axe x
  mouseY = e.clientY // récupère la position de la souris sur l'axe y
})

function tick() {
  renderer.render(scene, camera) // affiche la scène avec la caméra
  // camera.lookAt(0, 0, 0) // fait regarder la caméra vers le centre de la scène
  requestAnimationFrame(tick) // demande à la fonction tick de s'exécuter à nouveau
  // group.rotation.y = time * 0.1 // fait tourner le groupe sur l'axe y
  const ratio = (mouseX / window.innerWidth - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe x par rapport à la largeur de la fenêtre (entre -1 et 1)
  cubeMesh.rotation.y = ratio * Math.PI * 0.1 // fait tourner le groupe sur l'axe y en fonction du ratio
  const ratioY = (mouseY / window.innerHeight - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe y par rapport à la hauteur de la fenêtre (entre -1 et 1)
  cubeMesh.rotation.x = ratioY * Math.PI * 0.1 // fait tourner le groupe sur l'axe x en fonction du ratio
}

tick() // exécute la fonction tick
