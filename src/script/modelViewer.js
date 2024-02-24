import * as THREE from "https://unpkg.com/three/build/three.module.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const card2 = document.getElementById("card_2");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("#canvas"),
  alpha: true,
});
/** targetScale = 스케일업 최대치*/
const targetScale = 1.5;
/** originalScale = 원본 스케일값 */
const originalScale = 1;
/** rotationSpeed = 가변 회전속도 */
let rotationSpeed = 0;
/** 회전 시작시간 */
let rotationStartTime = 0;
/** currentScale = 현재 스케일값 */
let currentScale = 1;
/** isHover = 마우스 호버 여부 */
let isHover = false;

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

const light = new THREE.DirectionalLight(0xffffff, 10);
scene.add(light);

const loader = new GLTFLoader();

loader.load("image/react.glb", function (gltf) {
  /** 3D모델 */
  const model = gltf.scene;

  scene.add(model);

  /** @param {number} timestamp 마우스 호버에 따라 스케일 증감 */
  function scaleMouseHover(timestamp) {
    if (isHover) {
      const elapsedTime = timestamp - rotationStartTime;
      currentScale += (targetScale - currentScale) * 0.04;

      if (elapsedTime < 350) {
        rotationSpeed += 0.0035;
      } else if (elapsedTime < 1000) {
        rotationSpeed *= 0.975;
      } else if (elapsedTime > 1000) {
        rotationSpeed > 0 ? (rotationSpeed -= 0.0004) : (rotationSpeed = 0);
      }

      model.rotation.z += rotationSpeed;
    } else if (!isHover) {
      currentScale += (originalScale - currentScale) * 0.04;
    }

    model.scale.set(currentScale, currentScale, currentScale);
  }

  /** 모델 회전 */
  function rotateModel() {
    model.rotation.x += 0.005;
    model.rotation.z += 0.005;
  }

  /** 스크롤 내릴시 모델 회전 */
  function rotateWhileScroll() {
    const rotationX = window.scrollY * 0.003;
    if (rotationX <= 2.7) {
      model.rotation.z += rotationX / 20;

      renderer.render(scene, camera);
    }

    /** 카드제어(상당히 짜침) */
    if (rotationX >= 5.7) {
      card2.style.display = "none";
    } else if (rotationX < 5.7) {
      card2.style.display = "block";
    }
  }

  // 이벤트 리스너 등록
  window.addEventListener("scroll", rotateWhileScroll);
  renderer.domElement.addEventListener("mouseover", () => {
    isHover = true;
    rotationStartTime = performance.now();
  });
  renderer.domElement.addEventListener("mouseout", () => {
    isHover = false;
    rotationSpeed = 0;
  });

  /** 애니메이션 반복수행 */
  function animate() {
    requestAnimationFrame(animate);
    rotateModel();
    scaleMouseHover(performance.now());

    renderer.render(scene, camera);
  }

  animate();
});
