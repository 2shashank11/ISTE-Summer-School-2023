const API_KEY = "39f51a2929034caaa7c412421d778f77";
const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("World"));

function reload() {
    window.location.reload();
}

async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    console.log(res);
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cards-container");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach(function (article){
        if (!article.urlToImage) return;
        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = article.title;
    newsDesc.innerHTML = article.description;

    newsSource.innerHTML = `${article.source.name}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    navItem.classList.add('li-active');
}

const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

function searchNews(event){
    event.preventDefault();
    console.log(searchText.value);
    let query = searchText.value;
    fetchNews(query);
}
