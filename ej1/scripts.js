/*  Lógica Seguida:

1) Selecciono todos los elementos que poseen sonidos 
2) Creo una función que le da play a un sonido específico y cambia el estilo de su botón
3) Creo un listener para escuchar el teclado. 
4) Si la tecla que toqué existe en el listado de teclas del array, entonces correr ese sonido. 

Nota: puedo conocer que número representa cada key del teclado en https://keycode.info/
*/


// Selecciono todos los sonidos
const sounds = document.querySelectorAll('.sound');

// Expreso una función que le da play a un sonido y le da estilos.
const playSound = function(selectedSound){
    const soundFile = selectedSound.querySelector('audio');
    soundFile.play();
    selectedSound.classList.add('active');

    setTimeout(function(){
        selectedSound.classList.remove('active');
    },250);
}

// Expreso una función que evalúa todos los sonidos para ver si su key coincide con la key presionada.
const checkKey = function(e){
    sounds.forEach(sound => {
        sound.dataset.key == e.keyCode && playSound(sound);
    });
}

// Corro el listener
document.addEventListener('keyup',checkKey);



