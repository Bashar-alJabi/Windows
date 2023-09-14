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