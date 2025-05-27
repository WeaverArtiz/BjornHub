function toggleTheme() {
  const themeLink = document.getElementById('themeStylesheet');
  const currentTheme = themeLink.getAttribute('href');

  if (currentTheme === 'styles/light.css') {
    themeLink.setAttribute('href', 'styles/style.css');
  } 
  else{
    themeLink.setAttribute('href', 'styles/light.css');
  }
}
