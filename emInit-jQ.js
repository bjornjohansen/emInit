$(document).ready(function(){
	var addr, em;
	try {
		$('a[rel*=email]').each(function(){
			em = $(this).text().split(' / ');
			addr = (em.length == 2) ? em[0] + '@' + em[1] : em[0] + '@' + document.location.hostname.replace(/^www\./,'');
			$(this).attr('href', 'mailto:' + addr);
			if ($(this).attr('title')) {
				$(this).text($(this).attr('title'));
			} else {
				$(this).text(addr);
			}
			$(this).addClass('email');
		});
	} catch (e){};
});