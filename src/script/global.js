const slide0 = document.getElementById("slide0-text");
const scrollDown = document.getElementById("scroll-down");
slide0.style.opacity = "0";

setTimeout(() => {
  slide0.style.opacity = "1";
  slide0.style.transform = "translateY(-2rem)";
}, 500)
setTimeout(() => {
  scrollDown.style.opacity = "1";
  scrollDown.style.transform = "translateY(-2rem)";
}, 700)
setTimeout(() => {
  slide0.style.transition = "none";
}, 1300)

// #region 모달창 제어
const body = document.getElementsByTagName("body")[0];
const carousel = document.querySelectorAll(".icon-cards__item > img");
const profile = document.getElementById("contact__overlay");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector("#modal_body > img");
const modalClose = document.getElementById("modal_close");

carousel.forEach((img) => {
  img.addEventListener("click", () => {
    body.classList.add("scrollLock");
    modal.classList.add("activate");
    setTimeout(() => {
      modalBody.src = img.src;
    }, 600);
  });
});

profile.addEventListener("click", () => {
  body.classList.add("scrollLock");
  modal.classList.add("activate");
  setTimeout(() => {
    modalBody.src = "image/doTest_2.jpg";
  }, 600);
});

modalClose.addEventListener("click", () => {
  modalBody.src = "";
  modal.classList.remove("activate");
  body.classList.remove("scrollLock");
});
//#endregion

// #region 스크롤에 따른 컴포넌트 제어
const components = document.querySelectorAll(
  "#canvas, #contact, .blog, .portfolio, #post-container, #opensource_1, #opensource_2, #opensource_3"
);

/**
 * 스크롤에 따라 컴포넌트의 display 설정 제어.
 * @param {number} rotationX - 스크롤 값
 */
export function scrollAction(rotationX) {
  const onViewport = [
    rotationX < 2.7,
    2.5 <= rotationX && rotationX < 6, // canvas
    5.7 <= rotationX && rotationX < 9, // contact
    9 <= rotationX && rotationX < 13.5, // blog

    13.1 <= rotationX && rotationX < 20.6, // post
    19 <= rotationX && rotationX < 25.6, // opensource_1
    22.3 <= rotationX && rotationX < 29.8, // opensource_2
    25.4 <= rotationX && rotationX < 32, // opensource_3
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
const contact = document.getElementById("contact__profile__container");
const overlay = document.getElementById("contact__overlay");

overlay.addEventListener("mousemove", (e) => {
  let rotateX = (1 / 10) * e.offsetY - 20;
  let rotateY = (-1 / 10) * e.offsetX + 20;

  contact.style.transform = `perspective(300px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

overlay.addEventListener("mouseenter", () => {
  contact.style.transition = `transform 0.1s`;
});

overlay.addEventListener("mouseleave", () => {
  contact.style.transition = `transform 1s ease`;
  contact.style.transform = `rotateX(0) rotateY(0)`;
});

//#endregion
