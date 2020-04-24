$(function(){
    
        $('.slider__carousel').slick({
            appendArrows:$('.slider-controls__buttons'),      
            nextArrow:'<button type="button" class="slick-next">></button>',
            prevArrow:'<button type="button" class="slick-prev"><</button>'
        });

       $('.slider-sub__items').slick({
            appendArrows:$('.slider-sub-controls__buttons'),      
            nextArrow:'<button type="button" class="slick-next">></button>',
            prevArrow:'<button type="button" class="slick-prev"><</button>',
            adaptiveHeight:true,
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite:true,
            touchThreshold: 10,
        });

    
        
      $('input, select').styler();

      var mixer = mixitup('.mixer-mix');
});