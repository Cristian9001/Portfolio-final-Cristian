//Script para cambiar entre el modo oscuro y el modo claro haciendo click mediante una funcion
document.getElementById('boton-cambio').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('light-mode')) {
        this.textContent = 'Modo Oscuro';
    } else {
        this.textContent = 'Modo Claro';
    }
});

//Script para validar el nombre, el correo y el mensaje
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var mensaje = document.getElementById('mensaje').value;
    var mensajeError = document.getElementById('mensajeError');
    
    //Esto es para validar que el cuadrado del nombre esta lleno o no
    if (nombre === '') {
        mensajeError.textContent = "Por favor completa el campo Nombre";
        return;
    }

    //Esto es para validar que el cuadrado del correo esta lleno o no
    if (correo=== '') {
        mensajeError.textContent = "Por favor completa el campo Correo electrónico";
        return;
    }

    //Esto es para validar que el cuadrado del mensaje esta lleno o no
    if (mensaje=== '') {
        mensajeError.textContent = "Por favor completa el campo Mensaje";
        return;
    }

    //Esto es para validar si el correo es valido o no
    if (!isValidEmail(correo)) {
        mensajeError.textContent = "Correo electrónico inválido";
        return;
    }

    //Funcion para verificar el correo con sus partes
    function isValidEmail(email) {
        if (!email){
            return false;
        }
        var parts = email.split('@');
        
        if (parts.length !== 2) {
            return false;
        }
        
        if (parts[1].indexOf('.') === -1){
            return false;
        }
        return true;
    }
});

//Script para manejar el menú hamburguesa
menuHamburguesa.addEventListener('click', function() {
    menu.classList.toggle('active'); 
});

const links = menu.querySelectorAll('a');
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function() {
        menu.classList.remove('active');
    });
};

document.addEventListener('click', function(event) {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickInsideHamburguesa = menuHamburguesa.contains(event.target);
    if (!isClickInsideMenu && !isClickInsideHamburguesa) {
        menu.classList.remove('active');
    }
});