
function dataactual(date){
   let daysjs = require("dayjs")
   const relativeTime = require('dayjs/plugin/relativeTime')
   daysjs.extend(relativeTime)

  
    let checando = daysjs(date, 'YYYY-MM-DD').isValid()// se e valido
    let anoaActual =  new Date()
   
    if(checando === true){
          let padranbrasilian = daysjs(date).format('DD/MM/YYYY')// passando para o formato brasileiro
          let dateAtual = daysjs(date).fromNow()// calculando a idade
          let datNascimento = daysjs(date)
          let dayrestant = datNascimento.diff(anoaActual, 'year')
           console.log(`sua idade atual é   : ${dateAtual} : no padrão brasileiro fica assim : ${padranbrasilian} `)  
           
    }if(datNascimento < anoaActual){
         
    }
    
    
        
        
       
    

      

}


console.log(dataactual('04-25-1999'))