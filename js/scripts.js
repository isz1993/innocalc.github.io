var myElem = document.getElementById("ElemID");
var mybuton = document.getElementById("ElemIDen");
var bpdf = document.getElementById("generatepdf");

const vtipsl = document.querySelector('#tipsl');
const vimpl = document.querySelector('#impl');
const vprod = document.querySelector('#prod');
const vtrl = document.querySelector('#trl');

const vini = document.getElementById('ini');
const vtip = document.getElementById('tipo');
const vrie = document.getElementById('riesgo');
const vinc = document.getElementById('incertidumbre');
const vnom = document.getElementById('nom');
const vres = document.getElementById('resultados');
const vprodtext = document.getElementById('prodtext');


var bar1=document.getElementById("bar1");
var bar2=document.getElementById("bar2");



myElem.onclick = function () {

 /**Switches */
 var switch1 = document.getElementById("flex1").checked;
 var switch2 = document.getElementById("flex2").checked;
 var switch3 = document.getElementById("flex3").checked;
 var switch4 = document.getElementById("flex4").checked;
 var switch5 = document.getElementById("flex5").checked;
 var switch6 = document.getElementById("flex6").checked;

 var acumswitch = 0;
 let dicswitch = [switch1, switch2, switch3, switch4, switch5, switch6];
 

 for (let vald of dicswitch) {
   if (vald == true) {
     acumswitch += (100/6);
   }
 }

 
 
 bar1.style.width = Math.round (acumswitch)+"%";
 bar1.innerText = Math.round (acumswitch) +"%";
 
 var actrl=0;
 actrl=vtrl.value*100/9


 
 bar2.style.width = Math.round (actrl)+"%";
 bar2.innerText = Math.round (actrl) +"%";

 




  if (vtipsl.selectedIndex==1 && vimpl.selectedIndex==1 && vprod.selectedIndex==1){
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Extensión de Linea</b>";
    vrie.innerHTML = "<b>Riesgo medio. </b> Esta iniciativa impacta altamente en un canal y categoría de la organización, el enfoque comercial y usuario son primordiales para asegurar el éxito de la iniciativa.";
    vinc.innerHTML = "<b>Incertidumbre Moderada. </b>  Se cuenta con gran parte de las capacidades necesarias para el desarrollo de la iniciativa. Existe información limitada de mercado y usuario.";
   vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } 
  else if (vtipsl.selectedIndex==1 && vimpl.selectedIndex==1){
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Extensión de Linea</b>";
    vrie.innerHTML = "<b>Riesgo Bajo.</b> El impacto de esta iniciativa es muy limitado y la organización puede controlar los impactos negativos. No se compromete el recurso humano y financiero.";
    vinc.innerHTML = "<b>Incertidumbre Baja.</b> Se cuenta con la información de mercado, capacidades de comerciales, entendimiento del usuario y tecnología para su desarrollo.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } 
   
  if (vtipsl.selectedIndex==1 && vimpl.selectedIndex==2 && vprod.selectedIndex==2){
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Nuevo Producto/b>";
    vrie.innerHTML = "<b>Riesgo medio. </b> Esta iniciativa impacta altamente en un canal y categoría de la organización, el enfoque comercial y usuario son primordiales para asegurar el éxito de la iniciativa.";
    vinc.innerHTML = "<b>Incertidumbre Moderada. </b>  Se cuenta con gran parte de las capacidades necesarias para el desarrollo de la iniciativa. Existe información limitada de mercado y usuario.";
   vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } 
  else if (vtipsl.selectedIndex==1 && vimpl.selectedIndex==2){
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Nuevo Producto</b>";
    vrie.innerHTML = "<b>Riesgo alto.</b> El desarrollo e implementación de esta iniciativa puede tener impactos importantes  en la organización: inverisón alta, tiempos de desarrollo largos, iteraciones continuas, equipos altamente enfocados.";
    vinc.innerHTML = "<b>Incertidumbre Alta.</b> La información con la que se cuenta es muy limitada, la organización no cuenta con experiencia, es importante dimensionar el mercado, el tipo de usuario y el tipo de capacidad /tecnologías necesarias para el desarrollo y ejecución de la iniciativa.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } 

  else if (vtipsl.selectedIndex==2 && vimpl.selectedIndex==1 && vprod.selectedIndex==1){
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Nuevo sistema</b>";
    vrie.innerHTML = "<b>Riesgo alto.</b> El desarrollo e implementación de esta iniciativa puede tener impactos importantes  en la organización: inverisón alta, tiempos de desarrollo largos, iteraciones continuas, equipos altamente enfocados.";
    vinc.innerHTML = "<b>Incertidumbre Alta.</b> La información con la que se cuenta es muy limitada, la organización no cuenta con experiencia, es importante dimensionar el mercado, el tipo de usuario y el tipo de capacidad /tecnologías necesarias para el desarrollo y ejecución de la iniciativa.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } 

else if (vtipsl.selectedIndex==2 && vimpl.selectedIndex==1 ){
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Nuevo sistema</b>";
    vrie.innerHTML = "<b>Riesgo medio. </b> Esta iniciativa impacta altamente en un canal y categoría de la organización, el enfoque comercial y usuario son primordiales para asegurar el éxito de la iniciativa.";
    vinc.innerHTML = "<b>Incertidumbre Moderada. </b>  Se cuenta con gran parte de las capacidades necesarias para el desarrollo de la iniciativa. Existe información limitada de mercado y usuario.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } 

  else if (vtipsl.selectedIndex==2 && vimpl.selectedIndex==2 && vprod.selectedIndex==2){
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Nuevo sistema</b>";
    vrie.innerHTML = "<b>Riesgo medio. </b> Esta iniciativa impacta altamente en un canal y categoría de la organización, el enfoque comercial y usuario son primordiales para asegurar el éxito de la iniciativa.";
    vinc.innerHTML = "<b>Incertidumbre Moderada. </b>  Se cuenta con gran parte de las capacidades necesarias para el desarrollo de la iniciativa. Existe información limitada de mercado y usuario.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } 

else if (vtipsl.selectedIndex==2 && vimpl.selectedIndex==2){
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Nuevo sistema</b>";
    vrie.innerHTML = "<b>Riesgo alto.</b> El desarrollo e implementación de esta iniciativa puede tener impactos importantes  en la organización: inverisón alta, tiempos de desarrollo largos, iteraciones continuas, equipos altamente enfocados.";
    vinc.innerHTML = "<b>Incertidumbre Alta.</b> La información con la que se cuenta es muy limitada, la organización no cuenta con experiencia, es importante dimensionar el mercado, el tipo de usuario y el tipo de capacidad /tecnologías necesarias para el desarrollo y ejecución de la iniciativa.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } 


  else {
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Nuevos Mercados</b>";
    vrie.innerHTML = "<b>Riesgo alto.</b> El desarrollo e implementación de esta iniciativa puede tener impactos importantes  en la organización: inverisón alta, tiempos de desarrollo largos, iteraciones continuas, equipos altamente enfocados.";
    vinc.innerHTML = "<b>Incertidumbre Alta.</b> La información con la que se cuenta es muy limitada, la organización no cuenta con experiencia, es importante dimensionar el mercado, el tipo de usuario y el tipo de capacidad /tecnologías necesarias para el desarrollo y ejecución de la iniciativa.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;

  } 

/*
  if (vmer.selectedIndex == 0 || vcap.selectedIndex == 0) {

  } else if (vmer.selectedIndex <= 2 && vcap.selectedIndex <= 2 && vinv.selectedIndex == 3) {
    
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Innovación Tranformacional</b>";
    vrie.innerHTML = "<b>Riesgo alto.</b> El desarrollo e implementación de esta iniciativa puede tener impactos importantes  en la organización: inverisón alta, tiempos de desarrollo largos, iteraciones continuas, equipos altamente enfocados.";
    vinc.innerHTML = "<b>Incertidumbre Alta.</b> La información con la que se cuenta es muy limitada, la organización no cuenta con experiencia, es importante dimensionar el mercado, el tipo de usuario y el tipo de capacidad /tecnologías necesarias para el desarrollo y ejecución de la iniciativa.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  
  } else if (vmer.selectedIndex == 1 && vcap.selectedIndex == 1) {
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Innovación Incremental</b>";
    vrie.innerHTML = "<b>Riesgo Bajo.</b> El impacto de esta iniciativa es muy limitado y la organización puede controlar los impactos negativos. No se compromete el recurso humano y financiero.";
    vinc.innerHTML = "<b>Incertidumbre Baja.</b> Se cuenta con la información de mercado, capacidades de comerciales, entendimiento del usuario y tecnología para su desarrollo.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  } else if (vmer.selectedIndex <= 2 && vcap.selectedIndex != 3) {
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Innovación Adyacente</b>";
    vrie.innerHTML = "<b>Riesgo medio. </b> Esta iniciativa impacta altamente en un canal y categoría de la organización, el enfoque comercial y usuario son primordiales para asegurar el éxito de la iniciativa.";
    vinc.innerHTML = "<b>Incertidumbre Moderada. </b>  Se cuenta con gran parte de las capacidades necesarias para el desarrollo de la iniciativa. Existe información limitada de mercado y usuario.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;

  } else {
    vini.innerHTML = "<b>" + vnom.value + "</b>";
    vprodtext.innerHTML="<b>" + vprod.selectedOptions[0].text + "</b>";
    vtip.innerHTML = "<b>Innovación Tranformacional</b>";
    vrie.innerHTML = "<b>Riesgo alto.</b> El desarrollo e implementación de esta iniciativa puede tener impactos importantes  en la organización: inverisón alta, tiempos de desarrollo largos, iteraciones continuas, equipos altamente enfocados.";
    vinc.innerHTML = "<b>Incertidumbre Alta.</b> La información con la que se cuenta es muy limitada, la organización no cuenta con experiencia, es importante dimensionar el mercado, el tipo de usuario y el tipo de capacidad /tecnologías necesarias para el desarrollo y ejecución de la iniciativa.";
    vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
  }*/
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




