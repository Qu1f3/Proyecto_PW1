document.querySelector('form').addEventListener('submit', function(event) {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (!nombre || !correo || !telefono || !mensaje) {
        alert("Por favor, completa todos los campos.");
        event.preventDefault();
    }
});