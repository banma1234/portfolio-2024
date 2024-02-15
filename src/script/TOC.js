const TOC = document.getElementById("TOC");
const tocItems = document.querySelectorAll(".TOC_items");
const slides = document.querySelectorAll(
  "#slide0, #slide1, #slide2, #slide3, #slide4, #slide5"
);

tocItems.forEach((item, index) => (item.dataset.index = index));
slides.forEach((slide, index) => (slide.dataset.index = index));

TOC.addEventListener("click", (e) => {
  if (e.target.matches(".TOC_items")) {
    console.log(slides[e.target.dataset.index]);
  }
});

let selectedIndex = 0;
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        tocItems[selectedIndex].classList.remove("selected");
        selectedIndex = entry.target.dataset.index;
        tocItems[selectedIndex].classList.add("selected");
      } else if (entry.boundingClientRect.y > 100) {
        tocItems[selectedIndex].classList.remove("selected");
        selectedIndex = Number(entry.target.dataset.index) - 1;
        tocItems[selectedIndex].classList.add("selected");
      }
    });
  },
  { threshold: 0.8 }
);

slides.forEach((slide) => observer.observe(slide));
