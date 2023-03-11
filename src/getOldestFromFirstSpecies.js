const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const colaborador = data.employees.find((elemento) => elemento.id === id);
  const primeiraEspecieId = colaborador.responsibleFor[0];
  const primeiraEspecie = data.species.find((elemento) => elemento.id === primeiraEspecieId);
  const animalMaisVelho = primeiraEspecie.residents.reduce((acc, curr) =>
    acc.age > curr.age ? acc : curr,
  );

  return [animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age];
};

module.exports = getOldestFromFirstSpecies;
