const radios = document.querySelectorAll("#lottoGame .radio");
const paper = document.querySelector("#lottoGame .paper");
const colors = ["yellow", "blue", "red", "grey", "green"];

for (let i = 0; i < 5; i++) {
  radios[i].addEventListener("change", function () {
    let lottoTempTxt = "";
    for (let j = 0; j < this.value; j++) {
      const lotto = [];
      const sortLotto = [];
      lottoTempTxt += `<ul class=lottoList>`;
      for (let i = 1; i < 46; i++) {
        lotto.push(i);
      }
      for (let i = 0; i < 6; i++) {
        const randomLotto = lotto.splice(Math.floor(Math.random() * lotto.length), 1).pop();
        sortLotto.push(randomLotto);
      }
      sortLotto.sort(function (first, second) {
        return first - second;
      });
      for (let i = 0; i < 6; i++) {
        lottoTempTxt += `<li class="${colors[Math.ceil(sortLotto[i] / 10) - 1]}">${sortLotto[i]}</li>`;
      }
      lottoTempTxt += `</ul>`;
      paper.innerHTML = lottoTempTxt;
    }
  });
}
