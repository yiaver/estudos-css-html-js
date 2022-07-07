let taativo = true
console.log(taativo)

taativo = false

console.log(!!taativo) // ! e uma negação se usarmos !! negamos a negação , e uma boa forma de converter algo para bolean

console.log("Os verdadeiros ...")
console.log(!!1)
console.log(!!3)
console.log(!!" ")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(taativo = 1))

console.log("Os falsos ...")

console.log(!!'')
console.log(!!0)
console.log(!!NaN)
console.log(!!null)
console.log(!!undefined)
console.log(!!(taativo = 0))

console.log("pra finalizar ...")

console.log(!!"" || 0 || false || "ola") // || siguinifica ou
console.log("" || 0 || false || "ola") // esse tipo de estrutura retonar o unico valor verdadeiro

let nome = ''
console.log(nome || "Nome não informado")
