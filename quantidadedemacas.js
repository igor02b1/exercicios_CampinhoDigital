let rs = require ('readline-sync');

const  quantmacas = rs.questionInt("quantas maçacls foram compradas: ")
if (quantmacas < 12){
    let resultado1 = quantmacas * 0.30;
    console.log("valor a pagar r$", resultado1)
}else{
    let resultado2 = quantmacas * 0.25;
    console.log("valor a pagar r$", resultado2)
}