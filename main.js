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

const cursorElement = document.querySelector('.custom-cursor');
const titleName = document.querySelector('.name');

document.addEventListener('mousemove', (e) => {
  cursorElement.style.top = e.clientY + 'px';
  cursorElement.style.left = e.clientX + 'px';
});

titleName.addEventListener('mouseover', () => {
  cursorElement.classList.add('hovered');
});

titleName.addEventListener('mouseout', () => {
  cursorElement.classList.remove('hovered');
});

new Typewriter(textAnim, {
  loop: true,
  delay: 75,
})
.pauseFor(2000)
.typeString('Développeur web <br> <span style="color: #D8829D;">HTML</span>')
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
.typeString('<span style="color: #00B8D9;">Three.js</span>')
.pauseFor(1000)
.deleteChars(8)
.typeString('<span style="color: #5F9A41;">Next.js</span>')
.pauseFor(1000)
.deleteChars(8)
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
// const canvas = document.querySelector('.webgl');

// // scroll
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 650) {
//     canvas.style = 'position: absolute';
//   }
//   else {
//     canvas.style = 'position: fixed';
//   }
// });

// // Sizes
// const sizes = {
//   width: window.innerWidth,
//   height: window.innerHeight * 2
// }

// // Scene
// const scene = new THREE.Scene()

// // Textures
const textureLoader = new THREE.TextureLoader()
const matCapTexture = textureLoader.load('/textures/matcaps/8.png')
// const matCapTexture2 = textureLoader.load('/textures/matcaps/4.png')
// const matCapTexture3 = textureLoader.load('/textures/matcaps/7.png')

// // Object

// /**
//  * Particles
//  */
// // Geometry
// // const particlesGeometry = new THREE.SphereGeometry(1, 32, 32)

// // // Material
// // const particlesMaterial = new THREE.PointsMaterial({
// //     size: 0.02,
// //     sizeAttenuation: true
// // })
// // // on peut aussi instancier un PointsMaterial vide et lui ajouter ensuite les propriétés
// // // particlesMaterial.size = 0.02
// // // particlesMaterial.sizeAttenuation = true

// // // Points
// // const particlesSphere = new THREE.Points(particlesGeometry, particlesMaterial)
// // scene.add(particlesSphere)

// const particlesTexture = textureLoader.load('/textures/particles/2.png')

// /**
//  * Particles
//  */
// // Geometry
// const particlesGeometry = new THREE.BufferGeometry()
// const count = 10000

// const positions = new Float32Array(count * 3)
// const colors = new Float32Array(count * 3)

// for (let i = 0; i < count * 3; i++)
// {
//     positions[i] = (Math.random() - 0.5) * 10
//     colors[i] = Math.random()
// }

// particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
// particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

// // Material
// const particlesMaterial = new THREE.PointsMaterial({
//     size: 0.07,
//     sizeAttenuation: true,
//     opacity: 0.8
// })
// // on peut aussi instancier un PointsMaterial vide et lui ajouter ensuite les propriétés
// // particlesMaterial.color = new THREE.Color('#ff88cc')
// particlesMaterial.transparent = true
// particlesMaterial.alphaMap = particlesTexture
// particlesMaterial.depthWrite = false // pour que les particules ne soient pas cachées par les objets de la scène
// particlesMaterial.blending = THREE.AdditiveBlending // pour avoir un effet de lumière
// particlesMaterial.vertexColors = true // pour que les particules aient des couleurs différentes

// // Points
// const bubbles = new THREE.Points(particlesGeometry, particlesMaterial)
// scene.add(bubbles)

// /**
//  * Tie fighter
//  */

// // Cockpit
// const cockpitGeometry = new THREE.SphereGeometry( 0.2, 16, 16 );
// const cockpitMaterial = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// // glass
// const glassGeometry = new THREE.ConeGeometry( 0.1, 0.07, 8, 8 );
// const glassMaterial = new THREE.MeshStandardMaterial({
//   color: 0x000000
// })


// // Wings
// const wingGeometry = new THREE.PlaneGeometry( 0.6, 0.7, 8, 8 ); // (largeur, hauteur)
// const wingMaterial = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// // Wings structure
// const wingStructureGeometry = new THREE.PlaneGeometry( 0.6, 0.7);
// const wingStructureMaterial = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// // Wings structure 2
// const wingStructure2Geometry = new THREE.PlaneGeometry( 0.6, 0.7, 8, 8 );
// const wingStructure2Material = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// // Wings 2
// const wing2Geometry = new THREE.PlaneGeometry( 0.6, 0.7, 8, 8 );
// const wing2Material = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// // Wings2 structure
// const wing2StructureGeometry = new THREE.PlaneGeometry( 0.6, 0.7, 8, 8 );
// const wing2StructureMaterial = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// // Wings2 structure 2
// const wing2Structure2Geometry = new THREE.PlaneGeometry( 0.6, 0.7 );
// const wing2Structure2Material = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// // Cylinder
// const cylinderGeometry = new THREE.CylinderGeometry( 0.05, 0.09, 0.2, 12 ); // géométrie du cylindre (rayon du haut, rayon du bas, hauteur, nombre de segments)
// const cylinderMaterial = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// // Cylinder 2
// const cylinder2Geometry = new THREE.CylinderGeometry( 0.05, 0.09, 0.2, 12 ); // géométrie du cylindre (rayon du haut, rayon du bas, hauteur, nombre de segments)
// const cylinder2Material = new THREE.MeshMatcapMaterial({
//   matcap: matCapTexture
// })

// const tieFighter = new THREE.Group()
// tieFighter.scale.set(0.8, 0.8, 0.8)
// scene.add(tieFighter)

// // Cockpit
// const cockpit = new THREE.Mesh( cockpitGeometry, cockpitMaterial );
// tieFighter.add( cockpit );

// // glass
// const glass = new THREE.Mesh( glassGeometry, glassMaterial );
// glass.position.z = 0.15 // position du cockpit sur l'axe z (profondeur)
// glass.rotation.x = - Math.PI * 0.5
// tieFighter.add( glass );

// // Wings
// const wing = new THREE.Mesh( wingGeometry, wingMaterial );
// wing.rotation.y = Math.PI * 0.5
// wing.position.x = -0.4 // position de l'aile sur l'axe x (largeur)
// tieFighter.add( wing );

// // Wings structure
// const wingStructure = new THREE.Mesh( wingStructureGeometry, wingStructureMaterial );
// wingStructure.rotation.y = Math.PI * 0.5
// wingStructure.position.x = 0.4 // position de l'aile sur l'axe x (largeur)
// tieFighter.add( wingStructure );

// // Wings structure 2
// const wingStructure2 = new THREE.Mesh( wingStructure2Geometry, wingStructure2Material );
// wingStructure2.rotation.y = Math.PI * 0.5
// wingStructure2.position.x = 0.4 // position de l'aile sur l'axe x (largeur)
// tieFighter.add( wingStructure2 );

// // Wings 2
// const wing2 = new THREE.Mesh( wing2Geometry, wing2Material );
// wing2.rotation.y = - Math.PI * 0.5
// wing2.position.x = - 0.4 // position de l'aile sur l'axe x (largeur)
// tieFighter.add( wing2 );

// // Wings2 structure
// const wing2Structure = new THREE.Mesh( wing2StructureGeometry, wing2StructureMaterial );
// wing2Structure.rotation.y = - Math.PI * 0.5
// wing2Structure.position.x = 0.4 // position de l'aile sur l'axe x (largeur)
// tieFighter.add( wing2Structure );

// // // Wings2 structure 2
// // const wing2Structure2 = new THREE.Mesh( wing2Structure2Geometry, wing2Structure2Material );
// // wing2Structure2.rotation.y = Math.PI * 0.5
// // wing2Structure2.position.x = -0.5 // position de l'aile sur l'axe x (largeur)
// // tieFighter.add( wing2Structure2 );

// // Cylinder
// const cylinder = new THREE.Mesh( cylinderGeometry, cylinderMaterial );
// cylinder.rotation.z = - Math.PI * 0.5
// cylinder.position.x = 0.28 // position de l'aile sur l'axe x (largeur)
// tieFighter.add( cylinder );

// // Cylinder 2
// const cylinder2 = new THREE.Mesh( cylinder2Geometry, cylinder2Material );
// cylinder2.rotation.z = Math.PI * 0.5
// cylinder2.position.x = - 0.28 // position de l'aile sur l'axe x (largeur)
// tieFighter.add( cylinder2 );

// /**
//  * Sphere Particles
//  */
// // Geometry
// // const sphereParticlesGeometry = new THREE.SphereGeometry(0.5, 32, 32)

// // // Material
// // const sphereParticlesMaterial = new THREE.PointsMaterial({
// //     size: 0.006,
// //     sizeAttenuation: true,
// //     color: 0xffffff,
// //     opacity: 1
// // })
// // // on peut aussi instancier un PointsMaterial vide et lui ajouter ensuite les propriétés
// // // particlesMaterial.size = 0.02
// // // particlesMaterial.sizeAttenuation = true

// // // Points
// // const sphereParticles = new THREE.Points(sphereParticlesGeometry, sphereParticlesMaterial)
// // scene.add(sphereParticles)


// /**
//  * Square Particles
//  */
// const particleSquareGeometry = new THREE.BufferGeometry();
// const particleCount = 30000

// const particles = new Float32Array(particleCount * 3);



// for (let i = 0; i < particleCount * 3; i++) {
//     particles[i] = (Math.random() - 0.5) * 0.7
// }

// const positionAttribute = new THREE.BufferAttribute(particles, 3);
// particleSquareGeometry.setAttribute('position', positionAttribute);

// const cubeParticles = new THREE.Points( particleSquareGeometry, new THREE.PointsMaterial({
//   size: 0.00001,
//   color: 0xffffff,
//   transparent: true, // pour que la couleur soit transparente
//   opacity: 0.5, // pour que les particules ne soient pas cachées par les autres objets
//   blending: THREE.AdditiveBlending, // pour que les particules soient plus lumineuses
//   sizeAttenuation: true, // pour que les particules soient plus petites quand elles sont loin
// }));
// // scene.add(cubeParticles);

// // Camera
// const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
// camera.position.z = 8
// scene.add(camera)


// // Renderer
// const renderer = new THREE.WebGLRenderer({
//     canvas: canvas,
//     alpha: true,
//     antialias: true
// })
// renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)

// window.addEventListener('resize', () => {
//   camera.aspect = window.innerWidth / window.innerHeight // définit le ratio de la caméra
//   camera.updateProjectionMatrix() // met à jour la matrice de projection de la caméra
//   renderer.setSize(window.innerWidth, window.innerHeight) // définit la taille du renderer
//   renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) // définit le ratio de pixel du renderer
// })

// // recuperer la position de la souris sur l'ecran
// let mouseX = 0 // position de la souris sur l'axe x
// let mouseY = 0 // position de la souris sur l'axe y
// window.addEventListener('mousemove', e => {
//   mouseX = e.clientX // récupère la position de la souris sur l'axe x
//   mouseY = e.clientY // récupère la position de la souris sur l'axe y
// })

// // recuperer la position du doigt sur l'ecran
// let touchX = 0 // position du doigt sur l'axe x
// let touchY = 0 // position du doigt sur l'axe y
// window.addEventListener('touchmove', e => {
//   touchX = e.touches[0].clientX // récupère la position du doigt sur l'axe x
//   touchY = e.touches[0].clientY // récupère la position du doigt sur l'axe y
// })

// // Animation

// const clock = new THREE.Clock()

// function tick() {
//   const elapsedTime = clock.getElapsedTime()

//   // Update objects

//   // sphere.position.y = Math.cos(elapsedTime) * 0.2
//   // sphere.position.x = Math.sin(elapsedTime) * 0.2
//   // octahedron.position.x = Math.sin(elapsedTime)
//   // octahedron.rotation.y = elapsedTime
//   // octahedron.rotation.x = elapsedTime

//   // cubeMesh.rotation.y += 1
//   // cubeParticles.rotation.x += 5
//   renderer.render(scene, camera) // affiche la scène avec la caméra
//   // camera.lookAt(0, 0, 0) // fait regarder la caméra vers le centre de la scène
//   const ratio = (mouseX / window.innerWidth - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe x par rapport à la largeur de la fenêtre (entre -1 et 1)
//   // cubeMesh.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
//   const ratioY = (mouseY / window.innerHeight - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe y par rapport à la hauteur de la fenêtre (entre -1 et 1)
//   // cubeMesh.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
//   cubeParticles.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
//   cubeParticles.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
//   tieFighter.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
//   tieFighter.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
//   // sphereParticles.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
//   // sphereParticles.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
//   // bubbles.rotation.y = ratio * Math.PI * 0.5 // fait tourner le groupe sur l'axe y en fonction du ratio
//   // bubbles.rotation.x = ratioY * Math.PI * 0.5 // fait tourner le groupe sur l'axe x en fonction du ratio
//   // particlesSphere.rotation.y = ratio * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
//   // particlesSphere.rotation.x = ratioY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio

//   if (window.matchMedia("(max-width: 768px)").matches) {
//     const ratioTouchX = (touchX / window.innerWidth - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe x par rapport à la largeur de la fenêtre (entre -1 et 1)
//     // cubeMesh.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
//     const ratioTouchY = (touchY / window.innerHeight - 0.5) * 2 // calcule le ratio de la position de la souris sur l'axe y par rapport à la hauteur de la fenêtre (entre -1 et 1)
//     // cubeMesh.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
//     cubeParticles.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
//     cubeParticles.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
//     // sphereParticles.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
//     // sphereParticles.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
//     // tieFighter.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
//     // tieFighter.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
//     // scene.remove(sphereParticles)
//     scene.remove(tieFighter)
//     // bubbles.rotation.y = ratioTouchX * Math.PI // fait tourner le groupe sur l'axe y en fonction du ratio
//     // bubbles.rotation.x = ratioTouchY * Math.PI // fait tourner le groupe sur l'axe x en fonction du ratio
//   }
//   // cubeParticles.position.z = Math.cos(elapsedTime) * 0.5 // fait bouger le groupe sur l'axe z en fonction du temps
//   bubbles.rotation.y = elapsedTime * 0.01
//   bubbles.rotation.x = elapsedTime * 0.01

//   requestAnimationFrame(tick) // demande à la fonction tick de s'exécuter à nouveau
// }

// tick() // exécute la fonction tick


/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

const parameters = {
  materialColor: '#ffeded'
}

/**
 * Objects
 */
// Textures
// const textureLoader = new THREE.TextureLoader()
const gradientTexture = textureLoader.load('/textures/gradients/3.jpg')
gradientTexture.magFilter = THREE.NearestFilter

const alphaMap = textureLoader.load('/textures/alphamap.png') // charge la texture

// Materials
const material = new THREE.MeshToonMaterial({
    color: parameters.materialColor,
    gradientMap: gradientTexture
})

// Meshes
const objectsDistance = 4

const mesh1 = new THREE.Mesh(
  new THREE.TorusGeometry(1, 0.4, 16, 60),
  material
)
const mesh2 = new THREE.Mesh(
  new THREE.ConeGeometry(1, 2, 32),
  material
)
const mesh3 = new THREE.Mesh(
  new THREE.TorusKnotGeometry(0.8, 0.35, 100, 16),
  material
)
const mesh4 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  material
)

