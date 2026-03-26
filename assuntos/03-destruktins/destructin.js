

let caracteristica = {
    nome: 'lucas',
    idade: 1,
    skill: ['js', 'html', 'pup', 'node']
}


const {nome, skill} =  caracteristica

console.log(nome , skill)

// destruquits em arrays


const nomes = ['lucas', 'thomas', 'hiki', 'esthephan']


const [lucas] = nomes
console.log(lucas)


// pegando o array do obijeto

const  [elemento1, elemento2, elemento3] = skill

console.log(elemento1,elemento2,elemento3)