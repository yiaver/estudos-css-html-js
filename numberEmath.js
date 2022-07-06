// Number com N e uma função e number com n e um tipo
const numeroNormal = 10
const numeroComNumber = Number("100")

const tipoN1 = typeof(numeroNormal)
const tipoN2 = typeof(numeroComNumber)

console.log(numeroNormal,numeroComNumber,tipoN1,tipoN2)

// Number tem varia funções como por exemplo:
console.log(numeroComNumber.toFixed(3)) // delimita as casas decimais depois do . 
console.log(numeroComNumber.toString()) // converte para string
console.log(numeroComNumber.valueOf()) // retorna o valor primitivo 

//math
const numeroPI = Math.PI
const numeroPotencia = Math.pow(2,20)
const link_mais_funcs = "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math"
const tipoMath = typeof(Math)

console.log(`Math e um = ${tipoMath} , tem varias funções como por exemplo \n pi = ${numeroPI}\n pontencia 2**20 = ${numeroPotencia} \nmais informações das funções de math neste link \n ${link_mais_funcs}`)