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