
const a = 0  // para o js isso é o mesmo que false

const b = null // para o js isso é o mesmo que false
 
const c = 'teste' // true

console.log(a || b || c) // retorna o teste pois ele tem uma strind 


// operador de coalecencia nula  ele considera tudo
//  menos undefanid ou null


console.log(a ?? b ?? c ) // retornou valor de a
console.log(b ?? c) // retornou o valor de c



// exemplo 2


const number = 0

const numeroReal = number ?? 20 
// se number for undefined ou null numeroReal 
// ia ser == 20 

console.log({number, numeroReal})



const numbera = 0

const validador = numbera || 42 

// o validador vai receber o valor de 42
// pois o ou do js identifica numbera como um null ou false
// ele viu que numbera é conversivel para falso e pulou para o 42

console.log({numbera, validador})



// ex 03


let cont = null ?? 100

console.log({cont}) // 100

let cheked = undefined ?? false

console.log({cheked}) // false pois só não é aceito null ou undefined


// isso serve para fazer verifições  caso não recebemos valores validos de alguma aplicação
// ou ate mesmo de um usuario
// caso sejá nulo podemos inserir um valor pre-selecionado










