const crearContador = () => {
  let counter = 1;
  return (incrementar = () => counter++);
};

let contar = crearContador();

console.log(contar());
console.log(contar());
console.log(contar());
