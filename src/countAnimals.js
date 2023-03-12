const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const listaCompleta = data.species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length;
      return acc;
    }, {});
    return listaCompleta;
  }
  if (animal.species) {
    const bicho = data.species.find((element) => element.name === animal.species);
    return bicho.residents.length;
  }
  if (animal.sex) {
    const bicho = data.species.find((element) => element.name === animal.species);
    const bichoPorSexo = bicho.residents.filter((element2) => element2.sex === animal.sex);
    return bichoPorSexo.length;
  }
};

module.exports = countAnimals;
