# Product Requirements Document (PRD)
## Nama Game: Pecah Balon (Endless Balloon Pop)

### 1. Latar Belakang & Target Audiens
Game PWA edukatif yang dirancang khusus untuk balita (usia 1-4 tahun). Tujuan utamanya adalah melatih motorik kasar, koordinasi mata-tangan, dan memberikan hiburan responsif tanpa risiko memencet iklan atau keluar dari aplikasi secara tidak sengaja.

### 2. Aturan & Mekanik Game (Sangat Penting!)
- **TANPA Game Over / Menang-Kalah:** Balon terus bermunculan tanpa henti (endless loop).
- **TANPA Skor & Teks:** Layar harus bersih dari angka, teks, atau tombol menu.
- **Interaksi Tunggal:** Balita hanya perlu menyentuh (tap) balon. Balon yang disentuh akan pecah (menghilang).
- **Pergerakan:** Balon muncul dari luar batas bawah layar dan perlahan melayang ke atas. Jika melewati batas atas, hapus elemen tersebut dari DOM untuk mencegah memory leak.
- **Kecepatan & Spawn Rate:** Disesuaikan untuk balita (spawn sekitar 1-1.5 detik sekali, kecepatan melayang lambat/sedang).

### 3. Persyaratan Teknis
- **Tech Stack:** Murni HTML5, CSS3, dan Vanilla JavaScript. Tanpa framework (React/Vue/dll) dan tanpa game engine (Canvas/Phaser).
- **PWA (Progressive Web App):** Wajib bisa diinstal (manifest.json) dan bisa dimainkan offline 100% (Service Worker dengan strategi Cache First).
- **Audio:** Menggunakan Web Audio API bawaan browser untuk menghasilkan suara "pop" ringan (synthesized). JANGAN menggunakan file eksternal `.mp3` atau `<audio>` tag.
- **Visual:** Balon dibuat murni menggunakan elemen HTML `<div>` dan styling CSS (border-radius, warna pastel acak, ekor balon). JANGAN menggunakan aset gambar eksternal (jpg/png/svg).
- **Proteksi Balita:** Layar wajib fullscreen. Wajib mendisable zoom, pinch, scrolling, double-tap to zoom, dan text-selection menggunakan meta viewport ketat dan CSS (`touch-action: none`, `user-select: none`).