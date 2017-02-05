console.clear();

var themesUrl = chrome.extension.getURL('styles.json');
var cssId = 'naturalBornPrivacy'; 
var themes = [];
var index = 0; // first theme in styles.json

//TODO set index from a popup menu

//fetched json file and select index 0 to inject change index for different themes
fetch(themesUrl)
    .then(x=> x.json())
    .then(x=> inject(x[index]));

function inject(theme){
    if (!document.getElementById(cssId))
    {
        var head  = document.getElementsByTagName('head')[0];
        var link  = document.createElement('link');
        link.id   = cssId;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = chrome.extension.getURL(`styles/${theme.source}`);
        link.media = 'all';

        head.appendChild(link);
    }else{
        //when active and clicked style will be removed
        document.getElementById(cssId).remove();
    }

}