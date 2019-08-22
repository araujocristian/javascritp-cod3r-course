const escola = "Cod3r"

console.log(escola.charAt(4)) //retorna caracter
console.log(escola.charAt(5)) //Retorna null
console.log(escola.charCodeAt(3)) //retornar ASCII do caracter
console.log(escola.indexOf('3')) //retorna indice qual o caracter é encontrado

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat('!'))
console.log(escola.replace(3, 'e'))

console.log("Ana,Maria,Pedro".split(','))