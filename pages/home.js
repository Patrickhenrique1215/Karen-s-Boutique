
import { dataService } from "../services/dataService.js";


// BANNERS
import { createCarousel } from "../assets/js/pages/carrossel.js";

const track = document.getElementById("carousel-track");
const dots = document.getElementById("carousel-dots");

async function initBanners() {
  const banners = await dataService.getBanners();

  createCarousel({
    track,
    dots,
    items: banners
  });
}

initBanners();


// CARD DE PRODUTO
function criarCard(produto) {
  
  return `
    <a href="paginadeproduto.html?id=${produto.id}" class="card-link">
        <div class="card">
          <div class="card-img">
            <img src="${produto.imagem}" alt="${produto.nome}">
          </div>

          <div class="card-body">
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>

            <div class="card-footer">
              <span class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</span>
            </div>
          </div>
        </div>
    </a>
  `;
}

// NOVIDADES
async function carregarNovidades() {
  const container = document.getElementById("novidades-container");
  const produtos = await dataService.getNovidades();

  container.innerHTML = produtos.map(criarCard).join("");
}

carregarNovidades();

// LOOKS DA SEMANA
async function carregarLooksSemana() {
  const container = document.getElementById("looks-container");
  const produtos = await dataService.getLooksSemana();

  container.innerHTML = produtos.map(criarCard).join("");
}

carregarLooksSemana();

// QUEM USOU, AMOU

function criarfotosinsta(insta) {
  return `
    <img src="${insta.imagem}" alt="${insta.alt}">
  `;
}

async function carregarQuemUsou() {
  const containerinsta = document.getElementById("quemusou-container");
  const fotos = await dataService.getQuemUsou();

  containerinsta.innerHTML = fotos.map(criarfotosinsta).join("");
}

carregarQuemUsou();