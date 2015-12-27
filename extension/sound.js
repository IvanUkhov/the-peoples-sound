$(document).on('ready', function() {
	$('#folketsHuvud').bind('DOMSubtreeModified', function() {
		$('.soundimage').each(function(i, e) {
			replace($(e));
		});
	});
	$('body').on('mousedown', '.soundflash', function(e) {
		$(e.target).trigger('click');
		setTimeout(function() {
			$('#folketsHuvud input.graytext').trigger('focus');
		}, 0);
	});
});

function replace(target) {
	if (target.data('busy')) return;
	target.data('busy', true);

	var link = target.parent('a');
	if (link.length == 0) return;

	var play = $('<embed class="soundflash" type="application/x-shockwave-flash" width="21px" height="21px" src="' + link.attr('href') + '" wmode="transparent"></embed>');
	play.css({ 'margin-bottom': '-4px' });

	link.replaceWith(play);
}
