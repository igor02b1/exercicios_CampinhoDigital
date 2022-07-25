let rs = require ('readline-sync');

let anodenasc = parseInt(rs.question('digite seu ano de nascimento: '))
let ano = 2022
if (ano - anodenasc >= 18){
    console.log("voce já está apto para votar!")
}else{
    console.log("voce ainda não possui idade para votar!")
}
