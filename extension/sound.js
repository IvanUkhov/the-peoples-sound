$(document).on('ready', function() {
	$('#folketsHuvud').bind('DOMSubtreeModified', function() {
		$('.soundimage').each(function(i, e) {
			replace($(e));
		});
	});
});

function replace(target) {
	if (target.data('busy')) return;
	target.data('busy', true);

	var link = target.parent('a');
	if (link.length == 0) return;

	var url = link.attr('href');

	var play = $('<embed type="application/x-shockwave-flash" width="21px" height="21px" src="' + url + '" wmode="transparent"></embed>');
	play.css({ 'margin-bottom': '-4px' });

	link.replaceWith(play);
}
