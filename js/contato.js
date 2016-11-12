 (function(){
      emailjs.init("user_w1dJQerocT29WyuU3kUA2");	  
 })();

$('select').material_select();
$('#mensagem').val('');
$('#mensagem').trigger('autoresize');

$('#form-email').on('submit', function(event){
	event.preventDefault();

	var $modal = $('#modal1');
	var $botaoEnvia = $('button');
	var modalProperties = {
		  dismissible: false, // Modal can be dismissed by clicking outside of the modal
	      opacity: 0.6, // Opacity of modal background
	      in_duration: 800, // Transition in duration
	      out_duration: 800, // Transition out duration
	      starting_top: '50%', // Starting top style attribute
	      ending_top: '25%', // Ending top style attribute
	};

	$botaoEnvia.attr('disabled', 'disabled');
	$modal.openModal(modalProperties);

	emailjs.sendForm('default_service', 'email_karen_producoes', this)
		.then(
			  function(response) {
			    console.log("SUCCESS", response);
			    $modal.closeModal(modalProperties);
			    $botaoEnvia.removeAttr('disabled');

			  }, 
			  function(error) {
			    console.log("FAILED", error);
			    $modal.closeModal(modalProperties);
			    $botaoEnvia.removeAttr('disabled');
			    console.log(this);
			  });
	
});

	


	