const leafArea = document.getElementById('tree-leaves');
let audioCtx = null;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function playPlopSound() {
    if (!audioCtx) return;

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioCtx.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.1);
}

function createApple() {
    const apple = document.createElement('div');
    apple.className = 'apple growing';
    apple.textContent = '🍎';
    
    // Random position within leaves
    const x = 15 + Math.random() * 70; // 15% to 85%
    const y = 15 + Math.random() * 70; // 15% to 85%
    
    apple.style.left = `${x}%`;
    apple.style.top = `${y}%`;

    apple.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        initAudio();
        harvestApple(apple);
    });

    leafArea.appendChild(apple);
}

function harvestApple(apple) {
    if (apple.classList.contains('falling')) return;
    
    apple.classList.remove('growing');
    apple.classList.add('falling');
    playPlopSound();

    // Spawn a new apple after a delay
    setTimeout(() => {
        createApple();
    }, 2000 + Math.random() * 1000);

    // Remove from DOM after animation
    setTimeout(() => {
        apple.remove();
    }, 1000);
}

// Initial apples
for (let i = 0; i < 6; i++) {
    setTimeout(createApple, i * 300);
}

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

// Re-enable audio context on first interaction
document.addEventListener('pointerdown', () => {
    if (audioCtx && audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}, { once: true });
