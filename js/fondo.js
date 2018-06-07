for(var i = 0; i < 10; i++) {
      
  $('.scene').append('<div class="lgh"><div class="rope"></div><div class="bulb"></div><div class="light"></div></div>');
  
}(i);

// LINA
$('.rope').each(function(){
  var thisOne= $(this);
  var random= Math.floor(Math.random() * 200) + 20; 
  thisOne.css({"height":random});
  var bulb = thisOne.parent().find('.bulb')
  bulb.css({"margin-top":random});
});

$('.light').each(function(){
  var thisOne= $(this);
  var random= Math.floor(Math.random() * 9) + 3; 
  var ready= random + "s";
  thisOne.css({"animation-duration":ready,"animation-delay":ready,});
});

$('.lgh').each(function(){
  var thisOne= $(this);
  var random= Math.floor(Math.random() * 3) + 3; 
  var ready= random + "s";
  thisOne.css({"animation-duration":ready});
});

// ROZMIESZCZENIE
$('.lgh').each(function(){
  var thisOne= $(this);
  var random= Math.floor(Math.random() * 60) + 1;  
  var ready= "0px " + random + "px";
  thisOne.css({"margin":ready});
});
