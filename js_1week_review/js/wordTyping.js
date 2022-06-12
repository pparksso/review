let randomWordBox = document.querySelector(".randomWordBox");
let wordTypingCountBox = document.querySelector(".wordTypingCountBox");
const input = document.querySelector(".player");
const cover = document.querySelector(".cover");
const timeBox = document.querySelector(".timeBox");
const wordTimeBtn = document.querySelector(".wordTimeBtn");

const words =
  "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more about JavaScript.This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about APIs that are specific to Web pages, please see Web APIs and DOM.The standards for JavaScript are the ECMAScript Language Specification (ECMA-262) and the ECMAScript Internationalization API specification (ECMA-402). The JavaScript documentation throughout MDN is based on the latest draft versions of ECMA-262 and ECMA-402. And in cases where some proposals for new ECMAScript features have already been implemented in browsers, documentation and examples in MDN articles may use some of those new features.Do not confuse JavaScript with the Java programming language. Both 'Java' and 'JavaScript'are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantics, and use.";
const clearWords = words
  .toLocaleLowerCase()
  .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
  .split(" ");

let overlap = new Set(clearWords);

let word = [...overlap].filter((item) => item.length > 8);

let randomWords = word.splice(Math.floor(Math.random() * word.length), 1).pop();
const showWords = function () {
  input.value = "";
  input.focus();
  randomWords = word.splice(Math.floor(Math.random() * word.length), 1).pop();
  randomWordBox.innerHTML = `<span>${randomWords}</span>`;
};

let wordTypingCount = 0;
randomWordBox.innerHTML = `<span>${randomWords}</span>`;
input.focus();
wordTypingCountBox.innerHTML = "";
let startTime = new Date();
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    if (randomWords === input.value) {
      randomWordBox.innerHTML = "";
      showWords();
      wordTypingCount++;
      wordTypingCountBox.innerHTML = `<span>${wordTypingCount} / 38</span>`;
      if (wordTypingCount > 37) {
        cover.classList.add("on");
        let endTime = new Date();
        const playMin = Math.floor((endTime - startTime) / 1000 / 60);
        const playSec = Math.floor(((endTime - startTime) / 1000) % 60);
        timeBox.innerHTML = `<h2>${playMin}<span>분</span> ${playSec}<span>초</span>`;
      }
    } else {
      gsap.from(".player", { x: 100, duration: 0.5, ease: "elastic(1,0.3)" });
    }
  }
});
wordTimeBtn.addEventListener("click", function () {
  cover.classList.remove("on");
  overlap = new Set(clearWords);
  word = [...overlap].filter((item) => item.length > 8);
  showWords();
  wordTypingCount = 0;
  wordTypingCountBox.innerHTML = "";
  startTime = new Date();
});
