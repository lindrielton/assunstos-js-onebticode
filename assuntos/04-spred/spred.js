const towns = ['prontera', 'Izlude', 'pycon', 'alberta', 'Geffen']
console.log(towns)

console.log(...towns)
console.log(...towns[0])



const towsCop = towns

towsCop.pop()
towsCop.pop()
towsCop.push('juno')


console.log({towns, towsCop}) // ambos sofren alteração pois o tawscop so aponta par o tows
// fazendo com que ele não seja uma copia 


const copiaReal = [...towns]
copiaReal.pop()
copiaReal.push('gutan')

console.log({towns, towsCop, copiaReal})


// usando em obijetos 

const townsObj = {...towns}// desestruturou e colocou em ordem numerica
const townsObjClone = {...townsObj}// fazendo um clone que não vai alterar o horiginal

townsObjClone.test = 'teste'




console.log({townsObj, townsObjClone})