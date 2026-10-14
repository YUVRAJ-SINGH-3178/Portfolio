import prsData from './prs.json';
import contributionsData from './contributions.json';

export interface ProjectSpec {
  id: string;
  name: string;
  subtitle: string;
  target: string;
  scope: string[];
  build: string[];
  status: string;
  liveBadge?: boolean;
  liveUrl?: string;
  codeUrl: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  category: string;
  bullets: string[];
}

// Deprecated interface for backwards compatibility with any open editor buffers
export interface PinDefinition {
  pin: number;
  name: string;
  type: string;
  organization: string;
  role: string;
  period: string;
  function: string;
}

export interface SkillCategory {
  category: string;
  items: {
    name: string;
    level: string;
    evidence: string;
  }[];
}

export interface AchievementItem {
  category: string;
  title: string;
  organization: string;
  description: string;
}

export interface PRItem {
  number: number;
  repo: string;
  title: string;
  state: string;
  merged: boolean;
  url: string;
  created_at: string;
}

export const PORTFOLIO_DATA = {
  name: "Yuvraj Singh",
  tagline: "Software Engineer • DevSecOps & Systems",
  institution: "SRM University AP",
  location: "Vijayawada, India",
  degree: "B.Tech in Computer Science & Engineering",
  period: "Sept 2025 – Sept 2029 (Expected)",
  email: "satishyuvraj.singh3178@gmail.com",
  phone: "+91 9304384114",
  
  summary: "Second-year B.Tech CSE student at SRM University AP. Builds security tooling, telemetry pipelines, developer tools, and full-stack web applications primarily in Python and TypeScript. Author of four public systems covering universal log normalization, automated CI diagnostics, decentralized face verification, and terminal crash explanation. Technical lead across two student developer organizations.",

  links: {
    github: "https://github.com/YUVRAJ-SINGH-3178",
    linkedin: "https://www.linkedin.com/in/yuvraj-singh-3178saturn/",
    email: "mailto:satishyuvraj.singh3178@gmail.com",
    resumePdf: "/Yuvraj Singh_Resume.pdf"
  },

  experiences: [
    {
      id: "srl",
      role: "Executive Member",
      organization: "Singularity Research Lab, SRM AP",
      period: "2026 – Present",
      category: "Research & Systems",
      bullets: [
        "Executive leadership across the student lab and research wing.",
        "Drives technical architecture and member coordination for student research initiatives."
      ]
    },
    {
      id: "msc",
      role: "Technical Co-Head",
      organization: "Microsoft Student Community, SRM AP",
      period: "2026 – Present",
      category: "Student Leadership",
      bullets: [
        "Leads development and engineering maintenance of the community web platform and student portal.",
        "Organizes hands-on technical workshops, hack sprints, and mentorship for undergraduate developers."
      ]
    },
    {
      id: "ieee",
      role: "Technical Team Member",
      organization: "IEEE Student Branch, SRM AP",
      period: "Mar 2026 – Present",
      category: "Student Chapter",
      bullets: [
        "Builds responsive web applications for chapter events and hackathons.",
        "Assists in conducting hands-on engineering workshops and supporting chapter technical projects."
      ]
    },
    {
      id: "ecwoc",
      role: "Open Source Contributor",
      organization: "Elite Coders Winter of Code",
      period: "Winter 2026",
      category: "Open Source",
      bullets: [
        "Contributed API documentation (OpenAPI/Swagger), rate-limiting middleware, and analytics features to community repositories.",
        "Engaged in code reviews, bug fixes, and security hardening across open-source codebases."
      ]
    },
    {
      id: "iitg",
      role: "Campus Ambassador",
      organization: "E-Cell, IIT Guwahati",
      period: "Nov 2025 – Jan 2026",
      category: "Outreach & Leadership",
      bullets: [
        "Promoted UDGAM'26, the national entrepreneurship summit, across university student networks.",
        "Ranked in the top 15 campus ambassadors nationwide for outreach and engagement."
      ]
    },
    {
      id: "srm",
      role: "B.Tech, Computer Science & Engineering",
      organization: "SRM University AP",
      period: "Sept 2025 – Sept 2029 (Expected)",
      category: "Academics",
      bullets: [
        "Coursework in Data Structures & Algorithms, Computer Systems Architecture, Networks, and Cybersecurity.",
        "Active member of campus research labs and competitive programming tracks."
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "ulpf",
      name: "ULPF: Universal Log Pre-processing Framework",
      subtitle: "Telemetry Pipeline & OCSF Normalization",
      target: "Enterprise SIEM & Network Log Ingestion",
      scope: [
        "Converts heterogeneous firewall and network logs (Cisco ASA, Palo Alto, Fortinet, Check Point, Suricata, Zeek, Squid) into OCSF 1.1.0 standard and runs fully offline.",
        "Raw events stored write-once in MinIO with SHA-256 checks; dual acknowledgment required from OpenSearch and Parquet sinks before confirming delivery.",
        "Uses Drain3 clustering algorithms to parse and cluster unknown log formats automatically.",
        "92 automated tests across 18 test suites with 77% coverage, including SSRF, ReDoS, and 200-worker concurrency tests."
      ],
      build: ["Python", "MinIO", "OpenSearch", "Parquet", "DuckDB", "Docker"],
      status: "Production / Maintained",
      codeUrl: "https://github.com/YUVRAJ-SINGH-3178/ULPF"
    },
    {
      id: "etio",
      name: "Etio: CI Failure Diagnosis GitHub Action",
      subtitle: "Automated Pipeline Root-Cause Doctor",
      target: "Developer Tooling (Live on GitHub Marketplace)",
      scope: [
        "Inspects failing GitHub Actions workflow jobs and extracts failed step logs safely.",
        "Diffs failure logs against the last successful run to identify exact breaking changes.",
        "Redacts sensitive secrets and credentials client-side before sending data to Groq LLM API.",
        "Posts root-cause diagnosis and actionable code fixes directly as a comment on pull requests."
      ],
      build: ["Python 3.11", "GitHub Actions", "Groq API"],
      status: "Live on GitHub Marketplace",
      liveBadge: true,
      liveUrl: "https://github.com/marketplace/actions/etio-ci-failure-auto-doctor",
      codeUrl: "https://github.com/YUVRAJ-SINGH-3178/Etio"
    },
    {
      id: "pof",
      name: "VeriFace Protocol (PoF): Face Verification Pipeline",
      subtitle: "Biometric Identity & Polygon Attestation",
      target: "Biometric Verification & Cryptographic Ledger Audit",
      scope: [
        "Detects and embeds faces using YuNet and SFace models, running reverse-image search and cosine similarity verification.",
        "Archives cryptographic evidence securely on IPFS decentralized storage.",
        "Writes verification hashes to a Solidity smart contract on Polygon Amoy only after explicit user consent flag.",
        "Cryptographically signed audit reports with EIP-191; verified with CI and pytest."
      ],
      build: ["Python", "OpenCV", "Solidity", "Web3.py", "IPFS", "Docker"],
      status: "Deployed on Polygon Amoy",
      codeUrl: "https://github.com/YUVRAJ-SINGH-3178/PoF"
    },
    {
      id: "errly",
      name: "Errly: Crash Explanation CLI",
      subtitle: "Terminal Stack Trace Explainer",
      target: "Developer CLI & Terminal Workflows",
      scope: [
        "Wraps Python and Node.js executions to intercept runtime crashes and stack traces.",
        "Scrubs sensitive secrets and tokens client-side before transmission.",
        "Generates concise, plain-English explanations and suggested fixes via Groq API.",
        "Includes local 30-day TTL caching and graceful offline fallback."
      ],
      build: ["Python", "Groq API", "pytest"],
      status: "Active Release",
      codeUrl: "https://github.com/YUVRAJ-SINGH-3178/Errly"
    },
    {
      id: "msc-v2",
      name: "Microsoft Student Community Portal (MSC-v2)",
      subtitle: "Official Student Community Platform",
      target: "Microsoft Student Community, SRM AP",
      scope: [
        "Architected and developed the official student community portal serving hundreds of active members.",
        "Event registration systems, workshop schedules, and student showcase directories.",
        "Responsive, mobile-optimized UI with modern component design."
      ],
      build: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js"],
      status: "Active / Production",
      codeUrl: "https://github.com/YUVRAJ-SINGH-3178/MSC-v2"
    },
    {
      id: "singularity-v3",
      name: "Singularity Research Lab Platform",
      subtitle: "Laboratory Web & Research Showcase",
      target: "Singularity Student Lab & Research Wing",
      scope: [
        "Official research laboratory portal showcasing publications, member rosters, and projects.",
        "Responsive architecture with zero layout shift and fast page loads.",
        "Automated member roster synchronization and build pipeline."
      ],
      build: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
      status: "Active / Maintained",
      codeUrl: "https://github.com/Singularity-Student-Lab/singularity-v3"
    }
  ] as ProjectSpec[],

  skills: [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", level: "Primary", evidence: "ULPF, PoF, Errly, Etio, pytest test suites" },
        { name: "TypeScript", level: "Primary", evidence: "Next.js applications, community platforms, APIs" },
        { name: "JavaScript", level: "Proficient", evidence: "Node.js runtimes, Express.js APIs, frontend tooling" },
        { name: "C / C++", level: "Working Knowledge", evidence: "Academic coursework, data structures, algorithms" },
        { name: "Java", level: "Working Knowledge", evidence: "Object-oriented programming, academic coursework" },
        { name: "SQL", level: "Proficient", evidence: "PostgreSQL, SQLite, DuckDB analytical queries" },
        { name: "Solidity", level: "Proficient", evidence: "Polygon Amoy smart contracts, VeriFace Protocol" }
      ]
    },
    {
      category: "Web & Backend",
      items: [
        { name: "Next.js (App Router)", level: "Primary", evidence: "MSC-v2, Singularity portals, portfolio systems" },
        { name: "React", level: "Primary", evidence: "Interactive interfaces, state management, components" },
        { name: "Node.js", level: "Proficient", evidence: "CLI runners, backend services, tooling integration" },
        { name: "Express.js", level: "Proficient", evidence: "RESTful API services, rate-limiting middleware" },
        { name: "Tailwind CSS", level: "Primary", evidence: "Responsive layouts, clean design systems" },
        { name: "HTML & CSS", level: "Primary", evidence: "Semantic DOM, accessible styling, custom design tokens" },
        { name: "Vite", level: "Proficient", evidence: "Frontend builds, modern bundling" },
        { name: "REST APIs", level: "Primary", evidence: "OpenAPI/Swagger specs, JSON endpoints, rate limiting" }
      ]
    },
    {
      category: "Data & Infrastructure",
      items: [
        { name: "Docker", level: "Proficient", evidence: "Containerized deployments in ULPF, PoF pipelines" },
        { name: "GitHub Actions", level: "Primary", evidence: "Etio published action, CI test runners, automation" },
        { name: "OpenSearch", level: "Proficient", evidence: "Log indexing, search queries in ULPF" },
        { name: "Parquet", level: "Proficient", evidence: "Columnar log storage sinks, data compression" },
        { name: "DuckDB", level: "Proficient", evidence: "In-process analytical SQL on telemetry chunks" },
        { name: "MinIO", level: "Proficient", evidence: "S3-compatible immutable raw event storage" },
        { name: "PostgreSQL", level: "Proficient", evidence: "Relational data stores, indexing, transactions" },
        { name: "SQLite", level: "Proficient", evidence: "Local caching and embedded data persistence" },
        { name: "CI / CD", level: "Primary", evidence: "Automated regression testing, deployment pipelines" },
        { name: "Vercel", level: "Proficient", evidence: "Serverless web deployment and edge hosting" }
      ]
    },
    {
      category: "Security & Web3",
      items: [
        { name: "DevSecOps", level: "Primary Focus", evidence: "Secret scrubbing, CI failure remediation, pipeline security" },
        { name: "OCSF 1.1.0", level: "Proficient", evidence: "Universal log schema normalization in ULPF" },
        { name: "SIEM Pipelines", level: "Proficient", evidence: "Firewall & network log ingestion (Cisco, Palo Alto, etc.)" },
        { name: "Secret Redaction", level: "Primary Focus", evidence: "Client-side token and credential sanitization in Errly & Etio" },
        { name: "Polygon Amoy", level: "Proficient", evidence: "Smart contract deployment & cryptographic verification" },
        { name: "IPFS", level: "Proficient", evidence: "Decentralized evidence archiving in VeriFace Protocol" },
        { name: "Web3.py / Web3.js", level: "Proficient", evidence: "Blockchain interaction, EIP-191 message signing" }
      ]
    },
    {
      category: "Tools & AI Integration",
      items: [
        { name: "Git & GitHub", level: "Primary", evidence: "Branch management, 500+ contributions, PR workflows" },
        { name: "pytest", level: "Primary", evidence: "92 tests across 18 suites with SSRF/ReDoS coverage" },
        { name: "ruff", level: "Proficient", evidence: "Fast Python linting and code quality enforcement" },
        { name: "OpenCV", level: "Proficient", evidence: "YuNet face detection and SFace embeddings extraction" },
        { name: "Groq API", level: "Proficient", evidence: "Low-latency LLM inference for error remediation" }
      ]
    }
  ] as SkillCategory[],

  achievements: [
    {
      category: "Hackathons",
      title: "Finalist — GfG My1stHack & VibeCraft Hackathon",
      organization: "SRM University AP",
      description: "Recognized as a finalist for rapid prototyping and innovative systems implementation."
    },
    {
      category: "Hackathons",
      title: "Semi-finalist — Convolove 4.0",
      organization: "IIT Guwahati",
      description: "Competed in national algorithmic and systems engineering challenge."
    },
    {
      category: "Open Source",
      title: "Open Source Contributor — Elite Coders Winter of Code",
      organization: "ECWOC 2026",
      description: "Contributed documentation, middleware, and features to active open-source projects."
    },
    {
      category: "Certifications",
      title: "Blockchain & Cybersecurity Certifications",
      organization: "Cyfrin, Tata / Forage, EA, IBM, GeeksforGeeks",
      description: "Cyfrin Updraft Blockchain Basics; Tata Cybersecurity Analyst; EA Software Engineering; IBM Getting Started with Cybersecurity; GeeksforGeeks Cyber Security Skill Up."
    }
  ] as AchievementItem[],

  prs: prsData as PRItem[],
  contributions: contributionsData as { date: string; level: number }[]
};
