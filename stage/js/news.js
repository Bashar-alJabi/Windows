// News
const news = document.querySelector('.desktop-page .widgets .news .content');
let arrNews = [];
fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            arrNews.push(data[i].description);

            const contentAllNews = document.querySelector('.widgets .full-news .content');
            let div = document.createElement('div');
            div.className = 'text-news';
            div.innerHTML = `<span style='color: #16a085'>[${i+1}]:</span> ${JSON.stringify(data[i].description)}`;
            contentAllNews.appendChild(div);
        }
        generateNews();
        setInterval(generateNews, 5000);
    })
    .catch(error => {
        console.log('An error occurred while fetching api:', error);
        news.textContent = 'Please check your internet';
    });
function generateNews() {
    let randomNews = Math.floor(Math.random() * arrNews.length);
    news.textContent = arrNews[randomNews];
}

// See Full News Button
const seeAllNewsBtn = document.querySelector('.widgets .news .foot .all-news');
const fullNewsMenu = document.querySelector('.widgets .full-news');
const closeNewsBtn = document.querySelector('.widgets .full-news .head .close-button');
seeAllNewsBtn.onclick = () => {
    hideAll()
    closeAll()
    fullNewsMenu.classList.add('show');
}
removeClassOnClick(closeNewsBtn, fullNewsMenu, 'show')

document.onkeydown = function (e) {
    if (e.key === "Escape") {
        fullNewsMenu.classList.remove('show');;
    }
};

// More Options
const moreOptionBtn = document.querySelector('.desktop-page .widgets .news .head .more-options');
const OptionHide = document.querySelector('.desktop-page .widgets .news .head .option');
const newsBox = document.querySelector('.desktop-page .widgets .news');
toggleClassOnClick(moreOptionBtn, OptionHide, 'show')

OptionHide.onclick = () => {
    OptionHide.classList.toggle("show")
    newsBox.style.visibility = 'hidden';
    const showNewsButton = document.querySelector('.navigation .settings-bar .content .option .check .three');
    showNewsButton.checked = 0;
};