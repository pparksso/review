const userMoney = document.querySelector("#moneyCalc #money");
const moneyBtn = document.querySelector("#moneyCalc .moneyBtn");
const moneyResetBtn = document.querySelector("#moneyCalc .moneyResetBtn");
const fiveMillonPieces = document.querySelector("#moneyCalc .fiveMillonPieces");
const millonPieces = document.querySelector("#moneyCalc .millonPieces");
const fiveThousandPieces = document.querySelector("#moneyCalc .fiveThousandPieces");
const thousandPieces = document.querySelector("#moneyCalc .thousandPieces");
const fiveHundredPieces = document.querySelector("#moneyCalc .fiveHundredPieces");
const hundredPieces = document.querySelector("#moneyCalc .hundredPieces");
const fiftyPieces = document.querySelector("#moneyCalc .fiftyPieces");
const tenPieces = document.querySelector("#moneyCalc .tenPieces");

moneyBtn.addEventListener("click", function () {
  const moneyValue = parseInt(userMoney.value);
  const fiveMillon = parseInt(moneyValue / 50000);
  const millon = parseInt((moneyValue % 50000) / 10000);
  const fiveThousand = parseInt((moneyValue % 10000) / 5000);
  const thousand = parseInt((moneyValue % 5000) / 1000);
  const fiveHundred = parseInt((moneyValue % 1000) / 500);
  const hundred = parseInt((moneyValue % 500) / 100);
  const fifty = parseInt((moneyValue % 100) / 50);
  const ten = parseInt((moneyValue % 50) / 10);
  fiveMillonPieces.innerHTML = `<h2>${fiveMillon}</h2> 장`;
  millonPieces.innerHTML = `<h2>${millon}</h2> 장`;
  fiveThousandPieces.innerHTML = `<h2>${fiveThousand}</h2> 장`;
  thousandPieces.innerHTML = `<h2>${thousand}</h2> 장`;
  fiveHundredPieces.innerHTML = `<h2>${fiveHundred}</h2> 장`;
  hundredPieces.innerHTML = `<h2>${hundred}</h2> 장`;
  fiftyPieces.innerHTML = `<h2>${fifty}</h2> 장`;
  tenPieces.innerHTML = `<h2>${ten}</h2> 장`;
  if (isNaN(moneyValue)) {
    alert("숫자를 입력해 주세요");
    fiveMillonPieces.innerHTML = "";
    millonPieces.innerHTML = "";
    fiveThousandPieces.innerHTML = "";
    thousandPieces.innerHTML = "";
    fiveHundredPieces.innerHTML = "";
    hundredPieces.innerHTML = "";
    fiftyPieces.innerHTML = "";
    tenPieces.innerHTML = "";
  }
});

moneyResetBtn.addEventListener("click", function () {
  userMoney.value = "";
  fiveMillonPieces.innerHTML = "";
  millonPieces.innerHTML = "";
  fiveThousandPieces.innerHTML = "";
  thousandPieces.innerHTML = "";
  fiveHundredPieces.innerHTML = "";
  hundredPieces.innerHTML = "";
  fiftyPieces.innerHTML = "";
  tenPieces.innerHTML = "";
});
