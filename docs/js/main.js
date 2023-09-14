// Time
const desktopTime = document.querySelector('.desktop-page .time-desktop .clock span');
const taskbarTime = document.querySelector('.taskbar-nav .time-date .time span');
function updateTime() {
    let hours = new Date().getHours();
    hours < 10 ? hours = `0${hours}` : hours;
    let minutes = new Date().getMinutes();
    minutes < 10 ? minutes = `0${minutes}` : minutes;
    let time = `${hours}:${minutes}`;
    desktopTime.textContent = time;
    taskbarTime.textContent = time;
}
updateTime();
let clock = setInterval(updateTime, 1000);

// Date
let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let monthsOfYears = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December'];
const desktopDate= document.querySelector('.desktop-page .time-desktop .date span');
const taskbarDate = document.querySelector('.taskbar-nav .time-date .month span');
const toolkitDate = document.querySelector('.taskbar-nav .time-date .toolkit span');
function updateDate() {
    let dayIndex = new Date().getDay();
    let dayOfWeek = daysOfWeek[dayIndex];
    let monthIndex = new Date().getMonth();
    let monthOfYear = monthsOfYears[monthIndex];
    let dayOfMonth = new Date().getDate()
    let year = new Date().getFullYear()
    desktopDate.textContent = `${dayOfWeek}, ${monthOfYear} ${dayOfMonth}`;
    taskbarDate.textContent = `${monthIndex + 1}/${dayOfMonth}/${year}`;
    toolkitDate.innerHTML = `${dayOfWeek}<br>${monthOfYear} ${dayOfMonth}<br>${year}`;
}
updateDate();
let date = setInterval(() => {
    let now = new Date();
    if (now.getHours() === 0 && now.getMinutes() === 0 && now.getSeconds() === 0) {
        updateDate();
    }
}, 1000);
const foldersIcon = document.querySelector('.folders-icon');
const listFolders = document.querySelector('.folders .list-folders');
openItem(foldersIcon, listFolders, 'open', showOnlyFolders);

const programs = document.querySelectorAll('.folders .list-folders .program');
programs.forEach((program) => {
    program.onclick = function () {
        toggleClassEach(programs, 'selected', this)
    }
})
// FullScreen
const fullScreen = document.querySelector('.fullscreen');
fullScreen.onclick = () => {
    fullScreen.classList.toggle('full-screen');
    fullScreen.classList.contains('full-screen') ? openFullscreen() : closeFullscreen();
}

var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari, Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11/Edge */
        elem.msRequestFullscreen();
    }
}
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari, Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11/Edge */
        document.msExitFullscreen();
    }
}
const listBar = document.querySelectorAll('.navigation .main-menu ul li');
listBar.forEach((bar) => {
    bar.onclick = function () {
        toggleClassEach(listBar, 'active', this)
        if (this.classList.contains('active')) {
            showOnlyNavigation();
        }
        showAllTools();
        showAllBar();
        const menuBtn = document.querySelector('.navigation .main-menu ul li.menu');
        if (!(menuBtn.classList.contains('active'))) {
            powerOffList.classList.remove('show');
            userInfoList.classList.remove('show');
        }
    };
});
function showAllBar() {
    showMenu();
    showSearch();
    showSettings();
}

// Menu
const menuBtn = document.querySelector('.navigation .main-menu ul .menu');
const menuBar = document.querySelector('.navigation .menu-bar');
function showMenu() {
    menuBtn.classList.contains('active') ? menuBar.classList.add('open') : menuBar.classList.remove('open');
};
showMenu();

const menuSearch = document.querySelector('.navigation .menu-bar .search');
menuSearch.onclick = () => {
    menuBtn.classList.remove('active');
    searchBtn.classList.add('active');
    showAllBar();
}

// Power Off & User Info Button
const powerOffBtn = document.querySelector('.navigation .menu-bar .foot .power');
const powerOffList = document.querySelector('.navigation .menu-bar .foot .power-info');
const userInfoBtn = document.querySelector('.navigation .menu-bar .foot .info');
const userInfoList = document.querySelector('.navigation .menu-bar .foot .user-info');
showPowerUserList(powerOffBtn, powerOffList, userInfoList, 'show')
showPowerUserList(userInfoBtn, userInfoList, powerOffList, 'show')


