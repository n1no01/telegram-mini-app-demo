const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
const modal = document.getElementById('modal') as HTMLDivElement;
const tonWalletBtn = document.getElementById('ton-connect') as HTMLButtonElement;
const websiteBtn = document.getElementById('websiteBtn') as HTMLButtonElement;
const groupBtn = document.getElementById('groupBtn') as HTMLButtonElement;

// Check if the elements exist before adding event listeners
if (startBtn && modal && tonWalletBtn && websiteBtn && groupBtn) {
    // Show modal on start button click
    startBtn.addEventListener('click', () => {
        modal.classList.remove('hidden');
        modal.classList.add('displayFlex');
        startBtn.classList.add('hidden');
    });

    // TON Wallet Connect
    // tonWalletBtn.addEventListener('click', () => {
        
    // });

    // Website Redirect
    websiteBtn.addEventListener('click', () => {
        window.location.href = 'https://rzlt.io/';
    });

    // Telegram Group Redirect
    groupBtn.addEventListener('click', () => {
        window.location.href = 'https://t.me/cbinsider';
    });
} else {
    console.error('One or more elements not found');
}
