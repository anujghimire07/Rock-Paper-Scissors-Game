let boxes = document.querySelectorAll(".box")
let rock = document.querySelector(".rock")
let paper = document.querySelector(".paper")
let scissors = document.querySelector(".scissors")
let para1 = document.querySelector(".para1")
let para2 = document.querySelector(".para2")
let reset = document.querySelector(".reset")
let player = document.querySelector(".player")
let draw = document.querySelector(".draw")
let computer = document.querySelector(".computer")
let comp
let playerwin = 0
let compwin = 0
let drawwin = 0
player.innerText = `Player: ${playerwin}`
draw.innerText = `Draw: ${drawwin}`
computer.innerText = `Computer: ${compwin}`
function calc() {
    comp = Math.floor(Math.random() * 3) + 1
}
//1: rock
//2: paper
//3: scissors
rock.addEventListener("click", () => {
    calc()
    if (comp === 1) {
        para1.innerText = "computer chose rock"
        para2.innerText = "DRAW!!"
        drawwin++
        draw.innerText = `Draw: ${drawwin}`
    }
    else if (comp === 2) {
        para1.innerText = "computer chose paper"
        para2.innerText = "YOU LOSE!"
        compwin++
        computer.innerText = `Computer: ${compwin}`
    }
    else if (comp === 3) {
        para1.innerText = "computer chose scissors"
        para2.innerText = "YOU WIN"
        playerwin++
        player.innerText = `Player: ${playerwin}`
    }
})
paper.addEventListener("click", () => {
    calc()
    if (comp === 2) {
        drawwin++
        para1.innerText = "computer chose paper"
        para2.innerText = "DRAW!!"
        draw.innerText = `Draw: ${drawwin}`
    }
    else if (comp === 3) {
        compwin++
        para1.innerText = "computer chose scissors"
        para2.innerText = "YOU LOSE!"
        computer.innerText = `Computer: ${compwin}`
    }
    else if (comp === 1) {
        playerwin++
        para1.innerText = "computer chose rock"
        para2.innerText = "YOU WIN!"
        player.innerText = `Player: ${playerwin}`
    }
})
scissors.addEventListener("click", () => {
    calc()
    if (comp === 3) {
        drawwin++
        para1.innerText = "computer chose scissors"
        para2.innerText = "DRAW!!"
        draw.innerText = `Draw: ${drawwin}`
    }
    else if (comp === 1) {
        compwin++
        para1.innerText = "computer chose rock"
        para2.innerText = "YOU LOSE!"
        computer.innerText = `Computer: ${compwin}`
    }
    else if (comp === 2) {
        playerwin++
        para1.innerText = "computer chose paper"
        para2.innerText = "YOU WIN!"
        player.innerText = `Player: ${playerwin}`
    }
})

boxes.forEach(element => {
    element.addEventListener("click", () => {
        boxes.forEach(e => {
            e.disabled = true
        })
    })
})

reset.addEventListener("click", () => {
    para1.innerText = ""
    para2.innerText = ""
    enable()
    calc()

})
function enable() {
    boxes.forEach(element => {
        element.disabled = false
    });
}