mesh1.position.y = - objectsDistance * 0
mesh2.position.y = - objectsDistance * 1
mesh3.position.y = - objectsDistance * 2
mesh4.position.y = - objectsDistance * 3


if (window.matchMedia("(max-width: 768px)").matches) {
  mesh1.position.x = 0
  mesh2.position.x = 0
  mesh3.position.x = 0
  mesh4.position.x = 0
} else {
  mesh1.position.x = 2
  mesh2.position.x = - 2
  mesh3.position.x = 2
  mesh4.position.x = - 2
}

scene.add(mesh2, mesh3, mesh4)

const sectionMeshes = [mesh1, mesh2, mesh3, mesh4]

/**
 * Sphere Particles
 */
//Geometry
const sphereParticlesGeometry = new THREE.SphereGeometry(0.5, 32, 32)

// Material
// const sphereParticlesMaterial = new THREE.PointsMaterial({
//     size: 0.006,
//     sizeAttenuation: true,
//     color: 0xffffff,
//     opacity: 1
// })
const sphereParticlesMaterial = new THREE.MeshNormalMaterial()
// on peut aussi instancier un PointsMaterial vide et lui ajouter ensuite les propriétés
// particlesMaterial.size = 0.02
// particlesMaterial.sizeAttenuation = true

// Points
const sphereParticles = new THREE.Points(sphereParticlesGeometry, sphereParticlesMaterial)
sphereParticles.scale.set(0.5, 0.5, 0.5)
sphereParticles.position.y = - 1.4
sphereParticles.position.x = 3.3
// scene.add(sphereParticles)

