const cdv = document.querySelector('#services')
let kod = ''
let serv = [{
    img: "img/service-design.svg",
    name: 'Application Design',
    about: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    img: "img/service-hosting.svg",
    name: 'Web Hosting',
    about: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    img: "img/service-social.svg",
    name: 'Social Media',
    about: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    img: "img/service-seo.svg",
    name: 'SEO Optimization',
    about: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    img: "img/service-cloud.svg",
    name: 'CLoud Server',
    about: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
{
    img: "img/service-secure.svg",
    name: 'Data Secuity',
    about: 'Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
},
]
let arr = ['100', '200', '300', '100', '200', '300']
for (let i = 0; i < serv.length; i++) {
    kod += `<div id="container-item"  data-aos="fade-up" data-aos-delay="${arr[i]}">
    <div id="container-item-img">
        <img src="${serv[i].img}" alt="" />
    </div>
    <h4>${serv[i].name}</h4>
    <p>Ronsectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</div>`
    
}
cdv.innerHTML = kod