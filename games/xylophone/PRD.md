# Product Requirements Document (PRD)
## Nama Game: Xilofon Ajaib (Magic Xylophone)

### 1. Latar Belakang & Target Audiens
Game PWA musikal untuk balita (usia 1-4 tahun). Bertujuan untuk mengenalkan hubungan sebab-akibat (sentuhan menghasilkan suara dan cahaya) serta menstimulasi pendengaran tanpa suara bising/iklan yang mengagetkan.

### 2. Aturan & Mekanik Game
- **Tampilan:** Layar penuh terbagi menjadi 5 hingga 7 balok vertikal (tuts) dengan warna pelangi yang berbeda (Merah, Jingga, Kuning, Hijau, Biru, dll).
- **Interaksi:** Saat balita menyentuh (tap/swipe) sebuah balok:
  1. Balok tersebut memberikan efek visual (misalnya menyala/glow atau seolah ditekan ke dalam).
  2. Mengeluarkan nada musik yang harmonis (misal: C, D, E, F, G).
- **Multi-touch:** Balita sering menempelkan lebih dari satu jari. Game harus bisa merespons multi-touch (memainkan beberapa nada bersamaan jika beberapa tuts disentuh).
- **TANPA Menu & UI:** Tidak ada tombol pengaturan, skor, atau teks.

### 3. Persyaratan Teknis
- **Tech Stack:** Murni HTML5, CSS3, dan Vanilla JavaScript. 
- **PWA:** Wajib bisa diinstal (manifest.json) dan offline 100% (Service Worker - Cache First).
- **Audio (Sangat Penting):** MENGGUNAKAN Web Audio API (`AudioContext` dan `OscillatorNode`). Gunakan tipe gelombang 'sine' atau 'triangle' agar suaranya lembut di telinga balita, BUKAN gelombang 'square' atau 'sawtooth' yang kasar. JANGAN gunakan tag `<audio>` atau file eksternal.
- **Visual:** Murni CSS. Gunakan Flexbox agar tuts otomatis mengisi penuh layar baik dalam posisi potret (berdiri) maupun lanskap (tidur).
- **Proteksi Balita:** Cegah default gesture browser (zoom, scroll, text-select, pinch) dengan `touch-action: none;` dan `user-select: none;`. Gunakan event `pointerdown` atau `touchstart` untuk respons paling instan.