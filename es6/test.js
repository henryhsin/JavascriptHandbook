"use strict";
const sentences = [
  {subject: "JavaScript", verb: "is", object: "great"},
  {subject: "Elephant", verb: "are", object: "large"},
];
function say({subject, verb, object}){
  console.log(`${subject} ${verb} ${object}`);
}

for(let s of sentences){
  say(s);
}

let currentTemp = 23.5;
const message = `It is a good temperature: ${currentTemp}\u00b0c`;
console.log(message);

let isCool = true;
console.log(isCool);

const RED = Symbol();
const ORANGE = Symbol("The color of a sunset!!");
console.log(RED === ORANGE);

const user = {
  name: "Henry",
  age: "26"
};
console.log(user);

const person = {
  name: "Annie",
  classification:{
    country: "Taiwan",
    isBeauty: true
  }
};
person.classification.isBeauty = false;
console.log(person.classification.isBeauty);
let personSpeak = person.speak = function(){return "QQ!";};
console.log(personSpeak());
personSpeak();
delete person.classification.isBeauty;
console.log(person);
