# Product Requirements Document (PRD)
## Nama Game: Petik Apel (Apple Harvest)

### 1. Latar Belakang & Target Audiens
Game PWA kasual untuk balita (usia 1-4 tahun) bertema panen buah apel. Fokus pada interaksi sentuhan dasar (tap), pengenalan objek, dan respons visual/audio yang memuaskan untuk melatih motorik halus.

### 2. Aturan & Mekanik Game
- **Tampilan Utama:** Latar belakang berupa pohon sederhana (batang cokelat di bawah, dedaunan hijau besar di atas yang memenuhi mayoritas layar). 
- **Objek Interaktif:** Terdapat 5 hingga 8 buah apel (menggunakan karakter teks/emoji 🍎 berukuran sangat besar) yang tersebar secara acak di area dedaunan hijau.
- **Interaksi Sentuhan:** 1. Saat apel disentuh, apel akan terlepas (jatuh ke bawah layar menggunakan animasi CSS `translateY`) dan memudar (`opacity: 0`).
  2. Saat disentuh, keluar suara "plop" atau "petik" yang lucu.
- **Endless Loop:** Apel yang sudah jatuh dan hilang akan "tumbuh" kembali di posisi acak (atau posisi semula) setelah *delay* 2-3 detik dengan animasi membesar (`transform: scale` dari 0 ke 1).
- **Tanpa Tekanan:** Tidak ada skor keranjang, tidak ada waktu habis, tidak ada *Game Over*.

### 3. Persyaratan Teknis
- **Tech Stack:** Murni HTML5, CSS3, dan Vanilla JavaScript.
- **Visual Asli (Tanpa Gambar Luar):** Gunakan bentuk CSS dasar (lingkaran hijau besar untuk daun, persegi panjang cokelat untuk batang). Gunakan emoji 🍎 untuk apelnya.
- **Audio Sintetis:** Gunakan Web Audio API (AudioContext) untuk membuat suara *pluck* (petikan senar pendek) atau *boop* saat apel disentuh. JANGAN gunakan tag `<audio>`.
- **Proteksi UI:** Wajib fullscreen, `touch-action: none;`, `user-select: none;`, `overflow: hidden;` agar layar tidak bergeser saat anak memencet layar secara brutal.
- **PWA:** Wajib memiliki `manifest.json` dan `sw.js` (Cache First) untuk instalasi offline.