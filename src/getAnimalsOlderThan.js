const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => {
  // seu código aqui
  const especie = data.species.find((elemento) => elemento.name === animal);
  const idadecheck = especie.residents.every((elemento) => elemento.age >= age);
  return idadecheck;
};


module.exports = getAnimalsOlderThan;
