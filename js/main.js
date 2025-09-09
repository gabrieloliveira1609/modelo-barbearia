document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('.menu a');
  const secoes = document.querySelectorAll('.content section');

  
  function esconderSecoes() {
    secoes.forEach(sec => sec.classList.remove('ativo'));
  }

  
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const alvo = this.getAttribute('href').substring(1);

      esconderSecoes();
      const secaoAtiva = document.getElementById(alvo);
      if (secaoAtiva) secaoAtiva.classList.add('ativo');
    });
  });

  
  const principal = document.getElementById('quemsomos');
  if (principal) principal.classList.add('ativo');
});