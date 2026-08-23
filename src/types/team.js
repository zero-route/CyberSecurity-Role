/**
 * @typedef {'network' | 'application' | 'cloud' | 'governance' | 'incident-response' | 'threat-intel' | 'awareness'} Domain
 * @typedef {'beginner' | 'intermediate' | 'advanced'} SkillLevel
 *
 * @typedef {Object} Role
 * @property {string} slug - identifier unik untuk URL, misal "penetration-tester"
 * @property {string} title - nama role, misal "Penetration Tester"
 * @property {string} shortDescription - deskripsi singkat 1 kalimat
 * @property {string} longDescription - deskripsi lengkap untuk halaman detail
 * @property {Domain} domain - bidang keahlian utama
 * @property {SkillLevel} level - level kesulitan/jenjang role ini
 * @property {string[]} skills - daftar skill yang dibutuhkan
 * @property {string[]} tools - daftar tools yang biasa dipakai
 * @property {string[]} certifications - sertifikasi relevan, misal "OSCP", "CEH"
 * @property {string[]} responsibilities - tugas harian/utama
 * @property {string[]} careerPath - jenjang karier dari junior ke senior
 * @property {string[]} relatedRoles - slug role lain yang berkaitan
 *
 * @typedef {Object} Team
 * @property {string} id - identifier tim, misal "red"
 * @property {string} name - nama tim, misal "Red Team"
 * @property {string} color - kode warna hex untuk tema tim
 * @property {string} icon - nama ikon (opsional, untuk mapping ke asset)
 * @property {string} mission - deskripsi singkat misi/tujuan tim
 * @property {string} description - deskripsi lengkap peran tim secara umum
 * @property {Role[]} roles - daftar role dalam tim ini
 */

// File ini murni dokumentasi tipe data (JSDoc) karena project pakai .jsx/.js,
// bukan TypeScript. Import di komponen lain cukup untuk keperluan autocomplete:
// import '@/types/team'

export {};
