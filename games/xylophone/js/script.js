let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playNote(frequency) {
    if (!audioCtx) return;

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'triangle'; // Softer than sine for xylophone-like feel
    oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.5);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.5);
}

const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    const freq = parseFloat(key.getAttribute('data-note'));

    key.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        initAudio();
        key.classList.add('active');
        playNote(freq);
    });

    key.addEventListener('pointerup', () => key.classList.remove('active'));
    key.addEventListener('pointerleave', () => key.classList.remove('active'));
    key.addEventListener('pointercancel', () => key.classList.remove('active'));
});

// Home button protection
const homeBtn = document.getElementById('home-btn');
let lastTap = 0;

homeBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        window.location.href = '../../';
    } else {
        homeBtn.style.opacity = '0.5';
        setTimeout(() => homeBtn.style.opacity = '0.2', 500);
    }
    lastTap = currentTime;
});

// Prevent default context menu
document.addEventListener('contextmenu', e => e.preventDefault());

// Re-enable audio context on first interaction
document.addEventListener('pointerdown', () => {
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}, { once: true });
