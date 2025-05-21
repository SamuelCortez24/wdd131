// Toggle nav menu (hamburger)
const menuButton = document.getElementById('menu');
const nav = document.getElementById('nav');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('show');
  menuButton.textContent = nav.classList.contains('show') ? '✖' : '☰';
});

// Footer dynamic content
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
