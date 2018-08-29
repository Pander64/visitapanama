let modal6 = document.getElementById('miModal6');
let flex6 = document.getElementById('flex6');
let abrir6 = document.getElementById('abrir6');
let cerrar6 = document.getElementById('close6');

abrir6.addEventListener('click', function () {
    modal6.style.display = 'block';
});

cerrar6.addEventListener('click', function () {
    modal6.style.display = 'none';
});

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == flex6) {
        modal6.style.display = 'none';
    }
});
