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

    $(function(){
  
      $('.header__link').hover(function(){
        $('.header-drop').fadeToggle(0)}),
          $('.header-drop').hover(function(){
            $('.header-drop').fadeIn(0)}),
              $('.header-drop').mouseleave(function(){
                $('.header-drop').fadeOut(0)})
  

                  
      $('.header__cart').hover(function(){
        $('.cart-drop').fadeToggle(0)}),
          $('.cart-drop').hover(function(){
            $('.cart-drop').fadeIn(0)}),
              $('.cart-drop').mouseleave(function(){
                $('.cart-drop').fadeOut(0)})


      $('.header__envelope').hover(function(){
        $('.envelope-drop').fadeToggle(0)}),
          $('.envelope-drop').hover(function(){
            $('.envelope-drop').fadeIn(0)}),
              $('.envelope-drop').mouseleave(function(){
                $('.envelope-drop').fadeOut(0)})

      $('.header__bell').hover(function(){
        $('.bell-drop').fadeToggle(0)}),
          $('.bell-drop').hover(function(){
            $('.bell-drop').fadeIn(0)}),
              $('.bell-drop').mouseleave(function(){
                $('.bell-drop').fadeOut(0)})


  
        $(".js-range-slider").ionRangeSlider({
          type: "double",
          grid: false,
          min: 0,
          max: 350,
          from: 30,
          to: 300,
          prefix: "$"
      });

        $('.icon-Line_active').click(function(){
          $('.horizontal-productsproducts').addClass('db'),
          $('.middlescreen__products').addClass('dn')
        })
 
          $('.icon-Grid_active').click(function(){
          $('.horizontal-productsproducts').removeClass('db'),
          $('.middlescreen__products').removeClass('dn')
        })
 
        $('.icon-Grid_active').ready(function(){
          $('.icon-Grid_active').addClass('color')
        });
   
        $('.icon-Grid_active').click(function(){
          $(this).addClass('color'),
          $('.icon-Line_active').removeClass('color')
        });
 
        $('.icon-Line_active').click(function(){
          $(this).addClass('color'),
          $('.icon-Grid_active').removeClass('color')
        });

        $('.pagination__disabled').ready(function(){
          $('.pagination__disabled').addClass('dn')
        })
   
        $('.pagination__more').click(function(){
          $('.pagination__disabled').removeClass('dn'),
          $('.pagination__more').addClass('dn')
        })

        $('.header__envelope').click(function(){
          $('.envelope-drop').slideToggle()
          })

          $(function(){
            $(".search__nav li").hover(function(){
              $(this).children('ul').fadeIn(0),
              $(this).children('a').addClass('selected')
            },function(){
              $(this).children('ul').fadeOut(0),
              $(this).children('a').removeClass('selected')
            })
          })

      });