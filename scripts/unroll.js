document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.unrollBox');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', () => {
    links.classList.toggle('show');
  });
});

