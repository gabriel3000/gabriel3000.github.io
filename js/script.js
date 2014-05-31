(function($){
	$.fn.repeater = function(options){
		var settings = {
			speed: 8000
		};
		if(options){
			$.extend(settings, options);
		}
		
		var t = this;
		t.each(function(){
			var loopt = $(t);
			loopt.find('div:first').addClass('onScreen').siblings().css('right','600px');
			function run(){
				if( loopt.find('.onScreen').is(':last-child') ){
					loopt.find('.onScreen').animate({left:600}, settings.speed, 'linear').removeClass('onScreen');
					loopt.find('div:first').addClass('onScreen').css('left','-600px').animate({left:0}, settings.speed, 'linear');
					window.resizeTo = window.innerWidth;
				}
				else{
					loopt.find('.onScreen')
					.animate({left:600}, settings.speed, 'linear')
					.removeClass('onScreen')
					.next()
					.addClass('onScreen')
					.css('left','-600px')
					.animate({left:0}, settings.speed, 'linear', function(){});
					window.resizeTo = window.innerWidth;
				}
			}
			run();
			var rint = setInterval(run, settings.speed);
		});
	}
})(jQuery);

$(document).ready(function(){
	$('#topIllustration').repeater({speed: 10000 });
});
window.onscroll = function(ev){
	var windowPosition = -window.scrollY;
	var windowPosition = windowPosition/6;
	var windowPosition = windowPosition.toString();
	var paraPosition = '50% '+windowPosition+'px';
	$('#paralaxSection1').css('background-position',paraPosition);
	for( var i = 0; i < $('.genericContentArea').length; i++ ){
		$($('.genericContentArea')[i]).css('background-position',paraPosition);
	}
}