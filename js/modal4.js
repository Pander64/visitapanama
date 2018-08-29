let modal4 = document.getElementById('miModal4');
let flex4 = document.getElementById('flex4');
let abrir4 = document.getElementById('abrir4');
let cerrar4 = document.getElementById('close4');

abrir4.addEventListener('click', function () {
    modal4.style.display = 'block';
});

cerrar4.addEventListener('click', function () {
    modal4.style.display = 'none';
});

window.addEventListener('click', function (e) {
    console.log(e.target);
    if (e.target == flex4) {
        modal4.style.display = 'none';
    }
});
