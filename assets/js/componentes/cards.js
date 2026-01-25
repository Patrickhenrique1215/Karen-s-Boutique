
import { dataService } from "../../../services/dataService.js";


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

async function carregarAcessorios() {
    const container = document.getElementById("acessorios-container");
    const produtos = await dataService.getAcessorios();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarAcessorios();



async function carregarBlazers() {
    const container = document.getElementById("blazers-container");
    const produtos = await dataService.getBlazers();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarBlazers();


async function carregarBlusas() {
    const container = document.getElementById("blusas-container");
    const produtos = await dataService.getBlusas();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarBlusas();


async function carregarBodys() {
    const container = document.getElementById("bodys-container");
    const produtos = await dataService.getBodys();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarBodys();



async function carregarCalcas() {
    const container = document.getElementById("calcas-container");
    const produtos = await dataService.getCalcas();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarCalcas();



async function carregarCamisas() {
    const container = document.getElementById("camisas-container");
    const produtos = await dataService.getCamisas();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarCamisas();



async function carregarCasacos() {
    const container = document.getElementById("casacos-container");
    const produtos = await dataService.getCasacos();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarCasacos();



async function carregarCroppeds() {
    const container = document.getElementById("croppeds-container");
    const produtos = await dataService.getCroppeds();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarCroppeds();



async function carregarMacacos() {
    const container = document.getElementById("macacos-container");
    const produtos = await dataService.getMacacos();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarMacacos();


async function carregarSaias() {
    const container = document.getElementById("saias-container");
    const produtos = await dataService.getSaias();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarSaias();


async function carregarShorts() {
    const container = document.getElementById("shorts-container");
    const produtos = await dataService.getShorts();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarShorts();



async function carregarVestidos() {
    const container = document.getElementById("vestidos-container");
    const produtos = await dataService.getVestidos();

    container.innerHTML = produtos.map(criarCard).join("");
} 

carregarVestidos();


async function carregarConjuntos() {
    const container = document.getElementById("conjuntos-container");
    const produtos = await dataService.getConjuntos();

    container.innerHTML = produtos.map(criarCard).join("");
} 

carregarConjuntos();