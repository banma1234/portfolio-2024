const TOC = document.getElementById("TOC");
const tocItems = document.querySelectorAll(".TOC_items");
const slides = document.querySelectorAll(
  "#slide0, #slide1, #slide2, #slide3, #slide4, #slide5",
);

tocItems.forEach((item, index) => (item.dataset.index = index));
slides.forEach((slide, index) => (slide.dataset.index = index));

TOC.addEventListener("click", e => {
  if (e.target.matches(".TOC_items")) {
    const index = +e.target.dataset.index;
    switch (index) {
      case 0:
        console.log("000");
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        break;
      case 1:
        window.scrollTo({ top: 1100, left: 0, behavior: "smooth" });
        break;
      default:
        window.scrollTo({
          top: 3600 + 1400 * (index - 2),
          left: 0,
          behavior: "smooth",
        });
    }
    // index === 1
    //   ? window.scrollTo({ top: 1100, left: 0, behavior: "smooth" })
    //   : window.scrollTo({ top: 1400 * index, left: 0, behavior: "smooth" });
  }
});

const a = [0, 1100, 3600, 5000, 6400, 7800];
const w = [0, 1100, 2400, 3800, 5200, 6600];

let selectedIndex = 0;
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
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
  { threshold: 0.8 },
);

slides.forEach(slide => observer.observe(slide));
