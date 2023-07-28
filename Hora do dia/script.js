function carregar(){
  let msg = document.getElementById('msg')
  let img = document.getElementById('imagem')
  let data = new Date()
  let hora = data.getHours()
  let minutes = data.getMinutes()
  if(minutes >= 0 && minutes <= 9 ){
    msg.innerHTML = `Agora são ${hora}:0${minutes}`
  }else{
    msg.innerHTML = `Agora são ${hora}:${minutes}`
  }
  if(hora >= 4 && hora < 12){
    img.scr = 'imagens/dia1.jpg'
    document.body.style.background = '#4893CA'
  }else if(hora >= 12 && hora < 18){
    img.src = 'imagens/tarde1.jpg'
    document.body.style.background = '#b9846f'
  }else{
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#1C323D'
  }
}



