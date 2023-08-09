//let agora = new Date()
//let hora = agora.getHours()
let hora = 20
console.log(`Agora são exatamento ${hora} horas`)
if(hora < 12 && hora > 6){
    console.log('Bom dia.')
} else if(hora <= 18 && hora > 6) {
    console.log('Boa tarde.')
} else if(hora < 6){
    console.log('Boa madrugada.')
} 
else {
    console.log('Boa noite.')
}
