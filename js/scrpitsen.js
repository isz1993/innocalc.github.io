var myElem = document.getElementById("ElemID");
var mybuton = document.getElementById("ElemIDen");
var bpdf = document.getElementById("generatepdf");

const vmer = document.querySelector('#mercado');
const vcap = document.querySelector('#capacidad');
const vinv = document.querySelector('#inversion');
const vimp = document.querySelector('#impacto');


const vini = document.getElementById('ini');
const vtip = document.getElementById('tipo');
const vrie = document.getElementById('riesgo');
const vinc = document.getElementById('incertidumbre');
const vnom = document.getElementById('nom');
const vres = document.getElementById('resultados');




myElem.onclick = function () {

    if (vmer.selectedIndex == 0 || vcap.selectedIndex == 0) {

    } else if (vmer.selectedIndex <= 2 && vcap.selectedIndex <= 2 && vinv.selectedIndex == 3) {
      vini.innerHTML = "<b>" + vnom.value + "</b>";
      vtip.innerHTML = "<b>Transformational Innovation</b>";
      vrie.innerHTML = "<b>High risk.</b> The development and implementation of this initiative can have significant impacts on the organization: high investment, long development times, continuous iterations, highly focused teams.";
      vinc.innerHTML = "<b>High uncertainty.</b> The information available is very limited, the organization does not have experience, it is important to measure the market, the type of user and the type of capacity / technologies necessary for the development and execution of the initiative.";
      vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;

    } else if (vmer.selectedIndex == 1 && vcap.selectedIndex == 1) {
      vini.innerHTML = "<b>" + vnom.value + "</b>";
      vtip.innerHTML = "<b>Incremental Innovation</b>";
      vrie.innerHTML = "<b>Low Risk.</b> The impact of this initiative is very limited and the organization can control the negative impacts. Human and financial resources are not compromised.";
      vinc.innerHTML = "<b>Low Uncertainty.</b> Market information, business capabilities, user understanding and technology for its development are available.";
      vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;
    } else if (vmer.selectedIndex <= 2 && vcap.selectedIndex != 3) {
      vini.innerHTML = "<b>" + vnom.value + "</b>";
      vtip.innerHTML = "<b>Adjacent Innovation</b>";
      vrie.innerHTML = "<b>Medium risk. </b> This initiative has a high impact on a channel and category of the organization, the commercial and user approach are paramount to ensure the success of the initiative.";
      vinc.innerHTML = "<b>Moderate Uncertainty. </b> A large part of the necessary capacities for the development of the initiative are available. There is limited market and user information.";
      vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;

    } else {
      vini.innerHTML = "<b>" + vnom.value + "</b>";
      vtip.innerHTML = "<b>Transformational Innovation</b>";
      vrie.innerHTML = "<b>High risk.</b> The development and implementation of this initiative can have significant impacts on the organization: high investment, long development times, continuous iterations, highly focused teams.";
      vinc.innerHTML = "<b>High uncertainty.</b> The information available is very limited, the organization does not have experience, it is important to measure the market, the type of user and the type of capacity / technologies necessary for the development and execution of the initiative.";
      vres.innerHTML =  vmer.selectedOptions[0].text + "; " +vcap.selectedOptions[0].text + "; "+vinv.selectedOptions[0].text+ "; "+vimp.selectedOptions[0].text;

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




