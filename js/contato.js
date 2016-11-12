 (function(){
      emailjs.init("user_w1dJQerocT29WyuU3kUA2");
      $('#loader').hide();
 })();


$('select').material_select();
$('#mensagem').val('');
$('#mensagem').trigger('autoresize');
 
$('#form-email').on('submit', function(event){
	event.preventDefault();
	$('button').attr('disabled', 'disabled');
	emailjs.sendForm('default_service', 'email_karen_producoes', this)
		.then(
			  function(response) {
			    console.log("SUCCESS", response);
			  }, 
			  function(error) {
			    console.log("FAILED", error);
			  });
});