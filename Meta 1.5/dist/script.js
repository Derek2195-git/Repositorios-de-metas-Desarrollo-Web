const btn = document.getElementById("btnCat");
const resultado = document.getElementById("resultado");
const catImg = document.getElementById("catImg");
const catFact = document.getElementById("catFact");

btn.addEventListener("click", async () => {
  try {
    // La imagen de gato se obtiene de la api publica "The Cat API"
    const resGato = await fetch("https://api.thecatapi.com/v1/images/search");
    const imagenGato = await resGato.json();

    // Por otro lado, el dato curioso se obtiene de la api publica Cat Fact
    const resDato = await fetch("https://catfact.ninja/fact");
    const datosDeGatos = await resDato.json();

    // Ahora con la información, mostramos la imagen y los datos en nuestra Card o estilo que queramos usar
    catImg.src = imagenGato[0].url;
    catFact.textContent = datosDeGatos.fact;
    resultado.style.display = "block";

  } catch (error) {
    catFact.textContent = "No se pudo obtener info de gatos :(";
    resultado.style.display = "block";
  }
});