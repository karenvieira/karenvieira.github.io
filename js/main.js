// Logo trocar com hover

$('.button-collapse').sideNav();

$('#js-logo').hover(
	function(){
		$(this).attr('src', 'img/logotipo-kiv-2.png');
	}, 
	function (){
		$(this).attr('src', 'img/logotipo-kiv-1.png');
	}
);

// Botão fechar do menu mobile
$('#fecha-menu-mobile').on('click', function(){
	$("#sidenav-overlay").trigger("click");
    return false;
});