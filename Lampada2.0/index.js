const lamp = document.getElementById('lamp')
const button = document.getElementById('on')

function LigaDesl(){
    if(button.textContent == 'Ligar'){
        lamp.src = 'img/ligada.jpg'
        button.textContent = 'Desligar'
    }else{
        lamp.src = 'img/desligada.jpg'
        button.textContent = 'Ligar'
    }
}


function quebrar(){
    lamp.src = 'img/quebrada.jpg'
    button.removeEventListener('click',LigaDesl)
    lamp.removeEventListener('mouseover',LigaDesl)
    lamp.removeEventListener('mouseleave', LigaDesl)
}

button.addEventListener('click',LigaDesl)
lamp.addEventListener('dblclick', quebrar)
lamp.addEventListener('mouseover', LigaDesl)
lamp.addEventListener('mouseleave', LigaDesl)