import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { getYfromX } from './math';
const canvas = document.getElementById('three')!;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight
);
const scene = new THREE.Scene();
scene.add(camera);
camera.position.z = -100;
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = true;
controls.enableDamping = true;
const hexchars = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandomColor() {
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexchars[Math.floor(Math.random() * 16)];
  }
  return color;
}

function tick() {
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
  controls.update();
}
tick();
const form = document.querySelector('form')!;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  for (let x = -1000; x <= 1000; x++) {
    const sphere = new THREE.SphereBufferGeometry(1);
    const material = new THREE.MeshBasicMaterial({ color: getRandomColor() });
    const mesh = new THREE.Mesh(sphere, material);
    const a = +(document.querySelector('#a') as HTMLInputElement).value;
    const b = +(document.querySelector('#b') as HTMLInputElement).value;
    const c = +(document.querySelector('#c') as HTMLInputElement).value;
    mesh.position.set(x, getYfromX(x, a, b, c), 0);
    scene.add(mesh);
  }
  form.remove();
});
