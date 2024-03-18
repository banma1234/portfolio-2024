const image = document.getElementById("activity_image");
const imagChange = document.querySelectorAll(".img_change");
const imageMap = ["image/profile.png", "image/profile_2.jpg"];

imagChange.forEach((item, i) => {
  item.addEventListener("mouseover", e => {
    image.classList.add("fade_out");
    setTimeout(() => {
      image.src = imageMap[i];
      image.classList.remove("fade_out");
    }, 300);
  });
});

// #region 모달창 제어
const body = document.getElementsByTagName("body")[0];
const carousel = document.querySelectorAll(".icon-cards__item > img");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector("#modal_body > img");
const modalClose = document.getElementById("modal_close");

carousel.forEach(img => {
  img.addEventListener("click", () => {
    body.classList.add("scrollLock");
    modal.classList.add("activate");
    setTimeout(() => {
      modalBody.src = img.src;
    }, 600);
  });
});

modalClose.addEventListener("click", () => {
  modalBody.src = "";
  modal.classList.remove("activate");
  body.classList.remove("scrollLock");
});
//#endregion

// #region 스크롤에 따른 컴포넌트 제어
const components = document.querySelectorAll(
  "#canvas, #contact, .blog, .portfolio, #opensource_1, #opensource_2, #opensource_3, #post-container",
);

/**
 * 스크롤에 따라 컴포넌트의 display 설정 제어.
 * @param {number} rotationX - 스크롤 값
 */
export function scrollAction(rotationX) {
  const onViewport = [
    rotationX < 2.7,
    2.5 <= rotationX && rotationX < 6,
    5.7 <= rotationX && rotationX < 9,
    9 <= rotationX && rotationX < 13.5,
    12.9 <= rotationX && rotationX < 16.5,
    15.2 <= rotationX && rotationX < 19.8,
    18.4 <= rotationX && rotationX < 23.2,
    23.5 <= rotationX && rotationX < 31,
  ];

  if (!onViewport[1]) {
    components[1].style.transition = `transform 0s`;
  }

  for (let i = 0; i < onViewport.length; i++) {
    components[i].style.display = onViewport[i] ? "flex" : "none";
  }
}
//#endregion

// #region 2D html 컴포넌트에 3D 애니메이션 적용
const contact = document.getElementById("contact");
const overlay = document.getElementById("contact_overlay");

overlay.addEventListener("mousemove", e => {
  let rotateX = (1 / 10) * e.offsetY - 20;
  let rotateY = (-1 / 20) * e.offsetX + 20;

  contact.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

overlay.addEventListener("mouseenter", () => {
  contact.style.transition = `transform 0.15s`;
});

overlay.addEventListener("mouseleave", () => {
  contact.style.transition = `transform 1s ease`;
  contact.style.transform = `rotateX(0) rotateY(0)`;
});

//#endregion
