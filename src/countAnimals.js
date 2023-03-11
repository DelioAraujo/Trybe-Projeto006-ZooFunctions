const data = require('../data/zoo_data');

const countAnimals = (animal) => {
 
  // faz um novo array de objetos apenas com a informação "name: popularity".
  const contagemTotal = data.species.map((elemento2) => { return `${elemento2.name}: ${elemento2.popularity}`})
  // separa o objeto que tem o name igual a specie do objeto colocado no argumento
  const bicho = data.species.find((elemento) => elemento.name === animal.species);
  // de acordo com o objeto achado acima, guarda a informação do popularity dele
  const contagemIndividual = bicho.popularity
  // faz um array com todos animais que tem sex igual ao sex do argumento
  const genero = data.species.residents.filter((elemento) => elemento.sex === animal.sex)
  // conta quantos objetos tem dentro do array genero
  const contagemGenero = genero.length

  if(!animal){
    return contagemTotal
  } else if (animal.length === 1){
    return contagemIndividual
  } else if (animal.length ===2){
    return contagemGenero
  }

};

module.exports = countAnimals;
