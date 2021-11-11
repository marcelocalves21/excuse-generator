const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const randomNumber = max => {
  return Math.floor(Math.random() * max);
};

const randomExcuse = (who, action, what, when) => {
  let randomWho = randomNumber(who.length);
  let randomAction = randomNumber(action.length);
  let randomWhat = randomNumber(what.length);
  let randomWhen = randomNumber(when.length);
  let excuse = `${who[randomWho]} ${action[randomAction]} ${what[randomWhat]} ${when[randomWhen]}`;
  return excuse;
};
window.onload = function() {
  //write your code here

  let mainPage = document.querySelector("#main");
  let newParagraph = document.createElement("p");
  mainPage.appendChild(newParagraph);
  newParagraph.innerText = randomExcuse(who, action, what, when);
};
