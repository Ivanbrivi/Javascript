var isTextVisible = false;

function toggleText() {
  var additionalText = document.querySelector('.additional');
  var toggleLink = document.getElementById('toggleLink');

  if (isTextVisible) {
    additionalText.classList.remove('visible');
    additionalText.classList.add('hidden');
    toggleLink.textContent = 'Seguir leyendo';
  } else {
    additionalText.classList.remove('hidden');
    additionalText.classList.add('visible');
    toggleLink.textContent = 'Ocultar exceso de texto';
  }

  isTextVisible = !isTextVisible;
}