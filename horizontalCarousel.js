const leftBtn = document.getElementById("left-btn")
const rightBtn = document.getElementById("right-btn")
const horizontalCarousel = document.getElementById("horizontal-carousel")

let horizontalValue = 0

function checkHorizontalValue(){

    if (horizontalValue == -75) {
        rightBtn.disabled = true
    }
    else{
        rightBtn.disabled = false
    }
    
    if (horizontalValue == 0) {
        leftBtn.disabled = true
    }
    else{
        leftBtn.disabled = false
    }
}

checkHorizontalValue()

rightBtn.addEventListener("click", function(){
    horizontalCarousel.style.transform = `translateX(${horizontalValue - 25}%)`
    horizontalValue = horizontalValue - 25

    checkHorizontalValue()

})

leftBtn.addEventListener("click", function(){
    horizontalCarousel.style.transform = `translateX(${horizontalValue + 25}%)`
    horizontalValue = horizontalValue + 25

    checkHorizontalValue()
})