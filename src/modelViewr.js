import * as THREE from "https://unpkg.com/three/build/three.module.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let scene = new THREE.Scene();
// const canvas = document.querySelector("#canvas");
// const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("#canvas"),
  alpha: true,
});

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth * 0.5, window.innerHeight * 0.5);

let camera = new THREE.PerspectiveCamera(
  0.52,
  window.innerWidth / window.innerHeight,
  1,
  10000,
);
camera.position.set(0, 0, 150);

let light = new THREE.DirectionalLight(0xffffff, 10);
scene.add(light);

let loader = new GLTFLoader();

loader.load("image/react.glb", function (gltf) {
  const model = gltf.scene;
  const targetScale = 1.5; // 확대될 목표 스케일
  const originalScale = 1; // 원래 스케일
  let isRotating = false;
  let rotationStartTime = 0;
  let currentScale = 1; // 현재 스케일
  let scalingUp = false; // 스케일이 확대 중인지 여부
  let animationFrameId;

  scene.add(model);

  // 마우스 호버에 따른 스케일 변화
  function scaleMouseHover() {
    if (scalingUp) {
      const elapsedTime = Date.now() - rotationStartTime;
      currentScale += (targetScale - currentScale) * 0.1;

      if (isRotating) {
        if (elapsedTime < 1500) {
          model.rotation.z += (targetScale - currentScale) * 0.75;
        } else if (elapsedTime < 2000) {
          model.rotation.z += (targetScale - currentScale) * 0.5;
        } else {
          isRotating = false;
        }
      }
    } else if (!scalingUp) {
      currentScale += (originalScale - currentScale) * 0.1;
    }

    model.scale.set(currentScale, currentScale, currentScale);
  }

  // 모델 회전
  function rotateModel() {
    model.rotation.x += 0.005;
    model.rotation.z += 0.005;
  }

  // 스크롤 내릴시 모델 회전
  function rotateWhileScroll() {
    const rotationX = window.scrollY * 0.003;
    if (rotationX <= 2.7) {
      model.rotation.z += rotationX / 10;

      renderer.render(scene, camera);
    }
  }

  window.addEventListener("scroll", rotateWhileScroll);
  renderer.domElement.addEventListener("mouseover", () => {
    scalingUp = true;
    isRotating = true;
    rotationStartTime = Date.now();
  });
  renderer.domElement.addEventListener("mouseout", () => (scalingUp = false));

  // 애니메이션 반복 수행
  function animate() {
    requestAnimationFrame(animate);
    rotateModel();
    scaleMouseHover();

    renderer.render(scene, camera);
    console.log("running");
  }

  animate();
});
