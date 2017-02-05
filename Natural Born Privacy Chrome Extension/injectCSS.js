//gets CSS source from config
//injects this into current page

console.log('injectCSS.js loaded');
var cssId = 'currentStyle'; 
var theme = "pink";
var stylesheet = chrome.extension.getURL(`styles/${theme}.css`);

console.log(stylesheet);

if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = stylesheet
    link.media = 'all';
    head.appendChild(link);
}else if(theme === "remove"){
    document.getElementById(cssId).remove();
}

