const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const criancas = entrants.filter((elements) => elements.age < 18);
  const adultos = entrants.filter((elements2) => elements2.age >= 18 && elements2.age < 50);
  const idosos = entrants.filter((elements3) => elements3.age >= 50);

  return {
    child: criancas.length,
    adult: adultos.length,
    senior: idosos.length,
  };
};

const calculateEntry = (entrants) => {
  if (!entrants || entrants.length === 0) {
    return 0;
  }

  const calculoDeEntradas = countEntrants(entrants);

  const valorTotal = (
    calculoDeEntradas.child * data.prices.child +
    calculoDeEntradas.adult * data.prices.adult +
    calculoDeEntradas.senior * data.prices.senior
  );

  return parseFloat(valorTotal.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
