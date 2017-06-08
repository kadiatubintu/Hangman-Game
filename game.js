 $(document).ready(function(){
 	
 	  var winCounter = 0;
    var lossCounter = 0;
     var randomImage = new Array();
     	randomImage [0] =  'assets/images/backstreet.jpg';
     	randomImage [1] = 'assets/images/beyonce.jpg';
     	randomImage [2] = 'assets/images/TaylorSwift.png';
     	randomImage [3] = 'assets/images/Coldplay.jpg';
     	randomImage [4] = 'assets/images/BlackEyePeas.jpg';

	$(".images").on("click", function() {
    var number = Math.floor(Math.random()*randomImage.length);
      $(this).html('<img src="'+randomImage[number]+'" />');
        if($(".images img").attr('src') == $(".yourPic img").attr('src')){
        $(".Winnings").html("wins - " + winCounter++);
          confirm("Hey you won, would you like to play a song?");
        if(confirm){
          audio.play();
        }
      	}else{
      		$(".Loss").html( "Loss  - " + lossCounter++);
      		alert("SORRY");
          $('.song').html('<img src="assets/images/hangmanimg.png"/>');
    	   };
      });

  $(".backstreet").on("click", function() {
  $(".yourPic").html('<img src="assets/images/backstreet.jpg" />');
  });

  $(".Bey").on("click", function() {
  $(".yourPic").html('<img src="assets/images/beyonce.jpg" />');
  });

  $(".Taylor").on("click", function() {
  $(".yourPic").html('<img src="assets/images/TaylorSwift.png" />');
  });

  $(".Coldplay").on("click", function() {
  $(".yourPic").html('<img src="assets/images/Coldplay.jpg" />');
  });

  $(".Black").on("click", function() {
  $(".yourPic").html('<img src="assets/images/BlackEyePeas.jpg" />');
  });

   var tag = document.createElement('script');
	 tag.src = "http://www.youtube.com/player_api";
	 var firstScriptTag = document.getElementsByTagName('script')[0];
	 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

   initAudio($('#playlist li:first-child'));

  function initAudio(element){
   var song = element.attr('song');
   var artist = element.attr('artist');

   audio = new Audio('Hangman-Game/' + song)
   }

  $('.play').on("click", function(){
   audio.play();
  $('.play').hide();
  $('.stop').show();

  });

  $('.stop').on("click", function(){
  audio.pause();
  $('.stop').hide();
  $('.play').show();

	});

  $('.next').on("click", function(){
  audio.pause();
  var next = $('#playlist li.active').next();
    if (next.length ==0) {
      next = $('#playlist li:first-child');
      }
      initAudio(next);
      audio.play();
      });

    $('.prev').on("click", function(){
    audio.pause();
    var prev = $('#playlist li.active').prev();
    if (prev.length ==0) {
    prev = $('#playlist li:last-child');
    }
    initAudio(prev);
    audio.play();
    });  

});


  
  
 





 
