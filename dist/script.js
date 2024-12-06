"use strict";
const startBtn = document.getElementById('startBtn');
const modal = document.getElementById('modal');
const tonWalletBtn = document.getElementById('ton-connect');
const websiteBtn = document.getElementById('websiteBtn');
const groupBtn = document.getElementById('groupBtn');
// Check if the elements exist before adding event listeners
if (startBtn && modal && tonWalletBtn && websiteBtn && groupBtn) {
    // Show modal on start button click
    startBtn.addEventListener('click', () => {
        if (window.innerWidth <= 600) {
            modal.classList.remove('hidden');
            modal.classList.add('displayFlexResponsive');
            startBtn.classList.add('hidden');
        }
        modal.classList.remove('hidden');
        modal.classList.add('displayFlex');
        startBtn.classList.add('hidden');
    });
    // Website Redirect
    websiteBtn.addEventListener('click', () => {
        window.location.href = 'https://rzlt.io/';
    });
    // Telegram Group Redirect
    groupBtn.addEventListener('click', () => {
        window.location.href = 'https://t.me/cbinsider';
    });
}
else {
    console.error('One or more elements not found');
}
