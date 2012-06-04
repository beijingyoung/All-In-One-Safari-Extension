if (window.top === window) {
	var redirectHttps= document.createElement('script');
	redirectHttps.setAttribute('src', 'http://beijingyoung.com/public/js/RedirectHttps.js');
	document.body.insertBefore(redirectHttps, document.body.firstChild);
}