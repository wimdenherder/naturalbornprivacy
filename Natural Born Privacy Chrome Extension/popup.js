//TODO popup for different styles

//fetched json file and select first index from style.json to inject
fetch(themesUrl)
    .then(x=> x.json())
    .then(x=> showList(x));


function showList(themes){
    console.log(themes);
}