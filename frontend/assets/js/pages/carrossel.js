
export function createCarousel({ track, dots, items }) {
  let currentIndex = 0;

  function renderSlides() {
    items.forEach(item => {
      const slide = document.createElement("div");
      slide.classList.add("slide");

      slide.innerHTML = `
        <picture>
          <source media="(max-width: 768px)" srcset="${item.mobile}">
          <img src="${item.desktop}" alt="${item.alt}">
        </picture>
      `;

      track.appendChild(slide);
    });

    track.style.width = `${items.length * 100}vw`;
  }

  function renderDots() {
    items.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");

      dot.addEventListener("click", () => {
        currentIndex = index;
        update();
      });

      dots.appendChild(dot);
    });
  }

  function update() {
    track.style.transform = `translateX(-${currentIndex * 100}vw)`;
    dots.querySelectorAll(".dot").forEach((d, i) =>
      d.classList.toggle("active", i === currentIndex)
    );
  }

  function autoplay() {
    setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      update();
    }, 5000);
  }

  renderSlides();
  renderDots();
  update();
  autoplay();
}
