const featFirst = document.querySelector('#features-first-child')
const featLast = document.querySelector('#features-last-child')
let kodd = ''
let kodLast = ''
let obj1 = [
    {
        name: 'Experience',
        img: 'img/icon-1.svg'
    },
    {
        name: 'Products',
        img: 'img/icon-2.svg'
    },
    {
        name: 'Approach',
        img: 'img/icon-3.svg'
    },
]
let obj2 = [
    {
        name: 'Pricing',
        img: 'img/icon-4.svg'
    },
    {
        name: 'Delivery',
        img: 'img/icon-5.svg'
    },
    {
        name: 'Support',
        img: 'img/icon-6.svg'
    },
]
let arrr = ['100', '200', '300']
for (let i = 0; i < obj1.length; i++) {
    kodd += `<div class="features-items">
        <div data-aos="fade-up" data-aos-delay="${arrr[i]}">
            <h4>${obj1[i].name}</h4>
            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <img src="${obj1[i].img}" alt="${obj1[i].name}" />
    </div>`
    kodLast += `<div class="features-items">
    <img src="${obj2[i].img}" alt="${obj2[i].name}" />
        <div data-aos="fade-up" data-aos-delay="${arrr[i]}">
            <h4>${obj2[i].name}</h4>
            <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
    </div>`

}
featFirst.innerHTML = kodd
featLast.innerHTML = kodLast