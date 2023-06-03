/*Recuperer les constantes
const mot = document.getElementById("mot");
//Operations
window.addEventListener("DOMContentLoaded",function(){
alert("sdf");
console.log("sdfsdf");
});*/
const phrases = [
    "KARIM BAOUSSOUS",
    "CIN : EC73876",
    "+212 652953216",
    "karimbaoussous@gmail.com",
    "Contactez moi ICI ↴"
  ];
  const mot = document.getElementById("mot");
  let currentPhraseIndex = 0;
  let currentLetterIndex = 0;
  
  function showNextLetter() {
    if (currentLetterIndex < phrases[currentPhraseIndex].length) {
      mot.textContent += phrases[currentPhraseIndex][currentLetterIndex];
      currentLetterIndex++;
      setTimeout(showNextLetter, 100); // Delay between each letter (adjust as needed)
    } else {
      setTimeout(nextPhrase, 1000); // Delay before showing the next phrase (adjust as needed)
    }
  }
  
  function nextPhrase() {
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    currentLetterIndex = 0;
    mot.textContent = "";
    setTimeout(showNextLetter, 300); // Delay before showing the next phrase with void (adjust as needed)
  }
  
  showNextLetter();
  