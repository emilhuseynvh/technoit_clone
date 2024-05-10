const portfolioImg = document.querySelector('#portfolio-img')
let portfolio = [
    {
        img:'img/product-1.jpg" '
    },
    {
        img:'img/product-2.jpg" '
    },
    {
        img:'img/product-3.jpg" '
    },
    {
        img:'img/product-4.jpg" '
    },
    {
        img:'img/product-5.jpg" '
    },
    {
        img:'img/product-6.jpg" '
    },
]
for (let i = 0; i < portfolio.length; i++) {
    portfolioImg.innerHTML += `<img class="portfolio-img-element" src="${portfolio[i].img}" alt="">`
    
}