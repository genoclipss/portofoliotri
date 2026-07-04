import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Instagram,
  MessageCircle,
  ArrowDown,
  GraduationCap,
  Briefcase,
  Coffee,
  Mail,
  MapPin,
  Phone,
  Play,
  Link2,
  Download,
} from "lucide-react";

/* ============================================================
   HELPER PATH ASET (foto/logo lokal di folder public/)
   ------------------------------------------------------------
   Dipakai supaya path gambar tetap benar walau website di-deploy
   di subfolder (misalnya GitHub Pages: username.github.io/nama-repo/).
   Jangan hapus — cukup pakai aset("/images/...") atau aset("/logos/...")
   seperti pola yang sudah ada di bawah.
   ============================================================ */
const aset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

/* ============================================================
   WEBSITE PORTOFOLIO PREMIUM
   ------------------------------------------------------------
   Cara mengedit:
   1. Ganti data di bagian "DATA PRIBADI" di bawah ini.
   2. Untuk warna, buka file tailwind.config.js (bagian theme.extend.colors).
   3. Untuk animasi, lihat file src/App.tsx bagian "ANIMASI SCROLL REVEAL".
   ============================================================ */

/* ============================================================
   DATA PRIBADI — UBAH BAGIAN INI
   ============================================================ */
const DATA_PRIBADI = {
  nama: "Tri Ahmad Fhatur Wahyu", // <-- Ganti dengan nama Anda
  sapaan: "Halo, Saya", // <-- Sapaan pembuka
  keahlian: "Editor & Designer", // <-- Keahlian utama
  deskripsiSingkat:
    "Mahasiswa berusia 19 tahun yang tertarik pada bidang multimedia.", // <-- Deskripsi singkat di hero
  // Link tombol CTA di Hero Section
  whatsapp: "https://wa.me/62882022211031", // <-- Ganti nomor WhatsApp (format: 62...)
  instagram: "https://instagram.com/3fhatur", // <-- Ganti username Instagram
  // Tombol "Download CV" di Hero Section
  // <-- Taruh file CV (PDF) Anda di folder public/cv/ dengan nama CV.pdf,
  //     atau ganti nama file di path bawah ini sesuai nama file Anda.
  cv: aset("/cv/CV.pdf"),
  // About Me
 fotoProfil:
 aset("/images/p.jpg"),
  tentangSaya:
    "Saya adalah seorang mahasiswa yang tertarik pada bidang multimedia, dengan pengalaman lebih dari 4 tahun. Saya senang mempelajari hal-hal baru, dan berkreasi dengan kreativitas yang saya punya. Salah satu kelebihan saya adalah cepat beradaptasi dengan teknologi baru dan terus berkembang.", // <-- Deskripsi diri
  lokasi: "Makassar, Indonesia", // <-- Lokasi Anda
  email: "tri.ahmad593@smk.belajar.id", // <-- Email Anda
  telepon: "+62882022211031", // <-- Nomor telepon
};

/* ============================================================
   DATA PENGALAMAN — UBAH BAGIAN INI
   ============================================================ */
