// forma simples

function soma(a,b){
    return a + b
}

console.log(`o resultado da soma é ${soma(2,4)}`)



// anonimas 

let anonimasfunction = function(a,r){
    return a - r
}

console.log(` a subtração é : ${anonimasfunction(4,3)}`)



// arrows
let som = (a,b) => a + b

console.log(`a soma é ${som(8,20)}`)


// dependendo da arrows não precisamos usar parentes , quando só for um argumento
//ex



let doble = n => `o dobro de ${n} é ${n*2}` 
let valor = 2
console.log(doble(valor))


// filtrando um elemento 


const towns = ["sousa", 'gerico', 'patos', 'catole', 'Riacho']

let filter = towns.filter(list => list === 'Riacho')

console.log(`sua cidade é ${filter}`)

//ex 02

const cidades2 = ["sousa", 'gerico', 'patos', 'catole', 'Riacho']

let filtrando = cidades2.filter(list => list[0] === 's' )

console.log(`filtrando uma cidade pela primeira letra:  ${filtrando}`)