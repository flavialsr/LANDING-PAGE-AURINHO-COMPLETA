// MENU
const toggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// ANIMAÇÃO AO ROLAR A TELA
const items = document.querySelectorAll('.container > div');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

items.forEach(item => observer.observe(item));