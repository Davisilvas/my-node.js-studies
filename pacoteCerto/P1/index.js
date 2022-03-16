const operacoes = require('./calc.js');
const areas = require('./area.js')

module.exports = {...areas, ...operacoes};