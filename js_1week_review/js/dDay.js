const date = document.querySelector("#dDayCalc #calendar");
const dDayBtn = document.querySelector("#dDayCalc .dDayBtn");
const dDayResetBtn = document.querySelector("#dDayCalc .dDayResetBtn");
const dDayBox = document.querySelector("#dDayCalc .dDayBox");
const todayBox = document.querySelector("#dDayCalc .todayBox");

function showtime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const day = now.getDate();
  const week = now.getDay();
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
  const hours = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds();

  todayBox.innerHTML = `${year} .${months[month]} .${day} ${weeks[week]} ${hours < 10 ? "0" + hours : hours} : ${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
}
showtime();
setInterval(showtime, 1000);

dDayBtn.addEventListener("click", function () {
  const dDayValue = new Date(date.value);
  const today = new Date();
  const dDayDate = dDayValue.getTime() - today.getTime();
  const dDay = Math.round(dDayDate / (24 * 60 * 60 * 1000));
  dDayBox.innerHTML = `<span>- ${dDay} 일⏳</span>`;
});

dDayResetBtn.addEventListener("click", function () {
  date.value = "";
  dDayBox.innerHTML = "";
});
