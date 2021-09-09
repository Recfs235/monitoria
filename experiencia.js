const { fighters } = require("./data");


const tempoDeEstrada = (fightersAge) => {
  fightersAge.sort((fighter1, fighter2) => {
    return fighter1.age - fighter2.age
  });
  const jedi = fightersAge[fightersAge.length - 1].name;
  const padawan = fightersAge[0].name;
  const resultado = `${jedi} possui maestria. ${padawan} ainda é um pupilo`;
  return resultado;
}
console.log(tempoDeEstrada(fighters.slice(0,5)))
// Jedi possui maestria. Padawan ainda é um pupilo.