// Search
const searchBtn = document.querySelector('.navigation .main-menu ul .search');
const searchBar = document.querySelector('.navigation .search-bar');
function showSearch() {
    if (searchBtn.classList.contains('active')) {
        searchBar.classList.add('open');
        setTimeout(() => {
            searchInput.focus();
        }, 500);
    }
    else {
        searchBar.classList.remove('open');
    }
};
showSearch();

const searchInput = document.querySelector('.navigation .search-bar .input-search');
const titleSuggest = document.querySelector('.navigation .search-bar .suggest .title');
const containerAllApps = document.querySelector('.navigation .search-bar .suggest .apps');
const containerApp = document.querySelectorAll('.navigation .search-bar .suggest .apps .app');
const nameApp = document.querySelectorAll('.navigation .search-bar .suggest .app .name-app');
searchInput.onkeyup = () => {
    if (searchInput.value === '') {
        titleSuggest.style.display = 'block';
        containerAllApps.style.height = '19rem'
        containerApp .forEach ((app) => {
            app.style.display = 'flex'
        })
    } else {
        titleSuggest.style.display = 'none';
        containerAllApps.style.height = 'unset'
        searchBar.style.height = '26.5rem'
        containerApp .forEach ((app) => {
            app.style.display = 'none'
        })
    }
    let searchInputValue = searchInput.value.toLowerCase();
    containerApp.forEach((app) => {
        let appName = app.querySelector('.name-app').textContent.toLowerCase();
        let validation = true;
        for (let i = 0; i < searchInputValue.length; i++) {
            if (searchInputValue[i] !== appName[i]) {
                validation = false;
                break;
            }
        }
        if (validation) {
            app.style.display = 'flex';
            app.style.height = 'fit-content';
        }
    });
};
document.onkeydown = function (e) {
    if (e.key === "Tab") {
        return false;
    }
};

// Sleep Mode
const sleepBtn = document.querySelector('.navigation .menu-bar .foot .power-info .sleep');
sleepBtn.onclick = blackScreen;
function blackScreen() {
    let screen = document.createElement('div');
    let span = document.createElement('span');
    let text = document.createTextNode('Press Enter to continue ...');
    span.appendChild(text)
    screen.appendChild(span)
    document.body.appendChild(screen)
    screen.className = 'sleep-screen';
    span.className = 'text';
    document.onkeydown = function (e) {
        if (e.key === "Enter") {
            screen.remove();
        }
    };
}

// Lock Mode
const lockBtn = document.querySelector('.navigation .menu-bar .foot .user-info .lock');
lockBtn.onclick = blackScreen;

// Sign-out Mode
const signOutBtn = document.querySelector('.navigation .menu-bar .foot .user-info .sign-out');
signOutBtn.onclick = blackScreen;

