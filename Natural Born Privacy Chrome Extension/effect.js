var bgImage = chrome.extension.getURL("secret-background2.png");

var divs = document.querySelectorAll('body,input,textarea,code,pre,li,strong,iframe,div,p,td,th,em,a,button,html,article,header,span,blockquote,quote,section,h1,h2,h3,h4,h5,button');

divs.forEach(d=>{
    // staat mooier in aparte css bestanden ipv javascript. beter uitbreidbaar
    d.style.backgroundImage = `url('${bgImage}')`;
    d.style.font = "normal small"; 
    d.style.color = "#22FF22";  
    d.style.fontSize = "12px"; 
});

var imgs = document.querySelectorAll("img");
imgs.forEach(img =>{
    // plak een ander divje met de juiste kleur precies over de plaatjes
    // gebruik blending modes om plaatje te kleuren
});

var vids = document.querySelectorAll("video");
vids.forEach(vid => console.log(vid.src));
