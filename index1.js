window.addEventListener('load', () => {
  const loaderWrapper = document.getElementById('loader-wrapper');

  // Add the 'loaded' class to start the slow fade animation
  loaderWrapper.classList.add('loaded');

  // Slowly reduce opacity before hiding completely
  loaderWrapper.style.transition = 'opacity 2.5s ease';
  loaderWrapper.style.opacity = '0';

  // Hide loader after the fade animation finishes (6 seconds total)
  setTimeout(() => {
    loaderWrapper.style.display = 'none';
  }, 1500);
});

function showPopup() {
    document.getElementById('popup').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }