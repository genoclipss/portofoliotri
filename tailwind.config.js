/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      /* ============================================================
         SISTEM WARNA — UBAH BAGIAN INI UNTUK MENGUBAH PALET WARNA
         ------------------------------------------------------------
         Palet: Dark mode elegan dengan aksen emas & biru tua
         ============================================================ */
      colors: {
        // Warna utama background (dark mode)
        'dark-base': '#0a0a0f', // <-- Warna background paling gelap
        'dark-surface': '#0f0f17', // <-- Warna background kartu/surface
        // Aksen emas (warna premium)
        gold: '#d4af37', // <-- Warna emas utama
        'gold-light': '#e5c567', // <-- Warna emas lebih terang (untuk hover)
        'gold-dark': '#b8941f', // <-- Warna emas lebih gelap
        // Warna teks
        cream: '#f5f0e8', // <-- Warna teks utama (krem lembut)
        // Aksen biru tua
        'blue-deep': '#1a2a3a', // <-- Warna biru tua untuk aksen sekunder
      },
      /* ============================================================
         TIPOGRAFI — FONT FAMILY
         ============================================================ */
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
};
