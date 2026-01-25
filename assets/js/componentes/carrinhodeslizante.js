// CARRINHO DE COMPRAS DESLIZANTE - CONTROLE COMPLETO (DUAS VERSÕES)
document.addEventListener('DOMContentLoaded', function() {
  
  // Elementos do carrinho
  const carrinhoPanel = document.getElementById('carrinho-panel');
  const closeBtn = document.getElementById('close-carrinho');
  const finalizarBtn = document.getElementById('botaofinalizar');
  
  // Botões para abrir carrinho (AMBOS)
  const abrirCarrinhoMobile = document.getElementById('carrinho-mobile');
  const abrirCarrinhoDesktop = document.getElementById('carrinho-desktop');
  
  // Função para abrir carrinho
  function abrirCarrinho() {
    carrinhoPanel.classList.add('active');
    document.body.classList.add('carrinho-aberto');
  }
  
  // Função para fechar carrinho
  function fecharCarrinho() {
    carrinhoPanel.classList.remove('active');
    document.body.classList.remove('carrinho-aberto');
  }
  
  // ABRIR CARRINHO - MOBILE
  if (abrirCarrinhoMobile) {
    abrirCarrinhoMobile.addEventListener('click', abrirCarrinho);
  }
  
  // ABRIR CARRINHO - DESKTOP  
  if (abrirCarrinhoDesktop) {
    abrirCarrinhoDesktop.addEventListener('click', abrirCarrinho);
  }
  
  // FECHAR CARRINHO - BOTÃO X
  closeBtn.addEventListener('click', fecharCarrinho);
  
  // FECHAR CARRINHO - CLIQUE FORA
  carrinhoPanel.addEventListener('click', function(e) {
    if (e.target === carrinhoPanel) {
      fecharCarrinho();
    }
  });
  
  // FECHAR CARRINHO - TECLA ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && carrinhoPanel.classList.contains('active')) {
      fecharCarrinho();
    }
  });
  
  
  // ADICIONAR PRODUTO AO CARRINHO (exemplo)
  window.adicionarAoCarrinho = function(produto) {
    const produtosAdd = document.querySelector('.produtosadd');
    const novoProduto = document.createElement('div');
    novoProduto.innerHTML = `
      <div style="padding: 15px 0; border-bottom: 1px solid #eee;">
        <strong>${produto.nome}</strong> - R$ ${produto.preco}
        <button onclick="removerDoCarrinho(this)" style="float: right; background: #ff4444; color: white; border: none; padding: 5px 10px; border-radius: 4px;">Remover</button>
      </div>
    `;
    produtosAdd.appendChild(novoProduto);
    atualizarTotal();
  };
  
  // REMOVER PRODUTO
  window.removerDoCarrinho = function(btn) {
    btn.parentElement.remove();
    atualizarTotal();
  };
  
  // ATUALIZAR TOTAL
  function atualizarTotal() {
    const produtos = document.querySelectorAll('.produtosadd > div');
    let total = produtos.length * 99.90;
    const totalEl = document.querySelector('.footercar div:first-child');
    if (totalEl) {
      totalEl.innerHTML = `<strong>Subtotal: R$ ${total.toFixed(2)}</strong><br>Total: R$ ${total.toFixed(2)}`;
    }
  }
  
  console.log('✅ Carrinho configurado para mobile + desktop!');
});



/*   CODIGO PARA ADICIONAR AO CARRINHO DE QUALQUER BOTAO

adicionarAoCarrinho({
  nome: 'Produto X',
  preco: 99.90
});

*/