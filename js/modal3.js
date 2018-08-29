let modal3 = document.getElementById('miModal3');
let flex3 = document.getElementById('flex3');
let abrir3 = document.getElementById('abrir3');
let cerrar3 = document.getElementById('close3');

abrir3.addEventListener('click', function () {
    modal3.style.display = 'block';
});

cerrar3.addEventListener('click', function () {
    modal3.style.display = 'none';
});

window.addEventListener('click', function (e) {
    console.log(e.target3);
    if (e.target == flex3) {
        modal3.style.display = 'none';
    }
});
