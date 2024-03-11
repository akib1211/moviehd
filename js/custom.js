$('.banner').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
    nextArrow: 'false',
    prevArrow: false,
    dots: true,
     autoplay: true,
     centerPadding: '60px',
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
        slidesToShow: 3,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          autoplay: true,
      }
    }
    
  ]
});

//function check(){
//    var user_name=document.getElementById('name');
//    var user_email=document.getElementById('email');
//    if(user_name.value==''){
//        alert('Enter your Name');
//        user_name.focus();
//        return false;
//    }
//    if(user_email.value==''){
//        alert('Enter Your Email');
//        user_email.focus();
//        return false;
//    }
//    
//}


$('.upcoming_movie').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 2,
     autoplay: true,
//  adaptiveHeight: true
    nextArrow: false,
    prevArrow: false,
//    responsive: [
//    {
//      breakpoint: 1024,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2,
//        infinite: true,
//        dots: false,
//      }
//        
//        
//    }]
    
    
    
    
    
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
          dots: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
    
});


function check(){
    var user_bkash=document.getElementById('bkash');
    var user_nogot=document.getElementById('nogot');
    var user_amount=document.getElementById('ammount');
    if(user_bkash.value==''){
        document.getElementById('bk').innerHTML='Add Your Number';
//        document.getElementById('Add Your Bkash Number');
        user_bkash.focus();
        return false;
    }
    if(user_nogot.value==''){
        document.getElementById('ngt').innerHTML='Add Your Number';
        user_nogot.focus();
        return false;
    }
    if(user_amount.value==''){
        alert('Add Ammount');
        user_amount.focus();
        return false;
    }
    
}





//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




