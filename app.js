function pickRandom(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function pickCardAndSuits() {
  const arrayCard = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  const cardSuits = ["Club", "Spade", "Diamond", "Heart"];

  const resultCard = pickRandom(arrayCard);
  const resultSuit = pickRandom(cardSuits);
  return { card: resultCard, suit: resultSuit };
}

const buttonCard = document.getElementById("buttonCard");
buttonCard.onclick = pickCardHandler;

function pickCardHandler() {
  const resultPickCard = pickCardAndSuits();
  const results = document.getElementById("result");
  results.textContent = `${resultPickCard.card} ${resultPickCard.suit}`;

  if (resultPickCard.suit === "Club" || resultPickCard.suit === "Spade") {
    return (results.style = "color: black; text-shadow: 2px 2px white");
  } else {
    return (results.style = "color: red");
  }
}
