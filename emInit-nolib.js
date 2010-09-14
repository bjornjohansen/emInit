function emInit() {
	if (!document.getElementById || !document.createElement) {
		return false;
	}

	var i, addr, em, links;

	links = document.getElementsByTagName('a');
	for (i = 0; i < links.length; i++) {
		if (links[i].rel == 'email') {
			em = links[i].childNodes.item(0).data.split(' / ');
			addr = (em.length == 2) ? em[0] + '@' + em[1] : em[0] + '@' + document.location.hostname.replace(/^www\./,'');
			links[i].href = 'mailto:' + addr;
			while (links[i].childNodes.length) {
				links[i].removeChild(links[i].childNodes.item(0));
			}
			if (links[i].title != '') {
				links[i].appendChild(document.createTextNode(links[i].title));
			} else {
				links[i].appendChild(document.createTextNode(addr));
			}
		}
	}
}

var oWin = window;
if( oWin.addEventListener ) {
	oWin.addEventListener('load', emInit, false);
} else if( oWin.attachEvent ) {
	oWin.attachEvent('onload', emInit);
}
