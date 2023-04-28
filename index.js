const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const cards = document.querySelectorAll(".learn__card--item")
console.log(cards.length)

let i = 0

/* const autocard = setInterval(()=>{
    retroceder()
},2000) */

 const retroceder = ()=>{
    cards[i].classList.remove("active")
    i--
    if(i<0){
        i = cards.length - 1
    }
    cards[i].classList.add("active") 
}

const avanzar = ()=>{
    cards[i].classList.remove("active")
    i++

    if(i > cards.length -1){
        i=0
    }
    cards[i].classList.add("active")

}

prev.addEventListener("click", ()=>{
    event.preventDefault()
    avanzar()
})

next.addEventListener("click", ()=>{
    event.preventDefault()
    avanzar()
}) 
    