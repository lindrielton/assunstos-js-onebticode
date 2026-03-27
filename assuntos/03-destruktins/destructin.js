

let caracteristica = {
    nome: 'lucas',
    idade: 12,
    skill: ['js', 'html', 'pgp', 'node']
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


function creatUser({nome, idade, skill}){
    const id = Math.floor(Math.random()* 9999)
    return {
        id,
        nome,
        idade,
        skill
    }
}


const luke = creatUser(caracteristica)
console.log(luke)