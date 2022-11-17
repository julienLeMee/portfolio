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

const sphereGeometry = new THREE.SphereGeometry(0.4, 32, 32)
const sphereMaterial = new THREE.MeshNormalMaterial({color: 0xff0000})
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
scene.add(sphere)
const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    wireframe: true
})
const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
scene.add(cubeMesh)

// const octahedronGeometry = new THREE.OctahedronGeometry(0.1, 0)
// const octahedronMaterial = new THREE.MeshNormalMaterial()

// const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial)
// scene.add(octahedron)


const particleGeometry = new THREE.BufferGeometry()
const particleCount = 80000

const positionsArray = new Float32Array(particleCount * 3);



for (let i = 0; i < particleCount * 3; i++) {
    positionsArray[i] = (Math.random() - 0.5) * 2
}

const positionAttribute = new THREE.BufferAttribute(positionsArray, 3);
particleGeometry.setAttribute('position', positionAttribute);

const cubeParticles = new THREE.Points( particleGeometry, new THREE.PointsMaterial({
  size: 0.001,
  color: 0xffffff,
  transparent: true, // pour que la couleur soit transparente
  opacity: 0.5,
  depthWrite: false, // pour que les particules ne soient pas cachées par les autres objets
  blending: THREE.AdditiveBlending, // pour que les particules soient plus lumineuses
  sizeAttenuation: true // pour que les particules soient plus petites quand elles sont loin
}));
scene.add(cubeParticles);


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

// recuperer la position du doigt sur l'ecran
let touchX = 0 // position du doigt sur l'axe x
let touchY = 0 // position du doigt sur l'axe y
window.addEventListener('touchmove', e => {
  touchX = e.touches[0].clientX // récupère la position du doigt sur l'axe x
  touchY = e.touches[0].clientY // récupère la position du doigt sur l'axe y
})

// Animation

const clock = new THREE.Clock()

function tick() {
  const elapsedTime = clock.getElapsedTime()

  // Update objects
  // octahedron.position.y = Math.cos(elapsedTime)
  // octahedron.position.x = Math.sin(elapsedTime)
  // octahedron.rotation.y = elapsedTime
  // octahedron.rotation.x = elapsedTime
  cubeMesh.rotation.y += 1
  cubeParticles.rotation.y += 1
  renderer.render(scene, camera) // affiche la scène avec la caméra
  // camera.lookAt(0, 0, 0) // fait regarder la caméra vers le centre de la scène
  const ratio = (mouseX / window.innerWidth - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe x par rapport à la largeur de la fenêtre (entre -1 et 1)
  cubeMesh.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
  const ratioY = (mouseY / window.innerHeight - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe y par rapport à la hauteur de la fenêtre (entre -1 et 1)
  cubeMesh.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
  cubeParticles.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
  cubeParticles.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio

  if (window.matchMedia("(max-width: 768px)").matches) {
    const ratioTouchX = (touchX / window.innerWidth - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe x par rapport à la largeur de la fenêtre (entre -1 et 1)
    cubeMesh.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
    const ratioTouchY = (touchY / window.innerHeight - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe y par rapport à la hauteur de la fenêtre (entre -1 et 1)
    cubeMesh.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
    cubeParticles.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
    cubeParticles.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
  }
  // sphere.rotation.y += 0.01
  // sphere.rotation.x += 0.01
  requestAnimationFrame(tick) // demande à la fonction tick de s'exécuter à nouveau
}

tick() // exécute la fonction tick
