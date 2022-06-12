const gugudanUserNumber = document.querySelector("#gugudan #gugudanUserNumber");
const gugudanBtn = document.querySelector("#gugudan .gugudanBtn");
const gugudanResetBtn = document.querySelector("#gugudan .gugudanResetBtn");
let gugudanBody = document.querySelector("#gugudan .gugudanBody");

gugudanBtn.addEventListener("click", function () {
  const gugudanValue = parseInt(gugudanUserNumber.value);
  gugudanBody.innerHTML = "";
  for (let i = 1; i < 10; i++) {
    let gugudanTempText = `<tr>`;
    for (let j = gugudanValue; j > 1; j--) {
      gugudanTempText += `<td>${j} X ${i} = ${i * j}</td>`;
    }
    gugudanTempText += `</tr>`;
    gugudanBody.innerHTML += gugudanTempText;
  }
});

gugudanResetBtn.addEventListener("click", function () {
  gugudanUserNumber.value = "";
  gugudanBody.innerHTML = "";
});
