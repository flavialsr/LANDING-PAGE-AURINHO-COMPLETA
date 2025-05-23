
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("ativo");
  });
});

//  TOPO
  const topoBtn = document.getElementById("topo-btn");

  window.addEventListener("scroll", function () {
    if (document.documentElement.scrollTop > 200) {
      topoBtn.style.display = "block";
    } else {
      topoBtn.style.display = "none";
    }
  });
    // Adiciona algo de clique para rolar para o topo
  topoBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
// Adiciona animaçao de clique ao link "Fale Conosco"
 const faleConoscoLink = document.querySelector(".fale-conosco-link");

  if (faleConoscoLink) {
    faleConoscoLink.addEventListener("click", function (e) {
      e.preventDefault(); // Impede redirecionamento
      document.querySelector("footer").scrollIntoView({ behavior: "smooth" });
    });
  }