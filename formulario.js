// MENU 
const toggle = document.getElementById('menu-toggle');
const navbar = document.querySelector('.navbar');

toggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// VALIDA FORMULÁRIO
const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede envio automático

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const telefone = document.getElementById("telefone").value.trim();

  if (!nome || !email || !telefone) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  if (!validateEmail(email)) {
    alert("Por favor, insira um email válido.");
    return;
  }

  alert("Mensagem enviada com sucesso! Entraremos em contato.");
  form.reset();
});

function validateEmail(email) {
  // Verificação simples de e-mail
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
