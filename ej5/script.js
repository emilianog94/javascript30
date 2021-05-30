const provincias = document.querySelectorAll('.provincia');

provincias.forEach(provincia => provincia.addEventListener('click',toggleActive));

function toggleActive(){
    provincias.forEach(provincia => provincia != this && provincia.classList.remove('active'));
    this.classList.toggle('active');
}