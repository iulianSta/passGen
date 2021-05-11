// Any code you will write for your website (in the future!) should go here
// Examples you will have other passwords for sure

// passwordGen()  ➞ Y3mI9x7bvPY86T?oM§hIbgh!MLwA77N
// passwordGen()  ➞ Oy$tkBGoo5fg§mO4AdV&Kh8XXZR4d7K
// passwordGen()  ➞ v0ZwDrn@hfI€kOKWH§k6kqub6zfpuyP

const passwordGen = () => {
  let characters = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    6,
    7,
    8,
    9,
    "!",
    "§",
    "$",
    "%",
    "&",
    "?",
    "@",
    "€",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let result = "";
  let randomNum;
  for (let i = 0; i <= 30; i++) {
    randomNum = Math.floor(Math.random() * characters.length);
    // result = result + characters[randomNum];
    result += characters[randomNum];
  }
  return result;
};

// Generate function
const generatePass = (e) => {
  e.preventDefault();
  let button = document.querySelector("input");
  let result = document.querySelector(".result");
  let div = document.createElement("div");

  const value = passwordGen();
  div.textContent = value;

  result.appendChild(div);

  let del = button;
  del.addEventListener("click", () => div.remove());
};
//console.log(passwordGen());
document.querySelector("input").addEventListener("click", generatePass);
