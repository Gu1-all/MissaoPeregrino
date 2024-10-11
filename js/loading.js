const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

//crisndo a textura
const texture = new THREE.TextureLoader().load( "/src/assets/imgs/gato_teste.png" );
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

// Cria um cubo
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ map: texture});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Posição da câmera
camera.position.z = 5;

// Função de animação
function animate() {
    requestAnimationFrame(animate);
    
    // Rotação do cubo
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

animate();