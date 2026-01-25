// paginadeproduto.js
import { dataService } from '../services/dataService.js'; 

async function carregarPaginaProduto() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const idUrl = parseInt(urlParams.get('id'));

        if (!idUrl) {
            console.error("ID do produto não encontrado na URL.");
            return;
        }

       const produto = await dataService.getProdutoById(idUrl);

        if (!produto) {
            console.error("Produto não encontrado no banco de dados.");
            return;
        }

        // 1. PREENCHIMENTO DE TEXTOS
        document.querySelector(".infoprodut .nome").innerText = produto.nome;
        document.querySelector(".infoprodut .primeiropreco").innerText = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
        
        const valorParcela = (produto.preco / 5).toFixed(2).replace('.', ',');
        document.querySelector(".infoprodut .segundopreco").innerText = `ou 5x de R$ ${valorParcela} sem juros`;

        // 2. SLIDER DE IMAGENS (Geração Dinâmica)
        const wrapper = document.querySelector(".slider-wrapper");
        wrapper.innerHTML = ""; 

        const imagens = Object.keys(produto)
            .filter(key => key.startsWith("imagem") && produto[key])
            .map(key => produto[key]);

        imagens.forEach(src => {
            const slideItem = document.createElement("div");
            slideItem.classList.add("slider-item");
            slideItem.innerHTML = `<img src="${src}" alt="${produto.nome}">`;
            wrapper.appendChild(slideItem);
        });

        // 3. CORES
        const corContainer = document.querySelector(".cor");
        const tituloCor = corContainer.querySelector("h5");
        corContainer.innerHTML = "";
        corContainer.appendChild(tituloCor);

        const cores = Object.keys(produto)
            .filter(key => key.startsWith("cor") && produto[key])
            .map(key => produto[key]);

        cores.forEach((nomeCor, index) => {
            const idInput = `cor-${index}`;
            const inputHtml = `
                <input type="radio" id="${idInput}" name="cor" value="${nomeCor}" ${index === 0 ? 'checked' : ''}>
                <label for="${idInput}" class="cor-button">${nomeCor}</label>
            `;
            corContainer.insertAdjacentHTML('beforeend', inputHtml);
        });

        // 4. DESCRIÇÃO
        const descContainer = document.querySelector(".conteudo-descricao"); 
        if (descContainer) {
            descContainer.innerHTML = produto.descricaolonga;
        }

        // 5. ATIVAÇÃO DO SLIDER
        // Agora que as imagens existem, inicializamos o slider e os pontinhos
        if (typeof initSlider === "function") {
            initSlider();
            window.currentIndex = 0;
            updateSlide(); // Posiciona no início
        }

    } catch (error) {
        console.error("Erro ao carregar o produto:", error);
    }
}

document.addEventListener("DOMContentLoaded", carregarPaginaProduto);