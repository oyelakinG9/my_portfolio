const menuIcon = document.querySelector(".hamburger-menu");

const navBar = document.querySelector(".navbar");

const navList = document.querySelector('.nav-list');

navBar.addEventListener('click', () => {
  navBar.classList.toggle('change');
});
