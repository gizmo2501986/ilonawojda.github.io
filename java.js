'use strickt';

const trening1 = document.querySelector('.trening-1');
const trening2 = document.querySelector('.trening-2');
const trening3 = document.querySelector('.trening-3');
const conbtn = document.querySelector('.przycisk');
const treningtxt = document.querySelector('.trening-1-box2');

const ig2 = document.querySelector('.instagram-2');
const fb2 = document.querySelector('.facebook-2');

const nav = document.querySelector('.nav');
const burger = document.querySelector('.burger');


const card1 = document.querySelector('.card-1');
const card2 = document.querySelector('.card-2');
const card3 = document.querySelector('.card-3');


const stupid = document.querySelector('.stupid');
const text2 = document.querySelector('.text-2');




const fb = document.querySelector('.facebook');
const ig = document.querySelector('.instagram');

const kontaktfb = document.querySelector('.kontakt-fb');
const kontaktig = document.querySelector('.kontakt-ig');




window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollBottom > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector(".nav").style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    nav.style.transition = '0.2s linear'
  } else {
    document.querySelector(".nav").style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
} 




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


card1.addEventListener('mouseenter', function() {
    
    card1.style.transform = 'scale(1.03)';
    card1.style.transition =' 0.2s linear';
})

card1.addEventListener('mouseleave', function() {
    card1.style.transform = 'scale(1.0)';
})


card2.addEventListener('mouseenter', function() {
    
    card2.style.transform = 'scale(1.03)';
    card2.style.transition =' 0.2s linear';
})

card2.addEventListener('mouseleave', function() {
    card2.style.transform = 'scale(1.0)';
})


card3.addEventListener('mouseenter', function() {
    
    card3.style.transform = 'scale(1.03)';
    card3.style.transition =' 0.2s linear';
})

card3.addEventListener('mouseleave', function() {
    card3.style.transform = 'scale(1.0)';
})


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





text2.style.opacity = '0';
text2.style.transition = 'all 0.8s linear';
stupid.style.transform = 'translatey(-200%)';

const funkcjaidiota = function() {
    stupid.style.transform = 'translatey(0%)';
    stupid.style.transition = '0.6s linear'
}

setTimeout(funkcjaidiota, 800);


const text2opacity = function() {
    text2.style.opacity = '1';
    
}

setTimeout(text2opacity, 2000);



kontaktfb.addEventListener('mouseenter', function() {
    kontaktfb.style.transform ='scale(1.03)';
    kontaktfb.style.transition ='all 0.3s linear';

})

kontaktfb.addEventListener('mouseleave', function() {
    kontaktfb.style.transform ='scale(1.0)';
    

})

kontaktig.addEventListener('mouseenter', function() {
    kontaktig.style.transform ='scale(1.03)';
    kontaktig.style.transition ='all 0.3s linear';

})

kontaktig.addEventListener('mouseleave', function() {
    kontaktig.style.transform ='scale(1.0)';
    

})

