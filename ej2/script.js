const agujaSegundos = document.querySelector('.aguja.segundos');
const agujaMinutos = document.querySelector('.aguja.minutos');
const agujaHoras = document.querySelector('.aguja.horas');

function changeClock(){
    let currentDate = new Date();
    let dateSeconds = currentDate.getSeconds();
    let dateMinutes = currentDate.getMinutes();
    let dateHours = currentDate.getHours();

    // Debo traducir los segundos a grados
    let gradesSeconds = (dateSeconds / 60) * 360;
    agujaSegundos.style.transform = `rotate(${gradesSeconds}deg)`;

    let gradesMinutes = (dateMinutes / 60) * 360;
    agujaMinutos.style.transform = `rotate(${gradesMinutes}deg)`;

    let gradesHours = (dateHours / 12) * 360;
    agujaHoras.style.transform = `rotate(${gradesHours}deg)`;
}

changeClock();
setInterval(changeClock,1000);
