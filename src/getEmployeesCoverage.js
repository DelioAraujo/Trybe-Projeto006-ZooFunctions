const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployeesCoverage = (objeto) => {
  // seu código aqui
  if (objeto.name){
    const empregado = data.employees.find((elemento) =>{ elemento.name === objeto.name || elemento.lastName === objeto.name});
    const identidade = empregado.id;
    const  nomeCompleto = `${empregado.name} ${empregado.lastName}`;
    const animaisQueCuida = empregado.responsibleFor.filter((element) => element === species.id );
    const nomeAnimaisQueCuida = animaisQueCuida.map((element) => element.name )
    const locaisAnimais = animaisQueCuida.map((elements) => elements.location )

    return {
      'id': identidade,
      'fullname': nomeCompleto,
      'species': nomeAnimaisQueCuida,
      'locations': locaisAnimais
    }
    } else if ( objeto.id){
      const empregado = data.employees.find((elemento) =>{ elemento.id === objeto.id});
      const identidade = empregado.id;
      const  nomeCompleto = `${empregado.name} ${empregado.lastName}`;
      const animaisQueCuida = empregado.responsibleFor.filter((element) => element === species.id );
      const nomeAnimaisQueCuida = animaisQueCuida.map((element) => element.name )
      const locaisAnimais = animaisQueCuida.map((elements) => elements.location )

      return {
        'id': identidade,
        'fullname': nomeCompleto,
        'species': nomeAnimaisQueCuida,
        'locations': locaisAnimais
      }
    } else if (!objeto){

        data.employees.map((element) => {
        
          return {
            'id': element.id,
            'fullname': `${element.name} ${element.lastName}`,
            'species': listaAnimais,
            'location':










        })


      }












module.exports = getEmployeesCoverage;
