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