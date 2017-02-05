console.log('injectCSS.js loaded');

var cssId = 'naturalBornPrivacy'; 
var theme = {
        title:'Pink glasses',
        iconImage:'pink.png',
        source:'pink.css'
    }



if (!document.getElementById(cssId))
{
    var head  = document.getElementsByTagName('head')[0];
    var link  = document.createElement('link');
    link.id   = cssId;
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href = chrome.extension.getURL(`styles/${theme.source}`);
    link.media = 'all';

    console.log(link);

    head.appendChild(link);
}else if(theme.source === "remove"){
    document.getElementById(cssId).remove();
}

