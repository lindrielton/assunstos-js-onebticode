
const str =`{ 
"name": "lindrielton",
"job" : "estudante de tecnologia",
"tecnologias" : ["html", "css", "js"]
}`


console.log(str)

const obj = JSON.parse(str) // trasforma  em um obijeto
console.log(obj)


const str2 = JSON.stringify(obj)
console.log(str2)