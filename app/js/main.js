$(function(){
    $(document).ready(function(){
        $('.slider__carousel').slick({
            appendArrows:$('.slider-controls__buttons'),      
            nextArrow:'<button type="button" class="slick-next">></button>',
            prevArrow:'<button type="button" class="slick-prev"><</button>'
        });
      });

      var mixer = mixitup('.mixer-mix');
})