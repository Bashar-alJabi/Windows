function addClassOnClick(button, content, className) {
    button.onclick = () => {
        content.classList.add(className);
    }
}
function removeClassOnClick(button, content, className) {
    button.onclick = () => {
        content.classList.remove(className);
    }
}
function toggleClassOnClick(button, content, className) {
    button.onclick = () => {
        content.classList.toggle(className);
    }
}

function hideWeather() {
    const fullWeatherMenu = document.querySelector('.weather .full-info');
    fullWeatherMenu.classList.remove('open');
}
function hideFolders() {
    const listFolders = document.querySelector('.folders .list-folders');
    listFolders.classList.remove('open');
}
function hideNavigation() {
    const listBar = document.querySelectorAll('.navigation .main-menu ul li');
    listBar.forEach((bar) => {
        bar.classList.remove('active')
    });
    const powerOffList = document.querySelector('.navigation .menu-bar .foot .power-info');
    const userInfoList = document.querySelector('.navigation .menu-bar .foot .user-info');
    powerOffList.classList.remove('show');
    userInfoList.classList.remove('show');
}
function hideTools() {
    const tools = document.querySelectorAll('.tools ul li');
    tools.forEach((tool) => {
        tool.classList.remove('active');
    });
}
function hideNotifications() {
    const listNotifications = document.querySelector('.taskbar-nav .notifications .notifications-list');
    listNotifications.classList.remove('open');
}

function hideAll(){
    hideWeather();
    hideFolders();
    hideNavigation();
    hideTools();
    hideNotifications();
    showAllBar();
    showAllTools();
}

function showOnlyWeather() {
    hideFolders();
    hideNavigation();
    hideTools();
    hideNotifications();
}
function showOnlyFolders() {
    hideWeather();
    hideNavigation();
    hideTools();
    hideNotifications();
}
function showOnlyNavigation() {
    hideWeather();
    hideFolders();
    hideTools();
    hideNotifications();
}
function showOnlyTools() {
    hideWeather();
    hideFolders();
    hideNavigation();
    hideNotifications();
}
function showOnlyNotifications() {
    hideWeather();
    hideFolders();
    hideNavigation();
    hideTools();
}

function closeFullNews() {
    const fullNewsMenu = document.querySelector('.widgets .full-news');
    fullNewsMenu.classList.remove('show')
}
function closePc() {
    const pcContent = document.querySelector(".desktop-page .desktop-programs .page-programs .pc");
    pcContent.classList.remove('show')
}
function closeRecycleBin() {
    const recycleBinContent = document.querySelector(".desktop-page .desktop-programs .page-programs .recycle-bin");
    recycleBinContent.classList.remove('show')
}
function closeFolder() {
    const folderContent = document.querySelector(".desktop-page .desktop-programs .page-programs .personal-folder");
    folderContent.classList.remove('show')
}
function closeAll() {
    closeFullNews();
    closePc();
    closeRecycleBin();
    closeFolder();
}

function openItem(item, list, className, func) {
    item.onclick = () => {
        list.classList.toggle(className);
        if (list.classList.contains(className)) {
            func();
            showAllBar();
            showAllTools();
        }
    }
}
function toggleClassEach(items, className, e) {
    items.forEach((item) => {
        if (!(e.classList.contains(className))) {
            item.classList.remove(className);
        }
    })
    e.classList.toggle(className)
}

function showPowerUserList(button, listOne, listTwo, className) {
    button.onclick = () => {
        listOne.classList.toggle(className);
        if (listOne.classList.contains(className)) {
            listTwo.classList.remove(className)
        }
    }
}

function checkLocalStorage(key, button) {
    if (localStorage.getItem(key)) {
        button.checked = +localStorage.getItem(key);
    } else {
        button.checked = 1;
    }
}
function checkItems(button, item, localItem) {
    button.checked == 0 ? item.style.visibility = 'hidden' : item.style.visibility = 'visible';
    localStorage.setItem(localItem, button.checked ? 1 : 0)
}
function showOrNot(button, item, localItem) {
    button.onclick = () => {
        checkItems(button, item, localItem)
    }
}