const kor = document.querySelector("#scoreCalc #kor");
const eng = document.querySelector("#scoreCalc #eng");
const math = document.querySelector("#scoreCalc #math");
const science = document.querySelector("#scoreCalc #science");
const scoreBtn = document.querySelector("#scoreCalc .scoreBtn");
const scoreResetBtn = document.querySelector("#scoreCalc .scoreResetBtn");
const scoreAverage = document.querySelector("#scoreCalc .scoreAverage");
const scoreResult = document.querySelector("#scoreCalc .scoreBox");

scoreBtn.addEventListener("click", function () {
  const korValue = parseInt(kor.value);
  const engValue = parseInt(eng.value);
  const mathValue = parseInt(math.value);
  const scienceValue = parseInt(science.value);
  const average = ((korValue + engValue + mathValue + scienceValue) / 4).toFixed(1);
  const scoreList = ["A", "B", "C", "D", "F"];
  let score = scoreList;
  if (average >= 90) {
    score = scoreList[0];
  } else if (average < 90 && average >= 80) {
    score = scoreList[1];
  } else if (average < 80 && average >= 70) {
    score = scoreList[2];
  } else if (average < 70 && average >= 60) {
    score = scoreList[3];
  } else if (average < 60) {
    score = scoreList[4];
  } else if (isNaN(average)) {
    alert("숫자를 입력해주세요.");
    scoreAverage.innerHTML = "";
    scoreResult = "";
  }
  scoreAverage.innerHTML = `<h2>${average}</h2> 점`;
  scoreResult.classList.add("on");
  scoreResult.innerHTML = `<span>${score}</span>`;
});

scoreResetBtn.addEventListener("click", function () {
  kor.value = "";
  eng.value = "";
  math.value = "";
  science.value = "";
  scoreAverage.innerHTML = "";
  scoreResult.innerHTML = "";
  scoreResult.classList.remove("on");
});
