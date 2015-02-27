$(document).ready(function() {
	$('.contact-button').click(function(e){
		e.preventDefault();

		$('footer').find('.contactme').addClass('active-form');
		t = $(this)
		tH = t.height();
		$(this).animate({'opacity' : 0}, 250);
		window.setTimeout( function(){
			t.remove();
			$('form').removeClass('hidden');
		}, 700);
	})
})
