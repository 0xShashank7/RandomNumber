const number = document.querySelector(".count-number");
const btn = document.querySelector(".reset-number");

btn.addEventListener('click',generateNumber)

function generateNumber(){
    const random = Math.floor(Math.random()*1000 -1)
    number.innerHTML = random
}