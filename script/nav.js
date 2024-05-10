window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    const navUl = document.querySelectorAll('#menu>li');
    const navDark = document.querySelectorAll('#dark-mod');
    if (window.scrollY > navbar.offsetTop){
      navbar.classList.add('fixed');
      for (let i = 0; i < navUl.length; i++) {
        navUl[i].classList.add('color')
      }
      
    } else {
      navbar.classList.remove('fixed');
      for (let i = 0; i < navUl.length; i++) {
        navUl[i].classList.remove('color')
      }
    }
  });
  