//Page Start-up
$('#overlay').animate({opacity: '.8'}, 1000, function(){
  //Breaker Fade in
  $('.breaker').animate({opacity: '1'}, 1000, function(){
    $('#icon, #topEle, #titleEle, #textEle, #viewButton').animate({marginLeft: '0', opacity: '1'}, 1000);
    $('#backImg').animate({width: '100%'}, 25000);
  });
});

//
//Button Animation Max - width: 158px
//Min - 131px;
$('#viewButton').on({
  mouseenter: function(){
    $(this).animate({width: '158px'}, 100, function(){
      $('#linkArrow').css("display", "inline");
      $('#linkArrow').animate({opacity: '1'}, 100);
    });
  },
  mouseleave: function(){
    $('#linkArrow').animate({opacity: '0'}, 100, function(){
      $('#linkArrow').css("display", "none");
      $('#viewButton').animate({width: '131px'}, 100);
    });   
  }
});
