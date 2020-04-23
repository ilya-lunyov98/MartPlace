$(function(){
    $(document).ready(function(){
        $('.slider__carousel').slick({
            appendArrows:$('.slider-controls__buttons'),      
            nextArrow:'<button type="button" class="slick-next">></button>',
            prevArrow:'<button type="button" class="slick-prev"><</button>'
        });
      });

      var mixer = mixitup('.mixer-mix');

      $(document).ready(function(){
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
      });
      
      $('input, .mainscreen__form select').styler();

      $('input, .mixer__select').styler();
})