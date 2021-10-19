const { Fireworks } = require("fireworks-js")

const container = document.querySelector('.fireworks-container')

const fireworks = new Fireworks(container)

window.addEventListener('click', ()=>{
    console.log(fireworks);
})

const form = document.querySelector('#form')
const input = document.querySelector('input')
const button = document.querySelector('button')

let player

form.addEventListener('submit', (e)=> e.preventDefault())

button.addEventListener('click', ()=> {
    player = input.value 
    form.style.display = 'none'
})

const section = document.querySelector('.section')
const playerLives = document.querySelector('.player-lives')

let lives = 10
playerLives.textContent = lives

//const player = prompt('whats your name')

//getting data
const getData = () => [
    {src: "./images/choc.jpeg", name: "choc"},
    {src: "./images/roza.jpeg", name: "roza"},
    {src: "./images/deer.jpeg", name: "deer"},
    {src: "./images/swan.jpeg", name: "swan"},
    {src: "./images/golf.jpeg", name: "golf"},
    {src: "./images/squid.jpeg", name: "squid"},
    {src: "./images/star.jpeg", name: "star"},
    {src: "./images/town.jpeg", name: "town"},
    {src: "./images/choc.jpeg", name: "choc"},
    {src: "./images/roza.jpeg", name: "roza"},
    {src: "./images/deer.jpeg", name: "deer"},
    {src: "./images/swan.jpeg", name: "swan"},
    {src: "./images/golf.jpeg", name: "golf"},
    {src: "./images/squid.jpeg", name: "squid"},
    {src: "./images/star.jpeg", name: "star"},
    {src: "./images/town.jpeg", name: "town"},
]

const randomize = ()=>{
    const cardData = getData()
    cardData.sort(()=> Math.random() - 0.5)
    return cardData
}

//generating html
const cardGenerator = () => {
    const cardData = randomize()
    
    cardData.forEach(item => {
        const card = document.createElement('div')
        const face = document.createElement('img')
        const back = document.createElement('div')
    
        card.classList = 'card'
        face.classList = 'face'
        back.classList = 'back'
    
        face.src = item.src
        card.setAttribute('name', item.name)

        section.appendChild(card)
        card.appendChild(face)
        card.appendChild(back)

        card.addEventListener('click', (e)=>{
            card.classList.toggle('toggle')
            checkCards(e)
        })
    })
}

const checkCards = (e) =>{
    const clickedCard = e.target
    clickedCard.classList.add('flipped')

    const flippedCards = document.querySelectorAll('.flipped')
    const toggleCards=document.querySelectorAll('.toggle')
    
    if(flippedCards.length === 2){

        if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
            console.log('correct');
            flippedCards.forEach(card =>{
                card.classList.remove('flipped')
                card.style.pointerEvents = 'none'
            })
        } 
        else {
            console.log('wrong');
            flippedCards.forEach(card =>{
                card.classList.remove('flipped')
                    setTimeout(()=> {
                card.classList.remove('toggle')
                }, 1000)
         })   
            lives--
            playerLives.textContent = lives
            if(lives === 0){
                restart(`${player} lost`)
            } 
        }}

    if(toggleCards.length === 16){
        restart(`${player} won`)
    }
}

const restart = (text) =>{
    
    let cardData = randomize()
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')
    section.style.pointerEvents = 'none'
    
    cardData.forEach((item,index)=>{
    
        setTimeout(()=>{
            
            cards[index].classList.remove('toggle')
            
            setTimeout(()=>{
                cards[index].style.pointerEvents = 'all'
                faces[index].src = item.src
                cards[index].setAttribute('name', item.name)
                section.style.pointerEvents = 'all'
            },1000)
        }, 1000)
    })
    lives = 10
    playerLives.textContent = lives

    setTimeout(()=> window.alert(text), 1000)
}

cardGenerator()

