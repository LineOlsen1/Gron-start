const mobileMenu = document.querySelector('.mobile-menu');

// Luk menuen, når fokus flyttes til et element uden for den.
mobileMenu.addEventListener('focusout', (event) => {
  if (!mobileMenu.contains(event.relatedTarget)) {
    mobileMenu.open = false;
  }
});
