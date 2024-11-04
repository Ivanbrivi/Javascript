document.querySelectorAll('div > a').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault();

        const content = this.previousElementSibling;
        
        if (content.style.display === 'none') {
            content.style.display = 'block';
            this.textContent = 'Ocultar contenidos';
        } else {
            content.style.display = 'none';
            this.textContent = 'Mostrar contenidos';
        }
    });
});