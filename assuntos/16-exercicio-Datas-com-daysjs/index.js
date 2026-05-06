

   const  dayjs = require("dayjs")
   

  
    
    function birthday(date){
        const birthday = dayjs(date)
        const today = dayjs()

       //pegando a diferença da data atual para a data da pessoa que vai resultar na idade da pessoa
        const dateAcutual = today.diff(birthday, 'year')
       //adicinando a idade que a pessoa tem na data de nascimento  somando mais um, isso vai resultar no prooximo ano
        const  nextBirthday = birthday.add(dateAcutual + 1, 'year')
        // pegando os dias que faltão para o proximo aniversario, somamdo + 1 para que ele não arredonte um aniversario 
        // no dia atual para 0
        const daystoNextBorthday = nextBirthday.diff(today, 'day') + 1


        console.log(`idade: ${dateAcutual} `)
        console.log(`proximo aniversário ${nextBirthday.format('DD/MM/YYYY')}`)
        console.log(`faltão ${daystoNextBorthday} dias para o seu aniversário`)
    }
    



console.log(birthday('1999-04-25'))