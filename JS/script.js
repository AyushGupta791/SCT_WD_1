// === Theme Toggle ===
const toggleBtn = document.getElementById("themeToggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
});

// === Carousel Functionality ===
let index = 0;
const items = document.querySelectorAll(".carousel-item");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showItem(idx) {
  items.forEach((item, i) => {
    item.classList.remove("active");
    if (i === idx) item.classList.add("active");
  });
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % items.length;
  showItem(index);
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + items.length) % items.length;
  showItem(index);
});

// Initial display
showItem(index);

// === Scroll Animations ===
const animatedElements = document.querySelectorAll(".feature-card, .testimonial");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedElements.forEach((el) => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add("zoom-in");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();