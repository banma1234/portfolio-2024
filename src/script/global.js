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
  item.addEventListener("mouseout", () => {
    image.classList.add("fade_out");
    setTimeout(() => {
      image.src = "image/doTest.png";
      image.classList.remove("fade_out");
    }, 300);
  });
});
