const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

document.querySelectorAll('[data-answer]').forEach((button) => {
  button.addEventListener('click', () => {
    const result = document.querySelector('.poll-result');
    if (!result) return;
    result.innerHTML = '<strong>Mito.</strong> A responsabilidade depende das circunstâncias do acidente e das provas disponíveis. A posição dos veículos, por si só, não resolve todos os casos.';
  });
});

document.getElementById('ano').textContent = new Date().getFullYear();
