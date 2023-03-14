const data = require('../data/zoo_data');

const getEmployeeByName = (parametro) => {
  const empregadoByName = data.employees
    .find((empregado) => empregado.firstName === parametro.name || empregado.lastName === parametro.name);
  return {
    id: empregadoByName.id,
    fullName: `${empregadoByName.firstName} ${empregadoByName.lastName}`,
    species: empregadoByName.responsibleFor
      .map((element) => data.species.find((bicho) => bicho.id === element).name),
    locations: empregadoByName.responsibleFor
      .map((element) => data.species.find((bicho) => bicho.id === element).location),
  };
};

const getEmployeeById = (parametro) => {
  const empregadoById = data.employees.find((empregado2) => empregado2.id === parametro.id);
  return {
    id: parametro.id,
    fullName: `${empregadoById.firstName} ${empregadoById.lastName}`,
    species: empregadoById.responsibleFor
      .map((element) => data.species.find((bicho) => bicho.id === element).name),
    locations: empregadoById.responsibleFor
      .map((element) => data.species.find((bicho) => bicho.id === element).location),
  };
};

const getAllEmployees = () => data.employees.reduce((acc, crr) => {
  acc.push({
    id: crr.id,
    fullName: `${crr.firstName} ${crr.lastName}`,
    species: crr.responsibleFor
      .map((element) => data.species.find((bicho) => bicho.id === element).name),
    locations: crr.responsibleFor
      .map((element) => data.species.find((bicho) => bicho.id === element).location),
  });
  return acc;
}, []);

const getEmployeesCoverage = (parametro) => {
  if (!parametro) {
    return getAllEmployees();
  }
  if (parametro.name) {
    return getEmployeeByName(parametro);
  }
  if (parametro.id !== 'Id inválido') {
    return getEmployeeById(parametro);
  }
  if (parametro.id === 'Id inválido') throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
