
document.querySelector('.dropbtn').addEventListener('click', function(e) {
  e.preventDefault();
  this.parentElement.classList.toggle('active');
});
