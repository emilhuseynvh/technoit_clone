const happy = document.querySelector('#happy')
const completed = document.querySelector('#completed')
const hours = document.querySelector('#hours')
let x1 = 0
let y1 = 0
let z1 = 0
let interval = setInterval(count, 5)
function count(){
    if (x1<232) {
        x1++
        happy.innerHTML = x1
    }
    if (z1<453) {
        z1++
        completed.innerHTML = z1
    }
    if (y1<521){
        y1++
        hours.innerHTML = y1
    }else{
        clearInterval(interval)
    }
}