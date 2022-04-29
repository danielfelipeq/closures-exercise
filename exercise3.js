const createGame = () => {
  let randomNum = Math.floor(Math.random() * 100);
  console.log(randomNum);
  return (numberSecret = (num) => {
    if (num > randomNum) {
      return "Muy Alto!";
    } else if (num < randomNum) {
      return "Muy Bajo!";
    } else if (num === randomNum) {
      return "Lo adivinaste, Felicitaciones!";
    }
  });
};
let guess = createGame();
console.log(guess(88));
console.log(guess(40));
console.log(guess(6));