// Restart Mode
const restartBarBtn = document.querySelector('.navigation .menu-bar .foot .power-info .restart');
restartBarBtn.onclick = startup;
function startup() {
    closeAll();
    hideAll();
    let screen = document.createElement('div');
    let overlay = document.createElement('div');
    let content = document.createElement('div');
    let userIcon = document.createElement('div');
    let icon = document.createElement('i');
    let name = document.createElement('div');
    let spanName = document.createElement('span');
    let textName = document.createTextNode('Besho');
    let loading = document.createElement('div');
    let load = document.createElement('div');
    let spanWelcome = document.createElement('span');
    let textWelcome = document.createTextNode('Welcome');
    document.body.appendChild(screen)
    screen.appendChild(overlay)
    overlay.appendChild(content)
    content.appendChild(userIcon)
    userIcon.appendChild(icon)
    content.appendChild(name)
    name.appendChild(spanName)
    spanName.appendChild(textName)
    content.appendChild(loading)
    loading.appendChild(load)
    loading.appendChild(spanWelcome)
    spanWelcome.appendChild(textWelcome)
    screen.className = 'startup';
    overlay.className = 'overlay';
    content.className = 'content';
    userIcon.className = 'user-icon';
    icon.className = 'icon fa-regular fa-user';
    name.className = 'name';
    spanName.className = 'user-name';
    loading.className = 'loading';
    load.className = 'load';
    spanWelcome.className = 'welcome';
    setTimeout(() => {
        loading.remove();
        let form = document.createElement('form');
        let input = document.createElement('input');
        let divEyeIcon = document.createElement('div');
        let eyeIcon = document.createElement('i');
        let submit = document.createElement('button');
        let submitIcon = document.createElement('i');
        let hint = document.createElement('div');
        let hintText = document.createTextNode('Password hint: Besho');
        submit.appendChild(submitIcon);
        divEyeIcon.appendChild(eyeIcon);
        hint.appendChild(hintText);
        form.appendChild(input);
        form.appendChild(divEyeIcon);
        form.appendChild(submit);
        form.appendChild(hint);
        content.appendChild(form);
        form.id = 'form-pass'
        input.type = 'password'
        input.placeholder = 'Password'
        input.className = 'pass'
        divEyeIcon.className = 'eye'
        eyeIcon.className = 'icon-eye fa-regular fa-eye'
        submit.className = 'submit-btn'
        submitIcon.className = 'icon-sub fa-solid fa-angle-right'
        hint.className = 'hint'
        input.focus();
        divEyeIcon.onclick = () => {
            divEyeIcon.classList.toggle('active');
            divEyeIcon.classList.contains('active') ? input.type = 'text' : input.type = 'password';
            input.focus();
        }
        form.onsubmit = (e) => {
            e.preventDefault();
            input.focus();
            let enteredPassword = input.value;
            if (enteredPassword === 'Besho') {
                form.remove();
                let divWelcome = document.createElement('div')
                content.appendChild(divWelcome);
                divWelcome.className = 'div-welcome'
                divWelcome.innerHTML = `Welcome, <span>Besho</span>`
                setTimeout(() => {
                    document.getElementById("startup-sound").play();
                }, 500);
                setTimeout(() => {
                    screen.remove();
                }, 3000);
            } else {
                input.value = '';
                let incorrectDiv = document.createElement('div');
                incorrectDiv.textContent = 'Incorrect password. Please try again.'
                content.appendChild(incorrectDiv);
                incorrectDiv.className = 'incorrect-div'
                const oldIncorrectDiv = document.querySelector('.incorrect-div');
                oldIncorrectDiv.replaceWith(incorrectDiv);
                input.oninput = () => {
                    incorrectDiv.remove();
                }
            }
        }
    }, 3000);
}

// ShutDown Mode
const shutDownBtn = document.querySelector('.navigation .menu-bar .foot .power-info .shut-down');
shutDownBtn.onclick = screenOff;
function screenOff() {
    closeAll();
    hideAll();
    let screen = document.createElement('div');
    let powerBtn = document.createElement('div');
    let image = document.createElement('img');
    image.src = 'imgs/windows-logo.png'
    powerBtn.appendChild(image)
    screen.appendChild(powerBtn)
    document.body.appendChild(screen)
    screen.className = 'screen-off';
    powerBtn.className = 'power-on';
    image.className = 'img-windows';
    powerBtn.onclick = () => {
        screen.style.zIndex = '-1'
        startup();
    }
}
window.onload = screenOff;
// window.addEventListener("DOMContentLoaded", screenOff)

// Settings
const settingsBtn = document.querySelector('.navigation .main-menu ul .settings');
const settingsBar = document.querySelector('.navigation .settings-bar');
function showSettings() {
    settingsBtn.classList.contains('active') ? settingsBar.classList.add('open') : settingsBar.classList.remove('open');
};
showSettings();

const themeToggle = document.querySelector('.navigation .settings-bar .content .option .check .one');
themeToggle.onclick = applyTheme;
checkLocalStorage('theme', themeToggle);
function applyTheme() {
    if (themeToggle.checked == 1) {
        document.body.classList.add('dark-theme');
        document.body.classList.remove('light-theme');
    } else {
        document.body.classList.add('light-theme');
        document.body.classList.remove('dark-theme');
    }
    localStorage.setItem('theme', themeToggle.checked ? 1 : 0);
}
applyTheme();

const showClockButton = document.querySelector('.navigation .settings-bar .content .option .check .two');
const clockDesktop = document.querySelector('.desktop-page .time-desktop');
checkLocalStorage('clockShow', showClockButton)
checkItems(showClockButton, clockDesktop, "clockShow");
showOrNot(showClockButton, clockDesktop, "clockShow");
//
const showNewsButton = document.querySelector('.navigation .settings-bar .content .option .check .three');
const newsDesktop = document.querySelector('.desktop-page .widgets .news');
checkLocalStorage('newsShow', showNewsButton)
checkItems(showNewsButton, newsDesktop, "newsShow");
showOrNot(showNewsButton, newsDesktop, "newsShow");
//
const showAppsButton = document.querySelector('.navigation .settings-bar .content .option .check .four');
const appsDesktop = document.querySelector('.desktop-page .apps');
checkLocalStorage('appsShow', showAppsButton)
checkItems(showAppsButton, appsDesktop, "appsShow");
showOrNot(showAppsButton, appsDesktop, "appsShow");