/**
 * Particles
 */
// Geometry
const particlesCount = 200
const positions = new Float32Array(particlesCount * 3)
for (let i = 0; i < particlesCount * 3; i++)
{
    positions[i * 3 + 0] = (Math.random() - 0.5 ) * 10 // correspond à la position x
    positions[i * 3 + 1] = objectsDistance * 0.5 - Math.random() * objectsDistance * sectionMeshes.length // correspond à la position y
    positions[i * 3 + 2] = (Math.random() - 0.5 ) * 10 // correspond à la position z
}

const particlesGeometry = new THREE.BufferGeometry()
particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

// Material
const particlesMaterial = new THREE.PointsMaterial({
  color: parameters.materialColor,
  sizeAttenuation: true,
  size: 0.03,
  alphaMap: alphaMap,
  blending: THREE.AdditiveBlending
})

// Points
const particles = new THREE.Points(particlesGeometry, particlesMaterial)
scene.add(particles)

/**
 * Lights
 */
const directionalLight = new THREE.DirectionalLight('#ffffff', 1)
directionalLight.position.set(1, 1, 0)
scene.add(directionalLight)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Group
const cameraGroup = new THREE.Group()
scene.add(cameraGroup)

// Base camera
const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 6
cameraGroup.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Scroll
 */
