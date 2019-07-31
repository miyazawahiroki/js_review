$(function(){
var sld_wrap = '#slider',
	sld = '.sld_fade',
	sld_pre = 'sld',
	sld_time = 1000,
	sld_wait = 3000;
 
$.fn.slide_fade = function(){
	return this.each(function(i, elem) {
		var sldnum = parseInt($(this).data('sldnum'));
		$(sld).not('#' + sld_pre + sldnum).fadeOut(sld_time);
		$('#' + sld_pre + sldnum).fadeIn(sld_time);
		var sld_timer = setTimeout(function(){
			sldnum++;
			if(sldnum > $(sld).length){ sldnum = 1; }
			$(sld_wrap).data('sldnum', sldnum);
			$(sld_wrap).slide_fade();
		}, sld_wait);
	});
};
$(window).load(function() {
	$(sld_wrap).data('sldnum', 1).slide_fade();
});
 
});