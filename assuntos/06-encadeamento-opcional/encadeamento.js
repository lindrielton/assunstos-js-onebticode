const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [{
    name: "Mary",
    address: {
      street: "Some Street",
      number: 89
    }
  }],
  age: 42,
  phone: {
    countryCode: "+55",
    ddd: "22",
    number: "998765432"
  }
}

//console.log(user.friends[0].phone.ddd)
// ele tentou ler phone não achou
//  quando ele passa para ddd
// ele mostra na tele pois ele tenta ler uma propiedade undefanid , é ae que ta o erro.


console.log(user.friends[0]?.phone?.number)
// no encadeamento opicional ele retorna imediatemente sem ler a proxima propiedade
// o argumento que é undefinid
//?. - existe tal propiedade? se sim ele continua.


// antigamente trabalahava-se com varios if , hoje temos eese recurso do encadeamento opcinal



console.log(user.brothers?.[5].name) 
// ele ler o brothers ver que é undefanyd
// depois passa a ler o colchet é nesse caso dá erro, como se ele tentase ler mais  um argumento
// que no caso não existe


