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
Gemini CLI harus mengeksekusi ini secara bertahap jika diminta.

### Fase 1: Setup HTML, Proteksi UI, & Logika Dasar JS
- Buat `index.html` dengan meta tag khusus untuk disable zoom/scaling.
- Tautkan file CSS dan JS.
- Buat `script.js` dengan logika loop (setInterval/requestAnimationFrame) untuk men-spawn elemen balon (div) secara berkala dan menggerakkannya ke atas.
- Buat event listener `pointerdown` (lebih responsif dari click di HP) untuk menghapus balon saat disentuh.

### Fase 2: Styling CSS & Web Audio API
- Buat `style.css` untuk mengubah div biasa menjadi bentuk balon visual menggunakan CSS murni (border-radius, box-shadow, dll).
- Tambahkan animasi transisi saat balon pecah (membesar sedikit lalu opacity 0).
- Modifikasi `script.js` untuk menambahkan fungsi Web Audio API (AudioContext) yang menghasilkan suara "pop" ringan saat event `pointerdown` terjadi.

### Fase 3: Integrasi PWA
- Buat `manifest.json` dengan `display: "fullscreen"` dan warna tema cerah.
- Buat `sw.js` yang menge-cache semua aset pada saat instalasi dan melakukan intercept fetch untuk mode offline.
- Tambahkan script registrasi Service Worker di dalam `index.html`.