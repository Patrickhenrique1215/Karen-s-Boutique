// ================= SEARCH DESKTOP =================
const searchToggle = document.getElementById("searchToggle");
const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");

if (searchToggle && searchBox && searchInput) {
  searchToggle.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation(); // 👈 evita fechar na hora

    const isActive = searchBox.classList.toggle("active");

    if (isActive) {
      // pequeno delay pra garantir que já está visível
      setTimeout(() => {
        searchInput.focus();
      }, 50);
    }
  });

  searchBox.addEventListener("click", (e) => {
    e.stopPropagation(); // permite clicar dentro sem fechar
  });

  document.addEventListener("click", () => {
    searchBox.classList.remove("active");
  });
}


// ================= SEARCH MOBILE =================
const searchToggleMobile = document.getElementById("searchToggleMobile");
const searchBoxMobile = document.getElementById("searchBoxMobile");
const searchInputMobile = document.getElementById("searchInputMobile");

if (searchToggleMobile && searchBoxMobile && searchInputMobile) {
  searchToggleMobile.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();

    const isActive = searchBoxMobile.classList.toggle("active");

    if (isActive) {
      setTimeout(() => {
        searchInputMobile.focus();
      }, 50);
    }
  });

  searchBoxMobile.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  document.addEventListener("click", () => {
    searchBoxMobile.classList.remove("active");
  });
}
