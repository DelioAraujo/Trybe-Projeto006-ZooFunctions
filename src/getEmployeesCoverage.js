const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeesCoverage = (objeto) => {
  // if (objeto.name) {
  //   const empregado = data.employees.find((element) => {
  //     return element.firstName === objeto.name || element.lastName === objeto.name
  //   })

  //   const responsabilidade = empregado.responsibleFor.map((element) => {
  //     return species.find((element2) => {element2.id === element})
  //   })

  //   const nomesResponsabilidades = responsabilidade.map((element3) => {
  //     return element3.name})

  //   const locais = responsabilidade.map ((element4) => {
  //     return element4.location})

  //   const info = {}
  //   info["id"] = empregado.id;
  //   info["fullname"] = `${empregado.firstName} ${empregado.lastName}`;
  //   info['species'] = nomesResponsabilidades
  //   info['locations'] = locais

  //   return info
  // }


}

module.exports = getEmployeesCoverage;
