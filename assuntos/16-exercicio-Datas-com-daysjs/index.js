
function dataactual(){

    let daysjs = require("dayjs")
    const relativeTime = require('dayjs/plugin/relativeTime')
    daysjs.extend(relativeTime)
    let checando = daysjs('1970-00-00', 'YYYY-MM-DD').isValid()// se e valido
    let padranbrasilian = daysjs('2019-01-25').format('DD/MM/YYYY')// passando para o formato brasileiro
    let dateAtual = daysjs('1999-01-01').fromNow()// calculando a idade

        return {
            checando,
            padranbrasilian,
            dateAtual
        }

}


console.log(dataactual())