// https://developer.apple.com/library/safari/#documentation/Tools/Conceptual/SafariExtensionGuide/InjectingScripts/InjectingScripts.html
// create a para and insert it at the top of the body
//var element = document.createElement("p");
//element.textContent = "New Element!";
//element.style.color = "red";
//element.style.float = "right";
//document.body.insertBefore(element, document.body.firstChild);


//safari.application.openBrowserWindow();
//var style = "";
//safari.extension.addContentStyleSheet(style);


//function init() {
//	element = document.createElement('script');
//	element.setAttribute('src', 'http://dict.cn/hc2/hc.js');
//	document.body.appendChild(element);
//}


if (window.top === window) {
	var en2cn = document.createElement('script');
	en2cn.setAttribute('src', 'http://dict.cn/hc2/hc.js');
	document.body.insertBefore(en2cn, document.body.lastChild);
}