const valores = [9.9,8.2,7.1,6.0,3.3]

console.log(valores[1] , valores[4])

console.log(valores[5]) // caso o valor não exista no array sera retornado undefined 

valores[5]= 4.9

console.log(valores[5])

valores[12] = 5.9

console.log(valores)

console.log(valores.length)

valores.push({id:1},"pano de prato",false, NaN)

console.log(valores)

valores.pop()
valores.pop()
valores.pop() // pop retira o ultimo iten do array
valores.pop()
valores.pop()
delete valores[12] // deletando um valor especifico do array
console.log(valores)

console.log(typeof valores)