const userWord = document.querySelector("#wordRelay .userRelay");
let relayWordBox = document.querySelector("#wordRelay .relayBox");
const countBox = document.querySelector("#wordRelay .countBox");
const startBtn = document.querySelector("#wordRelay .relayStart");
const relayWords = ["호랑이", "자판기", "이발소", "모내기", "막둥이", "마리오"];

/* 끝말잇기 로직
let randomRelayWord = relayWords[Math.floor(Math.random() * relayWords.length - 1)];
let wordsArr = [];
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  wordsArr.push(randomRelayWord);
  relayWordBox.innerHTML = `${wordsArr[wordsArr.length - 1]}`;
  userWord.value = "";
  userWord.focus();
});

userWord.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    const uValue = userWord.value;
    const startStr = uValue.charAt(0);
    const endStr = wordsArr[wordsArr.length - 1].charAt(2);
    if (uValue.length !== 3 || startStr !== endStr) {
      gsap.from(".userRelay", { x: 100, duration: 0.5, ease: "elastic(1,0.3)" });
    } else if (startStr === endStr) {
      wordsArr.push(uValue);
      relayWordBox.innerHTML = `${wordsArr[wordsArr.length - 1]}`;
      userWord.value = "";
      userWord.focus();
    }
  }
});
*/

// API사용 끝말잇기
startBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let randomRelayWord = relayWords[Math.floor(Math.random() * relayWords.length)];
  relayWordBox.innerHTML = `${randomRelayWord}`;
});

const apiKey = "E082F509B7B5258CD2A0FDA6515BA4CB";
userWord.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    const uValue = userWord.value;
    const startStr = uValue.charAt(0);
    fetch(`https://stdict.korean.go.kr/api/search.do?key=${apiKey}&req_type=json&q=${startStr}&advanced=y&type1=word&method=start&num=100`)
      .then((res) => {
        return res.text();
      })
      .then((data) => {});

    userWord.value = "";
    userWord.focus();
  }
});
