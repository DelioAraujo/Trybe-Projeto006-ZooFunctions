const data = require('../data/zoo_data');

const countAnimals = (animal) =>
 {
  const contagemTotal = data.species.map((elemento2) =>
   `${elemento2.name}: ${elemento2.popularity}`);
  const bicho = data.species.find((elemento) => elemento.name === animal.species);
  const contagemIndividual = bicho.popularity;
  const genero = data.species.residents.filter((elemento) => elemento.sex === animal.sex);
  const contagemGenero = genero.length;

  if (!animal) {
    return contagemTotal;
  }

  if (animal.length === 1) {
    return contagemIndividual;
  }

  if (animal.length === 2) {
    return contagemGenero;
  }

  return null;
};

module.exports = countAnimals;