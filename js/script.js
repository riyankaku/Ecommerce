$(document).ready(function(){
    let stickynavbar=$(".navbar").offset().top;
    function stickynav(){
       let  scrollTop=$(window).scrollTop();
       if(scrollTop > stickynavbar){
           $(".navbar").addClass("sticky")
       }
       else{
           $(".navbar").removeClass("sticky")
       }
   
   
    }
    stickynav();
    $(window).scroll(function(){
       stickynav();
    });
    $(".btn6").click(function(){
        $(".about-details").show();
      })
      $(".about-details").click(function(){
        $(".btn6").show();
        $(".about-details").hide();
      });
    $(".btn10").click(function(){
        $(".hide-text").show();
        $("#showbtn").hide();
        $("#hidebtn").show()
      })
      $(".btn11").click(function(){
        $(".hide-text").hide();
        $("#showbtn").show();
        $("#hidebtn").hide()
      });
      $(".btn12").click(function(){
        $(".hide-text1").show();
        $("#showbtn1").hide();
        $("#hidebtn1").show();
      });
      $(".btn13").click(function(){
        $(".hide-text1").hide();
        $("#showbtn1").show();
        $("#hidebtn1").hide()
      });
  })
 

 
 
 var swiper = new Swiper("#swipper1", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop:true,
    speed:1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay:{
        disableOnIntraction: "false",
        delay:2000,
    },
   
    breakpoints:{
        0:{
            slidesPerView: 1,
            spaceBetween: 30,  
        },
        479:{
            slidesPerView: 2,
            spaceBetween: 30,  
        },
        640:{
            slidesPerView: 3,
            spaceBetween: 30,  
        },
        1000:{
            slidesPerView: 4,
            spaceBetween: 30,  
        },

    }
  });


  var swiper = new Swiper("#swipper2", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    speed:1000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // autoplay:{
    //     disableOnIntraction: "false",
    //     delay:2000,
    // },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints:{
        0:{
            slidesPerView: 1,
            spaceBetween: 30,  
        },
        479:{
            slidesPerView: 1,
            spaceBetween: 30,  
        },
        640:{
            slidesPerView: 1,
            spaceBetween: 30,  
        },
        1000:{
            slidesPerView: 1,
            spaceBetween: 30,  
        },

    },
  });
//   document.getElementById('loginForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     if (username === "") {
//         alert("Please enter your username.");
//     } else if (password === "") {
//         alert("Please enter your password.");
//     } 
// });
const signInBtn = document.getElementById('signInBtn');
const signInForm = document.getElementById('signInForm');
const closeBtn = document.getElementById('closeBtn');

// Show form when "Sign In" button is clicked
signInBtn.addEventListener('click', () => {
    signInForm.style.display = 'block';
});

// Hide form when "Close" button is clicked
closeBtn.addEventListener('click', () => {
    signInForm.style.display = 'none';
});

// Optional: Close form if user clicks outside the form
window.addEventListener('click', (e) => {
    if (e.target === signInForm) {
        signInForm.style.display = 'none';
    }
});
  // $(".btn2").click(function(){
  //   $(this).toggleClass("roated")
  //   if($(this).hasClass("roated")){
  //     $(this).text("Go to cart")
  //   }
  //   else{
  //     $(this).text("Add to cart")
  //   }
  // })
//   document.getElementById('signInForm').addEventListener('submit', function(event) {
//     event.preventDefault(); 

   
//     var username = document.getElementById('username').value;
//     var password = document.getElementById('password').value;

//     if (username &&  password ) {
      
//         document.getElementById('successMessage').classList.remove('hidden');
//         document.getElementById('signInForm').style.display="none"
//     }
// });

  