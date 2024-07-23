
const SERVER_URL = 'https://rickandmortyapi.com/api/character'

let arrayPersonajes;


doGetHTTPRequest(
    SERVER_URL, procesarPersonajes, procesarError);


function procesarPersonajes(datosPersonajes) {
    //console.log(datosPersonajes);
    
    const objPersonajes = JSON.parse(datosPersonajes); // convierte el fichero leído en un objeto JSON
    arrayPersonajes = objPersonajes.results; // restaurantes es el nombre del objeto del JSON
    generarFilas(arrayPersonajes);
}
function procesarError(err) {
    console.error(err);
}

function generarFilas(arrayFilas){
    arrayFilas.forEach(personaje => {
        crearFila(personaje.image,
            personaje.name,
            personaje.species,
            personaje.gender);
    });
}


document.querySelector("#iFiltro").addEventListener("keyup", () => {
    console.log("fitrado");

    let cadenaBusqueda = document.querySelector("#iFiltro").value;
    let busquedaFiltrada = arrayPersonajes.filter((personaje) => {
        return personaje.name.includes(cadenaBusqueda);
    });
    document.querySelector("#personajes").innerHTML = "";
    generarFilas(busquedaFiltrada);

})