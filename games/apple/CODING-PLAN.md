# Coding Plan & Arsitektur Repositori

## Struktur Folder
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── manifest.json
└── sw.js

## Fase Eksekusi

### Fase 1: Setup HTML & Menggambar Pohon (CSS)
- Buat `index.html` dengan meta tag anti-zoom.
- Buat struktur DOM: `<div id="game-container">`, di dalamnya ada elemen `<div id="tree-leaves">` (daun) dan `<div id="tree-trunk">` (batang).
- Di `style.css`, buat batang di tengah bawah (cokelat) dan daun berupa lingkaran besar (hijau) yang menutupi bagian atas layar menggunakan *absolute positioning*.

### Fase 2: Logika Apel (JavaScript & CSS)
- Di `script.js`, buat fungsi untuk men-generate elemen `<span>🍎</span>` secara dinamis ke dalam area `#tree-leaves` dengan posisi (left/top) persentase yang diacak.
- Di `style.css`, tambahkan class `.apple` (font-size sangat besar, kursor pointer) dan class `.falling` (animasi bergerak ke bawah layar dan memudar).
- Tambahkan event `pointerdown` di JS: saat apel diklik, tambahkan class `.falling`, lalu hapus elemen tersebut dari DOM setelah animasi selesai (misal 1 detik).
- Buat fungsi `setTimeout` untuk menumbuhkan (spawn) apel baru setiap kali ada apel yang dipetik, agar jumlah apel di pohon tetap seimbang.

### Fase 3: Audio (Web Audio API)
- Tambahkan fungsi `playPluckSound()` di `script.js` menggunakan `AudioContext`. Gunakan oscillator yang sangat pendek (sekitar 0.1 detik) dengan penurunan frekuensi cepat agar terdengar seperti suara "plop" atau tetesan air/petikan. Panggil fungsi ini di dalam event listener klik apel.

### Fase 4: Integrasi PWA
- Buat `manifest.json` (nama "Petik Apel", warna tema hijau/merah).
- Buat `sw.js` untuk cache statis seluruh file.
- Tambahkan baris registrasi service worker di bagian bawah `index.html`.