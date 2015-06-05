$(document).ready(function() {
	$('.contact-button').click(function(e){
		e.preventDefault();

		$('footer').find('.contactme').addClass('active-form');
		var t = $(this);
		var tH = t.height();
		$(this).animate({'opacity' : 0}, 250);
		window.setTimeout( function(){
			t.css({'display' : 'none'});
			$('form').removeClass('hidden');
			$('.cancel-form').css({'opacity' : 1})
		}, 700);
	})

	$('.cancel-form').click(function(e){
		e.preventDefault();

		$('footer').find('.contactme').removeClass('active-form');
		var t = $(this);
		var tH = t.height();
		$(this).animate({'opacity' : 0}, 250);
		window.setTimeout( function(){
			$('.contact-button').css({'opacity' : 0});
		$('.contact-button').css({'display' : 'inline-block'});
			$('.contact-button').animate({'opacity' : 1}, 250);
			$('form').addClass('hidden');
		}, 700);
	})
})
