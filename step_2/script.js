
const rapperPics = [
  ["rodwave", "Rod wave.jpeg"],
  ["polog", "polo g.jpeg"],
  ["Travisscott", "Travis scott.jpeg"],
  ["lilbaby", "lil baby.jpeg"],
  ["metroboomin", "metro boomin.jpeg"],
  ["juicewrd", "juice wrld.jepg"],
  ["gunna", "gunna.jpeg"],
  ["future", "future.jpeg"]
];


function updateRapperImage() {
  const rapperChoice = document.getElementById('rapperchoice');
  const rapperImage = document.getElementById('rapperimage');
  const selectedIndex = rapperChoice.selectedIndex;
  const selectedValue = rapperChoice.options[selectedIndex].value;
  const newImageSrc = rapperPics[selectedValue][1];
  rapperImage.src = newImageSrc;
}


function choiceGuess() {
  const rapperChoice = document.getElementById('rapperchoice');
  const selectedIndex = rapperChoice.selectedIndex;
  const selectedValue = rapperChoice.options[selectedIndex].value;
  const userGuess = document.getElementById('guessInput').value.trim().toLowerCase();
  const rapperName = rapperPics[selectedValue][0].toLowerCase();


  if (userGuess === rapperName) {
    alert("Correct guess! You guessed " + rapperPics[selectedValue][0] + ".");
  } else {
    alert("Incorrect guess. Try again!");
  }
}
