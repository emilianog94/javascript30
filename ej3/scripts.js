// Obtengo todos los inputs del documento y les agrego un listener
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('change',updateValue);
    input.addEventListener('mousemove',updateValue);
})


// Obtengo todas las reglas CSS del documento.
const styles = document.documentElement.style;

// Actualizo el valor
function updateValue(){

    // Verifico si necesito algún sufijo para el valor CSS
    let sufijo = this.dataset.sufijo || "";

    // Como el input name es idéntico al nombre de la variable --, modifico la variable y le agrego como valor el value y el sufijo.
    styles.setProperty(`--${this.name}`, `${this.value}${sufijo}` );
}
