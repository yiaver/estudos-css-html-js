let vale

console.log(vale) // undefined siguinifica que não ha valor definido para aquela variavel

vale = null //ausencia de valor , mas ja foi definido um valor para vale
console.log(vale) // sempre usar nulo para zerar valores de uma variavel

// console.log(vale.tostring()) // elemenstos null não tem esse tipo de função

const vale1 = {
    nome:"jhonas"
}

vale1.nome = undefined // evitar definir algo como undefined 
vale1.nome =null // usar null para zerar 
console.log(vale1)

// quando usamos objetos ou funções ultilizamos uma passagem por referencia na memoria

const a = {nome:"nino"}
const b = a

console.log(a) 
console.log(b)

b.nome= "nelson" // quando eu mudo o valor eu mudo o valor na memoria 
console.log(a) // a variavel a que esta apontado  para o memso endereço de b vai notar as alterações
console.log(b)

// quando trabalhamos com tipos primitivos ultilizamos passagem por copia de valor

let c = 10
let d = c // d copia o valor de c e atribui a variavel
console.log(c)
console.log(d)

d = 20 // quando mudo o valor isso so alcança d 
console.log(c)
console.log(d)