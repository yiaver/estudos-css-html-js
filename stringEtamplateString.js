// string 
const escola = "escolas"

console.log(escola.charAt(4)) // printa a letra na possição 4
console.log(escola.charAt(7)) // anossa string escola não tem algo na possição 6 mas mesmo assim e printago algo o " " vazio

console.log(escola.charCodeAt(1)) // codigo html do char indicado

console.log(escola.indexOf("c")) // o indice do char indicado
console.log(escola.lastIndexOf("s")) // o indice da ultima ocorencia do char indicado

console.log("0123456789")
console.log(escola.substring(0)) // todos menos o char do indice 0
console.log(escola.substring(0,3)) // do indice 0 ate o 3 sem incluir o 3

console.log(escola.replace("s","$")) // faz um replace da primeira ocorencia
console.log("pão da ".concat(escola).concat("!")) // concatena 