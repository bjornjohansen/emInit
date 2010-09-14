window.addEvent('domready', function() {

	var links = $$('a[rel*=email]'),
		i, addr, em;
			
	for (i = 0; i < links.length; i++) {
		try {
			em = links[i].get('text').split(' / ');		
			addr = (em.length == 2) ? em[0] + '@' + em[1] : em[0] + '@' + document.location.hostname.replace(/^www\./,'');
			
			links[i].setProperty('href', 'mailto:' + addr);
			if (links[i].getProperty('title')) {
				links[i].set('text', links[i].getProperty('title'));
			} else {
				links[i].set('text', addr);
			}
			links[i].addClass('email');
		} catch (e){};
	}
});