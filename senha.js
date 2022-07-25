let rs = require ('readline-sync')

let senha = rs.questionInt("digite uma senha: ")

if (senha === 1234){
    console.log("senha correta! acesso permitido.")
}else{
    console.log("senha incorreta! acesso negado.")
}