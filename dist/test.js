"use strict";

var sentences = [{ subject: "JavaScript", verb: "is", object: "great" }, { subject: "Elephant", verb: "are", object: "large" }];
function say(_ref) {
  var subject = _ref.subject,
      verb = _ref.verb,
      object = _ref.object;

  console.log(subject + " " + verb + " " + object);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = sentences[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var s = _step.value;

    say(s);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var currentTemp = 23.5;
var message = "It is a good temperature: " + currentTemp + "\xB0c";
console.log(message);

var isCool = true;
console.log(isCool);

var RED = Symbol();
var ORANGE = Symbol("The color of a sunset!!");
console.log(RED === ORANGE);

var user = {
  name: "Henry",
  age: "26"
};
console.log(user);

var person = {
  name: "Annie",
  classification: {
    country: "Taiwan",
    isBeauty: true
  }
};

console.log(person.classification.isBeauty);