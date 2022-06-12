const height = document.querySelector("#bmiCalc #height");
const weight = document.querySelector("#bmiCalc #weight");

const bmiBtn = document.querySelector("#bmiCalc .bmiBtn");
const bmiResetBtn = document.querySelector("#bmiCalc .bmiResetBtn");

const bmiResult = document.querySelector("#bmiCalc .bmiResult");
const bmiIdx = document.querySelector("#bmiCalc .bmiIdx");

bmiBtn.addEventListener("click", function () {
  const hValue = parseInt(height.value);
  const wValue = parseInt(weight.value);

  const bmi = (wValue / (hValue / 100) ** 2).toFixed(2);

  if (18.5 > bmi) {
    bmiIdx.textContent = "저체중";
  } else if (18.5 <= bmi && 23 > bmi) {
    bmiIdx.textContent = "정상";
  } else if (23 <= bmi && 25 > bmi) {
    bmiIdx.textContent = "과체중";
  } else if (25 < bmi) {
    bmiIdx.textContent = "비만";
  }

  bmiResult.textContent = String(bmi);
});

bmiResetBtn.addEventListener("click", function () {
  height.value = "";
  weight.value = "";
  bmiResult.textContent = "";
  bmiIdx.textContent = "";
});
