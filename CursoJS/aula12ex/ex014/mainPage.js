function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${minuto}`

    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = "manha.png"
        document.body.style.background = "#fcd14d"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = "tarde.png"
        document.body.style.background = "#feb489"
    } else {
        //boa noite
        img.src = "noite.png"
        document.body.style.background = "#7b8993"
    }
}