var btn = $('.start');
$('#sad-face-animation').hide();
btn.on('click', function(){
	$('#sad-face-animation').show();
	setTimeout(function(){ 
	$('#sad-face-animation').fadeOut("slow");
}, 3000);
	})

