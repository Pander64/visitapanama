let modal5 = document.getElementById('miModal5');
let flex5 = document.getElementById('flex5');
let abrir5 = document.getElementById('abrir5');
let cerrar5 = document.getElementById('close5');

abrir5.addEventListener('click', function () {
    modal5.style.display = 'block';
});

cerrar5.addEventListener('click', function () {
    modal5.style.display = 'none';
});

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == flex5) {
        modal5.style.display = 'none';
    }
});

