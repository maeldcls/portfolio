let burger = document.querySelector('.burger');
let home = document.querySelector('.home-part1');
let nav = document.querySelector('nav');
let part1 = document.querySelector('.home-part1');
let header = document.querySelector('.home-part3');
let left = document.querySelector('.part2-left');
let right = document.querySelector('.part2-right');



burger.addEventListener("click", (event) => {
    if(nav.classList.contains('block')){
        nav.classList.remove('block');
        home.classList.remove('flex');
        part1.classList.remove('screen');
    }else{
        nav.classList.add('block');
        home.classList.add('flex');
        part1.classList.add('screen');
    }
 
});

function toggleMenuVisibility() {
    const screenWidth = window.innerWidth;
  
    if (screenWidth <= 768) {
      // Show the menu if the screen width is small

    } else {
      // Hide the menu if the screen width is larger
      nav.classList.remove('block');
      home.classList.remove('flex');
      part1.classList.remove('screen');
    }
  }


  window.addEventListener('load', toggleMenuVisibility);

// Call the function on window resize
window.addEventListener('resize', toggleMenuVisibility);


