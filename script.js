$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20){
      $('.navbar').addClass("sticky");
    }else{
      $('.navbar').removeClass("sticky");
    }
  });


  //toggle menu/navbar script
  $('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });


// typing animation Script
var typed= new Typed(".typing",{
  strings :["Frontend Developer.","Web Designer.","Freelancer.","Blogger."],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});

var typed= new Typed(".typing-2",{
  strings :["Frontend Developer.","Web Designer.","Freelancer.","Blogger."],
  typeSpeed:100,
  backSpeed:60,
  loop:true
});




  //owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    Responsive:{
      0:{
        item: 1,
        nav: false
      },
      600:{
        item: 2,
        nav: false
      },
      1000:{
        item: 3,
        nav: false
      }
    }
  });
});
