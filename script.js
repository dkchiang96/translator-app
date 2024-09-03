import {translate} from "./translate.js";

function translateText() {
  const inputText = document.getElementById("inputText").value;
  const inputLanguage = document.getElementById("inputLanguage").value;
  const outputLanguage = document.getElementById("outputLanguage").value;
  const translated = translate(inputLanguage, inputText, outputLanguage);
  document.getElementById("outputText").value = `${translated}`;
}

window.translateText = translateText;