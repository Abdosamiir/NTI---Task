var app = document.getElementById("app");

var customNodeCreator = function (character) {
  return document.createTextNode(character);
};

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
  onCreateTextNode: customNodeCreator,
});

typewriter
  .typeString("I'm Simone Oliva .")
  .pauseFor(200)
  .deleteChars(18)
  .typeString("I'm a Freelancer.")
  .deleteChars(18)
  .typeString("I'm a Photographer .")
  .deleteChars(28)
  .typeString("I'm a designer .")
  .pauseFor(200)
  .start();
