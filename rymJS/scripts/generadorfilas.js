function crearFila(imagen, nombre, especie, genero) {

    let divPersonaje = document.createElement("div");
    divPersonaje.classList.add("personaje");
    document.querySelector("#personajes").appendChild(divPersonaje);

    let divImagen = document.createElement("div");
    divImagen.classList.add("imagen");
    divPersonaje.appendChild(divImagen);

    let imgPersonaje = document.createElement("img");
    imgPersonaje.src = imagen;
    divImagen.appendChild(imgPersonaje);

    let divDetalle = document.createElement("div");
    divDetalle.classList.add("detalle");
    divPersonaje.appendChild(divDetalle);

    let divNombre = document.createElement("div");
    divNombre.classList.add("nombre");
    divNombre.appendChild(document.createTextNode(nombre));
    divDetalle.appendChild(divNombre);

    let divEspecie = document.createElement("div");
    divEspecie.classList.add("especie");
    divEspecie.appendChild(document.createTextNode(especie));
    divDetalle.appendChild(divEspecie);

    let divGenero = document.createElement("div");
    divGenero.classList.add("genero");
    divGenero.appendChild(document.createTextNode(genero));
    divDetalle.appendChild(divGenero);

    document.querySelector("#personajes").appendChild(document.createElement("hr"));

}