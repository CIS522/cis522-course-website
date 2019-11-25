/**
 * Code from https://github.com/natzar/SemanticUiHamburgerMenu
 * Modified slightly to use grandparent node instead (because of container element)
 */

$(document).ready(function(){
	$('.hamburger').click(function(e){
		$menu = $(this).parent().parent();
		if(!$(this).hasClass('active')) {
			$(this).addClass('active');
			$menu.addClass('open');
		} else {
			$(this).removeClass('active');
			$menu.removeClass('open');
		}
		e.preventDefault();
	});
})