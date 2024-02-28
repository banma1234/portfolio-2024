const image = document.getElementById("activity_image");
const imagChange = document.querySelectorAll(".img_change");
const imageMap = ["image/profile.png", "image/profile_2.jpg"];

imagChange.forEach((item, i) => {
  item.addEventListener("mouseover", (e) => {
    image.classList.add("fade_out");
    setTimeout(() => {
      image.src = imageMap[i];
      image.classList.remove("fade_out");
    }, 300);
  });
});

const body = document.getElementsByTagName("body")[0];
const carousel = document.querySelectorAll(".icon-cards__item > img");
const modal = document.getElementById("modal");
const modalBody = document.querySelector("#modal_body > img");
const modalClose = document.getElementById("modal_close");

carousel.forEach((img) => {
  img.addEventListener("click", () => {
    modal.classList.add("activate");
    modalBody.src = img.src;
    body.classList.add("scrollLock");
  });
});

modalClose.addEventListener("click", () => {
  modalBody.src = "";
  modal.classList.remove("activate");
  body.classList.remove("scrollLock");
});
