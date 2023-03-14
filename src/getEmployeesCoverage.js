const data = require('../data/zoo_data');

const findEmployeeByNameOrLastName = (name) => data.employees.find((empregado) => empregado.firstName === name || empregado.lastName === name);

const findSpeciesNameById = (id) => data.species.find((bicho) => bicho.id === id).name;

const findSpeciesLocationById = (id) => data.species.find((bicho) => bicho.id === id).location;

const mapEmployeeToCoverage = (empregado) => ({
  id: empregado.id,
  fullName: `${empregado.firstName} ${empregado.lastName}`,
  species: empregado.responsibleFor.map(findSpeciesNameById),
  locations: empregado.responsibleFor.map(findSpeciesLocationById),
});

const getEmployeesCoverage = (parametro) => {
  if (typeof parametro === 'object' && parametro.name) {
    const empregadoByName = findEmployeeByNameOrLastName(parametro.name);
    return mapEmployeeToCoverage(empregadoByName);
  }
  if (typeof parametro === 'object' && parametro.id) {
    const empregadoById = data.employees.find((empregado2) => empregado2.id === parametro.id);
    return mapEmployeeToCoverage(empregadoById);
  }
  if (!parametro) {
    return data.employees.map(mapEmployeeToCoverage);
  }
};

module.exports = getEmployeesCoverage;
