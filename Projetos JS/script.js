function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'imagemmanha.jpg.jpg'
        document.body.style.background = '#f7d7be'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        document.body.style.background = '#7a443a'
        img.src = 'imagemtarde.jpg.jpg'
    } else {
        //BOA NOITE!
        img.src = 'imagemnoite.jpg.jpg'
        document.body.style.background = '#041124'
    }
}

