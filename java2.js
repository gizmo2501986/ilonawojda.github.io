'use strickt';

const trening1 = document.querySelector('.trening-1');
const trening2 = document.querySelector('.trening-2');
const trening3 = document.querySelector('.trening-3');
const conbtn = document.querySelector('.przycisk');
const treningtxt = document.querySelector('.trening-1-box2');

const ig2 = document.querySelector('.instagram-2');
const fb2 = document.querySelector('.facebook-2');

const nav = document.querySelector('.nav');

const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');

const burger = document.querySelector('.burger');


const idiota = document.querySelector('.idiota');

const texttop = document.querySelector('.text-top');
const textbottom = document.querySelectorAll('.text-bottom');

const fb = document.querySelector('.facebook');
const ig = document.querySelector('.instagram');




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollBottom > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".nav").style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    nav.style.transition = '0.2s linear'
  } else {
    document.querySelector(".nav").style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
} 

texttop.style.opacity = '0';




burger.addEventListener('click', function() {

    
  if (nav.style.transform === 'translateY(0%)') {
      nav.style.transform = 'translateY(-100%)';
      nav.style.backgroundColor = 'black';
  } 

  else  {
      nav.style.transform = 'translateY(0%)';
      nav.style.backgroundColor = 'black';
  }
  

})






const opacity2 = function() {
    texttop.style.opacity = '1';
    texttop.style.transition = '0.5s linear'
}



setTimeout(opacity2, 1000);


const off = function() {

  for (let i = 0; textbottom.length; i++) {
    textbottom[i].style.opacity = '0';
    
  }
  
}

setTimeout(off, 0);



const opacity5 = function() {
  for (let i = 0; textbottom.length; i++) {
    textbottom[i].style.opacity = '1';
    textbottom[i].style.transition = '0.3s linear';
    

  }

}


setTimeout(opacity5, 1700);





fb.addEventListener('mouseenter', function() {
    fb.style.transform = 'rotate(360deg)';
    fb.style.transition =' 0.4s linear';

})

fb.addEventListener('mouseleave', function() {
    fb.style.transition =' 0.2s linear';
    fb.style.transform = 'rotate(0deg)';
})

ig.addEventListener('mouseenter', function() {
    ig.style.transform = 'rotate(-360deg)';
    ig.style.transition =' 0.4s linear';

})

ig.addEventListener('mouseleave', function() {
    ig.style.transition =' 0.2s linear';
    ig.style.transform = 'rotate(-0deg)';
})





