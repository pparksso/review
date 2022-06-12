const userUpDown = document.querySelector("#upDown #userUpDown");
const upDownBtn = document.querySelector("#upDown .upDownBtn");
const upDownResetBtn = document.querySelector("#upDown .upDownResetBtn");
const upDownResult = document.querySelector("#upDown .upDownResult");
let correct = Math.floor(Math.random() * 100) + 1;
let count = 0;

upDownBtn.addEventListener("click", function () {
  count += 1;
  console.log(count);

  const userUpDownValue = parseInt(userUpDown.value);
  upDownResult.classList.add("on");

  if (userUpDownValue === 0 || userUpDownValue > 100) {
    upDownResult.classList.remove("on");
    alert("범위의 숫자를 입력하세요");
    count = 0;
  } else if (correct !== userUpDownValue && count > 10) {
    upDownResult.innerHTML = `<span>You lost😢 It's over😣</span>`;
  } else if (correct < userUpDownValue) {
    upDownResult.innerHTML = `<span>DOWN</span>`;
  } else if (correct > userUpDownValue) {
    upDownResult.innerHTML = `<span>UP</span>`;
  } else if (correct === userUpDownValue) {
    upDownResult.innerHTML = `<span>Correct🎉 You clicked ${count} times!</span>`;
  } else if (isNaN(userUpDownValue)) {
    upDownResult.classList.remove("on");
    alert("숫자를 입력하세요");
    count = 0;
  }
});

upDownResetBtn.addEventListener("click", function () {
  count = 0;
  upDownResult.classList.remove("on");
  upDownResult.innerHTML = "";
  userUpDown.value = "";
  correct = Math.floor(Math.random() * 100) + 1;
});
