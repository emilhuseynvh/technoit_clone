const accr = document.querySelectorAll('.faq-element-accardion') 
const accrFirst = document.querySelector('.faq-element-first')
const chevron = document.querySelectorAll('.fa-chevron-down')
console.log(chevron);
 function change(a){
    accr[a].classList.toggle('active');
    chevron[a+1].classList.toggle('routate');
    for (let i = 0; i < 5; i++) {
        i != a ? accr[i].classList.remove('active') : ''
        i != a ? chevron[i+1].classList.remove('routate') : ''
    }
 }


//  HAMBURGER MENU
const hamburger = document.querySelector('#navbar-hamburger')
const hamburgerOpen = document.querySelector('#hamburger-menu')

function ac(p){
    hamburger.classList.toggle('width')
    p == 1 ? hamburger.classList.add('navbar') : hamburger.classList.remove('navbar')
}