const DATA_PENGALAMAN = {
  pendidikan: [
    {
      judul: "Universitas Negeri Makassar",
      instansi: "Pend. Teknik Informatika & Komputer",
      tahun: "2024 — Sekarang",
      deskripsi:
        "Saya merupakan mahasiswa Program Studi Pendidikan Teknik Informatika dan Komputer di Universitas Negeri Makassar yang saat ini sedang menempuh semester lima. Selama masa perkuliahan, saya aktif mengikuti berbagai kegiatan akademik dan nonakademik.",
      logo: aset("/images/karya/unmm.png"),
      // <-- Isi galeri "Lebih Detail". Kosongkan foto & video ( [] ) jika tidak ingin tombol muncul.
      karya: {
        foto: [
          aset("/images/karya/kuliah/1.jpg"),
          aset("/images/karya/kuliah/2.jpg"),
          aset("/images/karya/kuliah/3.jpg"),
          aset("/images/karya/kuliah/4.jpg"),
          aset("/images/karya/kuliah/5.jpg"),
          aset("/images/karya/kuliah/6.jpg"),
          aset("/images/karya/kuliah/7.jpg"),
          aset("/images/karya/kuliah/8.jpg"),
          aset("/images/karya/kuliah/9.jpg"),
        ], // <-- Taruh file foto di folder public/images/karya/
        video: [
          "",
        ], // <-- Tempel link YouTube di sini
      },
    },
    {
      judul: "SMK Negeri 1 Pinrang",
      instansi: "Jurusan Multimedia",
      tahun: "2021 — 2024",
      deskripsi:
        "Saya menempuh pendidikan menengah kejuruan pada jurusan Multimedia. Selama masa pendidikan, saya memperoleh pengalaman dalam pengambilan foto dan video, serta mengembangkan kemampuan mengedit foto dan video.",
      logo: aset("/images/karya/smk.png"),
      karya: {
        foto: [
          aset("/images/karya/smk/1.jpg"),
          aset("/images/karya/smk/2.jpg"),
          aset("/images/karya/smk/3.jpg"),
          aset("/images/karya/smk/4.jpg"),
          aset("/images/karya/smk/5.jpg"),
          aset("/images/karya/smk/6.jpg"),
        ],
        video: [],
      },
    },
  ],
  magang: [
    {
      judul: "Editor Video Viral Tribun Timur",
      instansi: "Tribun Timur Makassar",
      tahun: "2026 — Sekarang",
      deskripsi:
        "Selama magang di Tribun Timur, saya berkontribusi dalam bidang redaksi sebagai editor video, pengisi voice over, dan desainer thumbnail. Dari pengalaman tersebut, saya berhasil menghasilkan lebih dari 80 konten digital yang dipublikasikan.",
      logo: aset("/images/karya/tribun.png"),
      karya: {
        foto: [aset("/images/karya/tribun/1.jpeg")],
        video: [
          "https://youtu.be/HAcLrkSuBv8",
"https://youtu.be/LmGDIe6PlMM",
"https://www.youtube.com/watch?v=uJFU6lx6mag",
"https://www.youtube.com/watch?v=LTeaqf0Y5kc",
"https://www.youtube.com/watch?v=tBx7Aiz92Qw",
"https://youtu.be/JYmJbiXk2Sk",
"https://youtu.be/JYmJbiXk2Sk",
"https://youtu.be/lD20hyUzAbQ",
"https://youtu.be/EvE1qpIyjuc",
"https://youtu.be/quktyjhD3rs",
"https://youtu.be/F7LimZyA1PI",
"https://youtu.be/arTNuWNUfh8",
"https://youtu.be/fz5hEf8FYVo",
"https://youtu.be/WOpRqZAs7dI",
"https://youtu.be/x3sYfbcQZIg",
"https://youtu.be/2SpdbDZO82A",
"https://youtu.be/fiOg29tFOSo",
"https://youtu.be/XBmW6Twcsok",
"https://youtu.be/EhUpB2ytuKc",
"https://youtu.be/rH7rglWBwxk",
"https://youtu.be/XFY-MZuufZE",
"https://youtu.be/BxBCX8qkbcQ",
"https://youtu.be/OMKHwpF-7WI",
"https://youtu.be/ePFGWMDWtzc",
"https://youtu.be/h1cNd_vbg8c",
"https://youtu.be/8ZrtZ2jyCRQ",
"https://youtu.be/Q_rUEAdTI-s",
"https://youtu.be/p4t8bPAhYug",
"https://youtu.be/LarMwUR5bto",
"https://youtu.be/2WTlhvT2vEc",
"https://youtu.be/lO9R-0SwJQU",
"https://youtu.be/MzBKKGeVlK0",
"https://youtu.be/lgOVW7kz8vk",
"https://youtu.be/oVxfHFZkCmk",
"https://youtu.be/f6au8zH2wMc",
"https://youtu.be/mFUGcE5b-IY",
"https://youtu.be/Xb2u4GEJudE",
"https://youtu.be/26VrY1QffgY",
"https://youtu.be/VNJzzLW2BXY",
"https://youtu.be/fGSLJj9Nfm4",
"https://youtu.be/HHLIFbNi5Ks",
"https://youtu.be/YlLSltyGfJ8",
"https://youtu.be/VdISJUnOfJQ",
"https://youtu.be/rWZnIX22GMA",
"https://youtu.be/eMLD_VBcv9Q",
"https://youtu.be/OJ3YqVW3zZM",
"https://youtu.be/4pz-B8uNntM",
"https://youtu.be/Eyb_3_WNwB0",
"https://youtu.be/pHO5KZQmm1E",
"https://youtu.be/3f7Z0P3z0Uw",
"https://www.youtube.com/watch?v=fm2zb2TgYJc",
"https://www.youtube.com/watch?v=nZ6KULtSxGo",
"https://www.youtube.com/watch?v=7bsvhQJvx4I",
"https://www.youtube.com/watch?v=yb4QfVbTDVU",
"https://www.youtube.com/watch?v=stDXXSizrig",
"https://www.youtube.com/watch?v=eBNPOZAsFFc",
"https://www.youtube.com/watch?v=NWNf_16plZQ",
"https://www.youtube.com/watch?v=fv5oRVSjZrQ",
"https://www.youtube.com/watch?v=B9k8FmP__LQ",
"https://www.youtube.com/watch?v=bJku8W1cDLs",
"https://youtu.be/s4EFBXJCZ0U",
"https://youtu.be/fhAQElcZKaE",
"https://youtu.be/9Jo7OSiOfd0",
"https://youtu.be/EExYsXXlXnU",
"https://youtu.be/GDLFhXEGC5k",
"https://youtu.be/Fs7qaiIRxA0",
"https://youtu.be/UP5Cr_JOSU0",
"https://www.youtube.com/watch?v=34xD87sTHt8",
"https://youtu.be/KmunXDJoZwE",
"https://www.youtube.com/watch?v=l3eFAPPignA",
        ],
      },
    },
    {
      judul: "Editor Fajar Tv",
      instansi: "P.T Fajar TV Makassar",
      tahun: " Juni 2023 — September 2023",
      deskripsi:
        "Saya terlibat secara langsung dalam proses produksi siaran televisi, mulai dari mengedit konten berita dan segmen prakiraan cuaca pada program PRIMEZONE, menjadi operator saat program PRIMEZONE berlangsung secara live, hingga melakukan peliputan berita di lapangan.",
      logo: aset("/images/karya/fajar.jpg"),
      karya: {
        foto: [
          aset("/images/karya/fajar/1.jpg"),
          aset("/images/karya/fajar/2.jpg"),
          aset("/images/karya/fajar/3.jpg"),
          aset("/images/karya/fajar/4.jpg"),
          aset("/images/karya/fajar/5.jpg"),
          aset("/images/karya/fajar/6.jpg"),],
        video: [
          "https://youtu.be/LjkUjSHENuE?si=hkU8Za-s8kLzpdZk",
          "https://youtu.be/6Ccr1N2VUfg?si=0NGeDu7h_lJtpBql",
          "https://youtu.be/yz1qiyVcClg?si=6832Mjh3bySkPfuw",
          "https://youtu.be/rOrx-NooE84?si=28pghmmCdhceM0H_",
          "https://youtu.be/ExG7bSClKU4?si=J2-Fkvv72_LDN26e",
          "https://youtu.be/pooO2CgUaQQ?si=K6Qz_C6Ltjxb713y",
          "https://youtu.be/G9LjqWDyrR0?si=fj3jH0gs2--6yRbN",
          "https://youtu.be/1ce44qJCjzw?si=UjewVnXsVbk6JJjO",
          "https://youtu.be/39VJMsxFSfU?si=GzWtuQMVcCvZDcBH",
          "https://youtu.be/1G6NElSOMCw?si=y9-EFaDrOAMABbfg",
          "https://youtu.be/ZrCnjFeNQO0?si=fpTqUFQQYDWRCU81",
],
      },
    },
  ],
  pekerjaan: [
    {
      judul: "Clipper",
      instansi: "Tiktok & Youtube",
      tahun: "2025 — Sekarang ",
      deskripsi:
        "Salah satu hobi yang saya tekuni adalah membuat konten video sebagai clipper. Hingga saat ini, saya telah mengunggah 24 video di YouTube dan TikTok dengan total perolehan lebih dari 90 ribu likes.",
      logo: aset("/images/karya/tiktok.png"),
      karya: {
        foto: [
          aset("/images/karya/clip/1.jpg"),
          aset("/images/karya/clip/2.jpg"),
      ],
        video: [],
      },
    },
    
    {
      judul: "Desain Grafis",
      instansi: "Instagram",
      tahun: "2025 — Sekarang",
      deskripsi:
        "Sebagai bentuk pengembangan kreativitas, saya sering mengedit foto pribadi dengan konsep visual bergaya poster dan membagikannya melalui media sosial.",
      logo: aset("/images/karya/ig.png"),
      karya: {
        foto: [
          aset("/images/karya/desain/1.jpg"),
          aset("/images/karya/desain/2.jpg"),
          aset("/images/karya/desain/3.jpg"),
          aset("/images/karya/desain/4.jpg"),
          aset("/images/karya/desain/5.jpg"),
          aset("/images/karya/desain/6.jpg"),
          aset("/images/karya/desain/7.jpg"),
          aset("/images/karya/desain/8.jpg"),
          aset("/images/karya/desain/9.jpg"),
        ],
        video: [],
      },
    },
    
  ],
};

