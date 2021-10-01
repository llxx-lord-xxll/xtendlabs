jQuery(document).ready(function ($){
  // Video Player
  $('.player video').each(function (index,elem){
    elem.controls = false;
    console.log(elem);
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
})




