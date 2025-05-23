//  - icone do menu hamburguer
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navbar = document.querySelector(".navbar");

  menuToggle.addEventListener("click", function () {
    navbar.classList.toggle("ativo");
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

  // CARROSSEL AUTOMÁTICO
  const container = document.querySelector(".carrosel");
  let scrollAmount = 0;

  setInterval(() => {
    if (container) {
      scrollAmount += 300;
      if (scrollAmount >= container.scrollWidth) {
        scrollAmount = 0;
      }
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth"
      });
    }
  }, 3000);
});
