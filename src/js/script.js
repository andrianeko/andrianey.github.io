$(window).load(function() {
    $('.preloader').fadeOut('slow');
 });
 window.addEventListener('load' , function(){
   function start(){
   document.getElementById('Top').style.animation = "entrance 0.8s ease-out";
   }
 });



 function NewTab() { 
             window.open( 
               "https://bit.ly/2nmipMR","_blank"); 
         } 
 
 function Instagram() { 
             window.open( 
               "https://instagram.com/andrian.ey","_blank"); 
         } 
 
 function Dribbble() { 
             window.open( 
               "https://dribbble.com/andrianey","_blank"); 
         } 
 
 function Behance() { 
             window.open( 
               "https://behance.net/andrianey","_blank"); 
         } 
 
 function Email() { 
             window.open( 
               "mailto:andrianeko.037@gmail.com","_blank"); 
         } 
 
 function Telegram() { 
             window.open( 
               "https://t.me/andrianey","_blank"); 
         } 
 
 
 function LinkedIn() { 
             window.open( 
               "https://Linkedin.com/in/andrianey","_blank"); 
         } 
 function Issuu() { 
            window.open( 
              "https://issuu.com/andrianey","_blank"); 
        } 

        $( ".card" ).mousedown(function() {
          $( this ).addClass("active");
          $( ".showtext-wrapper" ).addClass("active");
          $( ".showimage-wrapper" ).addClass("active");
        });
        $( ".card" ).mouseleave(function() {
          $( this ).removeClass("active");
          $( ".showtext-wrapper" ).removeClass("active");
          $( ".showimage-wrapper" ).removeClass("active");
        });
