const downBtnOne = document.getElementById("down-btn")
const upBtnOne = document.getElementById("up-btn")
const vcpOne = document.getElementById("vcp-one")

let verticalValueOne = 0

function checkVerticalValue(){

    if (verticalValueOne == -75) {
        downBtnOne.disabled = true
    }
    else{
        downBtnOne.disabled = false
    }
    
    if (verticalValueOne == 0) {
        upBtnOne.disabled = true
    }
    else{
        upBtnOne.disabled = false
    }
}

checkVerticalValue() 

downBtnOne.addEventListener("click", ()=>{
    vcpOne.style.transform = `translateY(${verticalValueOne - 25}%)`
    verticalValueOne = verticalValueOne - 25
    checkVerticalValue()
})

upBtnOne.addEventListener("click", ()=>{
    vcpOne.style.transform = `translateY(${verticalValueOne + 25}%)`
    verticalValueOne = verticalValueOne + 25
    checkVerticalValue()
})


// POUR LE CAROUSEL ENFANT //

const upBtnKid = document.getElementById("up-btn-kid")
const downBtnKid = document.getElementById("down-btn-kid")
const vcpTwo = document.getElementById("vcp-two")
let verticalValueTwo = 0

function checkVerticalValueTwo(){

    if (verticalValueTwo == -75) {
        downBtnKid.disabled = true
    }
    else{
        downBtnKid.disabled = false
    }
    
    if (verticalValueTwo == 0) {
        upBtnKid.disabled = true
    }
    else{
        upBtnKid.disabled = false
    }
}

checkVerticalValueTwo() 

downBtnKid.addEventListener("click", ()=>{
    vcpTwo.style.transform = `translateY(${verticalValueTwo - 25}%)`
    verticalValueTwo = verticalValueTwo - 25
    checkVerticalValueTwo()
})

upBtnKid.addEventListener("click", ()=>{
    vcpTwo.style.transform = `translateY(${verticalValueTwo + 25}%)`
    verticalValueTwo = verticalValueTwo + 25
    checkVerticalValueTwo()
})

