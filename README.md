# Cyber Security Explanation

Website edukasi interaktif yang menjelaskan bidang **Cyber Security** secara menyeluruh — mulai dari fungsi, peran penting, hingga pembagian kerja lewat **7 tim warna**: Red, Blue, Green, Purple, Orange, Yellow, dan White Team.

## ✨ Fitur

- **Landing page** dengan overview konsep Cyber Security Wheel
- **Filter multi-kriteria**: berdasarkan tim, domain keahlian (network, application, cloud, dll), level (beginner/intermediate/advanced), dan pencarian bebas
- **Halaman detail role** (`/role/[slug]`) — deskripsi lengkap, skill, tools, sertifikasi, jenjang karier, dan role terkait
- **Matrix tabel perbandingan tim** — fokus utama, jumlah role, contoh tools & sertifikasi tiap tim
- Dark mode by default, dibangun dengan Tailwind CSS

## 🗂️ Struktur Folder

```
cybersecurity-explanation/
├── app/
│   ├── globals.css
│   ├── layout.jsx
│   ├── page.jsx                  # Landing page
│   └── role/
│       └── [slug]/
│           └── page.jsx          # Halaman detail role (dynamic route)
├── src/
│   ├── components/
│   │   ├── features/
│   │   │   ├── RoleCard.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── TeamSelector.jsx
│   │   │   ├── FilterPanel.jsx   # Filter multi-kriteria
│   │   │   └── TeamMatrix.jsx    # Matrix tabel perbandingan tim
│   │   ├── layout/
│   │   │   ├── Container.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Header.jsx
│   │   └── ui/
│   │       ├── Badge.jsx
│   │       └── Card.jsx
│   ├── data/
│   │   ├── overviewData.js
│   │   └── teamsData.js          # Data 7 tim & seluruh role-nya
│   ├── hooks/
│   │   └── useFilteredTeams.js   # Logika filter multi-kriteria
│   ├── lib/
│   │   └── utils.js
│   └── types/
│       └── team.js               # Skema data (JSDoc)
├── next.config.mjs
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Menjalankan Project

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

## 🧩 Cara Kerja Data

Semua data tim & role terpusat di `src/data/teamsData.js`. Setiap role memiliki:

| Field | Keterangan |
|---|---|
| `slug` | Identifier unik untuk URL detail (`/role/[slug]`) |
| `domain` | Bidang keahlian: network, application, cloud, governance, dll |
| `level` | beginner / intermediate / advanced |
| `skills`, `tools`, `certifications` | Ditampilkan sebagai tag di halaman detail |
| `careerPath` | Jenjang karier dari junior ke senior |
| `relatedRoles` | Slug role lain yang relevan, ditampilkan sebagai link |

Menambah role baru cukup dengan menambah objek baru di array `roles` pada tim terkait — halaman detail otomatis ter-generate lewat `generateStaticParams()`.

## 🎯 Menambah Filter Baru

Logika filter ada di `src/hooks/useFilteredTeams.js`. Untuk menambah kriteria baru (misal filter sertifikasi), tambahkan state baru dan gabungkan ke kondisi `.filter()` di dalam `useMemo`.

## 🛠️ Tech Stack

- [Next.js](https://nextjs.org/) (App Router)
- React + JSX
- Tailwind CSS
- TypeScript config untuk beberapa file utilitas (opsional, project utama tetap `.jsx`/`.js`)

## 📌 Catatan Pengembangan

- Project ini murni React/Next.js. Jika ingin bereksperimen dengan **Vue**, jalankan sebagai project terpisah (misal via Nuxt) dan hubungkan lewat iframe atau subdomain berbeda — App Router Next.js tidak bisa merender komponen `.vue` secara native.
- Untuk deployment cepat, gunakan [Vercel](https://vercel.com/).

## 📄 Lisensi

Bebas digunakan untuk keperluan edukasi.
