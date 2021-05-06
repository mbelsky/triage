const awesomeDependency = require('awesome-dependency')
const awesomeComplexDependency = require('awesome-complex-dependency')
const awesomeComplexDependencyAlternativeRequire = require('awesome-complex-dependency/src/main.js')

console.log(`awesome-dependency output:`, awesomeDependency());
console.log(`awesome-complex-dependency output: `, awesomeComplexDependency());
console.log(`awesome-complex-dependency alternative require output: `, awesomeComplexDependencyAlternativeRequire());
