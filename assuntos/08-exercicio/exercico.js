

// media simples
let mediaSimples = (...lista) => {
  let soma =  lista.reduce((acumula,list) => acumula + list ,0)
  let quantidade = lista.length
  return soma / quantidade
  

}
  
console.log(mediaSimples(2,6,3,7,4))



// media Aritimética Ponderada

let mediaPonderada = (...media) => {
     let destru = media.reduce((acumulado, {n, p} ) =>  acumulado + (n * (p ?? 1)) ,0)// se p não exitir elesoma  com 1
     let weightsum = media.reduce((accum, entry) => accum + (entry.p ?? 1) ,0) // se peso não exitir é somado com 1
     return destru / weightsum
    

    }   


console.log(mediaPonderada({n:7, p:2}, {n:9}, {n:3,p:1}))


// mediana


 const median = (...numbers) => {
        const ordereNumbers = [...numbers].sort((a,b) => a-b)
        const midle = Math.floor(ordereNumbers.length / 2)
        if(ordereNumbers.length % 2 !== 0){
          return ordereNumbers[midle]
        }

        const firstMedian = ordereNumbers[midle - 1]
        const seconMedian = ordereNumbers[midle]
        return mediaSimples(firstMedian, seconMedian)
        
 }


console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`)
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`)


// moda 

const mode = (...numbers) => {
     const  quantities = numbers.map(num => [
      num,
      numbers.filter(n => num === n).length
     ])
     console.log(quantities)
     quantities.sort((a,b) => b[1] - a[1] )
     return quantities[0][0]
}

console.log(`Moda: ${mode(1, 1, 99,99,99,99,99,99,99,99, 5, 4, 9, 7, 4, 3)}`)