const assert = require('assert');
const {
  Given,
  When,
  Then
} = require('cucumber');

const isItFriday = (day) => {
  if (day === "Friday") {
    return "TGIF";
  } else {
    return "Nope";
  }
}

Given('today is {string}', (givenDay) => {
  this.day = givenDay;
});

When('I ask whether it\'s Friday yet', () => {
  this.actualAnswer = isItFriday(this.day);
});

Then('I should be told {string}', (expectedAnswer) => {
  assert.equal(this.actualAnswer, expectedAnswer);
});
