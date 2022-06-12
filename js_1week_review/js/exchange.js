const exchangeBtn = document.querySelector("#exchangeCalc .exchangeBtn");
const exchangeResetBtn = document.querySelector("#exchangeCalc .exchangeResetBtn");

let dollarNumber = document.querySelector("#exchangeCalc #dollarNumber");
let krwNumber = document.querySelector("#exchangeCalc #krwNumber");

const dollarText = document.querySelector("#exchangeCalc .dollarText");
const krwText = document.querySelector("#exchangeCalc .krwText");

exchangeBtn.addEventListener("click", function () {
  let dolValue = parseFloat(dollarNumber.value);
  let krwValue = parseFloat(krwNumber.value);
  if (dolValue !== 1 && krwValue === 1252.0) {
    const krwCalc = Math.floor(dolValue * 1252);
    krwText.textContent = String(krwCalc);
    dollarText.textContent = String(dolValue);
    krwNumber.value = krwCalc;
  } else if (krwValue !== 1252.0 && dolValue === 1) {
    const dolCalc = (krwValue / 1250).toFixed(2);
    dollarText.textContent = String(dolCalc);
    krwText.textContent = String(krwValue);
    dollarNumber.value = dolCalc;
  }
});

exchangeResetBtn.addEventListener("click", function () {
  dollarNumber.value = "1";
  krwNumber.value = "1252.0";
  dollarText.textContent = "";
  krwText.textContent = "";
});
