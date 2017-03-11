var jokes = [
  "A day without sunshine is like, night.",
  "At what age is it appropriate to tell my dog that he's adopted?",
  "I intend to live forever, or die trying"
];


var getRandomJoke = function() {
    let index = Math.floor((Math.random() * jokes.length));
    return jokes[index];
}

var addJoke = function(joke) {
    jokes.push(joke);
}

module.exports = {
  allJokes : jokes,
  getRandomJoke : getRandomJoke,
  addJoke : addJoke
}