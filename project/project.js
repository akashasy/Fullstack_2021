// Initialize the news api parameters
let apiKey = 'ce7f9ce4bb1d420a8945896fadbe994a'
const category = ["business", "entertainment", "general", "health", "science", "sports","technology"];

// Grab the news container
let business = document.getElementById('business');
let entertainment = document.getElementById('entertainment');
let general = document.getElementById('general');
let health = document.getElementById('health');
let science = document.getElementById('science');
let sports = document.getElementById('sports');
let technology = document.getElementById('technology');

// Create an ajax get request
const xhr1 = new XMLHttpRequest();
xhr1.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category[0]}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr1.onload = function () {
    if (this.status === 200) {
        var json = JSON.parse(this.responseText);
        var articles = json.articles;
        var newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            if(element["urlToImage"] !== null){
                var news = `<div class="card">
                                <img onerror="this.src='error.png';" src="${element["urlToImage"]}" alt="">
                                <p>${element["title"]}</p>
                            </div>`;
                newsHtml += news;
            }
        });
        business.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr1.send()

// Create an ajax get request
const xhr2 = new XMLHttpRequest();
xhr2.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category[1]}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr2.onload = function () {
    if (this.status === 200) {
        var json = JSON.parse(this.responseText);
        var articles = json.articles;
        var newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            if(element["urlToImage"] !== null){
                var news = `<div class="card">
                                <img onerror="this.src='error.png';" src="${element["urlToImage"]}" alt="">
                                <p>${element["title"]}</p>
                            </div>`;
                newsHtml += news;
            }
        });
        entertainment.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr2.send()

// Create an ajax get request
const xhr3 = new XMLHttpRequest();
xhr3.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category[2]}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr3.onload = function () {
    if (this.status === 200) {
        var json = JSON.parse(this.responseText);
        var articles = json.articles;
        var newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            if(element["urlToImage"] !== null){
                var news = `<div class="card">
                                <img onerror="this.src='error.png';" src="${element["urlToImage"]}" alt="">
                                <p>${element["title"]}</p>
                            </div>`;
                newsHtml += news;
            }
        });
        general.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr3.send()

// Create an ajax get request
const xhr4 = new XMLHttpRequest();
xhr4.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category[3]}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr4.onload = function () {
    if (this.status === 200) {
        var json = JSON.parse(this.responseText);
        var articles = json.articles;
        var newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            if(element["urlToImage"] !== null){
                var news = `<div class="card">
                                <img onerror="this.src='error.png';" src="${element["urlToImage"]}" alt="">
                                <p>${element["title"]}</p>
                            </div>`;
                newsHtml += news;
            }
        });
        health.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr4.send()

// Create an ajax get request
const xhr5 = new XMLHttpRequest();
xhr5.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category[4]}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr5.onload = function () {
    if (this.status === 200) {
        var json = JSON.parse(this.responseText);
        var articles = json.articles;
        var newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            if(element["urlToImage"] !== null){
                var news = `<div class="card">
                                <img onerror="this.src='error.png';" src="${element["urlToImage"]}" alt="">
                                <p>${element["title"]}</p>
                            </div>`;
                newsHtml += news;
            }
        });
        science.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr5.send()

// Create an ajax get request
const xhr6 = new XMLHttpRequest();
xhr6.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category[5]}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr6.onload = function () {
    if (this.status === 200) {
        var json = JSON.parse(this.responseText);
        var articles = json.articles;
        var newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            if(element["urlToImage"] !== null){
                var news = `<div class="card">
                                <img onerror="this.src='error.png';" src="${element["urlToImage"]}" alt="">
                                <p>${element["title"]}</p>
                            </div>`;
                newsHtml += news;
            }
        });
        sports.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr6.send()

// Create an ajax get request
const xhr7 = new XMLHttpRequest();
xhr7.open('GET', `https://newsapi.org/v2/top-headlines?country=in&category=${category[6]}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr7.onload = function () {
    if (this.status === 200) {
        var json = JSON.parse(this.responseText);
        var articles = json.articles;
        var newsHtml = "";
        articles.forEach(function(element, index) {
            // console.log(element, index)
            if(element["urlToImage"] !== null){
                var news = `<div class="card">
                                <img onerror="this.src='error.png';" src="${element["urlToImage"]}" alt="">
                                <p>${element["title"]}</p>
                            </div>`;
                newsHtml += news;
            }
        });
        technology.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}
xhr7.send()