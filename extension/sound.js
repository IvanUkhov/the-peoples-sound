var Document = $(document);

Document.on('ready', function() {

  Document.on('click', '.soundimage', function (e) {

    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  Document.on('mouseover', '.soundimage', function (e) {

    var target = $(e.target);

    if (target.data('busy')) return;
    target.data('busy', true);

    var link = $(e.target).parent('a');
    if (link.length == 0) return;

    var url = link.attr('href');

    var play = $('<embed type="application/x-shockwave-flash" width="21px" height="21px" src="' + url + '" wmode="transparent"></embed>');
    play.css({ 'margin-bottom': '-4px' });

    link.replaceWith(play);
  });
});
