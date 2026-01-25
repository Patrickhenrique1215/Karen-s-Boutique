
import { dataService } from "../services/dataService.js";


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

async function carregarNovidadesNovidades() {
    const container = document.getElementById("novidades-novidades-container");
    const produtos = await dataService.getNovidadesNovidades();

    container.innerHTML = produtos.map(criarCard).join("");
}

carregarNovidadesNovidades();
