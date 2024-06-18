const VideogamesPics = [
  ["COD", "COD.jpeg"],
  ["Elden Ring", "elden ring.jpeg"],
  ["Fortnite", "fortnite.jpeg"],
  ["God of War", "God of war.jpeg"],
  ["Red Dead Redemption", "red dead.jpeg"],
  ["Roblox", "roblox.jpeg"],
  ["Minecraft", "Minecraft.jpeg"],
  ["NBA 2K", "nba2k.jpeg"],
  ["GTA", "Trevor.jpeg"]
];


function updateVideoImage() {
  const gamechoice = document.getElementById('gamechoice');
  const gameimage = document.getElementById('gameimage');
  const selectedIndex = gamechoice.selectedIndex;
  const newImageSrc = VideogamesPics[selectedIndex][1];
  gameimage.src = newImageSrc;
}


function choiceGuess() {
  const gamechoice = document.getElementById('gamechoice');
  const selectedIndex = gamechoice.selectedIndex;
  const userGuess = document.getElementById('guessInput').value.trim().toLowerCase();
  const GameName = VideogamesPics[selectedIndex][0].toLowerCase();

  if (userGuess === GameName) {
    alert("Correct guess! You guessed " + VideogamesPics[selectedIndex][0] + ".");
  } else {
    alert("Incorrect guess. Try again!");
  }
}
