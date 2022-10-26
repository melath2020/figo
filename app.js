// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("navbar-header").style.top = "0";
  } else {
    document.getElementById("navbar-header").style.top = "-250px";
  }
}


// mobile nav

var menu= document.querySelector('#nav-btn')
var menuwrapper=document.querySelector('.mobile-nav-wrapper')
var close= document.querySelector('#close-btn')
var nav= document.querySelector('#nav-btns')
var mobilenav=document.querySelector('.mobile-nav-wrappers')
var remove= document.querySelector('#close-btns')

menu.addEventListener('click',function(e){
    menuwrapper.style.display='inline-block';
    close.style.display='inline-block';
    menu.style.display='none';
    remove.style.display='inline-block';
    nav.style.display='none';

})

close.addEventListener('click',function(e){
    menuwrapper.style.display='none';
    close.style.display='none';
    menu.style.display='inline-block';
    mobilenav.style.display='none';
    remove.style.display='none';
    nav.style.display='inline-block';
})




nav.addEventListener('click',function(e){
    mobilenav.style.display='inline-block';
    remove.style.display='inline-block';
    nav.style.display='none'
    close.style.display='inline-block';
    menu.style.display='none';
    menuwrapper.style.display='none';
})

remove.addEventListener('click',function(e){
  menuwrapper.style.display='none';
    mobilenav.style.display='none';
    remove.style.display='none';
    nav.style.display='inline-block';
    close.style.display='none';
    menu.style.display='inline-block';
    
})























// tab-section
function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();




$(document).ready(function(){
    
    $('.items').slick({
  dots: true,
  infinite: true,
  speed: 800,
 autoplay: true,
 autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
          });