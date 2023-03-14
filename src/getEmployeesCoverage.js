const data = require('../data/zoo_data');

const getFullName = (employee) => `${employee.firstName} ${employee.lastName}`;

const getSpeciesAndLocations = (employee, data) => {
  const species = employee.responsibleFor.map((id) => data.species.find((s) => s.id === id).name);
  const locations = employee.responsibleFor.map((id) => data.species.find((s) => s.id === id).location);
  return { species, locations };
};

const getEmployeeById = (id, data) => {
  const employee = data.employees.find((e) => e.id === id);
  if (employee) {
    const { species, locations } = getSpeciesAndLocations(employee, data);
    return { id, fullName: getFullName(employee), species, locations };
  }
};

const getEmployeeByName = (name, data) => {
  const employee = data.employees.find((e) => e.firstName === name || e.lastName === name);
  if (employee) {
    const { species, locations } = getSpeciesAndLocations(employee, data);
    return { id: employee.id, fullName: getFullName(employee), species, locations };
  }
};

const getAllEmployees = (data) => {
  return data.employees.map((e) => {
    const { species, locations } = getSpeciesAndLocations(e, data);
    return { id: e.id, fullName: getFullName(e), species, locations };
  });
};

const getEmployeesCoverage = (parametro) => {
  if (typeof parametro === 'object' && parametro.name) {
    return getEmployeeByName(parametro.name, data);
  }
  if (typeof parametro === 'object' && parametro.id) {
    return getEmployeeById(parametro.id, data);
  }
  if (!parametro) {
    return getAllEmployees(data);
  }
};

module.exports = getEmployeesCoverage;
