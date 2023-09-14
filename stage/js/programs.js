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