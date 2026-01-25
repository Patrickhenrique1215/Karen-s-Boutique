// slider.js

// Definimos as variáveis no escopo global (window) para que outros scripts as acessem
window.currentIndex = 0;
window.slider = null;
window.items = [];
window.dots = [];

// Função para gerar os pontinhos dinamicamente
function renderDots() {
    const dotsContainer = document.querySelector(".slider-dots");
    const totalImagens = document.querySelectorAll(".slider-item").length;
    
    if (!dotsContainer) return;
    dotsContainer.innerHTML = "";

    for (let i = 0; i < totalImagens; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.setAttribute("data-slide", i);
        
        dot.addEventListener("click", () => {
            window.currentIndex = i;
            updateSlide();
        });
        dotsContainer.appendChild(dot);
    }
    window.dots = document.querySelectorAll(".dot");
}

// Função para atualizar a posição do slide
function updateSlide() {
    if (!window.items.length || !window.slider) return;
    const width = window.items[0].offsetWidth;
    window.slider.scrollTo({ left: width * window.currentIndex, behavior: "smooth" });
    updateDots();
}

// Função para atualizar a cor dos pontinhos
function updateDots() {
    if (!window.slider || !window.dots.length) return;
    
    const scrollLeft = window.slider.scrollLeft;
    const itemWidth = window.slider.clientWidth;
    let itemsPerView = window.innerWidth >= 768 ? 2 : 1;
    let slideBaseWidth = itemsPerView === 2 ? itemWidth / 2 : itemWidth;

    window.currentIndex = Math.round(scrollLeft / slideBaseWidth);
    window.currentIndex = Math.min(window.currentIndex, window.items.length - itemsPerView);

    window.dots.forEach(dot => dot.classList.remove("active"));
    if (window.dots[window.currentIndex]) {
        window.dots[window.currentIndex].classList.add("active");
    }
    if (itemsPerView > 1 && window.dots[window.currentIndex + 1]) {
        window.dots[window.currentIndex + 1].classList.add("active");
    }
}

// Inicializa os seletores e eventos (Pode ser chamada várias vezes)
function initSlider() {
    window.slider = document.querySelector(".slider-container");
    window.items = document.querySelectorAll(".slider-item");
    
    renderDots();
    
    if (window.slider) {
        window.slider.addEventListener("scroll", updateDots);
    }
}

// Eventos Globais de Resize e Botões
window.addEventListener("resize", updateDots);

document.querySelector(".btn-next")?.addEventListener("click", () => {
    if (window.currentIndex < window.items.length - 1) {
        window.currentIndex++;
        updateSlide();
    }
});

document.querySelector(".btn-prev")?.addEventListener("click", () => {
    if (window.currentIndex > 0) {
        window.currentIndex--;
        updateSlide();
    }
});