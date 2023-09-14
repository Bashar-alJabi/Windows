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