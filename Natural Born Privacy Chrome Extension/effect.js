var bgImage = 'data:image/png;base64,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'


var divs = document.querySelectorAll('body,input,textarea,code,pre,li,strong,iframe,div,p,td,th,em,a,button,html,article,header,span,blockquote,quote,section,h1,h2,h3,h4,h5,button');

for(var i=0;i<divs.length; i++) { 
    var d = divs[i]; 

    d.style.backgroundImage = `url('${bgImage}')`;
    d.style.font = "normal small"; 
    d.style.color = "#22FF22";  
    d.style.fontSize = "12px"; 
} 

var imgs = document.querySelectorAll("img");


for(var i=0;i<divs.length; i++) {
    var img = imgs[i];
    img.src= bgImage;
}

var vids = document.querySelectorAll("video");
for(var i=0;i<vids.length; i++) {
    var vid = vids[i]; 
    console.log(vid.src); 
} // hier nog video weghalen of vervangen