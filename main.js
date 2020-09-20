$(document).ready(function(){
    
    //(selector).action();
    
    
  /*==========1===================*/  
    
    $('.al-1').show(); 
    
    
     /*==========2===================*/  
    
      $('.btn1').click(function(){
         $('.hmn').hide(2000);  
     });
    
    /*=====change css====*/
    
     $('.btn2').click(function(){
     $('.hmn1').css("background-color","green"); 
  });
    
    
      $('.btn3').click(function(){
     $('.hmn2').css({
         "background-color":"tomato",
         "color":"white"
     }); 
  });
    
     /*=====box show====*/
    
     $('.btn4').click(function(){
     $('.box1').fadeIn();
         $('.box2').fadeIn('slow');
         $('.box3').fadeIn(2000);
         
         // fadeOut / fadeToggle /   fadeTo dia opacity baboher koragi
         
         //   $('.box2').fadeTo('slow', 0.3);
  });

    
    
     /*=====click text====*/
    
     $('.lorem').click(function(){
     $('.lorem1').slideToggle(); 
         // slideDown / slideUp  /  slideToggle
  });
    
    
    
});
