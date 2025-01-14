let convertButton = document.querySelector(".convertButton");
let resetButton = document.querySelector(".resetButton");
let changeButton = document.querySelector(".changeButton");
let result = document.querySelector(".result");
let converterInput = document.querySelector("#converter");
let label = document.querySelector("header label")
let isTempC = true;
convertButton.addEventListener("click", converting);
changeButton.addEventListener("click" , changing);
resetButton.addEventListener("click" , reseting);

function converting() {
  if (isTempC) {
    convertCtoF();
  } else {
    convertFtoC();
  }
}
function convertCtoF() {
  let convert = +converterInput.value * 1.8 + 32;
  result.innerHTML = +converterInput.value + "°C" + " is: " + convert + "°F";
  converterInput.value = "";
}
function convertFtoC() {
  let convert = (+converterInput.value - 32) / 1.8;
  result.innerHTML = +converterInput.value + "°F" + " is: " + convert + "°C";
  converterInput.value = "";
}

function changing() {
  isTempC = !isTempC;
  if (isTempC) {
    label.innerHTML = `  Converter °C to °F`;
  } else {
    label.innerHTML = ` Converter °F to °C`;
    converterInput.setAttribute("placeholder" , "°F");
  }
  
}

function reseting() {
  converterInput.value = "";
  result.innerHTML = "";
}