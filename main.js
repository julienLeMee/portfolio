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
  width: window.innerWidth,
  height: window.innerHeight * 2
}

// Scene
const scene = new THREE.Scene()

// Textures
const textureLoader = new THREE.TextureLoader()
const matCapTexture = textureLoader.load('/textures/matcaps/8.png')
const matCapTexture2 = textureLoader.load('/textures/matcaps/4.png')
const matCapTexture3 = textureLoader.load('/textures/matcaps/7.png')

// Object

/**
 * Particles
 */
// Geometry
// const particlesGeometry = new THREE.SphereGeometry(1, 32, 32)

// // Material
// const particlesMaterial = new THREE.PointsMaterial({
//     size: 0.02,
//     sizeAttenuation: true
// })
// // on peut aussi instancier un PointsMaterial vide et lui ajouter ensuite les propriétés
// // particlesMaterial.size = 0.02
// // particlesMaterial.sizeAttenuation = true

// // Points
// const particlesSphere = new THREE.Points(particlesGeometry, particlesMaterial)
// scene.add(particlesSphere)

const particlesTexture = textureLoader.load('/textures/particles/2.png')

/**
 * Particles
 */
// Geometry
const particlesGeometry = new THREE.BufferGeometry()
const count = 10000

const positions = new Float32Array(count * 3)
const colors = new Float32Array(count * 3)

for (let i = 0; i < count * 3; i++)
{
    positions[i] = (Math.random() - 0.5) * 10
    colors[i] = Math.random()
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
    size: 0.1,
    sizeAttenuation: true,
    opacity: 0.5
})
// on peut aussi instancier un PointsMaterial vide et lui ajouter ensuite les propriétés
// particlesMaterial.color = new THREE.Color('#ff88cc')
particlesMaterial.transparent = true
particlesMaterial.alphaMap = particlesTexture
particlesMaterial.depthWrite = false // pour que les particules ne soient pas cachées par les objets de la scène
particlesMaterial.blending = THREE.AdditiveBlending // pour avoir un effet de lumière
particlesMaterial.vertexColors = true // pour que les particules aient des couleurs différentes

// Points
const bubbles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(bubbles)

/**
 * Objects
 */

// Cone
// const coneGeometry = new THREE.ConeGeometry(0.1, 0.2, 32)
// const coneMaterial = new THREE.MeshMatcapMaterial({ matcap: matCapTexture })
// const cone = new THREE.Mesh(coneGeometry, coneMaterial)
// scene.add(cone)

// Sphere
// const sphereGeometry = new THREE.SphereGeometry(0.1, 32, 32)
// const sphereMaterial = new THREE.MeshMatcapMaterial({ matcap: matCapTexture })
// const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial)
// scene.add(sphere)

// Cube
// const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
// const cubeMaterial = new THREE.MeshBasicMaterial({
//     color: 0xffffff,
//     wireframe: true
// })
// const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)
// scene.add(cubeMesh)

// const octahedronGeometry = new THREE.OctahedronGeometry(0.1, 0)
// const octahedronMaterial = new THREE.MeshNormalMaterial()

// const octahedron = new THREE.Mesh(octahedronGeometry, octahedronMaterial)
// scene.add(octahedron)

/**
 * Sphere Particles
 */
// Geometry
const sphereParticlesGeometry = new THREE.SphereGeometry(0.5, 32, 32)

// Material
const sphereParticlesMaterial = new THREE.PointsMaterial({
    size: 0.01,
    sizeAttenuation: true
})
// on peut aussi instancier un PointsMaterial vide et lui ajouter ensuite les propriétés
// particlesMaterial.size = 0.02
// particlesMaterial.sizeAttenuation = true

// Points
const sphereParticles = new THREE.Points(sphereParticlesGeometry, sphereParticlesMaterial)
scene.add(sphereParticles)


/**
 * Square Particles
 */
const particleSquareGeometry = new THREE.BufferGeometry();
const particleCount = 30000

const particles = new Float32Array(particleCount * 3);



for (let i = 0; i < particleCount * 3; i++) {
    particles[i] = (Math.random() - 0.5) * 0.7
}

const positionAttribute = new THREE.BufferAttribute(particles, 3);
particleSquareGeometry.setAttribute('position', positionAttribute);

const cubeParticles = new THREE.Points( particleSquareGeometry, new THREE.PointsMaterial({
  size: 0.00001,
  color: 0xffffff,
  transparent: true, // pour que la couleur soit transparente
  opacity: 0.5, // pour que les particules ne soient pas cachées par les autres objets
  blending: THREE.AdditiveBlending, // pour que les particules soient plus lumineuses
  sizeAttenuation: true, // pour que les particules soient plus petites quand elles sont loin
}));
// scene.add(cubeParticles);


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

  // sphere.position.y = Math.cos(elapsedTime) * 0.2
  // sphere.position.x = Math.sin(elapsedTime) * 0.2
  // octahedron.position.x = Math.sin(elapsedTime)
  // octahedron.rotation.y = elapsedTime
  // octahedron.rotation.x = elapsedTime

  // cubeMesh.rotation.y += 1
  // cubeParticles.rotation.x += 5
  renderer.render(scene, camera) // affiche la scène avec la caméra
  // camera.lookAt(0, 0, 0) // fait regarder la caméra vers le centre de la scène
  const ratio = (mouseX / window.innerWidth - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe x par rapport à la largeur de la fenêtre (entre -1 et 1)
  // cubeMesh.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
  const ratioY = (mouseY / window.innerHeight - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe y par rapport à la hauteur de la fenêtre (entre -1 et 1)
  // cubeMesh.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
  cubeParticles.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
  cubeParticles.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
  sphereParticles.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
  sphereParticles.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
  // bubbles.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
  // bubbles.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
  // particlesSphere.rotation.y = ratio * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
  // particlesSphere.rotation.x = ratioY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio


  if (window.matchMedia("(max-width: 768px)").matches) {
    const ratioTouchX = (touchX / window.innerWidth - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe x par rapport à la largeur de la fenêtre (entre -1 et 1)
    // cubeMesh.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
    const ratioTouchY = (touchY / window.innerHeight - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe y par rapport à la hauteur de la fenêtre (entre -1 et 1)
    // cubeMesh.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
    cubeParticles.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
    cubeParticles.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
    // sphereParticles.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
    // sphereParticles.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
    scene.remove(sphereParticles)
    // bubbles.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
    // bubbles.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
  }
  // cubeParticles.position.z = Math.cos(elapsedTime) * 0.5 // fait bouger le groupe sur l'axe z en fonction du temps
  bubbles.rotation.y = elapsedTime * 0.03
  bubbles.rotation.x = elapsedTime * 0.03

  requestAnimationFrame(tick) // demande à la fonction tick de s'exécuter à nouveau
}

tick() // exécute la fonction tick