let scrollY = window.scrollY
let currentSection = 0

window.addEventListener('scroll', () =>
{
    scrollY = window.scrollY

    const newSection = Math.round(scrollY / sizes.height)

    if (newSection !== currentSection)
    {
        currentSection = newSection

        gsap.to(
          sectionMeshes[currentSection].rotation,
          {
              duration: 1.5,
              ease: 'power2.inOut',
              x: '+=6',
              y: '+=3',
              z: '+=1.5'
          }
        )
    }
})

/**
 * Cursor
 */
const cursor = {}
cursor.x = 0
cursor.y = 0

window.addEventListener('mousemove', (event) =>
{
    cursor.x = event.clientX / sizes.width - 0.5
    cursor.y = event.clientY / sizes.height - 0.5
})

// recuperer la position de la souris sur l'ecran
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

/**
 * Animate
 */
const clock = new THREE.Clock()
let previousTime = 0

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()
    const deltaTime = elapsedTime - previousTime
    previousTime = elapsedTime

    // Animate camera
    camera.position.y = - scrollY / sizes.height * objectsDistance

    const parallaxX = cursor.x * 0.5
    const parallaxY = - cursor.y * 0.5
    cameraGroup.position.x += (parallaxX - cameraGroup.position.x) * 5 * deltaTime
    cameraGroup.position.y += (parallaxY - cameraGroup.position.y) * 5 * deltaTime

    // Animate meshes
    for (const mesh of sectionMeshes)
    {
        mesh.rotation.x += deltaTime * 0.1 // permet de faire tourner les objets en x, deltaTime permet de faire tourner les objets à la même vitesse sur tous les ordinateurs
        mesh.rotation.y += deltaTime * 0.12
    }

    // Animate sphere particles
    sphereParticles.rotation.y += deltaTime * 0.1
    sphereParticles.rotation.x += deltaTime * 0.1

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()
