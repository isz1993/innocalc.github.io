var myElem = document.getElementById("ElemID");
var bpdf = document.getElementById("generatepdf");

const vmer = document.querySelector('#mercado');
const vcap = document.querySelector('#capacidad');
const vinv = document.querySelector('#inversion');
const vini = document.getElementById('ini');
const vtip = document.getElementById('tipo');
const vrie = document.getElementById('riesgo');
const vinc = document.getElementById('incertidumbre');
const vnom = document.getElementById('nom');




myElem.onclick = function () {

  if (vmer.selectedIndex == 0 || vcap.selectedIndex == 0) {

  } else if (vmer.selectedIndex <= 2 && vcap.selectedIndex <= 2 && vinv.selectedIndex == 3) {
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vtip.innerHTML = "<b>Innovación Tranformacional</b>";
    vrie.innerHTML = "<b>Riesgo alto.</b> El desarrollo e implementación de esta iniciativa puede tener impactos importantes  en la organización: inverisón alta, tiempos de desarrollo largos, iteraciones continuas, equipos altamente enfocados.";
    vinc.innerHTML = "<b>Incertidumbre Alta.</b> La información con la que se cuenta es muy limitada, la organización no cuenta con experiencia, es importante dimensionar el mercado, el tipo de usuario y el tipo de capacidad /tecnologías necesarias para el desarrollo y ejecución de la iniciativa.";
  } else if (vmer.selectedIndex == 1 && vcap.selectedIndex == 1) {
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vtip.innerHTML = "<b>Innovación Incremental</b>";
    vrie.innerHTML = "<b>Riesgo Bajo.</b> El impacto de esta iniciativa es muy limitado y la organización puede controlar los impactos negativos. No se compromete el recurso humano y financiero.";
    vinc.innerHTML = "<b>Incertidumbre Baja.</b> Se cuenta con la información de mercado, capacidades de comerciales, entendimiento del usuario y tecnología para su desarrollo.";
  } else if (vmer.selectedIndex <= 2 && vcap.selectedIndex != 3) {
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vtip.innerHTML = "<b>Innovación Adyacente</b>";
    vrie.innerHTML = "<b>Riesgo medio. </b> Esta iniciativa impacta altamente en un canal y categoría de la organización, el enfoque comercial y usuario son primordiales para asegurar el éxito de la iniciativa.";
    vinc.innerHTML = "<b>Incertidumbre Moderada. </b>  Se cuenta con gran parte de las capacidades necesarias para el desarrollo de la iniciativa. Existe información limitada de mercado y usuario.";
  } else {
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vtip.innerHTML = "<b>Innovación Tranformacional</b>";
    vrie.innerHTML = "<b>Riesgo alto.</b> El desarrollo e implementación de esta iniciativa puede tener impactos importantes  en la organización: inverisón alta, tiempos de desarrollo largos, iteraciones continuas, equipos altamente enfocados.";
    vinc.innerHTML = "<b>Incertidumbre Alta.</b> La información con la que se cuenta es muy limitada, la organización no cuenta con experiencia, es importante dimensionar el mercado, el tipo de usuario y el tipo de capacidad /tecnologías necesarias para el desarrollo y ejecución de la iniciativa.";
  }
}



bpdf.onclick = function () {
  const  $objetivo = document.querySelector("#staticBackdrop");
  html2canvas($objetivo) // Llamar a html2canvas y pasarle el elemento
  .then(canvas => {
    // Cuando se resuelva la promesa traerá el canvas
    // Crear un elemento <a>
    let enlace = document.createElement('a');
    enlace.download = "Captura -CalInn";
    // Convertir la imagen a Base64
    enlace.href = canvas.toDataURL();
    // Hacer click en él
    enlace.click();
  });


}




