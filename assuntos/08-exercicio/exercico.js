

// media simples
let mediaSimples = (...lista) => {
  let soma =  lista.reduce((acumula,list) => acumula + list ,0)
  let quantidade = lista.length
  return soma / quantidade
  

}
  
console.log(mediaSimples(2,6,3,7,4))



// media Aritimética Ponderada

let mediaPonderada = (...media) => {
     let destru = media.reduce((acumulado, {n, p} ) =>  acumulado + (n * p) ,0)
     let weightsum = media.reduce((accum, entry) => accum + entry.p, 0)
     return destru / weightsum
    

    }   


console.log(mediaPonderada({n:7, p:2}, {n:9,p:5}, {n:3,p:1}))