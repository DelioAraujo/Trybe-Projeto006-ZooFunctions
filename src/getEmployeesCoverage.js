const data = require('../data/zoo_data');

const getEmployeesCoverage = (parametro) => {
  if (typeof parametro === 'object' && parametro.name) {
    const empregadoByName = data.employees.find((empregado) => empregado.firstName === parametro.name || empregado.lastName === parametro.name);
    return {
      id: empregadoByName.id,
      fullName: `${empregadoByName.firstName} ${empregadoByName.lastName}`,
      species: empregadoByName.responsibleFor.map((element) => data.species.find((bicho) => bicho.id === element).name),
      locations: empregadoByName.responsibleFor.map((element) => data.species.find((bicho) => bicho.id === element).location),
    };
  }
  if (typeof parametro === 'object' && parametro.id) {
    const empregadoById = data.employees.find((empregado2) => empregado2.id === parametro.id);
    return {
      id: parametro.id,
      fullName: `${empregadoById.firstName} ${empregadoById.lastName}`,
      species: empregadoById.responsibleFor.map((element) => data.species.find((bicho) => bicho.id === element).name),
      locations: empregadoById.responsibleFor.map((element) => data.species.find((bicho) => bicho.id === element).location),
    };
  }
  if (!parametro) {
    return data.employees.reduce((acc, crr) => {
      acc.push({
        id: crr.id,
        fullName: `${crr.firstName} ${crr.lastName}`,
        species: crr.responsibleFor.map((element) => data.species.find((bicho) => bicho.id === element).name),
        locations: crr.responsibleFor.map((element) => data.species.find((bicho) => bicho.id === element).location),
      });
      return acc;
    }, []);
  }
};

module.exports = getEmployeesCoverage;
