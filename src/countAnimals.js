const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  const contagemTotal = data.species.map((element) => `${element.name}: ${element.popularity}`);

  const bicho = data.species.find((elemento) => elemento.name === animal.species);
  const contagemIndividual = bicho.popularity;

  const genero = data.species.residents.filter((elemento) => elemento.sex === animal.sex);
  const contagemGenero = genero.length;

  if (!animal) {
    return contagemTotal;
  } if (animal.length === 1) {
    return contagemIndividual;
  } if (animal.length === 2) {
    return contagemGenero;
  }
};

module.exports = countAnimals;
