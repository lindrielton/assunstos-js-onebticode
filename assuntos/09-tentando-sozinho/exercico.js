
//- **Média Aritmética Simples:** 
// Pode ser calculada somando todos os valores e dividindo
// o total da soma pela quantidade de valores.
    
// media(2, 6, 3, 7, 4) === 4.4
// porque
// 2 + 6 + 3 + 7 + 4 === 22
// e 
// 22 / 5 === 4.4


let mediaSimples = (...list) => {
   let sumValue = list.reduce((acumul, elemento) => acumul + elemento, 0)
   let listWidth = list.length
   return (sumValue / listWidth)
}

console.log(`Média  = ${mediaSimples(2,6,3,7,4)}`)


//- **Média Aritmética Ponderada:** Semelhante à média aritmética simples, 
// porém é possível atribuir um peso a cada valor informado, fazendo com que ele 
// tenha um valor proporcionalmente diferente dos outros. Pode ser calculada somando 
// as multiplicações dos valores pelos seus respectivos pesos e dividindo o total pela 
// soma dos pesos.
    
   // n -> número, p -> peso
   // mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }) === 7.75
   //  porque
   //(7 * 2) + (9 * 5) + (3 * 1) === 62
   // e
   //62 / (2 + 5 + 1) === 7.75


let mediaPonderada = (...nunbers) => {
    let numbresPeso = nunbers.reduce((acumulator, {n, p}) => acumulator + (n * p ?? 1), 0)
    let suwWeight = nunbers.reduce((acumul, peso) => acumul + (peso.p ?? 1), 0)
    
   return numbresPeso / suwWeight
}

console.log(mediaPonderada({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 }))


//- **Mediana:** Pode ser calculada encontrando o valor
//  central de uma sequência de números crescente ou decrescente. 
// Caso existam dois números centrais, a mediana é calculada através da 
// média aritmética simples desses dois números.

//mediana(2, 4, 5, 7, 42, 99) === 6
// porque 5 e 7 estão juntos no centro da sequência e
//media(5, 7) === 6

//mediana(15, 14, 8, 7, 3) === 8
// porque 8 está no centro da sequência


let mediana = (...lista) => {
   let order = [...lista].sort((a, b) => a - b )
   let division = Math.floor(order.length / 2) 
   if(order.length % 2 !== 0){
      return `só tem um numero no centro ${order[division]}` 
   }
   const numparent = order[division - 1]
   const numlist = order[division]
   return mediaSimples(numparent, numlist)
}

console.log(`media = ${mediana(10,8,7,6,5,3)}`)
console.log(`media = ${mediana(2, 4, 5, 7, 42, 99)} `)


// Moda 

//- **Moda:** Pode ser calculada encontrando o 
// valor que mais se repete em um dado conjunto.
    
// Exemplo:

//moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4) === 4
// porque:
// 4 aparece 4 vezes
// 5 e 1 aparecem 2 vezes
// 9, 7, 3, 2 e 0 aparecem 1 vez


let moda = (...list) => {
   let lista = list.map((num)=>[
      num,
      list.filter((n) => n === num).length
      
   ])
 
   lista.sort((a, b) =>  b[1] - a[1])
   console.log(lista)
   return lista[0][0]
   
   
}




console.log(`${moda(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`)