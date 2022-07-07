//função sem retorno 
function imprimirsoma(a,b){
    console.log(a+b)
}

imprimirsoma(20,30)
imprimirsoma(30) // vai somar o valor passado com um undefined = NaN
imprimirsoma() // sem parametros = NaN
imprimirsoma(1,10,20,30,22) // vai somar 1 e 10 e ignorar o resto


// função com retorno
function soma (a,b)
{
    return a + b
}

console.log(soma(11,22))
console.log(soma(2))
console.log(soma())

// armazenando uma função em uma variavel ou constante
const soma2 = function(a,b){
    console.log(a + b)
}

soma2 (111,222)

// armazenando uma função arrow em uma variavel

const soma3 =  (a,b) => {
    return a + b
}

console.log(soma3(24,10))

// retorno inplicito

const soma4= (a,b) => a+b

console.log(soma4(13,23))

const print = (a) => console.log(a)

print("hello word")