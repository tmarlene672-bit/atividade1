function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
   

    msg.innerHTML = `Agora são ${hora} horas`
        if (hora >= 0 && hora < 12){
            // Bom dia !
            img.src = 'imag/manha.jpg'
            
        } else if (hora >= 12 && hora <= 18){
            // Boa tarde !
            img.src='imag/tarde.jpg'
        } else{
            // Boa Noite !
            img.src='imag/Noite.jpg'
        }

}