/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let random_who = Math.floor(Math.random() * who.length);

  let what = ["eat", "pissed", "crushed", "broked"];
  let random_what = Math.floor(Math.random() * who.length);

  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let random_when = Math.floor(Math.random() * when.length);

  let result =
    who[random_who] + " " + what[random_what] + " " + when[random_when];
  document.getElementById("Excuse").innerHTML = result;
};
