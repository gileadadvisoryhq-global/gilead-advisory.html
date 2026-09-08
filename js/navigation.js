// Mobile Navigation Drawer Toggle System
document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'mobile-menu-toggle';
  toggleBtn.innerHTML = '&#9776;';
  toggleBtn.setAttribute('aria-label', 'Toggle Navigation');

  const navContainer = document.querySelector('.header-nav .container');
  if (navContainer) {
    navContainer.appendChild(toggleBtn);
  }

  toggleBtn.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      navMenu.classList.toggle('mobile-active');
    }
  });
});