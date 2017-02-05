console.log('effect.js loaded');
var bgImage = chrome.extension.getURL("images/secret-background2.png");

// Dit staat mooier in aparte css bestanden ipv javascript. beter uitbreidbaar
var imgs = document.querySelectorAll("img");
var vids = document.querySelectorAll("video");
var divs = document.querySelectorAll('body,input,textarea,code,pre,li,strong,iframe,div,p,td,th,em,a,button,html,article,header,span,blockquote,quote,section,h1,h2,h3,h4,h5,button');

divs.forEach(d=>{
    d.style.backgroundImage = `url('${bgImage}')`;
    d.style.font = "normal small"; 
    d.style.color = "#22FF22";  
    d.style.fontSize = "12px"; 
});

//https://css-tricks.com/almanac/properties/m/mix-blend-mode/
imgs.forEach(img => img.style.mixBlendMode = "multiply");
vids.forEach(vid => vid.style.mixBlendMode = "multiply");
