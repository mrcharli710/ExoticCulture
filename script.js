
function enterSite() {
  document.getElementById('age-gate').style.display = 'none';
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('navLogo').classList.remove('hidden');

  const centerLogo = document.getElementById('centerLogo');
  const centerLogoContainer = document.getElementById('centerLogoContainer');

  centerLogo.classList.remove('big');
  centerLogo.classList.add('small');

  setTimeout(() => {
    centerLogoContainer.style.display = 'none';
  }, 500);
}
