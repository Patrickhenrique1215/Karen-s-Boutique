
document.addEventListener('DOMContentLoaded', function() {
  
  const carrinhoPanel = document.getElementById('carrinho-panel');
  const closeBtn = document.getElementById('close-carrinho');
  const finalizarBtn = document.getElementById('botaofinalizar');
  
  const abrirCarrinhoMobile = document.getElementById('carrinho-mobile');
  const abrirCarrinhoDesktop = document.getElementById('carrinho-desktop');

  function abrirCarrinho() {
    carrinhoPanel.classList.add('active');
    document.body.classList.add('carrinho-aberto');
  }
  
  function fecharCarrinho() {
    carrinhoPanel.classList.remove('active');
    document.body.classList.remove('carrinho-aberto');
  }
  
  if (abrirCarrinhoMobile) {
    abrirCarrinhoMobile.addEventListener('click', abrirCarrinho);
  }
   
  if (abrirCarrinhoDesktop) {
    abrirCarrinhoDesktop.addEventListener('click', abrirCarrinho);
  }
  
  closeBtn.addEventListener('click', fecharCarrinho);
  
  carrinhoPanel.addEventListener('click', function(e) {
    if (e.target === carrinhoPanel) {
      fecharCarrinho();
    }
  });
  
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && carrinhoPanel.classList.contains('active')) {
      fecharCarrinho();
    }
  });
  
  
});

