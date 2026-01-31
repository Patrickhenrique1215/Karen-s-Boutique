
const botaoAbrir = document.getElementById('abrirmenu');
const botaoFechar = document.getElementById('fecharmenu');
const menu = document.getElementById('meumenu');

// Ao clicar no link de abrir
botaoAbrir.addEventListener('click', (event) => {
    event.preventDefault(); // Impede o link de recarregar a página
    menu.classList.add('ativo');
});

// Ao clicar no botão de fechar
botaoFechar.addEventListener('click', () => {
    menu.classList.remove('ativo');
});


// Quando abrir o menu
botaoAbrir.addEventListener('click', () => {
    menu.classList.add('ativo');
    document.body.classList.add('no-scroll'); 
});

// Quando fechar o menu
botaoFechar.addEventListener('click', () => {
    menu.classList.remove('ativo');
    document.body.classList.remove('no-scroll'); 
});
