const container = document.getElementById('game-container');
const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6'];

// Web Audio API Setup
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playPopSound() {
    if (!audioCtx) return;
    
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
}

function createBalloon() {
    const balloon = document.createElement('div');
    const colorClass = colors[Math.floor(Math.random() * colors.length)];
    balloon.className = `balloon ${colorClass}`;
    
    // Random horizontal position
    const maxWidth = window.innerWidth - 100;
    const randomX = Math.random() * maxWidth;
    balloon.style.left = `${randomX}px`;

    // Random size slightly
    const scale = 0.8 + Math.random() * 0.4;
    balloon.style.transform = `scale(${scale})`;

    // Speed
    const speed = 1 + Math.random() * 2;
    let currentBottom = -150;

    function move() {
        if (balloon.parentElement) {
            currentBottom += speed;
            balloon.style.bottom = `${currentBottom}px`;

            if (currentBottom > window.innerHeight) {
                balloon.remove();
            } else {
                requestAnimationFrame(move);
            }
        }
    }

    balloon.addEventListener('pointerdown', (e) => {
        initAudio(); // Initialize on first interaction
        popBalloon(balloon);
    });

    container.appendChild(balloon);
    requestAnimationFrame(move);
}

function popBalloon(balloon) {
    if (balloon.classList.contains('popping')) return;
    
    balloon.classList.add('popping');
    playPopSound();

    // Remove from DOM after animation
    setTimeout(() => {
        balloon.remove();
    }, 200);
}

// Spawn balloons periodically
setInterval(createBalloon, 1200);

// Home button protection
const homeBtn = document.getElementById('home-btn');
let lastTap = 0;

homeBtn.addEventListener('pointerdown', (e) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTap;
    if (tapLength < 500 && tapLength > 0) {
        window.location.href = '../../index.html';
    } else {
        homeBtn.style.opacity = '0.5';
        setTimeout(() => homeBtn.style.opacity = '0.2', 500);
    }
    lastTap = currentTime;
});

// Initialize audio on first click anywhere (browser policy)
document.addEventListener('pointerdown', () => {
    initAudio();
}, { once: true });
