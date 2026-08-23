/**
 * @type {import('../types/team').Team[]}
 */
export const teamsData = [
  {
    id: "red",
    name: "Red Team",
    color: "#EF4444",
    icon: "sword",
    mission: "Menyerang sistem secara terkendali untuk menemukan celah sebelum peretas asli menemukannya.",
    description:
      "Red Team berperan sebagai 'penyerang bayangan'. Mereka mensimulasikan serangan nyata (penetration testing, red teaming, social engineering) untuk menguji seberapa kuat pertahanan organisasi.",
    roles: [
      {
        slug: "penetration-tester",
        title: "Penetration Tester",
        shortDescription: "Menguji celah keamanan sistem, jaringan, dan aplikasi secara aktif.",
        longDescription:
          "Penetration Tester melakukan simulasi serangan terkontrol terhadap sistem, jaringan, atau aplikasi untuk menemukan kerentanan sebelum dieksploitasi pihak tidak bertanggung jawab. Hasil temuan didokumentasikan dalam laporan teknis dan rekomendasi perbaikan.",
        domain: "network",
        level: "advanced",
        skills: ["Networking", "Linux/Windows internals", "Scripting (Python/Bash)", "Web exploitation"],
        tools: ["Metasploit", "Burp Suite", "Nmap", "Cobalt Strike"],
        certifications: ["OSCP", "CEH", "eJPT"],
        responsibilities: [
          "Melakukan vulnerability assessment dan exploitation",
          "Menulis laporan teknis hasil pengujian",
          "Memberi rekomendasi mitigasi ke tim Blue Team",
        ],
        careerPath: ["Junior Pentester", "Pentester", "Senior Pentester", "Red Team Lead"],
        relatedRoles: ["red-teamer", "social-engineer"],
      },
      {
        slug: "red-teamer",
        title: "Red Team Operator",
        shortDescription: "Mensimulasikan serangan APT (Advanced Persistent Threat) secara menyeluruh.",
        longDescription:
          "Berbeda dari pentester biasa, Red Team Operator berfokus pada simulasi serangan jangka panjang yang menyerupai taktik kelompok APT nyata — termasuk evasion, persistence, dan lateral movement.",
        domain: "network",
        level: "advanced",
        skills: ["Adversary emulation", "Malware development dasar", "OPSEC", "Active Directory attack"],
        tools: ["Cobalt Strike", "Mythic C2", "BloodHound"],
        certifications: ["OSEP", "CRTO"],
        responsibilities: [
          "Merancang skenario serangan realistis",
          "Menguji deteksi tim Blue Team (purple teaming)",
          "Menjaga OPSEC selama operasi",
        ],
        careerPath: ["Red Teamer", "Senior Red Teamer", "Red Team Lead"],
        relatedRoles: ["penetration-tester"],
      },
      {
        slug: "social-engineer",
        title: "Social Engineering Specialist",
        shortDescription: "Menguji kerentanan manusia lewat phishing dan manipulasi sosial.",
        longDescription:
          "Fokus pada sisi human factor — merancang kampanye phishing, vishing, atau physical intrusion test untuk mengukur kesadaran keamanan karyawan.",
        domain: "awareness",
        level: "intermediate",
        skills: ["Psikologi sosial", "OSINT", "Pembuatan konten phishing"],
        tools: ["GoPhish", "SET (Social Engineer Toolkit)"],
        certifications: ["SECTF", "CEH"],
        responsibilities: [
          "Merancang skenario phishing terkontrol",
          "Melaporkan tingkat kerentanan karyawan",
          "Berkoordinasi dengan tim awareness untuk training lanjutan",
        ],
        careerPath: ["Junior Specialist", "Specialist", "Senior Specialist"],
        relatedRoles: ["penetration-tester"],
      },
    ],
  },
  {
    id: "blue",
    name: "Blue Team",
    color: "#3B82F6",
    icon: "shield",
    mission: "Mempertahankan sistem dari serangan secara real-time dan berkelanjutan.",
    description:
      "Blue Team bertanggung jawab memantau, mendeteksi, dan merespons ancaman. Mereka adalah garis pertahanan utama organisasi sehari-hari.",
    roles: [
      {
        slug: "soc-analyst",
        title: "SOC Analyst",
        shortDescription: "Memantau alert keamanan dan menganalisis potensi insiden 24/7.",
        longDescription:
          "SOC (Security Operations Center) Analyst bertugas memonitor traffic dan log dari berbagai sistem, mengidentifikasi aktivitas mencurigakan, serta melakukan triase awal sebelum eskalasi ke tim Incident Response.",
        domain: "network",
        level: "beginner",
        skills: ["Log analysis", "SIEM", "Networking dasar", "Threat detection"],
        tools: ["Splunk", "QRadar", "Wireshark"],
        certifications: ["Security+", "CySA+"],
        responsibilities: [
          "Memantau dashboard SIEM secara berkala",
          "Melakukan triase alert",
          "Eskalasi insiden ke tim terkait",
        ],
        careerPath: ["SOC Analyst L1", "SOC Analyst L2", "SOC Lead", "SOC Manager"],
        relatedRoles: ["threat-hunter", "incident-responder"],
      },
      {
        slug: "threat-hunter",
        title: "Threat Hunter",
        shortDescription: "Mencari ancaman tersembunyi yang lolos dari sistem deteksi otomatis.",
        longDescription:
          "Threat Hunter secara proaktif mencari indikasi kompromi (IOC) di dalam jaringan yang tidak terdeteksi oleh alert otomatis, menggunakan hipotesis berbasis threat intelligence.",
        domain: "threat-intel",
        level: "advanced",
        skills: ["Threat intelligence", "Data analysis", "Malware behavior analysis"],
        tools: ["Splunk", "EDR platforms", "YARA"],
        certifications: ["GCTI", "GCFA"],
        responsibilities: [
          "Membangun hipotesis threat hunting",
          "Menganalisis pola anomali",
          "Mendokumentasikan temuan untuk tim SOC",
        ],
        careerPath: ["SOC Analyst", "Threat Hunter", "Senior Threat Hunter"],
        relatedRoles: ["soc-analyst", "threat-intel-analyst"],
      },
      {
        slug: "incident-responder",
        title: "Incident Responder",
        shortDescription: "Menangani dan memulihkan sistem saat insiden keamanan terjadi.",
        longDescription:
          "Bertanggung jawab menangani insiden aktif — dari containment, eradication, hingga recovery — serta menyusun laporan post-incident untuk mencegah kejadian berulang.",
        domain: "incident-response",
        level: "intermediate",
        skills: ["Digital forensics", "Malware analysis", "Crisis management"],
        tools: ["Volatility", "FTK", "EnCase"],
        certifications: ["GCIH", "GCFA"],
        responsibilities: [
          "Melakukan containment saat insiden terjadi",
          "Investigasi root cause",
          "Menyusun laporan post-mortem",
        ],
        careerPath: ["Incident Responder", "Senior IR", "IR Team Lead"],
        relatedRoles: ["soc-analyst", "forensic-analyst"],
      },
    ],
  },
  {
    id: "green",
    name: "Green Team",
    color: "#22C55E",
    icon: "sprout",
    mission: "Menjembatani hasil temuan Red & Blue Team ke dalam perbaikan proses dan edukasi jangka panjang.",
    description:
      "Green Team berfokus pada peningkatan berkelanjutan — mengubah temuan keamanan menjadi perbaikan proses development dan pelatihan tim.",
    roles: [
      {
        slug: "security-engineer",
        title: "Security Engineer",
        shortDescription: "Membangun dan memperbaiki sistem berdasarkan temuan keamanan.",
        longDescription:
          "Mengimplementasikan perbaikan teknis berdasarkan hasil audit dan pentest, termasuk hardening sistem dan otomatisasi proses keamanan dalam pipeline development.",
        domain: "application",
        level: "intermediate",
        skills: ["Secure coding", "CI/CD security", "Infrastructure as Code"],
        tools: ["Terraform", "GitHub Actions", "SonarQube"],
        certifications: ["Security+", "AWS Security Specialty"],
        responsibilities: [
          "Mengimplementasikan rekomendasi hasil pentest",
          "Membangun automation security testing di pipeline",
          "Kolaborasi dengan tim development",
        ],
        careerPath: ["Security Engineer", "Senior Security Engineer", "Security Architect"],
        relatedRoles: ["appsec-engineer", "devsecops-engineer"],
      },
      {
        slug: "security-trainer",
        title: "Security Awareness Trainer",
        shortDescription: "Merancang materi edukasi keamanan untuk seluruh karyawan.",
        longDescription:
          "Bertanggung jawab menyusun dan menyampaikan program pelatihan kesadaran keamanan berdasarkan tren ancaman terbaru dan hasil temuan Red Team.",
        domain: "awareness",
        level: "beginner",
        skills: ["Public speaking", "Content design", "Adult learning"],
        tools: ["KnowBe4", "Google Workspace"],
        certifications: ["Security+"],
        responsibilities: [
          "Merancang kurikulum pelatihan keamanan",
          "Mengevaluasi efektivitas program awareness",
          "Berkoordinasi dengan Red Team untuk skenario nyata",
        ],
        careerPath: ["Trainer", "Senior Trainer", "Awareness Program Lead"],
        relatedRoles: ["social-engineer"],
      },
    ],
  },
  {
    id: "purple",
    name: "Purple Team",
    color: "#A855F7",
    icon: "merge",
    mission: "Menyatukan strategi Red dan Blue Team agar deteksi dan respons semakin efektif.",
    description:
      "Purple Team bukan tim tetap di banyak organisasi, melainkan fungsi kolaboratif — memastikan temuan Red Team langsung memperkuat kemampuan deteksi Blue Team.",
    roles: [
      {
        slug: "purple-team-lead",
        title: "Purple Team Lead",
        shortDescription: "Mengoordinasikan latihan simulasi bersama Red dan Blue Team.",
        longDescription:
          "Merancang skenario latihan bersama, memastikan setiap teknik serangan dari Red Team diuji terhadap kemampuan deteksi Blue Team, lalu menutup gap yang ditemukan.",
        domain: "network",
        level: "advanced",
        skills: ["MITRE ATT&CK", "Detection engineering", "Facilitation"],
        tools: ["MITRE ATT&CK Navigator", "SIEM platforms"],
        certifications: ["GCFA", "CRTO"],
        responsibilities: [
          "Merancang skenario purple team exercise",
          "Memetakan teknik serangan ke MITRE ATT&CK",
          "Mengukur efektivitas deteksi setelah simulasi",
        ],
        careerPath: ["Blue/Red Analyst", "Purple Team Member", "Purple Team Lead"],
        relatedRoles: ["threat-hunter", "red-teamer"],
      },
      {
        slug: "detection-engineer",
        title: "Detection Engineer",
        shortDescription: "Membangun rule dan use-case deteksi berbasis teknik serangan nyata.",
        longDescription:
          "Menerjemahkan taktik serangan dari hasil purple team exercise menjadi rule deteksi konkret di SIEM/EDR, sekaligus melakukan tuning agar mengurangi false positive.",
        domain: "network",
        level: "intermediate",
        skills: ["SIEM engineering", "Scripting", "Log correlation"],
        tools: ["Splunk SPL", "Sigma rules", "Elastic"],
        certifications: ["GCDA"],
        responsibilities: [
          "Membuat dan menguji detection rule",
          "Melakukan tuning untuk mengurangi false positive",
          "Dokumentasi use-case deteksi",
        ],
        careerPath: ["SOC Analyst", "Detection Engineer", "Senior Detection Engineer"],
        relatedRoles: ["soc-analyst", "purple-team-lead"],
      },
    ],
  },
  {
    id: "orange",
    name: "Orange Team",
    color: "#F97316",
    icon: "megaphone",
    mission: "Menjembatani Red Team dengan tim developer/engineer lewat edukasi berbasis temuan langsung.",
    description:
      "Orange Team relatif baru — fokusnya membawa hasil Red Team ke developer secara langsung agar security awareness tertanam sejak proses coding.",
    roles: [
      {
        slug: "appsec-liaison",
        title: "Application Security Liaison",
        shortDescription: "Menjembatani temuan keamanan aplikasi ke tim developer.",
        longDescription:
          "Menerjemahkan hasil pentest aplikasi menjadi bahasa yang mudah dipahami developer, sekaligus memfasilitasi sesi edukasi secure coding langsung ke tim engineering.",
        domain: "application",
        level: "intermediate",
        skills: ["Secure coding", "Communication", "Code review"],
        tools: ["GitHub", "SonarQube", "OWASP ASVS"],
        certifications: ["Security+", "CSSLP"],
        responsibilities: [
          "Fasilitasi sesi secure coding untuk developer",
          "Menerjemahkan hasil pentest ke actionable item",
          "Membangun budaya security-first di tim engineering",
        ],
        careerPath: ["Developer", "AppSec Liaison", "AppSec Lead"],
        relatedRoles: ["appsec-engineer", "security-trainer"],
      },
    ],
  },
  {
    id: "yellow",
    name: "Yellow Team",
    color: "#EAB308",
    icon: "code",
    mission: "Membangun software dan sistem dengan prinsip keamanan sejak tahap desain (security by design).",
    description:
      "Yellow Team adalah representasi builder — developer, arsitek, dan engineer yang menanamkan keamanan sejak fase perancangan sistem.",
    roles: [
      {
        slug: "appsec-engineer",
        title: "Application Security Engineer",
        shortDescription: "Mengamankan aplikasi dari level kode hingga arsitektur.",
        longDescription:
          "Bertanggung jawab melakukan secure code review, threat modeling, dan memastikan best practice keamanan diterapkan sejak fase desain aplikasi.",
        domain: "application",
        level: "advanced",
        skills: ["Threat modeling", "Secure code review", "OWASP Top 10"],
        tools: ["Checkmarx", "Burp Suite", "Semgrep"],
        certifications: ["CSSLP", "OSWE"],
        responsibilities: [
          "Melakukan threat modeling pada fitur baru",
          "Code review berfokus keamanan",
          "Menyusun secure coding guideline",
        ],
        careerPath: ["Developer", "AppSec Engineer", "Senior AppSec Engineer", "AppSec Architect"],
        relatedRoles: ["devsecops-engineer", "appsec-liaison"],
      },
      {
        slug: "devsecops-engineer",
        title: "DevSecOps Engineer",
        shortDescription: "Mengintegrasikan keamanan ke dalam pipeline CI/CD.",
        longDescription:
          "Mengotomasi security testing (SAST, DAST, dependency scanning) di dalam pipeline CI/CD sehingga kerentanan terdeteksi sedini mungkin sebelum production.",
        domain: "cloud",
        level: "advanced",
        skills: ["CI/CD", "Container security", "Infrastructure as Code"],
        tools: ["Jenkins", "GitLab CI", "Trivy", "Snyk"],
        certifications: ["AWS Security Specialty", "CKS"],
        responsibilities: [
          "Membangun automated security scanning di pipeline",
          "Mengelola container & cloud security posture",
          "Kolaborasi dengan tim infra dan development",
        ],
        careerPath: ["DevOps Engineer", "DevSecOps Engineer", "Security Architect"],
        relatedRoles: ["appsec-engineer", "cloud-security-engineer"],
      },
      {
        slug: "cloud-security-engineer",
        title: "Cloud Security Engineer",
        shortDescription: "Mengamankan infrastruktur cloud (AWS, Azure, GCP).",
        longDescription:
          "Fokus pada konfigurasi aman layanan cloud, manajemen identity & access, serta monitoring cloud security posture untuk mencegah misconfiguration.",
        domain: "cloud",
        level: "advanced",
        skills: ["Cloud architecture", "IAM", "Network security cloud"],
        tools: ["AWS Security Hub", "Azure Defender", "Prisma Cloud"],
        certifications: ["AWS Security Specialty", "CCSP"],
        responsibilities: [
          "Mengaudit konfigurasi cloud secara berkala",
          "Mengelola kebijakan IAM",
          "Monitoring cloud security posture management (CSPM)",
        ],
        careerPath: ["Cloud Engineer", "Cloud Security Engineer", "Cloud Security Architect"],
        relatedRoles: ["devsecops-engineer"],
      },
    ],
  },
  {
    id: "white",
    name: "White Team",
    color: "#F8FAFC",
    icon: "gavel",
    mission: "Mengawasi, mengatur, dan menegakkan aturan main seluruh aktivitas keamanan organisasi.",
    description:
      "White Team berperan sebagai wasit dan pengatur strategi — mengelola kebijakan, kepatuhan (compliance), dan mengawasi jalannya latihan antar tim lain.",
    roles: [
      {
        slug: "grc-analyst",
        title: "GRC Analyst",
        shortDescription: "Mengelola tata kelola, risiko, dan kepatuhan keamanan organisasi.",
        longDescription:
          "GRC (Governance, Risk, and Compliance) Analyst memastikan organisasi memenuhi standar regulasi (ISO 27001, GDPR, dsb) dan mengelola risiko keamanan secara sistematis.",
        domain: "governance",
        level: "intermediate",
        skills: ["Risk assessment", "Compliance frameworks", "Audit"],
        tools: ["GRC platforms", "Excel/Sheets", "ISO 27001 toolkit"],
        certifications: ["CISA", "CRISC", "ISO 27001 Lead Auditor"],
        responsibilities: [
          "Melakukan risk assessment berkala",
          "Menyusun dan memelihara kebijakan keamanan",
          "Memastikan kepatuhan terhadap regulasi",
        ],
        careerPath: ["GRC Analyst", "Senior GRC Analyst", "GRC Manager", "CISO"],
        relatedRoles: ["security-auditor"],
      },
      {
        slug: "exercise-referee",
        title: "Exercise Referee / Coordinator",
        shortDescription: "Mengawasi jalannya latihan Red vs Blue Team agar sesuai aturan.",
        longDescription:
          "Bertindak sebagai wasit netral saat latihan simulasi serangan berlangsung — memastikan aturan keterlibatan (rules of engagement) dipatuhi dan mendokumentasikan hasil latihan.",
        domain: "governance",
        level: "intermediate",
        skills: ["Project management", "Rules of engagement", "Reporting"],
        tools: ["Documentation tools", "Project trackers"],
        certifications: ["Security+", "PMP (opsional)"],
        responsibilities: [
          "Menyusun rules of engagement latihan",
          "Mengawasi jalannya simulasi",
          "Mendokumentasikan hasil dan pelajaran dari latihan",
        ],
        careerPath: ["Coordinator", "Senior Coordinator", "Program Manager"],
        relatedRoles: ["grc-analyst"],
      },
    ],
  },
];

/** Utility: ambil semua role dalam bentuk flat array, masing-masing menyimpan referensi teamId & teamColor */
export function getAllRolesFlat() {
  return teamsData.flatMap((team) =>
    team.roles.map((role) => ({
      ...role,
      teamId: team.id,
      teamName: team.name,
      teamColor: team.color,
    }))
  );
}

/** Utility: cari role berdasarkan slug */
export function getRoleBySlug(slug) {
  return getAllRolesFlat().find((role) => role.slug === slug) ?? null;
}

/** Utility: daftar domain unik untuk keperluan filter */
export function getAllDomains() {
  return [...new Set(getAllRolesFlat().map((r) => r.domain))];
}
