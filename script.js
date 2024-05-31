//Script para cambiar entre el modo oscuro y el modo claro haciendo click mediante una funcion
document.getElementById('boton-cambio').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        this.textContent = 'Modo Oscuro';
    } else {
        this.textContent = 'Modo Claro';
    }
});