function carregar(){
    let msg = document.querySelector("div#msg")
    let img = document.querySelector("img#imagem")
    let data = new Date()
    let hora = data.getHours()
    //let hora = 2
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        msg.innerHTML += `<p>Bom Dia!</p>`
        img.src = 'manhã.png'
        document.body.style.background = '#fbcca7'
    }
    else if(hora >= 12 && hora <= 18){
        msg.innerHTML += `<p>Boa Tarde!</p>`
        img.src = 'tarde.png'
        document.body.style.background = '#acd3ec'
    } else if(hora > 23) {
        alert('Hora inválida')
    }
    else{
        msg.innerHTML += `<p>Boa Noite!</p>`
        img.src = 'noite.png'
        document.body.style.background = '#030303'
    }
}

