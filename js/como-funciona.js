$(document).ready(function(){
	
	var $iconsComoFunciona = $('.js-como-funciona .material-icons.right');
	var $iconsFaq = $('.js-faq .material-icons.right');
	$('.js-como-funciona .collapsible-header').on('click', function(){		
		console.log('cmofunciona');
		
		var $item = $(this).children();

		if($item.text() == 'keyboard_arrow_right'){
			$iconsComoFunciona.text('keyboard_arrow_right');
			$item.text('keyboard_arrow_down');
		} else if ($item.text() == 'keyboard_arrow_down'){
			$item.text('keyboard_arrow_right');
		}

	});

	$('.js-faq .collapsible-header').on('click', function(){		
		console.log('faq');
		var $item = $(this).children();

		if($item.text() == 'keyboard_arrow_right'){
			$iconsFaq.text('keyboard_arrow_right');
			$item.text('keyboard_arrow_down');
		} else if ($item.text() == 'keyboard_arrow_down'){
			$item.text('keyboard_arrow_right');
		}

	});
	
	
});	