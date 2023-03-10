const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }

  if (ids.length === 1) {
    const id = ids[0];
    return [data.species.find((elemento) => elemento.id === id)];
  }

  return data.species.filter((elemento) => ids.includes(elemento.id));
};

module.exports = getSpeciesByIds;
