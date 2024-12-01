// Selecciona el botón del menú (tres rayas) y el menú
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

// Añade un evento para cambiar la visibilidad del menú cuando se haga clic
menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});