export interface OverviewItem {
  icon: string;
  title: string;
  description: string;
}

export const overviewItems: OverviewItem[] = [
  {
    icon: "ShieldCheck",
    title: "Perlindungan Aset",
    description:
      "Menjaga kerahasiaan (Confidentiality), integritas (Integrity), dan ketersediaan (Availability) — dikenal sebagai Triad CIA — dari seluruh aset informasi digital.",
  },
  {
    icon: "AlertOctagon",
    title: "Mengapa Penting?",
    description:
      "Serangan siber meningkat tiap tahun. Kebocoran data, ransomware, dan spionase digital mengancam bisnis, pemerintah, dan individu secara bersamaan.",
  },
  {
    icon: "Workflow",
    title: "Cara Kerjanya",
    description:
      "Gabungan manusia, proses, dan teknologi: dari kebijakan keamanan, pelatihan kesadaran, hingga alat otomasi deteksi ancaman yang canggih.",
  },
  {
    icon: "Globe2",
    title: "Ruang Lingkup",
    description:
      "Mencakup network security, application security, cloud security, endpoint security, data security, identity management, dan banyak lagi.",
  },
];