const leftContainer = document.querySelector('.taskbar-nav .left-container');
const folderContainer = document.querySelector('.taskbar-nav .folders-container');
const rightContainer = document.querySelector('.taskbar-nav .right-container');
let arrTaskbar = [leftContainer, folderContainer, rightContainer];
const showTaskbarButton = document.querySelector('.navigation .settings-bar .content .option .check .five');
showTaskbarButton.onclick = showTaskbar;
checkLocalStorage('taskbarShow', showTaskbarButton);
function showTaskbar() {
    if (showTaskbarButton.checked == 0) {
        arrTaskbar.forEach((ele) => {
            ele.style.position = 'relative';
            ele.style.bottom = '-3rem';
            ele.style.transition = '0.3s';
        })
    }
    else {
        arrTaskbar.forEach((ele) => {
            ele.style.position = 'relative';
            ele.style.bottom = '0';
            ele.style.transition = '0.3s';
        })
    }
    localStorage.setItem('taskbarShow', showTaskbarButton.checked ? 1 : 0)
}
showTaskbar();
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
// List Notifications
const numNotifications = document.querySelector('.taskbar-nav .notifications .num-notifications');
const listNotifications = document.querySelector('.taskbar-nav .notifications .notifications-list');
openItem(numNotifications, listNotifications, 'open', showOnlyNotifications);

function updateNumNoti() {
    const boxesNoti = document.querySelectorAll('.taskbar-nav .notifications .content .box');
    numNotifications.textContent = boxesNoti.length
};
updateNumNoti();

// Clear
const clearNoti = document.querySelector('.taskbar-nav .notifications .head .clear');
const contentNoti = document.querySelector('.taskbar-nav .notifications .content');
clearNoti.onclick = () => {
    emptyNoti();
    updateNumNoti();
};

const headNoti = document.querySelector('.taskbar-nav .notifications .head');
function emptyNoti() {
    contentNoti.remove();
    listNotifications.style.top = '-10rem';
    clearNoti.textContent = '✕';
    clearNoti.classList.add('rounded-5', 'd-flex', 'justify-content-center', 'align-items-center');
    clearNoti.style.cssText = `width: 1.75rem; height: 1.75rem;`
    clearNoti.onclick = () => {
        listNotifications.classList.remove('open');
    }
};

// Dismiss
const dismissNoti = document.querySelectorAll('.taskbar-nav .notifications .content .box .dismiss');
dismissNoti.forEach(dismiss => {
    dismiss.onclick = () => {
        dismiss.parentElement.remove();
        updateNumNoti();
        const boxesNoti = document.querySelectorAll('.taskbar-nav .notifications .content .box');
        if(boxesNoti.length === 0){
            emptyNoti();
        }
    }
});
const pcIcon = document.querySelector(".desktop-page .desktop-programs .apps .pc");
const pcContent = document.querySelector(".desktop-page .desktop-programs .page-programs .pc");
const pcClose = document.querySelector(".desktop-page .desktop-programs .page-programs .pc .head .close-button");
const pcZoom = document.querySelector(".desktop-page .desktop-programs .page-programs .pc .head .mini-button");
pcIcon.onclick = () => {
    hideAll();
    closeAll();
    pcContent.classList.add('show')
};
removeClassOnClick(pcClose, pcContent, 'show');
toggleClassOnClick(pcZoom, pcContent, 'zoom-out')

const recycleBinIcon = document.querySelector(".desktop-page .desktop-programs .apps .recycle-bin");
const recycleBinContent = document.querySelector(".desktop-page .desktop-programs .page-programs .recycle-bin");
const recycleBinClose = document.querySelector(".desktop-page .desktop-programs .page-programs .recycle-bin .head .close-button");
const recycleBinZoom = document.querySelector(".desktop-page .desktop-programs .page-programs .recycle-bin .head .mini-button");
recycleBinIcon.onclick = () => {
    hideAll();
    closeAll();
    recycleBinContent.classList.add('show')
};
removeClassOnClick(recycleBinClose, recycleBinContent, 'show');
toggleClassOnClick(recycleBinZoom, recycleBinContent, 'zoom-out')

