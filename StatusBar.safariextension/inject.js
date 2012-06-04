var statusBar;

if (window.top === window) {

  if (document.readyState === 'complete')
    ready();
  else
    document.addEventListener('DOMContentLoaded', ready);

  safari.self.addEventListener('message', function handleMessage(e) {
    switch (e.name) {
      case 'displayStatus':
      displayStatus(e.message);
    }
  }, false);

  function ready() { document.body.addEventListener('mouseover', hover); }

  function hover(e) {
    var el = e.target;
    while (el && el.nodeName !== 'A')
      el = el.parentNode;

    if (el && el.attributes.href)
      safari.self.tab.dispatchMessage('hover', {
        href: el.attributes.href.value,
        target: el.target,
        metaKey: e.metaKey,
        ctrlKey: e.ctrlKey,
        altKey: e.altKey
      });
    else
      hideStatus();
  }

  function displayStatus(text) {

    if (!statusBar) {
      statusBar = document.createElement('p');
      statusBar.id = 'BeijingYoungStudiosStatusBar';
      statusBar.setAttribute("style", 'position: fixed; left: 0; bottom: 0; z-index: 999999999999999; overflow: hidden; white-space: nowrap; width: auto; margin: 0; padding: .15em; background: -webkit-linear-gradient(top, #FFF 0px, #B0B0B0 1px, #A7A7A7); color: #333; text-shadow: 0 1px 0 #D0D0D0; border: 1px solid #6A6A6A; border-left: none; border-top-right-radius: 3px; font: 12px "Lucida Grande"; opacity: 0; -webkit-transition: opacity 100ms ease-out;');
      document.body.appendChild(statusBar);
    }

    statusBar.innerText = text;

    setTimeout(function() {
      statusBar.className = 'active';
      statusBar.setAttribute("style", 'position: fixed; left: 0; bottom: 0; z-index: 999999999999999; overflow: hidden; white-space: nowrap; width: auto; margin: 0; padding: .15em; background: -webkit-linear-gradient(top, #FFF 0px, #B0B0B0 1px, #A7A7A7); color: #333; text-shadow: 0 1px 0 #D0D0D0; border: 1px solid #6A6A6A; border-left: none; border-top-right-radius: 3px; font: 12px "Lucida Grande"; opacity: 1; -webkit-transition: opacity 100ms ease-out;');
    }, 1);

  }

  function hideStatus() {
    if (statusBar)
      statusBar.className = '';
      statusBar.setAttribute("style", 'position: fixed; left: 0; bottom: 0; z-index: 999999999999999; overflow: hidden; white-space: nowrap; width: auto; margin: 0; padding: .15em; background: -webkit-linear-gradient(top, #FFF 0px, #B0B0B0 1px, #A7A7A7); color: #333; text-shadow: 0 1px 0 #D0D0D0; border: 1px solid #6A6A6A; border-left: none; border-top-right-radius: 3px; font: 12px "Lucida Grande"; opacity: 0; -webkit-transition: opacity 100ms ease-out;');
  }
  
}