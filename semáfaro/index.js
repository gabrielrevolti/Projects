const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafficLight = (ev) =>{
    stopAuto()
    turnOn[ev.target.id]()
}

const nextIndex = () => colorIndex =  colorIndex < 2 ? ++colorIndex : 0

const changeColor = () => {
    const colors = ['red', 'yellow', 'green']
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAuto = () => {
    clearInterval(intervalId)
}

const turnOn = {
    'red': () => img.src = 'img/vermelho.png',
    'yellow': () => img.src = 'img/amarelo.png',
    'green': () => img.src = 'img/verde.png',
    'auto': () => intervalId = setInterval(changeColor, 1000)
}

buttons.addEventListener('click', trafficLight)


//'auto': () => setTimeout(changeColor, 1000) setTimout serve para fazer uma ação após um tempo, porém uma vez só.