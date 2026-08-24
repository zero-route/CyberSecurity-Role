 /**
 * @type {import('../types/team').Team[]}
 * Setiap role punya `icon` (emoji, ditampilkan di RoleCard) dan `tag` (label badge singkat).
 */
export const teamsData = [
  {
    id: "white",
    name: "White Team",
    color: "#F8FAFC",
    mission: "Governance & Oversight — Wasit dan Pengambil Keputusan",
    description:
      "White Team berperan sebagai wasit dan pengatur strategi — mengelola kebijakan, kepatuhan (compliance), dan mengawasi jalannya latihan antar tim lain.",
    roles: [
      {
        slug: "ciso",
        title: "CISO (Chief Information Security Officer)",
        icon: "🏛️",
        tag: "LEADERSHIP",
        shortDescription:
          "Memimpin strategi keamanan informasi organisasi secara keseluruhan: menetapkan visi, kebijakan, anggaran, dan melapor langsung ke jajaran direksi.",
        longDescription:
          "CISO bertanggung jawab penuh atas arah strategis keamanan informasi organisasi. Menyusun visi jangka panjang, mengelola anggaran keamanan, dan menjadi penghubung utama antara tim teknis dengan jajaran eksekutif.",
        domain: "governance",
        level: "advanced",
        skills: ["Leadership", "Strategic planning", "Risk management", "Budgeting"],
        tools: ["GRC platforms", "Board reporting tools"],
        certifications: ["CISSP", "CISM"],
        responsibilities: [
          "Menetapkan visi & strategi keamanan organisasi",
          "Mengelola anggaran dan sumber daya keamanan",
          "Melapor ke direksi tentang postur keamanan organisasi",
        ],
        careerPath: ["Security Manager", "Director of Security", "CISO"],
        relatedRoles: ["security-program-manager"],
      },
      {
        slug: "exercise-director",
        title: "Exercise Director / White Cell",
        icon: "🎯",
        tag: "WHITE CELL",
        shortDescription:
          "Mengawasi jalannya latihan Red vs Blue Team: menetapkan aturan main (Rules of Engagement), memantau jalannya skenario, dan menjadi wasit netral antara kedua tim.",
        longDescription:
          "Bertindak sebagai wasit netral saat latihan simulasi serangan berlangsung, memastikan aturan keterlibatan dipatuhi dan mendokumentasikan hasil latihan untuk evaluasi bersama.",
        domain: "governance",
        level: "intermediate",
        skills: ["Rules of engagement", "Facilitation", "Reporting"],
        tools: ["Documentation tools", "Project trackers"],
        certifications: ["Security+"],
        responsibilities: [
          "Menyusun rules of engagement latihan",
          "Mengawasi jalannya simulasi Red vs Blue",
          "Mendokumentasikan hasil dan pelajaran dari latihan",
        ],
        careerPath: ["Coordinator", "Exercise Director", "Program Manager"],
        relatedRoles: ["purple-team-lead"],
      },
      {
        slug: "security-program-manager",
        title: "Security Program Manager",
        icon: "📈",
        tag: "PROGRAM MGMT",
        shortDescription:
          "Mengoordinasikan seluruh program dan proyek keamanan lintas tim, mengelola timeline, sumber daya, serta memastikan tujuan strategis keamanan tercapai.",
        longDescription:
          "Menjadi penghubung antar tim keamanan (Red, Blue, Green, dst) agar setiap inisiatif berjalan sesuai timeline, anggaran, dan tujuan strategis organisasi.",
        domain: "governance",
        level: "intermediate",
        skills: ["Project management", "Cross-team coordination", "Reporting"],
        tools: ["Jira", "Confluence", "GRC platforms"],
        certifications: ["PMP", "Security+"],
        responsibilities: [
          "Mengelola timeline & sumber daya program keamanan",
          "Koordinasi lintas tim keamanan",
          "Melaporkan progres ke CISO",
        ],
        careerPath: ["Project Coordinator", "Program Manager", "Director"],
        relatedRoles: ["ciso"],
      },
      {
        slug: "crisis-manager",
        title: "Crisis Manager / Incident Commander",
        icon: "🚨",
        tag: "CRISIS MGMT",
        shortDescription:
          "Memimpin pengambilan keputusan tingkat tinggi saat insiden besar terjadi: koordinasi lintas divisi, komunikasi dengan eksekutif, dan penentuan prioritas respons.",
        longDescription:
          "Saat insiden keamanan besar terjadi, Incident Commander memimpin seluruh proses respons — mengoordinasikan tim teknis, komunikasi, dan manajemen, memastikan keputusan diambil cepat dan tepat.",
        domain: "incident-response",
        level: "advanced",
        skills: ["Crisis leadership", "Decision making", "Cross-functional coordination"],
        tools: ["Incident management platforms"],
        certifications: ["GCIH", "CISM"],
        responsibilities: [
          "Memimpin respons saat insiden besar terjadi",
          "Koordinasi lintas divisi selama krisis",
          "Menentukan prioritas dan strategi respons",
        ],
        careerPath: ["Incident Responder", "Crisis Manager", "CISO"],
        relatedRoles: ["incident-responder"],
      },
      {
        slug: "vendor-risk-manager",
        title: "Third-Party & Vendor Risk Manager",
        icon: "🤝",
        tag: "VENDOR RISK",
        shortDescription:
          "Menilai dan mengelola risiko keamanan dari vendor, mitra, dan rantai pasok pihak ketiga sebelum dan selama kerja sama berlangsung.",
        longDescription:
          "Melakukan due diligence keamanan terhadap vendor dan mitra bisnis, memastikan rantai pasok digital organisasi tidak menjadi titik lemah keamanan.",
        domain: "governance",
        level: "intermediate",
        skills: ["Risk assessment", "Vendor due diligence", "Contract review"],
        tools: ["GRC platforms", "Questionnaire tools"],
        certifications: ["CRISC", "CISA"],
        responsibilities: [
          "Melakukan penilaian risiko vendor",
          "Mengelola kontrak terkait keamanan data",
          "Memantau kepatuhan pihak ketiga",
        ],
        careerPath: ["Risk Analyst", "Vendor Risk Manager", "GRC Manager"],
        relatedRoles: ["grc-analyst"],
      },
      {
        slug: "security-comms-lead",
        title: "Security Communications Lead",
        icon: "📢",
        tag: "COMMUNICATIONS",
        shortDescription:
          "Menjembatani komunikasi antara tim teknis, manajemen, dan pihak eksternal (media, regulator, pelanggan) terkait status keamanan dan insiden yang terjadi.",
        longDescription:
          "Menerjemahkan isu teknis keamanan menjadi komunikasi yang jelas untuk audiens non-teknis, termasuk menyusun pernyataan publik saat insiden terjadi.",
        domain: "governance",
        level: "intermediate",
        skills: ["Communication", "Crisis messaging", "Stakeholder management"],
        tools: ["Communication platforms"],
        certifications: ["Security+"],
        responsibilities: [
          "Menyusun komunikasi terkait insiden keamanan",
          "Menjembatani tim teknis dengan pihak eksternal",
          "Mengelola pesan publik saat krisis",
        ],
        careerPath: ["Communications Specialist", "Security Comms Lead"],
        relatedRoles: ["crisis-manager"],
      },
    ],
  },
  {
    id: "red",
    name: "Red Team",
    color: "#EF4444",
    mission: "Offensive Security — Menyerang untuk Melindungi",
    description:
      "Red Team berperan sebagai 'penyerang bayangan'. Mereka mensimulasikan serangan nyata untuk menguji seberapa kuat pertahanan organisasi.",
    roles: [
      {
        slug: "penetration-tester",
        title: "Penetration Tester",
        icon: "🐞",
        tag: "PENTEST",
        shortDescription:
          "Melakukan simulasi serangan nyata terhadap sistem, jaringan, dan aplikasi untuk menemukan celah keamanan sebelum penyerang jahat menemukannya.",
        longDescription:
          "Penetration Tester melakukan simulasi serangan terkontrol untuk menemukan kerentanan sebelum dieksploitasi pihak tidak bertanggung jawab. Hasilnya didokumentasikan dalam laporan teknis dan rekomendasi perbaikan.",
        domain: "network",
        level: "advanced",
        skills: ["Networking", "Linux/Windows internals", "Scripting", "Web exploitation"],
        tools: ["Metasploit", "Burp Suite", "Nmap"],
        certifications: ["OSCP", "CEH"],
        responsibilities: [
          "Melakukan vulnerability assessment dan exploitation",
          "Menulis laporan teknis hasil pengujian",
          "Memberi rekomendasi mitigasi",
        ],
        careerPath: ["Junior Pentester", "Pentester", "Senior Pentester"],
        relatedRoles: ["red-team-operator", "web-app-pentester"],
      },
      {
        slug: "red-team-operator",
        title: "Red Team Operator",
        icon: "🥷",
        tag: "APT SIMULATION",
        shortDescription:
          "Menjalankan operasi penyerangan berdurasi panjang yang meniru APT (Advanced Persistent Threat) sungguhan, termasuk social engineering dan lateral movement.",
        longDescription:
          "Berbeda dari pentester biasa, Red Team Operator fokus pada simulasi serangan jangka panjang menyerupai taktik kelompok APT nyata — termasuk evasion dan persistence.",
        domain: "network",
        level: "advanced",
        skills: ["Adversary emulation", "OPSEC", "Active Directory attack"],
        tools: ["Cobalt Strike", "BloodHound"],
        certifications: ["OSEP", "CRTO"],
        responsibilities: [
          "Merancang skenario serangan realistis",
          "Menguji deteksi tim Blue Team",
          "Menjaga OPSEC selama operasi",
        ],
        careerPath: ["Red Teamer", "Senior Red Teamer", "Red Team Lead"],
        relatedRoles: ["penetration-tester"],
      },
      {
        slug: "exploit-developer",
        title: "Exploit Developer",
        icon: "💣",
        tag: "0-DAY",
        shortDescription:
          "Mengembangkan exploit kustom untuk kerentanan yang ditemukan, menciptakan proof-of-concept (PoC) yang menunjukkan dampak nyata sebuah celah keamanan.",
        longDescription:
          "Menganalisis kerentanan secara mendalam lalu membangun kode exploit untuk membuktikan dampaknya, sering kali bekerja sama dengan vulnerability researcher.",
        domain: "network",
        level: "advanced",
        skills: ["Reverse engineering", "Low-level programming", "Fuzzing"],
        tools: ["IDA Pro", "GDB", "Python"],
        certifications: ["OSED", "OSCE"],
        responsibilities: [
          "Membangun proof-of-concept exploit",
          "Menganalisis kerentanan tingkat lanjut",
          "Dokumentasi teknis exploit",
        ],
        careerPath: ["Vulnerability Researcher", "Exploit Developer", "Senior Exploit Dev"],
        relatedRoles: ["vulnerability-researcher"],
      },
      {
        slug: "mobile-app-pentester",
        title: "Mobile App Pentester",
        icon: "📱",
        tag: "MOBILE",
        shortDescription:
          "Menganalisis keamanan aplikasi Android dan iOS: reverse engineering, certificate pinning bypass, analisis traffic, hingga insecure data storage.",
        longDescription:
          "Fokus khusus pada ekosistem mobile — menguji bagaimana aplikasi menyimpan data, berkomunikasi dengan server, dan menangani autentikasi di perangkat.",
        domain: "application",
        level: "intermediate",
        skills: ["Mobile reverse engineering", "Traffic analysis", "OWASP MASVS"],
        tools: ["Frida", "MobSF", "Burp Suite"],
        certifications: ["eMAPT"],
        responsibilities: [
          "Menguji keamanan aplikasi mobile",
          "Analisis penyimpanan data lokal",
          "Bypass proteksi seperti certificate pinning",
        ],
        careerPath: ["Junior Pentester", "Mobile Pentester", "Senior Mobile Pentester"],
        relatedRoles: ["penetration-tester", "web-app-pentester"],
      },
      {
        slug: "web-app-pentester",
        title: "Web App Pentester",
        icon: "🌐",
        tag: "WEB",
        shortDescription:
          "Menguji keamanan aplikasi web terhadap OWASP Top 10 dan beyond: SQL injection, XSS, SSRF, IDOR, broken authentication, dan lainnya.",
        longDescription:
          "Berfokus pada ekosistem aplikasi web modern, menemukan celah pada logika bisnis, autentikasi, dan input handling sebelum dieksploitasi penyerang nyata.",
        domain: "application",
        level: "intermediate",
        skills: ["OWASP Top 10", "API security", "Business logic testing"],
        tools: ["Burp Suite", "OWASP ZAP"],
        certifications: ["OSWE", "eWPT"],
        responsibilities: [
          "Menguji celah OWASP Top 10 pada aplikasi web",
          "Menganalisis logika bisnis aplikasi",
          "Menulis laporan teknis temuan",
        ],
        careerPath: ["Junior Pentester", "Web Pentester", "Senior Web Pentester"],
        relatedRoles: ["penetration-tester", "appsec-engineer"],
      },
      {
        slug: "hardware-hacker",
        title: "Hardware Hacker",
        icon: "🔩",
        tag: "HARDWARE / IoT",
        shortDescription:
          "Mengeksploitasi perangkat fisik, IoT, sistem embedded, dan industrial control systems (ICS/SCADA) untuk menemukan kerentanan di level hardware.",
        longDescription:
          "Menguji keamanan perangkat keras dan firmware, termasuk komunikasi serial, chip memory, dan protokol industri yang sering luput dari pentest software biasa.",
        domain: "network",
        level: "advanced",
        skills: ["Embedded systems", "Firmware analysis", "Protocol reverse engineering"],
        tools: ["JTAG debuggers", "Logic analyzer", "Ghidra"],
        certifications: ["OSEE"],
        responsibilities: [
          "Menganalisis firmware & hardware",
          "Menguji protokol komunikasi perangkat",
          "Menemukan kerentanan sistem ICS/SCADA",
        ],
        careerPath: ["Embedded Engineer", "Hardware Hacker", "Senior Hardware Researcher"],
        relatedRoles: ["exploit-developer"],
      },
    ],
  },
  {
    id: "blue",
    name: "Blue Team",
    color: "#3B82F6",
    mission: "Defensive Security — Garis Pertahanan Pertama",
    description:
      "Blue Team bertanggung jawab memantau, mendeteksi, dan merespons ancaman. Mereka adalah garis pertahanan utama organisasi sehari-hari.",
    roles: [
      {
        slug: "soc-analyst",
        title: "SOC Analyst (L1/L2/L3)",
        icon: "🖥️",
        tag: "SOC",
        shortDescription:
          "Memantau alert keamanan 24/7, melakukan triage insiden, menginvestigasi ancaman, dan mengkoordinasikan respons. L1 triage, L2 investigasi, L3 threat hunting mendalam.",
        longDescription:
          "SOC Analyst memonitor traffic dan log dari berbagai sistem, mengidentifikasi aktivitas mencurigakan, serta melakukan triase awal sebelum eskalasi ke tim Incident Response.",
        domain: "network",
        level: "beginner",
        skills: ["Log analysis", "SIEM", "Networking dasar"],
        tools: ["Splunk", "QRadar", "Wireshark"],
        certifications: ["Security+", "CySA+"],
        responsibilities: [
          "Memantau dashboard SIEM secara berkala",
          "Melakukan triase alert",
          "Eskalasi insiden ke tim terkait",
        ],
        careerPath: ["SOC Analyst L1", "SOC Analyst L2", "SOC Lead"],
        relatedRoles: ["threat-hunter", "incident-responder"],
      },
      {
        slug: "incident-responder",
        title: "Incident Responder",
        icon: "🚑",
        tag: "IR",
        shortDescription:
          "Merespons insiden keamanan secara langsung: containment, eradication, recovery, dan post-incident analysis untuk mencegah kejadian serupa.",
        longDescription:
          "Menangani insiden aktif dari containment hingga recovery, serta menyusun laporan post-mortem untuk mencegah kejadian berulang.",
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
        relatedRoles: ["soc-analyst", "digital-forensics-analyst"],
      },
      {
        slug: "digital-forensics-analyst",
        title: "Digital Forensics Analyst",
        icon: "🔬",
        tag: "DFIR",
        shortDescription:
          "Mengumpulkan dan menganalisis bukti digital dari insiden keamanan: analisis malware, memory forensics, disk forensics, dan timeline rekonstruksi serangan.",
        longDescription:
          "Bertugas mengumpulkan bukti digital secara forensik-sound, merekonstruksi timeline serangan, dan mendukung proses hukum jika diperlukan.",
        domain: "incident-response",
        level: "advanced",
        skills: ["Memory forensics", "Disk forensics", "Timeline analysis"],
        tools: ["Volatility", "Autopsy", "FTK Imager"],
        certifications: ["GCFA", "GCFE"],
        responsibilities: [
          "Mengumpulkan bukti digital secara forensik",
          "Merekonstruksi timeline serangan",
          "Menyusun laporan forensik",
        ],
        careerPath: ["Forensics Analyst", "Senior Forensics Analyst", "DFIR Lead"],
        relatedRoles: ["incident-responder"],
      },
      {
        slug: "security-engineer",
        title: "Security Engineer",
        icon: "🧱",
        tag: "ENGINEERING",
        shortDescription:
          "Merancang, mengimplementasikan, dan mengelola kontrol keamanan: firewall, IDS/IPS, SIEM, EDR, dan infrastruktur keamanan lainnya.",
        longDescription:
          "Membangun dan memelihara infrastruktur keamanan organisasi agar sistem deteksi dan pencegahan berjalan optimal.",
        domain: "network",
        level: "intermediate",
        skills: ["Firewall management", "SIEM engineering", "Network security"],
        tools: ["Palo Alto", "Splunk", "CrowdStrike"],
        certifications: ["Security+", "CCNA Security"],
        responsibilities: [
          "Mengelola firewall & IDS/IPS",
          "Membangun infrastruktur SIEM",
          "Melakukan hardening sistem",
        ],
        careerPath: ["Security Engineer", "Senior Security Engineer", "Security Architect"],
        relatedRoles: ["cloud-security-engineer"],
      },
      {
        slug: "threat-hunter",
        title: "Threat Hunter",
        icon: "🔎",
        tag: "THREAT HUNT",
        shortDescription:
          "Secara proaktif mencari ancaman yang belum terdeteksi di dalam jaringan menggunakan hipotesis berbasis intelijen, anomali perilaku, dan TTP penyerang.",
        longDescription:
          "Threat Hunter mencari indikasi kompromi yang lolos dari sistem deteksi otomatis, menggunakan hipotesis berbasis threat intelligence.",
        domain: "threat-intel",
        level: "advanced",
        skills: ["Threat intelligence", "Data analysis", "Malware behavior analysis"],
        tools: ["Splunk", "EDR platforms", "YARA"],
        certifications: ["GCTI", "GCFA"],
        responsibilities: [
          "Membangun hipotesis threat hunting",
          "Menganalisis pola anomali",
          "Mendokumentasikan temuan",
        ],
        careerPath: ["SOC Analyst", "Threat Hunter", "Senior Threat Hunter"],
        relatedRoles: ["soc-analyst", "threat-intelligence-analyst"],
      },
      {
        slug: "cloud-security-engineer",
        title: "Cloud Security Engineer",
        icon: "☁️",
        tag: "CLOUD",
        shortDescription:
          "Mengamankan infrastruktur cloud (AWS, Azure, GCP): konfigurasi IAM, cloud-native security tools, compliance, dan deteksi ancaman di lingkungan cloud.",
        longDescription:
          "Fokus pada konfigurasi aman layanan cloud, manajemen identity & access, serta monitoring cloud security posture untuk mencegah misconfiguration.",
        domain: "cloud",
        level: "advanced",
        skills: ["Cloud architecture", "IAM", "Cloud network security"],
        tools: ["AWS Security Hub", "Azure Defender", "Prisma Cloud"],
        certifications: ["AWS Security Specialty", "CCSP"],
        responsibilities: [
          "Mengaudit konfigurasi cloud secara berkala",
          "Mengelola kebijakan IAM",
          "Monitoring cloud security posture",
        ],
        careerPath: ["Cloud Engineer", "Cloud Security Engineer", "Cloud Security Architect"],
        relatedRoles: ["security-engineer", "devsecops-engineer"],
      },
    ],
  },
  {
    id: "purple",
    name: "Purple Team",
    color: "#A855F7",
    mission: "Collaborative Security — Jembatan Red & Blue",
    description:
      "Purple Team memastikan temuan Red Team langsung memperkuat kemampuan deteksi Blue Team lewat kolaborasi dan latihan bersama.",
    roles: [
      {
        slug: "purple-team-lead",
        title: "Purple Team Lead",
        icon: "🔄",
        tag: "COLLABORATION",
        shortDescription:
          "Memfasilitasi kolaborasi antara Red dan Blue Team: merencanakan latihan gabungan, mengukur efektivitas deteksi, dan mendorong peningkatan kapabilitas kedua tim.",
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
          "Mengukur efektivitas deteksi",
        ],
        careerPath: ["Blue/Red Analyst", "Purple Team Member", "Purple Team Lead"],
        relatedRoles: ["threat-hunter", "red-team-operator"],
      },
      {
        slug: "detection-engineer",
        title: "Detection Engineer",
        icon: "📐",
        tag: "DETECTION",
        shortDescription:
          "Membangun dan menyempurnakan aturan deteksi di SIEM (Sigma, YARA, Snort rules) berdasarkan TTP yang diperoleh dari sesi latihan red team.",
        longDescription:
          "Menerjemahkan taktik serangan hasil purple team exercise menjadi rule deteksi konkret, sekaligus melakukan tuning agar mengurangi false positive.",
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
      {
        slug: "security-metrics-analyst",
        title: "Security Metrics Analyst",
        icon: "📊",
        tag: "METRICS",
        shortDescription:
          "Mengukur efektivitas kontrol keamanan, mean time to detect (MTTD), mean time to respond (MTTR), dan tingkat coverage deteksi terhadap MITRE ATT&CK.",
        longDescription:
          "Mengumpulkan dan menganalisis metrik keamanan untuk memberi gambaran objektif seberapa efektif program keamanan organisasi berjalan.",
        domain: "governance",
        level: "intermediate",
        skills: ["Data analysis", "KPI design", "Reporting"],
        tools: ["Splunk", "Dashboards (Grafana/PowerBI)"],
        certifications: ["Security+"],
        responsibilities: [
          "Mengukur MTTD dan MTTR",
          "Membangun dashboard metrik keamanan",
          "Melaporkan tren efektivitas deteksi",
        ],
        careerPath: ["SOC Analyst", "Metrics Analyst", "Senior Metrics Analyst"],
        relatedRoles: ["purple-team-lead"],
      },
    ],
  },
  {
    id: "yellow",
    name: "Yellow Team",
    color: "#EAB308",
    mission: "Security Engineering & Development — Membangun yang Aman",
    description:
      "Yellow Team adalah representasi builder — developer, arsitek, dan engineer yang menanamkan keamanan sejak fase perancangan sistem.",
    roles: [
      {
        slug: "appsec-engineer",
        title: "AppSec Engineer",
        icon: "⚙️",
        tag: "APPSEC",
        shortDescription:
          "Mengintegrasikan keamanan dalam siklus pengembangan perangkat lunak (SDLC): code review, SAST/DAST, dependency scanning, dan secure coding guidelines.",
        longDescription:
          "Bertanggung jawab melakukan secure code review, threat modeling, dan memastikan best practice keamanan diterapkan sejak fase desain aplikasi.",
        domain: "application",
        level: "advanced",
        skills: ["Threat modeling", "Secure code review", "OWASP Top 10"],
        tools: ["Checkmarx", "Semgrep", "Burp Suite"],
        certifications: ["CSSLP", "OSWE"],
        responsibilities: [
          "Melakukan threat modeling pada fitur baru",
          "Code review berfokus keamanan",
          "Menyusun secure coding guideline",
        ],
        careerPath: ["Developer", "AppSec Engineer", "AppSec Architect"],
        relatedRoles: ["devsecops-engineer", "web-app-pentester"],
      },
      {
        slug: "devsecops-engineer",
        title: "DevSecOps Engineer",
        icon: "🔧",
        tag: "DEVSECOPS",
        shortDescription:
          "Menanamkan keamanan ke pipeline CI/CD: container security, secret management, infrastructure-as-code scanning, dan otomasi security testing.",
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
        slug: "security-architect",
        title: "Security Architect",
        icon: "🏗️",
        tag: "ARCHITECTURE",
        shortDescription:
          "Merancang arsitektur keamanan end-to-end: Zero Trust framework, network segmentation, identity architecture, dan secure-by-design system design.",
        longDescription:
          "Merancang cetak biru keamanan sistem secara menyeluruh, memastikan setiap komponen — jaringan, identitas, aplikasi — dirancang aman sejak awal.",
        domain: "governance",
        level: "advanced",
        skills: ["Zero Trust", "Network segmentation", "Identity architecture"],
        tools: ["Architecture diagramming tools", "Threat modeling frameworks"],
        certifications: ["CISSP", "SABSA"],
        responsibilities: [
          "Merancang arsitektur keamanan sistem",
          "Menentukan standar Zero Trust",
          "Review desain sistem baru dari sisi keamanan",
        ],
        careerPath: ["Security Engineer", "Security Architect", "Principal Architect"],
        relatedRoles: ["appsec-engineer"],
      },
      {
        slug: "security-tool-developer",
        title: "Security Tool Developer",
        icon: "🛠️",
        tag: "TOOLING",
        shortDescription:
          "Mengembangkan alat keamanan internal: skrip otomasi, SIEM integrations, custom detection tools, dan platform manajemen kerentanan.",
        longDescription:
          "Membangun tooling internal yang mempercepat pekerjaan tim keamanan lain — dari otomasi laporan hingga integrasi custom antar platform keamanan.",
        domain: "application",
        level: "intermediate",
        skills: ["Software development", "API integration", "Automation scripting"],
        tools: ["Python", "Go", "REST APIs"],
        certifications: ["Security+"],
        responsibilities: [
          "Membangun tooling otomasi internal",
          "Integrasi antar platform keamanan",
          "Maintenance tools yang sudah berjalan",
        ],
        careerPath: ["Software Engineer", "Security Tool Developer", "Senior Tool Developer"],
        relatedRoles: ["devsecops-engineer"],
      },
    ],
  },
  {
    id: "green",
    name: "Green Team",
    color: "#22C55E",
    mission: "Intelligence & Research — Memahami Musuh",
    description:
      "Green Team fokus mengumpulkan, meneliti, dan menganalisis informasi tentang ancaman untuk memberi konteks bagi tim lain.",
    roles: [
      {
        slug: "threat-intelligence-analyst",
        title: "Threat Intelligence Analyst",
        icon: "🧠",
        tag: "CTI",
        shortDescription:
          "Mengumpulkan, menganalisis, dan mendistribusikan intelijen ancaman: TTP penyerang, IOC (Indicator of Compromise), dan profil kelompok ancaman (APT groups).",
        longDescription:
          "Menganalisis data ancaman dari berbagai sumber untuk memberi konteks strategis bagi tim SOC, Threat Hunter, dan manajemen dalam mengambil keputusan.",
        domain: "threat-intel",
        level: "intermediate",
        skills: ["Threat analysis", "IOC management", "Report writing"],
        tools: ["MISP", "ThreatConnect", "OpenCTI"],
        certifications: ["GCTI"],
        responsibilities: [
          "Mengumpulkan & menganalisis data ancaman",
          "Mendistribusikan IOC ke tim terkait",
          "Menyusun profil kelompok ancaman",
        ],
        careerPath: ["Junior Analyst", "CTI Analyst", "Senior CTI Analyst"],
        relatedRoles: ["threat-hunter", "osint-analyst"],
      },
      {
        slug: "osint-analyst",
        title: "OSINT Analyst",
        icon: "🌍",
        tag: "OSINT",
        shortDescription:
          "Mengumpulkan informasi dari sumber terbuka: dark web monitoring, social media intelligence, domain/IP investigation, dan profiling aktor ancaman.",
        longDescription:
          "Menggali informasi publik yang relevan untuk mendukung investigasi keamanan, dari social media hingga forum dark web.",
        domain: "threat-intel",
        level: "beginner",
        skills: ["OSINT tools", "Social engineering awareness", "Investigation"],
        tools: ["Maltego", "Shodan", "SpiderFoot"],
        certifications: ["OSINT Certifications (SANS)"],
        responsibilities: [
          "Mengumpulkan data dari sumber terbuka",
          "Monitoring dark web untuk kebocoran data",
          "Profiling aktor ancaman",
        ],
        careerPath: ["OSINT Analyst", "Senior OSINT Analyst", "CTI Analyst"],
        relatedRoles: ["threat-intelligence-analyst"],
      },
      {
        slug: "malware-researcher",
        title: "Malware Researcher",
        icon: "🦠",
        tag: "MALWARE RE",
        shortDescription:
          "Menganalisis sampel malware secara statis dan dinamis: reverse engineering binary, sandbox analysis, mengidentifikasi C2 infrastructure, dan mendokumentasikan perilaku malware.",
        longDescription:
          "Membedah sampel malware untuk memahami cara kerja, tujuan, dan infrastruktur command-and-control-nya, hasilnya menjadi dasar signature deteksi baru.",
        domain: "threat-intel",
        level: "advanced",
        skills: ["Reverse engineering", "Sandbox analysis", "Assembly language"],
        tools: ["IDA Pro", "Ghidra", "Cuckoo Sandbox"],
        certifications: ["GREM"],
        responsibilities: [
          "Menganalisis sampel malware statis & dinamis",
          "Mengidentifikasi infrastruktur C2",
          "Mendokumentasikan perilaku malware",
        ],
        careerPath: ["Malware Analyst", "Malware Researcher", "Senior Researcher"],
        relatedRoles: ["threat-intelligence-analyst"],
      },
      {
        slug: "vulnerability-researcher",
        title: "Vulnerability Researcher",
        icon: "🔭",
        tag: "VULN RESEARCH",
        shortDescription:
          "Meneliti kerentanan baru di software dan hardware: fuzzing, code auditing, CVE research, dan responsible disclosure kepada vendor.",
        longDescription:
          "Melakukan riset mendalam untuk menemukan kerentanan baru sebelum dieksploitasi secara luas, lalu melaporkannya secara bertanggung jawab ke vendor terkait.",
        domain: "network",
        level: "advanced",
        skills: ["Fuzzing", "Code auditing", "Responsible disclosure"],
        tools: ["AFL", "Ghidra", "Binary Ninja"],
        certifications: ["OSED"],
        responsibilities: [
          "Melakukan riset kerentanan software/hardware",
          "Menulis laporan CVE",
          "Koordinasi responsible disclosure dengan vendor",
        ],
        careerPath: ["Security Researcher", "Vulnerability Researcher", "Senior Researcher"],
        relatedRoles: ["exploit-developer", "malware-researcher"],
      },
    ],
  },
  {
    id: "orange",
    name: "Orange Team",
    color: "#F97316",
    mission: "GRC & Compliance — Keamanan dari Sisi Kebijakan & Hukum",
    description:
      "Orange Team memastikan organisasi mematuhi regulasi dan mengelola risiko keamanan secara sistematis lewat kebijakan dan edukasi.",
    roles: [
      {
        slug: "grc-analyst",
        title: "GRC Analyst",
        icon: "📋",
        tag: "GRC",
        shortDescription:
          "Mengelola Governance, Risk & Compliance: memastikan organisasi mematuhi regulasi (ISO 27001, NIST, GDPR, PCI-DSS) dan mengelola risiko keamanan secara terstruktur.",
        longDescription:
          "Memastikan organisasi memenuhi standar regulasi dan mengelola risiko keamanan secara sistematis lewat penilaian berkala dan kebijakan yang jelas.",
        domain: "governance",
        level: "intermediate",
        skills: ["Risk assessment", "Compliance frameworks", "Audit"],
        tools: ["GRC platforms", "ISO 27001 toolkit"],
        certifications: ["CISA", "CRISC"],
        responsibilities: [
          "Melakukan risk assessment berkala",
          "Menyusun dan memelihara kebijakan keamanan",
          "Memastikan kepatuhan terhadap regulasi",
        ],
        careerPath: ["GRC Analyst", "Senior GRC Analyst", "GRC Manager"],
        relatedRoles: ["security-auditor", "vendor-risk-manager"],
      },
      {
        slug: "security-auditor",
        title: "Security Auditor",
        icon: "⚖️",
        tag: "AUDIT",
        shortDescription:
          "Melakukan audit keamanan internal maupun eksternal, menilai kematangan kontrol keamanan, dan memberikan rekomendasi berbasis standar internasional.",
        longDescription:
          "Menilai secara independen apakah kontrol keamanan organisasi sudah memadai dan sesuai standar, lalu memberi rekomendasi perbaikan.",
        domain: "governance",
        level: "intermediate",
        skills: ["Audit methodology", "Compliance standards", "Reporting"],
        tools: ["Audit checklists", "GRC platforms"],
        certifications: ["CISA", "ISO 27001 Lead Auditor"],
        responsibilities: [
          "Melakukan audit kontrol keamanan",
          "Menilai kematangan program keamanan",
          "Menyusun laporan rekomendasi audit",
        ],
        careerPath: ["Junior Auditor", "Security Auditor", "Lead Auditor"],
        relatedRoles: ["grc-analyst"],
      },
      {
        slug: "security-policy-writer",
        title: "Security Policy Writer",
        icon: "📝",
        tag: "POLICY",
        shortDescription:
          "Menyusun dan memelihara kebijakan keamanan informasi, prosedur operasional standar (SOP), dan panduan keamanan yang mudah dipahami seluruh organisasi.",
        longDescription:
          "Menerjemahkan kebutuhan compliance dan risiko menjadi dokumen kebijakan yang jelas dan bisa diikuti oleh seluruh karyawan.",
        domain: "governance",
        level: "beginner",
        skills: ["Technical writing", "Policy design", "Compliance knowledge"],
        tools: ["Document management systems"],
        certifications: ["Security+"],
        responsibilities: [
          "Menyusun kebijakan & SOP keamanan",
          "Memperbarui dokumen sesuai regulasi terbaru",
          "Mensosialisasikan kebijakan ke karyawan",
        ],
        careerPath: ["Policy Writer", "Senior Policy Writer", "GRC Manager"],
        relatedRoles: ["grc-analyst"],
      },
      {
        slug: "security-awareness-trainer",
        title: "Security Awareness Trainer",
        icon: "🎤",
        tag: "TRAINING",
        shortDescription:
          "Merancang dan menjalankan program edukasi keamanan: simulasi phishing, pelatihan karyawan, kampanye kesadaran, dan membangun budaya keamanan di organisasi.",
        longDescription:
          "Menyusun kurikulum pelatihan keamanan berdasarkan tren ancaman terbaru dan hasil temuan Red Team, lalu menyampaikannya ke seluruh karyawan.",
        domain: "awareness",
        level: "beginner",
        skills: ["Public speaking", "Content design", "Adult learning"],
        tools: ["KnowBe4", "Google Workspace"],
        certifications: ["Security+"],
        responsibilities: [
          "Merancang kurikulum pelatihan keamanan",
          "Menjalankan simulasi phishing",
          "Mengevaluasi efektivitas program awareness",
        ],
        careerPath: ["Trainer", "Senior Trainer", "Awareness Program Lead"],
        relatedRoles: ["security-policy-writer"],
      },
      {
        slug: "privacy-officer",
        title: "Privacy Officer (DPO)",
        icon: "🔐",
        tag: "PRIVACY",
        shortDescription:
          "Memastikan perlindungan data pribadi sesuai regulasi privasi (GDPR, UU PDP Indonesia): impact assessment, data mapping, dan penanganan pelanggaran data.",
        longDescription:
          "Bertanggung jawab atas kepatuhan organisasi terhadap regulasi privasi data, termasuk menangani permintaan subjek data dan pelaporan insiden kebocoran data.",
        domain: "governance",
        level: "intermediate",
        skills: ["Data privacy law", "Data mapping", "Impact assessment"],
        tools: ["Privacy management platforms"],
        certifications: ["CIPP", "CIPM"],
        responsibilities: [
          "Melakukan data protection impact assessment",
          "Memastikan kepatuhan terhadap regulasi privasi",
          "Menangani pelaporan pelanggaran data",
        ],
        careerPath: ["Privacy Analyst", "Privacy Officer", "DPO"],
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
