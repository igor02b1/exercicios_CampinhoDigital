let rs = require ('readline-sync')

let numero = rs.question('digite um numero: ')

if (numero % 2 ===0){
    console.log("O numero",numero,"é par")
}else{
    console.log("O numero",numero,"é impar")
}

