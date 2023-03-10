const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  const empregado = data.employees
  .find((elemento) => elemento.firstName === employeeName || elemento.lastName === employeeName);
  return empregado;
};

module.exports = getEmployeeByName;
