//! NAVBAR
let lastScrollTop = 0;
navbar = document.getElementById('navbar');

window.addEventListener('scroll', function(){
 const scrollTop = window.pageYOffset || this.document.documentElement.scrollTop;

 if (scrollTop > lastScrollTop){
  navbar.style.top = '-50px';
 }else{
 navbar.style.top = '0';
 }

 lastScrollTop = scrollTop;
});


//! TYPED
var typed = new Typed('.typed', {
    strings: ["Passioné de technologie de l'entrepreneuriat et de l'enseignement, ce site est, pour moi un outil par lequel je partage avec vous mes passions. Depuis que j'ai appris qu' \"Enseigner c'est apprendre deux fois\", je me suis fixé pour objectif, de passer 50% de mon temps à apprendre et les 50% restants, de partager (enseigner) ce que j'ai appris. C'est un plaisir pour moi de savoir que je peux rendre service à autrui, que je peux apporter une valeur ajoutée à autrui. Merci de m'aider à m'améliorer à travers vos critiques constructives."],
    typeSpeed: 40,
    // backSpeed: 0
  });