import * as THREE from "https://unpkg.com/three/build/three.module.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let scene = new THREE.Scene();
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("#canvas"),
});

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth * 0.01, window.innerHeight * 0.01);

let camera = new THREE.PerspectiveCamera(
  0.15,
  window.innerWidth / window.innerHeight,
  1,
  10000
);
camera.position.set(0, 0, 150);

scene.background = new THREE.Color("white");
let light = new THREE.DirectionalLight(0xffffff, 10);
scene.add(light);

let loader = new GLTFLoader();

loader.load("image/react.glb", function (gltf) {
  const model = gltf.scene;
  scene.add(model);

  window.addEventListener("scroll", function () {
    const rotationX = window.scrollY * 0.003;

    if (rotationX <= 1.6) {
      const scale = window.scrollY / 1000;
      model.scale.set(scale, scale, scale);
      model.rotation.z = rotationX;
      renderer.setSize(
        window.innerWidth * scale * 0.6,
        window.innerHeight * scale * 0.6
      );
      renderer.render(scene, camera);
    }
  });
});
