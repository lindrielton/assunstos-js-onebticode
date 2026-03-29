
// diferente de passar um array declarado, 
// podemos trabalhar com varios elementos
function somaRest(...list){
       return list.reduce((acumula, number) => acumula + number, 0)
       // sempre que tivermos trabalhando com rest parametros 
       // temos que colocar eles para o final de uma lista de parametros em uma função
       // pois eles vão pegar todos os parametros e executar o que a função pede,
       // caso contrario vai ocorrer um error
}

console.log(somaRest(1,2,3,4,5,6))
console.log(somaRest(3,5,10))
console.log(somaRest(1,30,40))





// sem o rest ficaria assim
function somaarray(array){
    return array.reduce((acum,numatual) => acum + numatual, 0)
}

let array = [1,2,3,4,5,6]

console.log(somaarray(array))