const folderIcon = document.querySelector(".desktop-page .desktop-programs .apps .personal-folder");
const folderContent = document.querySelector(".desktop-page .desktop-programs .page-programs .personal-folder");
const folderClose = document.querySelector(".desktop-page .desktop-programs .page-programs .personal-folder .head .close-button");
const folderZoom = document.querySelector(".desktop-page .desktop-programs .page-programs .personal-folder .head .mini-button");
folderIcon.onclick = () => {
    hideAll();
    closeAll();
    folderContent.classList.add('show')
};
removeClassOnClick(folderClose, folderContent, 'show');
toggleClassOnClick(folderZoom, folderContent, 'zoom-out')

document.onkeydown = function (e) {
    if (e.key === "Escape") {
        pcContent.classList.remove('show');;
        recycleBinContent.classList.remove('show');;
        folderContent.classList.remove('show');;
    }
};
// Tools
const tools = document.querySelectorAll('.tools ul li');
tools.forEach((tool) => {
    tool.onclick = function () {
        toggleClassEach(tools, 'active', this)
        if (this.classList.contains('active')) {
            showOnlyTools();
        }
        showAllBar();
        showAllTools();
    };
});
function showAllTools() {
    showBrightness();
    showVolume();
    showBattery();
    showWifi();
    showBluetooth();
}

// Angle
const angle = document.querySelector('.tools .angle');
const list = document.querySelector('.tools ul');
toggleClassOnClick(angle, list, 'open')
$(function() {
    "use strict";
    $(".tools .angle").on("click", function() {
        $(this).find(".icon").toggleClass("right");
    });
});

// Brightness
const brightnessBtn = document.querySelector('.tools ul .brightness');
const brightnessControl = document.querySelector('.tools .control-brightness');
function showBrightness() {
    brightnessBtn.classList.contains('active') ? brightnessControl.style.display = 'flex' : brightnessControl.style.display = 'none';
};
showBrightness();

const overlay = document.querySelector('.overlay-brightness');
const rangeBrightness = document.querySelector('.tools .control-brightness .brightness-range');
const rangeNumBrightness = document.querySelector('.tools .control-brightness .number-range');
rangeNumBrightness.textContent = rangeBrightness.value;
rangeBrightness.addEventListener('input', () => {
    overlay.style.filter = `brightness(${rangeBrightness.value}%)`;
    rangeNumBrightness.textContent = rangeBrightness.value;
})

// Volume
const volumeBtn = document.querySelector('.tools ul .volume');
const volumeControl = document.querySelector('.tools .control-volume');
function showVolume() {
    volumeBtn.classList.contains('active') ? volumeControl.style.display = 'flex' : volumeControl.style.display = 'none';
};
showVolume();

const rangeVolume = document.querySelector('.tools .control-volume .volume-range');
const rangeNumVolume = document.querySelector('.tools .control-volume .number-range');
rangeNumVolume.textContent = rangeVolume.value;
rangeVolume.addEventListener('input', () => {
    rangeNumVolume.textContent = rangeVolume.value;
})

// Battery
const batteryBtn = document.querySelector('.tools ul .battery');
const batteryInfo = document.querySelector('.tools .battery-info');
function showBattery() {
    batteryBtn.classList.contains('active') ? batteryInfo.style.display = 'block' : batteryInfo.style.display = 'none';
};
showBattery();

// Wifi
const wifiBtn = document.querySelector('.tools ul .wifi');
const wifiInfo = document.querySelector('.tools .wifi-info');
function showWifi() {
    wifiBtn.classList.contains('active') ? wifiInfo.classList.add('open') : wifiInfo.classList.remove('open');
};
showWifi();

const backIcon = document.querySelector('.tools .wifi-info .head .icon');
backIcon.onclick = () => {
    wifiInfo.classList.remove('open');
    wifiBtn.classList.remove('active');
};

const contentWifi = document.querySelector('.tools .wifi-info .content');
const turnWifi = document.querySelector('.tools .wifi-info .head .toggle-checkbox');
turnWifi.onclick = () => {
    if ((turnWifi.checked == 0)) {
        contentWifi.style.opacity = '0.25';
        contentWifi.style.pointerEvents = 'none';
    }
    else {
        contentWifi.style.opacity = '1';
        contentWifi.style.pointerEvents = 'unset';
    }
}

const boxWifi = document.querySelectorAll('.tools .wifi-info .content .box');
boxWifi.forEach((box) => {
    box.onclick = function () {
        toggleClassEach(boxWifi, 'selected', this)
    };
});

