if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log('Tiny Taps SW Registered'))
            .catch(err => console.log('SW registration failed:', err));
    });
}

// Global protection
document.addEventListener('contextmenu', e => e.preventDefault());

// Prevent accidental navigation gestures if possible
document.addEventListener('touchstart', (e) => {
    if (e.touches.length > 1) {
        // Multi-touch is allowed in some games but we prevent browser zoom
    }
}, { passive: false });
