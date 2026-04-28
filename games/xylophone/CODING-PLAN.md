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

### Fase 1: Setup HTML & Struktur Tuts (Flexbox)
- Buat `index.html` dengan meta viewport ketat (disable scaling).
- Di dalam body, buat container yang membungkus 5-7 div sebagai tuts xilofon.
- Beri data-attribute pada setiap tuts untuk menyimpan nilai frekuensi nada (misal: `data-note="261.63"` untuk nada C/Do).

### Fase 2: Styling CSS
- Buat `style.css`. Gunakan Flexbox pada container (`display: flex; flex: 1;`) agar tuts membagi layar sama rata.
- Beri warna pelangi pastel pada setiap tuts.
- Tambahkan class `.active` yang memberikan efek `filter: brightness(1.5)` atau `transform: scale(0.95)` saat tuts disentuh, lengkapi dengan transisi CSS yang halus.

### Fase 3: Logika Audio & Interaksi (JavaScript)
- Buat `script.js`. Inisialisasi `AudioContext`.
- Buat fungsi `playNote(frequency)` yang membuat `OscillatorNode`, menyetel frekuensinya, menghubungkannya ke `GainNode` (untuk mengatur volume agar tidak pecah/terlalu keras), lalu menghentikannya setelah 0.5 detik dengan efek *fade out* yang lembut.
- Tambahkan event listener `pointerdown` dan `pointerup` (atau `pointerout`) pada tuts untuk memicu animasi visual dan memanggil fungsi `playNote`.

### Fase 4: Integrasi PWA
- Buat `manifest.json` (standalone/fullscreen, warna tema cerah).
- Buat `sw.js` untuk caching semua aset (HTML, CSS, JS) agar offline-ready.
- Tambahkan script registrasi service worker di `index.html`.