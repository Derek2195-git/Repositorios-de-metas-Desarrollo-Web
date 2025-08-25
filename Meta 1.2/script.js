const titulo = document.getElementById("titulo");
titulo.textContent = "Manipulacion del DOM!";

const parrafoAzul = document.querySelectorAll(".parrafo");
parrafoAzul.forEach(p =>{
	p.style.color = "blue";
});

const primerPuntoLista = document.querySelector("#lista li");
primerPuntoLista.textContent = "Elemento modificado";

const nuevoElemento = document.createElement("li");
nuevoElemento.textContent = "Elemento 3";

const lista2 = document.getElementById("lista");
lista2.appendChild(nuevoElemento);

const nuevoParrafo = document.createElement("p");
nuevoParrafo.textContent = "Este es un parrafo nuevo";

const parrafo2 = document.querySelectorAll(".parrafo")[1];
parrafo2.appendChild(nuevoParrafo);

const segundoElementoLista = document.querySelectorAll("li")[1];
lista2.removeChild(segundoElementoLista);

const boton = document.getElementById("boton");

boton.addEventListener("click", () =>{
        document.body.style.backgroundColor = getRandomColor();
    });


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const tamañoTitulo = document.querySelector("h1");
tamañoTitulo.style.fontSize = "48px";

const primerParrafo = document.querySelector(".parrafo");
primerParrafo.style.border = "2px solid red";

const lista3 = document.querySelector("ul");
lista3.style.listStyle = "none";
lista3.style.padding = "0px";
lista3.style.display = "flex";
lista3.style.gap = "15px";