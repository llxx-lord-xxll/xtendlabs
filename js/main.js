let interacted = false;
jQuery(document).ready(function ($){
  // Video Player
  $('.player video').each(function (index,elem){
    elem.controls = false;
  });
  $('.player').before().click(function (e) {
    $(this).find('video').get(0).play();
  });
  $('video').on('pause',function (e){
    $(this).parent().removeClass('hide-before');
    this.controls = false;
  })
  $('video').on('play',function (e){
    $(this).parent().addClass('hide-before');
    this.controls = true;
  })

  $('video').on('seeking',function (e){
    $(this).parent().addClass('hide-before');
    this.controls = true;
  })

  $('video').on('seeked',function (e){
    $(this).parent().addClass('hide-before');
    this.play();
    this.controls = true;
  })
  // Video Player End

  // this function runs every time you are scrolling

  $(window).scroll(function() {
    var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
    var top_of_screen = $(window).scrollTop();

    $('video').each(function (index,item){
      var top_of_element = $(item).offset().top;
      var bottom_of_element = $(item).offset().top + $(item).outerHeight();
      if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
        if (item.paused && $(item).attr('autoplay') && interacted){
          item.play();
        }
      } else {
        if (!item.paused){
          item.pause();
        }
      }
    });



  });
  $(window).bind("click", function (e){
    interacted = true;
  });
})




