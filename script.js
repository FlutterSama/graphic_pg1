// Scene, camera, and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a rotating cube
const geometry = new THREE.BoxGeometry();
const loader = new THREE.TextureLoader();

// Load textures
const textures = [
    new THREE.MeshBasicMaterial({ map: loader.load('texture1.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('texture2.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('texture3.jpg') }),
    new THREE.MeshBasicMaterial({ map: loader.load('texture4.jpg') }),
    new THREE.MeshBasicMaterial({ color: 0xffffff }), // Default for remaining faces
    new THREE.MeshBasicMaterial({ color: 0xffffff })  // Default for remaining faces
];

const cube = new THREE.Mesh(geometry, textures);
scene.add(cube);

// Lighting
const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(10, 10, 10);
scene.add(light);

camera.position.z = 5;

// Rotation control
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableZoom = false;

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();

// Event listener for mouse clicks or arrow keys
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        cube.rotation.y -= 0.1;
    } else if (event.key === 'ArrowRight') {
        cube.rotation.y += 0.1;
    }
});