/* ============================================================
   DATA SKILL — UBAH BAGIAN INI
   ============================================================ */
const DATA_SKILL = [
  { nama: "Photoshop", logo: aset("/logos/PS.PNG") }, // <-- Taruh file PNG di folder public/logos/
  { nama: "Capcut", logo: aset("/logos/CC.PNG") },
  { nama: "Canva", logo: aset("/logos/CANVA.PNG") },
  { nama: "Figma", logo: aset("/logos/FIGMA.PNG") },
  { nama: "Vscode", logo: aset("/logos/vscode.png") },
];

/* ============================================================
   ANIMASI SCROLL REVEAL
   ------------------------------------------------------------
   Hook ini mendeteksi elemen yang masuk ke layar dan menambahkan
   class "is-visible" untuk memicu animasi fade-in/slide-up.
   ============================================================ */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}

/* ============================================================
   KOMPONEN NAVBAR
   ============================================================ */
function Navbar() {
  const [buka, setBuka] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Pengalaman", href: "#pengalaman" },
    { label: "Skill", href: "#skill" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scroll
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-gold/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Nama di Navbar */}
        <a
          href="#home"
          className="text-xl font-bold tracking-tight text-cream"
        >
          {DATA_PRIBADI.nama.split(" ")[0]}
          <span className="text-gold">.</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {menu.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-cream/70 hover:text-gold transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Tombol Hamburger Mobile */}
        <button
          className="md:hidden text-cream"
          onClick={() => setBuka(!buka)}
          aria-label="Menu"
        >
          {buka ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {buka && (
        <div className="md:hidden bg-[#0a0a0f]/95 backdrop-blur-xl border-t border-gold/10 mt-4">
          <div className="flex flex-col px-6 py-4 gap-4">
            {menu.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setBuka(false)}
                className="text-cream/70 hover:text-gold transition-colors duration-300 font-medium py-2"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

/* ============================================================
   KOMPONEN HERO SECTION (HOME)
   ============================================================ */
function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient dekoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f17] to-[#0a0a0f]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Sapaan */}
        <p
          className="reveal text-gold text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-6"
          style={{ transitionDelay: "100ms" }}
        >
          {DATA_PRIBADI.sapaan}
        </p>

        {/* Nama */}
        <h1
          className="reveal text-5xl md:text-7xl lg:text-8xl font-bold text-cream mb-6 leading-tight"
          style={{ transitionDelay: "200ms" }}
        >
          {DATA_PRIBADI.nama}
        </h1>

        {/* Keahlian */}
        <p
          className="reveal text-lg md:text-2xl text-cream/60 mb-4 font-light"
          style={{ transitionDelay: "300ms" }}
        >
          {DATA_PRIBADI.keahlian}
        </p>

        {/* Deskripsi singkat */}
        <p
          className="reveal text-base md:text-lg text-cream/40 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ transitionDelay: "400ms" }}
        >
          {DATA_PRIBADI.deskripsiSingkat}
        </p>

        {/* Tombol CTA — WhatsApp & Instagram */}
        <div
          className="reveal flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ transitionDelay: "500ms" }}
        >
          <a
            href={DATA_PRIBADI.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gold text-[#0a0a0f] rounded-full font-semibold hover:bg-gold-light transition-all duration-300 hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:-translate-y-0.5"
          >
            <MessageCircle size={20} />
            Hubungi via WhatsApp
          </a>
          <a
            href={DATA_PRIBADI.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream rounded-full font-semibold hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
          >
            <Instagram size={20} />
            Lihat Instagram
          </a>
          <a
            href={DATA_PRIBADI.cv}
            download
            className="group flex items-center gap-3 px-8 py-4 border border-cream/20 text-cream rounded-full font-semibold hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-0.5"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>

      {/* Indikator scroll */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="text-cream/30" size={28} />
      </div>
    </section>
  );
}

/* ============================================================
   KOMPONEN ABOUT ME
   ============================================================ */
function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="reveal text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Tentang Saya
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">
            About Me
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Foto Profil */}
          <div className="reveal relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-gold/20 to-blue-900/20 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-3xl border border-cream/10">
              <img
                src={DATA_PRIBADI.fotoProfil}
                alt={DATA_PRIBADI.nama}
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
            </div>
          </div>

          {/* Teks Deskripsi */}
          <div className="reveal" style={{ transitionDelay: "150ms" }}>
            <h3 className="text-2xl md:text-3xl font-semibold text-cream mb-6">
              {DATA_PRIBADI.keahlian}
            </h3>
            <p className="text-cream/60 leading-relaxed mb-8 text-lg">
              {DATA_PRIBADI.tentangSaya}
            </p>

            {/* Info kontak singkat */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-cream/70">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <MapPin size={18} />
                </div>
                <span>{DATA_PRIBADI.lokasi}</span>
              </div>
              <div className="flex items-center gap-4 text-cream/70">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Mail size={18} />
                </div>
                <span>{DATA_PRIBADI.email}</span>
              </div>
              <div className="flex items-center gap-4 text-cream/70">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                  <Phone size={18} />
                </div>
                <span>{DATA_PRIBADI.telepon}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   KOMPONEN KARTU TIMELINE (untuk Pengalaman)
   ============================================================ */
function KartuPengalaman({
  item,
  index,
  onLihatKarya,
}: {
  item: (typeof DATA_PENGALAMAN.pendidikan)[0];
  index: number;
  onLihatKarya: (item: (typeof DATA_PENGALAMAN.pendidikan)[0]) => void;
}) {
  const adaKarya =
    item.karya && (item.karya.foto.length > 0 || item.karya.video.length > 0);

  return (
    <div
      className="reveal group relative bg-[#0f0f17] border border-cream/10 rounded-2xl p-6 hover:border-gold/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Logo perusahaan/sekolah */}
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl overflow-hidden border border-cream/10 flex-shrink-0">
          <img
            src={item.logo}
            alt={item.instansi}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h4 className="text-lg font-semibold text-cream group-hover:text-gold transition-colors duration-300">
            {item.judul}
          </h4>
          <p className="text-sm text-cream/50">{item.instansi}</p>
        </div>
      </div>

      {/* Tahun */}
      <span className="inline-block text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full mb-3">
        {item.tahun}
      </span>

      {/* Deskripsi */}
      <p className="text-cream/60 text-sm leading-relaxed">
        {item.deskripsi}
      </p>

      {/* Tombol Lebih Detail — hanya muncul jika ada foto/video */}
      {adaKarya && (
        <button
          onClick={() => onLihatKarya(item)}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gold bg-gold/10 hover:bg-gold hover:text-[#0a0a0f] px-4 py-2 rounded-full transition-all duration-300"
        >
          <Link2 size={16} />
          Lebih Detail
        </button>
      )}
    </div>
  );
}

/* ============================================================
   HELPER — Ambil ID video YouTube dari berbagai format link
   ============================================================ */
function ambilIdYoutube(url: string): string | null {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
}

/* ============================================================
   KOMPONEN POP-UP GALERI "LEBIH DETAIL" (foto + video)
   ------------------------------------------------------------
   Animasi buka/tutup mengikuti gaya yang sama dengan animasi
   scroll-reveal situs (fade + geser + easing cubic-bezier yang sama),
   supaya terasa menyatu dengan animasi lain di halaman.
   ============================================================ */
function ModalKarya({
  item,
  onClose,
}: {
  item: (typeof DATA_PENGALAMAN.pendidikan)[0] | null;
  onClose: () => void;
}) {
  const [itemTampil, setItemTampil] = useState<typeof item>(null);
  const [aktif, setAktif] = useState(false);
  const [previewAktif, setPreviewAktif] = useState<
    { tipe: "foto" | "video"; sumber: string } | null
  >(null);

  // Kontrol animasi masuk/keluar modal utama
  useEffect(() => {
    if (item) {
      setItemTampil(item);
      const frame = requestAnimationFrame(() => setAktif(true));
      return () => cancelAnimationFrame(frame);
    } else if (itemTampil) {
      setAktif(false);
      setPreviewAktif(null);
      const timer = setTimeout(() => setItemTampil(null), 400);
      return () => clearTimeout(timer);
    }
  }, [item]);

  // Kunci scroll halaman & dukung tombol Esc saat modal terbuka
  useEffect(() => {
    if (!itemTampil) return;
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (previewAktif) setPreviewAktif(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [itemTampil, previewAktif]);

  if (!itemTampil) return null;

  const foto = itemTampil.karya?.foto ?? [];
  const video = itemTampil.karya?.video ?? [];

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
        aktif ? "opacity-100" : "opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#0f0f17] border border-cream/10 rounded-2xl p-6 relative transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          aktif
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tombol tutup */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cream/50 hover:text-gold transition-colors duration-300"
          aria-label="Tutup"
        >
          <X size={20} />
        </button>

        {/* Judul modal */}
        <h4 className="text-lg font-semibold text-cream mb-1 pr-8">
          {itemTampil.judul}
        </h4>
        <p className="text-sm text-cream/50 mb-6">{itemTampil.instansi}</p>

        {/* ============ GALERI FOTO & VIDEO ============ */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {foto.map((src, i) => (
            <button
              key={`foto-${i}`}
              onClick={() => setPreviewAktif({ tipe: "foto", sumber: src })}
              className="group relative aspect-square rounded-xl overflow-hidden border border-cream/10 hover:border-gold/40 transition-all duration-300"
            >
              <img
                src={src}
                alt={`Karya ${itemTampil.judul} ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </button>
          ))}

          {video.map((url, i) => {
            const id = ambilIdYoutube(url);
            if (!id) return null;
            return (
              <button
                key={`video-${i}`}
                onClick={() => setPreviewAktif({ tipe: "video", sumber: id })}
                className="group relative aspect-square rounded-xl overflow-hidden border border-cream/10 hover:border-gold/40 transition-all duration-300"
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt={`Video ${itemTampil.judul} ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay ikon play */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors duration-300">
                  <div className="w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center">
                    <Play size={18} className="text-[#0a0a0f] ml-0.5" fill="currentColor" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {foto.length === 0 && video.length === 0 && (
          <p className="text-cream/40 text-sm text-center py-8">
            Belum ada foto atau video untuk ditampilkan.
          </p>
        )}
      </div>

      {/* ============ PREVIEW BESAR (LIGHTBOX) ============ */}
      {previewAktif && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/90 animate-[fadeInUp_0.3s_cubic-bezier(0.16,1,0.3,1)]"
          onClick={(e) => {
            e.stopPropagation();
            setPreviewAktif(null);
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPreviewAktif(null);
            }}
            className="absolute top-6 right-6 text-cream/70 hover:text-gold transition-colors duration-300"
            aria-label="Tutup preview"
          >
            <X size={28} />
          </button>

          {previewAktif.tipe === "foto" ? (
            <img
              src={previewAktif.sumber}
              alt="Preview karya"
              className="max-w-full max-h-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <div
              className="w-full max-w-3xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={`https://www.youtube.com/embed/${previewAktif.sumber}?autoplay=1`}
                title="Video karya"
                className="w-full h-full rounded-xl"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/* ============================================================
   KOMPONEN PENGALAMAN
   ============================================================ */
function Pengalaman() {
  const [karyaAktif, setKaryaAktif] = useState<
    (typeof DATA_PENGALAMAN.pendidikan)[0] | null
  >(null);

  const kategori = [
    {
      judul: "Riwayat Pendidikan",
      ikon: GraduationCap,
      data: DATA_PENGALAMAN.pendidikan,
    },
    {
      judul: "Pengalaman Magang",
      ikon: Coffee,
      data: DATA_PENGALAMAN.magang,
    },
    {
      judul: "Pekerjaan",
      ikon: Briefcase,
      data: DATA_PENGALAMAN.pekerjaan,
    },
  ];

  return (
    <section
      id="pengalaman"
      className="py-24 md:py-32 bg-[#0f0f17] relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold/3 rounded-full blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="reveal text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Perjalanan Saya
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">
            Pengalaman
          </h2>
        </div>

        {/* Grid 3 kategori pengalaman */}
        <div className="grid lg:grid-cols-3 gap-8">
          {kategori.map((kat, i) => {
            const Ikon = kat.ikon;
            return (
              <div key={i} className="reveal" style={{ transitionDelay: `${i * 150}ms` }}>
                {/* Header kategori */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                    <Ikon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold text-cream">
                    {kat.judul}
                  </h3>
                </div>

                {/* Kartu-kartu pengalaman */}
                <div className="space-y-4">
                  {kat.data.map((item, idx) => (
                    <KartuPengalaman
                      key={idx}
                      item={item}
                      index={idx}
                      onLihatKarya={setKaryaAktif}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pop-up daftar link karya */}
      <ModalKarya item={karyaAktif} onClose={() => setKaryaAktif(null)} />
    </section>
  );
}

/* ============================================================
   KOMPONEN SKILL
   ============================================================ */
function Skill() {
  return (
    <section id="skill" className="py-24 md:py-32 bg-[#0a0a0f] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Judul Section */}
        <div className="reveal text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-3">
            Keahlian
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-cream">Skill</h2>
        </div>

        {/* Grid skill */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {DATA_SKILL.map((skill, i) => {
            return (
              <div
                key={i}
                className="reveal group relative bg-[#0f0f17] border border-cream/10 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 hover:border-gold/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Logo aplikasi (PNG) — taruh filenya di folder public/logos/ */}
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-all duration-500 p-3">
                  <img
                    src={skill.logo}
                    alt={skill.nama}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-cream/70 group-hover:text-cream font-medium transition-colors duration-300">
                  {skill.nama}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   KOMPONEN FOOTER
   ============================================================ */
function Footer() {
  return (
    <footer className="bg-[#0f0f17] border-t border-cream/10 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-cream/40 text-sm mb-4">
          &copy; {new Date().getFullYear()} {DATA_PRIBADI.nama}. Dibuat dengan
          dedikasi.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href={DATA_PRIBADI.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/50 hover:text-gold transition-colors duration-300"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href={DATA_PRIBADI.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/50 hover:text-gold transition-colors duration-300"
          >
            <Instagram size={22} />
          </a>
          <a
            href={`mailto:${DATA_PRIBADI.email}`}
            className="text-cream/50 hover:text-gold transition-colors duration-300"
          >
            <Mail size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   KOMPONEN UTAMA APP
   ============================================================ */
function App() {
  useScrollReveal();

  return (
    <div className="bg-[#0a0a0f] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Pengalaman />
      <Skill />
      <Footer />
    </div>
  );
}

export default App;
