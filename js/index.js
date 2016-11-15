$(document).ready(function(){
	 $('.parallax').parallax();

	// Slider js
	$('#slides').slidesjs({
		
        width: 832,
        height: 400,
        start: 1,

        navigation: {
        	active: false,
        	 effect: 'slide'
        	},

        play: {
	      active: false,
	      effect: 'slide',
	      interval: 5000, //tempo em milisegundos que cada slide vai ficar antes de ser passado
	      auto: true,
	      swap: true,
	      pauseOnHover: false,
	      restartDelay: 2500
	    },

	    effect: {
	    	slide: {
	    		speed: 1500 //duração em milisegundos da 'passada' de slide
	    	},
	    	fade: {
	    		speed: 1000,
	    		crossfade: true
	    	}
	    }

    });


	new WOW().init();

});
