const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
it ('retorna a quantidade de elefantes se o argumento for count', () => {
    expect(handlerElephants('count')).toBe(4);
})
it ('retorna um array com a relação dos nomes de todos os elefantes se o argumento for names', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
})
it ('retorna a média de idade dos elefantes se o argumento for averageAge', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
})
it ('retorna a localização dos elefantes dentro do Zoológico se o argumento for location', () => {
    expect(handlerElephants('location')).toBe('NW');
})
it ('retorna a popularidade dos elefantes se o argumento for popularity', () => {
    expect(handlerElephants('popularity')).toBe(5);
})
it ('retorna um array com a relação de dias em que é possível visitar os elefantes se o argumento for availability', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
})
});

