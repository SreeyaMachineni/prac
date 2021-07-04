let count = document.getElementById('count')
let increase = document.getElementById('inc')
let reset = document.getElementById('reset')
let decrease = document.getElementById('dec')

let counter = 0;

setCount(counter);


increase.addEventListener('click',()=>{
    setCount(++counter)
})
decrease.addEventListener('click',()=>{
    setCount(--counter)
})
reset.addEventListener('click',()=>{
    setCount(counter = 0)
})

function setCount(counter){
    count.textContent = counter;
    // debugger
    switch(true){
        case (counter == 0):
            count.style.color = 'black'
            break;
        case (counter > 0):
            count.style.color = 'green'
            break;
        case (counter < 0):
            count.style.color = 'red'
            break
    }
}