// Bluetooth
const bluetoothBtn = document.querySelector('.tools ul .bluetooth');
const bluetoothInfo = document.querySelector('.tools .bluetooth-info');
function showBluetooth() {
    bluetoothBtn.classList.contains('active') ? bluetoothInfo.classList.add('open') : bluetoothInfo.classList.remove('open');
};
showBluetooth();

const backIconBlue = document.querySelector('.tools .bluetooth-info .head .icon');
backIconBlue.onclick = () => {
    bluetoothInfo.classList.remove('open');
    bluetoothBtn.classList.remove('active');
};

const contentBluetooth = document.querySelector('.tools .bluetooth-info .content');
const turnBluetooth = document.querySelector('.tools .bluetooth-info .head .toggle-checkbox');
turnBluetooth.onclick = () => {
    if ((turnBluetooth.checked == 0)) {
        contentBluetooth.style.opacity = '0.25';
        contentBluetooth.style.pointerEvents = 'none';
    }
    else {
        contentBluetooth.style.opacity = '1';
        contentBluetooth.style.pointerEvents = 'unset';
    }
}

const boxBluetooth = document.querySelectorAll('.tools .bluetooth-info .content .box');
boxBluetooth.forEach((box) => {
    box.onclick = function () {
        toggleClassEach(boxBluetooth, 'selected', this)
    };
});
const cityWeather = document.querySelector('.weather .info .content .city');
const tempWeather = document.querySelector('.weather .info .content .temp');
const iconWeather = document.querySelector('.weather .info .icon');

const city = document.querySelector('.weather .full-info .content .name span.city');
const country = document.querySelector('.weather .full-info .content .name span.country');
const icon = document.querySelector('.weather .full-info .content .icon');
const temp = document.querySelector('.weather .full-info .content .temp span');
const stat = document.querySelector('.weather .full-info .content .status span');
const clouds = document.querySelector('.weather .full-info .content .clouds span');
const wind = document.querySelector('.weather .full-info .content .wind span');
const hum = document.querySelector('.weather .full-info .content .hum span');

function getWeatherByLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const apiKey = 'cdef0297ae6bf67056e7f2f397ecfc46';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            cityWeather.textContent = data.name;
            tempWeather.textContent = `${Math.round(data.main.temp - 273.15)}°C`;
            iconWeather.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png'>`;

            city.textContent = data.name;
            country.textContent = ` - ${data.sys.country}`;
            icon.innerHTML = `<img src='https://openweathermap.org/img/wn/${data.weather[0].icon}.png'>`;
            temp.textContent = ` ${Math.round(data.main.temp - 273.15)}°C`;
            stat.textContent = ` ${data.weather[0].description}`;
            clouds.textContent = ` ${data.clouds.all}`;
            wind.textContent = ` ${data.wind.speed}`;
            hum.textContent = ` ${data.main.humidity}`;
        })
        .catch(error => {
            console.log('An error occurred while fetching weather data:', error);
        });
}

function showError(error) {
    console.log('An error occurred while retrieving geolocation:', error);

    const defaultWeather = {
        name: 'New York',
        temp:  20,
        weather: [{ icon: '02d', description: 'few clouds' }],
        sys: { country: 'US' },
        clouds: { all: 8 },
        wind: { speed: 3.24 },
        main: { humidity: 56 }
    };

    cityWeather.textContent = defaultWeather.name;
    tempWeather.textContent = `${defaultWeather.temp}°C`;
    iconWeather.innerHTML = `<img src='https://openweathermap.org/img/wn/${defaultWeather.weather[0].icon}.png'>`;

    city.textContent = defaultWeather.name;
    country.textContent = ` - ${defaultWeather.sys.country}`;
    icon.innerHTML = `<img src='https://openweathermap.org/img/wn/${defaultWeather.weather[0].icon}.png'>`;
    temp.textContent = ` ${defaultWeather.temp}°C`;
    stat.textContent = ` ${defaultWeather.weather[0].description}`;
    clouds.textContent = ` ${defaultWeather.clouds.all}`;
    wind.textContent = ` ${defaultWeather.wind.speed}`;
    hum.textContent = ` ${defaultWeather.main.humidity}`;
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getWeatherByLocation, showError);
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}
getLocation();
setInterval(getLocation, 3600000/2);

document.onkeydown = function (e) {
    if (e.key === "Tab") {
        return false;
    }
};

// Open Full Weather Menu
const weather = document.querySelector('.weather .info');
const fullWeatherMenu = document.querySelector('.weather .full-info');
openItem(weather, fullWeatherMenu, 'open', showOnlyWeather);
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