
import { dataService } from "../../../services/dataService.js";

function normalize(text = "") {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

/* ================= CARREGA TODOS OS PRODUTOS ================= */

async function getAllProducts() {
  const sources = [
    dataService.getVestidos?.(),
    dataService.getCalcas?.(),
    dataService.getBlusas?.(),
    dataService.getSaias?.(),
    dataService.getCasacos?.(),
    dataService.getCamisas?.(),
    dataService.getMacacos?.(),
    dataService.getCroppeds?.(),
    dataService.getBodys?.(),
    dataService.getBlazers?.(),
    dataService.getShorts?.(),
    dataService.getAcessorios(),
    dataService.getConjuntos?.()
  ];

  const resolved = await Promise.all(sources.filter(Boolean));
  return resolved.flat();
}

/* ================= BUSCA ================= */

async function searchProducts(term) {
  if (!term || term.length < 2) return [];

  const products = await getAllProducts();
  const q = normalize(term);

  return products.filter(p =>
    normalize(p.nome).includes(q) ||
    normalize(p.descricao).includes(q)
  );
}

/* ================= RENDER ================= */

function renderProducts(products) {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  if (!products.length) {
    grid.innerHTML = "";
    return;
  }

  grid.innerHTML = products.map(p => `

       <a href="paginadeproduto.html?id=${p.id}" class="card-link">
        <div class="card">
          <div class="card-img">
            <img src="${p.imagem}" alt="${p.nome}">
          </div>

          <div class="card-body">
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>

            <div class="card-footer">
              <span class="preco">R$ ${p.preco.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
        </div>
      </a>  
    
  `).join("");
}

/* ================= CONTROLE ================= */

async function handleSearch(input) {
  const term = input.value.trim();

  if (term.length < 2) {
    renderProducts([]);
    return;
  }

  const results = await searchProducts(term);
  renderProducts(results);
}

let timeout;

function debounceSearch(input) {
  clearTimeout(timeout);
  timeout = setTimeout(() => handleSearch(input), 300);
}

/* ================= DESKTOP ================= */

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => debounceSearch(searchInput));

}

/* ================= MOBILE ================= */

const searchInputMobile = document.getElementById("searchInputMobile");

if (searchInputMobile) {
  searchInputMobile.addEventListener("input", () => debounceSearch(searchInputMobile));
}



  // Seleciona todos os inputs de busca pelas classes
  const camposBusca = document.querySelectorAll(".search-input-mobile, .search-input");

  // Função que esconde/mostra os elementos
  function atualizarVisibilidade(valor) {
    const elementos = document.querySelectorAll(".somenabusca");
    if (valor.trim().length > 0) {
      elementos.forEach(el => el.style.display = "none");
    } else {
      elementos.forEach(el => el.style.display = "");
    }
  }

  // Adiciona evento para cada campo de busca
  camposBusca.forEach(campo => {
    campo.addEventListener("input", function () {
      atualizarVisibilidade(campo.value);
    });
  });



  /* ================= FECHAR BUSCA AO PRESSIONAR ENTER ================= */

function configurarEnter(input, boxId) {
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      handleSearch(input);
      input.blur();
      const box = document.getElementById(boxId);
      if (box) {
        box.classList.remove("active");
      }
    }
  });
}

if (searchInput) configurarEnter(searchInput, "searchBox");
if (searchInputMobile) configurarEnter(searchInputMobile, "searchBoxMobile");