import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// canvas 1
const scene = new THREE.Scene();
const slides = document.querySelectorAll(".blog, .portfolio, #post-container");
const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas,
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

// canvas2
const scene2 = new THREE.Scene();
const canvas2 = document.getElementById("canvas2");
const renderer2 = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas2,
  alpha: true,
});

/** isDrag = 마우스 드래그 여부 */
let isDrag = false;
/** previousMousePosition = 마우스 이전 좌표 */
let previousMousePosition = {
  x: 0,
  y: 0,
};

renderer2.setPixelRatio(window.devicePixelRatio);
renderer2.setSize(window.innerWidth * 0.6, window.innerHeight * 0.6);

let camera2 = new THREE.PerspectiveCamera(
  0.3,
  window.innerWidth / window.innerHeight,
  1,
  10000,
);
camera2.position.set(0, 0, 150);

const light2 = new THREE.DirectionalLight(0xffffff, 10);
scene2.add(light2);

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

    // console.log(rotationX);

    /** 스크롤 제어(상당히 짜침) */
    if (rotationX < 2.7) {
      canvas.style.display = "block";
    } else {
      canvas.style.display = "none";
    }

    if (2.7 <= rotationX && rotationX < 5.7) {
      canvas2.style.display = "block";
    } else {
      canvas2.style.display = "none";
    }

    if (5.7 <= rotationX && rotationX < 9.6) {
      slides[0].style.display = "block";
    } else {
      slides[0].style.display = "none";
    }

    if (9.6 <= rotationX && rotationX < 13.5) {
      slides[1].style.display = "block";
    } else {
      slides[1].style.display = "none";
    }

    if (21.2 <= rotationX && rotationX < 28) {
      slides[2].style.display = "flex";
    } else {
      slides[2].style.display = "none";
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

const loader2 = new GLTFLoader();
loader2.load("image/react.glb", function (gltf) {
  /** 3D모델 */
  const model = gltf.scene;
  scene2.add(model);

  // 모델의 bounding box 계산
  const boundingBox = new THREE.Box3().setFromObject(model);

  // bounding box의 중심을 구함
  const center = new THREE.Vector3();
  boundingBox.getCenter(center);

  // 모델의 지오메트리를 이동시켜 중심을 원점으로 맞춤
  model.position.x += model.position.x - center.x;
  model.position.y += model.position.y - center.y;
  model.position.z += model.position.z - center.z;

  // 이벤트 리스너 등록
  window.addEventListener("mouseup", () => {
    isDrag = false;
  });
  renderer2.domElement.addEventListener("mousedown", e => {
    isDrag = true;
    previousMousePosition.x = e.clientX;
    previousMousePosition.y = e.clientY;
  });
  renderer2.domElement.addEventListener("mousemove", e => {
    if (isDrag) {
      const rotationSpeed = 0.005;
      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      model.rotation.x += deltaMove.y * (Math.PI / 180) * 0.5;
      model.rotation.y += deltaMove.x * (Math.PI / 180) * 0.5;
      model.rotation.z += deltaMove.x * rotationSpeed;

      previousMousePosition.x = e.clientX;
      previousMousePosition.y = e.clientY;
    }
  });

  /** 애니메이션 반복수행 */
  function animate() {
    requestAnimationFrame(animate);
    renderer2.render(scene2, camera2);
  }

  animate();
});
