import type { CyberTeam } from "@/types/team";

/**
 * Master dataset for the Cyber Security Spectrum.
 * Kept separate from UI components so content can be edited
 * without touching any rendering logic.
 */
export const teamsData: CyberTeam[] = [
  {
    id: "white",
    name: "White Team",
    tagline: "Wasit, Kebijakan & Tata Kelola",
    mission:
      "White Team berperan sebagai pengawas netral yang menyusun aturan main, mengevaluasi latihan Red vs Blue, dan memastikan seluruh aktivitas keamanan berjalan sesuai kebijakan, kepatuhan, dan etika organisasi.",
    icon: "ShieldCheck",
    color: "zinc",
    hex: "#e4e4e7",
    roles: [
      {
        id: "grc-analyst",
        title: "GRC Analyst",
        description:
          "Mengelola tata kelola, risiko, dan kepatuhan (Governance, Risk & Compliance) terhadap standar seperti ISO 27001 dan NIST.",
        skills: ["Risk Assessment", "Policy Writing", "Audit", "Stakeholder Communication"],
        certifications: ["CRISC", "ISO 27001 Lead Implementer", "CGRC"],
        tags: ["Governance", "Compliance", "Risk"],
      },
      {
        id: "exercise-controller",
        title: "Exercise Controller",
        description:
          "Merancang skenario cyber range dan menjadi wasit netral dalam latihan Red vs Blue Team untuk menjaga objektivitas hasil.",
        skills: ["Scenario Design", "Facilitation", "Reporting", "Neutral Judgment"],
        certifications: ["CompTIA Security+", "CISSP"],
        tags: ["Exercise", "Facilitation"],
      },
      {
        id: "compliance-manager",
        title: "Compliance Manager",
        description:
          "Memastikan seluruh proses bisnis dan teknologi organisasi memenuhi regulasi eksternal seperti GDPR, HIPAA, atau UU PDP.",
        skills: ["Regulatory Mapping", "Documentation", "Cross-team Coordination"],
        certifications: ["CIPP", "CISA"],
        tags: ["Regulation", "Legal", "Policy"],
      },
    ],
  },
  {
    id: "red",
    name: "Red Team",
    tagline: "Simulasi Serangan & Ofensif",
    mission:
      "Red Team berpikir dan bertindak seperti penyerang sungguhan untuk menemukan celah keamanan sebelum pihak jahat menemukannya, melalui penetration testing dan simulasi adversary yang realistis.",
    icon: "Swords",
    color: "red",
    hex: "#ef4444",
    roles: [
      {
        id: "penetration-tester",
        title: "Penetration Tester",
        description:
          "Melakukan pengujian keamanan terstruktur pada jaringan, aplikasi, dan sistem untuk menemukan kerentanan yang dapat dieksploitasi.",
        skills: ["Exploitation", "Network Scanning", "Scripting", "Report Writing"],
        certifications: ["OSCP", "CEH", "eJPT"],
        tags: ["Offensive", "Pentest"],
      },
      {
        id: "red-team-operator",
        title: "Red Team Operator",
        description:
          "Menjalankan simulasi serangan adversary jangka panjang (APT emulation) untuk menguji kemampuan deteksi dan respons organisasi secara menyeluruh.",
        skills: ["Adversary Emulation", "C2 Frameworks", "Evasion Techniques", "OPSEC"],
        certifications: ["OSCE", "CRTO", "GXPN"],
        tags: ["Adversary Simulation", "APT"],
      },
      {
        id: "social-engineer",
        title: "Social Engineering Specialist",
        description:
          "Menguji kerentanan manusia melalui phishing, vishing, dan pretexting untuk mengevaluasi kesadaran keamanan karyawan.",
        skills: ["Phishing Campaigns", "Pretexting", "OSINT", "Psychology"],
        certifications: ["SEC-542", "CEH"],
        tags: ["Human Factor", "Phishing"],
      },
      {
        id: "exploit-developer",
        title: "Exploit Developer",
        description:
          "Meneliti kerentanan perangkat lunak dan mengembangkan proof-of-concept exploit untuk mendukung tim ofensif.",
        skills: ["Reverse Engineering", "Fuzzing", "Assembly", "Binary Exploitation"],
        certifications: ["OSED", "GXPN"],
        tags: ["Exploit Dev", "Low-level"],
      },
    ],
  },
  {
    id: "blue",
    name: "Blue Team",
    tagline: "Pertahanan, Deteksi & Respons",
    mission:
      "Blue Team bertanggung jawab menjaga garis pertahanan sehari-hari: memantau anomali, mendeteksi intrusi, dan merespons insiden secepat mungkin untuk meminimalkan dampak serangan.",
    icon: "ShieldHalf",
    color: "blue",
    hex: "#3b82f6",
    roles: [
      {
        id: "soc-analyst",
        title: "SOC Analyst",
        description:
          "Memantau alert keamanan secara real-time melalui SIEM, melakukan triase awal, dan mengeskalasi insiden sesuai prosedur.",
        skills: ["SIEM Monitoring", "Log Analysis", "Triage", "Ticketing"],
        certifications: ["CompTIA Security+", "Blue Team Level 1 (BTL1)"],
        tags: ["Monitoring", "SOC"],
      },
      {
        id: "incident-responder",
        title: "Incident Responder",
        description:
          "Menangani insiden keamanan aktif, melakukan containment, eradication, dan pemulihan sistem yang terdampak.",
        skills: ["Digital Forensics", "Malware Triage", "Containment Strategy"],
        certifications: ["GCIH", "GCFA"],
        tags: ["Incident Response", "Forensics"],
      },
      {
        id: "threat-hunter",
        title: "Threat Hunter",
        description:
          "Mencari secara proaktif indikasi kompromi (IoC) yang belum terdeteksi oleh sistem otomatis melalui hipotesis dan analisis data.",
        skills: ["Threat Intelligence", "Behavioral Analytics", "Query Languages (KQL/SPL)"],
        certifications: ["GCTI", "CTHP"],
        tags: ["Threat Hunting", "Detection"],
      },
      {
        id: "detection-engineer",
        title: "Detection Engineer",
        description:
          "Membangun dan menyempurnakan aturan deteksi (detection rules) serta use case SIEM/EDR agar ancaman baru dapat teridentifikasi lebih cepat.",
        skills: ["SIEM Engineering", "MITRE ATT&CK Mapping", "Automation"],
        certifications: ["Splunk Certified", "GCDA"],
        tags: ["Detection Engineering", "SIEM"],
      },
    ],
  },
  {
    id: "purple",
    name: "Purple Team",
    tagline: "Kolaborasi Ofensif & Defensif",
    mission:
      "Purple Team menjembatani Red dan Blue Team, memastikan temuan serangan langsung diterjemahkan menjadi peningkatan deteksi, sehingga siklus pembelajaran keamanan berjalan berkelanjutan.",
    icon: "Shuffle",
    color: "purple",
    hex: "#a855f7",
    roles: [
      {
        id: "purple-team-lead",
        title: "Purple Team Lead",
        description:
          "Mengoordinasikan sesi kolaborasi antara tim ofensif dan defensif untuk memvalidasi efektivitas kontrol keamanan secara berkala.",
        skills: ["Facilitation", "MITRE ATT&CK", "Detection Validation"],
        certifications: ["CRTO", "GCDA"],
        tags: ["Coordination", "Validation"],
      },
      {
        id: "attack-simulation-engineer",
        title: "Attack Simulation Engineer",
        description:
          "Merancang dan menjalankan simulasi serangan terukur (breach & attack simulation) untuk menguji efektivitas kontrol keamanan yang ada.",
        skills: ["BAS Tools", "Scripting", "Metrics & Reporting"],
        certifications: ["CRTO", "OSCP"],
        tags: ["Simulation", "Testing"],
      },
      {
        id: "detection-validation-specialist",
        title: "Detection Validation Specialist",
        description:
          "Memvalidasi apakah aturan deteksi Blue Team benar-benar memicu alert saat teknik serangan tertentu dijalankan.",
        skills: ["Log Correlation", "Purple Playbooks", "Reporting"],
        certifications: ["GCDA", "BTL2"],
        tags: ["Validation", "Playbook"],
      },
    ],
  },
  {
    id: "yellow",
    name: "Yellow Team",
    tagline: "Keamanan dalam Pengembangan Perangkat Lunak",
    mission:
      "Yellow Team menanamkan prinsip keamanan langsung ke dalam siklus pengembangan perangkat lunak (SDLC), memastikan aplikasi aman sejak tahap desain hingga produksi.",
    icon: "Code2",
    color: "yellow",
    hex: "#eab308",
    roles: [
      {
        id: "appsec-engineer",
        title: "Application Security Engineer",
        description:
          "Melakukan code review keamanan, secure design review, dan integrasi security tooling ke dalam pipeline CI/CD.",
        skills: ["Secure Code Review", "SAST/DAST", "Threat Modeling"],
        certifications: ["GWEB", "CSSLP"],
        tags: ["AppSec", "DevSecOps"],
      },
      {
        id: "secure-developer",
        title: "Secure Software Developer",
        description:
          "Menulis kode dengan menerapkan praktik secure coding untuk mencegah kerentanan umum seperti injection dan broken access control.",
        skills: ["Secure Coding Standards", "OWASP Top 10", "Code Refactoring"],
        certifications: ["CSSLP"],
        tags: ["Development", "Secure Coding"],
      },
      {
        id: "devsecops-engineer",
        title: "DevSecOps Engineer",
        description:
          "Mengintegrasikan pemindaian keamanan otomatis ke dalam pipeline build & deploy tanpa menghambat kecepatan rilis tim engineering.",
        skills: ["CI/CD Security", "IaC Scanning", "Container Security"],
        certifications: ["CKS", "GCSA"],
        tags: ["DevSecOps", "Automation"],
      },
    ],
  },
  {
    id: "green",
    name: "Green Team",
    tagline: "Edukasi & Peningkatan Kesadaran Keamanan",
    mission:
      "Green Team berfokus pada penguatan proses jangka panjang: pelatihan, kesadaran keamanan, dan penerapan feedback dari tim lain agar budaya keamanan tumbuh secara organik di seluruh organisasi.",
    icon: "Sprout",
    color: "green",
    hex: "#22c55e",
    roles: [
      {
        id: "security-awareness-lead",
        title: "Security Awareness Lead",
        description:
          "Merancang program edukasi dan simulasi phishing internal untuk meningkatkan kesadaran keamanan karyawan non-teknis.",
        skills: ["Training Design", "Campaign Management", "Communication"],
        certifications: ["SANS SSAP", "CISM"],
        tags: ["Awareness", "Training"],
      },
      {
        id: "security-culture-consultant",
        title: "Security Culture Consultant",
        description:
          "Menganalisis kebiasaan organisasi dan menyusun strategi jangka panjang untuk menumbuhkan budaya 'security-first'.",
        skills: ["Behavioral Change", "Workshop Facilitation", "Metrics"],
        certifications: ["CISM", "CISSP"],
        tags: ["Culture", "Strategy"],
      },
      {
        id: "process-improvement-analyst",
        title: "Security Process Improvement Analyst",
        description:
          "Mengumpulkan feedback dari hasil latihan Red/Blue/Purple Team dan menerjemahkannya menjadi perbaikan proses keamanan berkelanjutan.",
        skills: ["Process Mapping", "Continuous Improvement", "Documentation"],
        certifications: ["Lean Six Sigma", "CISA"],
        tags: ["Process", "Improvement"],
      },
    ],
  },
  {
    id: "orange",
    name: "Orange Team",
    tagline: "Jembatan Antara Developer & Attacker",
    mission:
      "Orange Team menjadi penghubung antara Red Team dan Yellow Team, membawa wawasan teknik serangan langsung ke tim pengembang agar developer memahami cara berpikir penyerang.",
    icon: "Radar",
    color: "orange",
    hex: "#f97316",
    roles: [
      {
        id: "security-champion",
        title: "Security Champion",
        description:
          "Developer dengan minat keamanan yang menjadi penghubung antara tim engineering dan tim keamanan dalam kegiatan sehari-hari.",
        skills: ["Secure Coding Advocacy", "Peer Mentoring", "Risk Communication"],
        certifications: ["CSSLP", "Security+"],
        tags: ["Advocacy", "Bridge Role"],
      },
      {
        id: "offensive-trainer",
        title: "Offensive Security Trainer",
        description:
          "Mengajarkan teknik dan mindset penyerang kepada tim developer melalui workshop hands-on dan capture-the-flag internal.",
        skills: ["Curriculum Design", "CTF Design", "Public Speaking"],
        certifications: ["OSCP", "CEH"],
        tags: ["Training", "Enablement"],
      },
      {
        id: "vulnerability-liaison",
        title: "Vulnerability Liaison",
        description:
          "Menerjemahkan hasil temuan pentest Red Team menjadi rekomendasi teknis yang actionable bagi tim pengembang.",
        skills: ["Technical Translation", "Prioritization", "Stakeholder Management"],
        certifications: ["CEH", "Security+"],
        tags: ["Liaison", "Remediation"],
      },
    ],
  },
];

export function getTeamById(id: string) {
  return teamsData.find((team) => team.id === id);
}

export function getAllRolesFlat() {
  return teamsData.flatMap((team) =>
    team.roles.map((role) => ({ ...role, teamId: team.id, teamName: team.name }))
  );
}
