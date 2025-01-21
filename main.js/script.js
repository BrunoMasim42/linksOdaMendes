const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalDesc = document.getElementById('modal-desc');
const closeBtn = document.querySelector('.close');

// Exibir modal ao clicar em uma imagem
galleryItems.forEach((item) => {
  item.addEventListener('click', () => {
    modal.style.display = 'block';
    modalImg.src = item.querySelector('img').src;
    modalDesc.textContent = item.getAttribute('data-desc');
  });
});

// Fechar modal ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Fechar modal ao clicar fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target !== modalImg) {
    modal.style.display = 'none';
  }
});