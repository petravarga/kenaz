//TOP NEWS GENERAL
var generalimage = document.getElementsByClassName('newsimggeneral');
var generalheading = document.getElementsByClassName('newstitlegeneral');
var generalarticle = document.getElementsByClassName('articlegeneral');


var url = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey='';

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(myJson) {
    console.log(myJson);
    //IMAGE
    for(i=0; i < generalimage.length; i++) {
        generalimage[i].src = myJson.articles[i].urlToImage;
    }
    //Heading
    for(i=0; i<generalheading.length; i++) {
        generalheading[i].innerHTML = myJson.articles[i].title;
    }
    //Article
    for(i=0; i<generalarticle.length; i++) {
        generalarticle[i].innerHTML = myJson.articles[i].content;
    }
}); 
/*
//SPORT NEWS
var sportimage = document.getElementsByClassName('sportimage');
var sportheading = document.getElementsByClassName('sporttitle');

var url2 = '';

fetch(url2)
.then(function(response) {
    return response.json();
})
.then(function(myJson2) {
    console.log(myJson2);
}); 

//TOP NEWS GERMANY
var newscarouselimage = document.getElementsByClassName('newscarouselimage');
var newscarouselheading = document.getElementsByClassName('newscarouseltitle');

var url3 = '';

fetch(url3)
.then(function(response) {
    return response.json();
})
.then(function(myJson3) {
    console.log(myJson3);
}); 

//TOP NEWS USA
var editorialsimage = document.getElementsByClassName('editorialsimg');
var editorialsheading = document.getElementsByClassName('editorialstitle');

var url4 = '';

fetch(url4)
.then(function(response) {
    return response.json();
})
.then(function(myJson4) {
    console.log(myJson4);
}); 


//TOP NEWS CROATIA

var localimage = document.getElementsByClassName('localnewsimg');
var localheading = document.getElementsByClassName('localnewstitle');

var url5 = '';

fetch(url5)
.then(function(response) {
    return response.json();
})
.then(function(myJson5) {
    console.log(myJson5);
}); */