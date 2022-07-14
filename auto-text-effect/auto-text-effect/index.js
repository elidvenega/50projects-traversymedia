// getting id's
const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
// text to be output to the dom
const text = "We Love Programming!";
let idx = 1;
// speed in which text will go
let speed = 300 / speedEl.value;

const writeText = () => {
  textEl.innerText = text.slice(0, idx);

  idx++;

  if (idx > text.length) {
    idx = 1;
  }

  setTimeout(writeText, speed);
};

writeText();

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));
