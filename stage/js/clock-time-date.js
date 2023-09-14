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