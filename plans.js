const plans = document.querySelector('#plans')
let x = 25
for (let i = 0; i < 3; i++) {
    
    plans.innerHTML += `<div class="plans-element">
    <h2>Basic</h2>
    <h5>$<sub>${x}</sub></h5>
    <ul class="option">
        <li> <i class="fa-regular fa-circle-check"></i> Unlimited GB Space</li>
        <li> <i class="fa-regular fa-circle-check"></i> 30 Domain Names</li>
        <li> <i class="fa-regular fa-circle-check"></i> Free SSL</li>
        <li> <i class="fa-regular fa-circle-check"></i> Daily Backup</li>
        <li> <i class="fa-regular fa-circle-check"></i> Free Templates</li>
        <li> <i class="fa-regular fa-circle-check"></i> Free Email</li>
        <li> <i class="fa-regular fa-circle-check"></i> 10 Databases</li>
        <li> <i class="fa-regular fa-circle-check"></i> Unlimited Email Address</li>
        <li> <i class="fa-regular fa-circle-check"></i> Live Support</li>
    </ul>
    <button class="btn">Order Now</button>
</div>`
x *= 2
    
}