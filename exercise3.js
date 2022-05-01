const createGame = () => {
  let randomNum = Math.floor(Math.random() * 100);
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
let respuesta;

process.stdout.write("Adivina el numero entre 1 y 100: ");

process.stdin.on("data", (data) => {
  respuesta = parseInt(data);
  let response = guess(respuesta);
  process.stdout.write(`${response}\n`);
  if (response === "Lo adivinaste, Felicitaciones!") process.exit();
  process.stdout.write(`Sigue intentando: `);
});
