import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_Condensed, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/components/ui/ThemeToggle";

const plexCondensed = IBM_Plex_Sans_Condensed({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-plex-condensed",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F2F2F0" },
    { media: "(prefers-color-scheme: dark)", color: "#0C0C0C" },
  ],
};

const SITE_URL = "https://yuvilee.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Yuvraj Singh | Software Engineer & DevSecOps Specialist",
    template: "%s | Yuvraj Singh",
  },
  description:
    "Official portfolio of Yuvraj Singh, a Software Engineer and DevSecOps specialist studying Computer Science at SRM University AP. Creator of ULPF, Etio, Errly, and VeriFace Protocol.",
  keywords: [
    "Yuvraj Singh",
    "Yuvraj Singh Software Engineer",
    "Yuvraj Singh Developer",
    "Yuvraj Singh DevSecOps",
    "Yuvraj Singh SRM University",
    "Yuvraj Singh SRM AP",
    "Yuvraj Singh Portfolio",
    "Yuvraj Singh GitHub",
    "YUVRAJ-SINGH-3178",
    "Satish Yuvraj Singh",
    "Yuvraj Singh Systems Engineer",
    "Yuvraj Singh ULPF",
    "Yuvraj Singh Etio",
    "Singularity Research Lab Yuvraj Singh",
    "Microsoft Student Community Yuvraj Singh",
    "Yuvraj Singh Python TypeScript",
    "Yuvraj Singh Vijayawada",
  ],
  authors: [{ name: "Yuvraj Singh", url: "https://github.com/YUVRAJ-SINGH-3178" }],
  creator: "Yuvraj Singh",
  publisher: "Yuvraj Singh",
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Yuvraj Singh | Software Engineer & DevSecOps Specialist",
    description:
      "Official portfolio of Yuvraj Singh — Software Engineer, DevSecOps researcher, and Computer Science undergraduate at SRM University AP. Creator of ULPF, Etio, Errly, and VeriFace Protocol.",
    url: SITE_URL,
    siteName: "Yuvraj Singh Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: `${SITE_URL}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Yuvraj Singh | Software Engineer & DevSecOps Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvraj Singh | Software Engineer & DevSecOps Specialist",
    description:
      "Official portfolio of Yuvraj Singh. Software Engineer, DevSecOps specialist, and B.Tech CSE student at SRM University AP.",
    creator: "@YUVRAJ-SINGH-3178",
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

// Rich Structured Data for Search Engines, Google Knowledge Graph & AI Overviews
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Yuvraj Singh",
      alternateName: ["YUVRAJ-SINGH-3178", "Satish Yuvraj Singh"],
      jobTitle: "Software Engineer & DevSecOps Specialist",
      description:
        "Yuvraj Singh is a Software Engineer and DevSecOps specialist studying Computer Science and Engineering at SRM University AP (2025–2029). He is the author of public systems including ULPF (Universal Log Pre-processing Framework), Etio (CI failure diagnosis GitHub Action), Errly (CLI crash explainer), and VeriFace Protocol.",
      disambiguatingDescription:
        "Yuvraj Singh is an Indian computer science undergraduate, software engineer, and DevSecOps specialist at SRM University AP. He is distinct from the former Indian cricketer Yuvraj Singh.",
      url: SITE_URL,
      email: "mailto:satishyuvraj.singh3178@gmail.com",
      image: `${SITE_URL}/opengraph-image`,
      sameAs: [
        "https://github.com/YUVRAJ-SINGH-3178",
        "https://www.linkedin.com/in/yuvraj-singh-3178saturn/",
        "https://github.com/marketplace/actions/etio-ci-failure-auto-doctor",
      ],
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "SRM University AP",
        url: "https://srmap.edu.in",
      },
      affiliation: [
        {
          "@type": "Organization",
          name: "Singularity Research Lab, SRM AP",
        },
        {
          "@type": "Organization",
          name: "Microsoft Student Community, SRM AP",
        },
        {
          "@type": "Organization",
          name: "IEEE Student Branch, SRM AP",
        },
      ],
      knowsAbout: [
        "Software Engineering",
        "DevSecOps",
        "Python",
        "TypeScript",
        "Next.js",
        "OpenSearch",
        "MinIO",
        "OCSF (Open Cybersecurity Schema Framework)",
        "SIEM Pipelines",
        "Polygon Amoy",
        "Docker",
        "GitHub Actions",
        "Web3",
        "Secret Masking",
      ],
      award: [
        "Finalist — GfG My1stHack and VibeCraft Hackathon",
        "Semi-finalist — Convolove 4.0 (IIT Guwahati)",
        "Top 15 Campus Ambassador Nationwide — E-Cell, IIT Guwahati",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "Yuvraj Singh | Software Engineer & DevSecOps Specialist",
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Yuvraj Singh Portfolio",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Yuvraj Singh (Software Engineer)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yuvraj Singh is a Software Engineer and DevSecOps specialist studying Computer Science & Engineering at SRM University AP (2025–2029). He builds security tooling, log telemetry pipelines, developer tools, and full-stack web applications primarily in Python and TypeScript.",
          },
        },
        {
          "@type": "Question",
          name: "What software and projects has Yuvraj Singh built?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yuvraj Singh has built ULPF (Universal Log Pre-processing Framework converting logs into OCSF 1.1.0 format), Etio (CI failure diagnosis GitHub Action live on GitHub Marketplace), VeriFace Protocol (PoF face verification pipeline deployed on Polygon Amoy), and Errly (a terminal crash explanation CLI with secret redaction).",
          },
        },
        {
          "@type": "Question",
          name: "What campus leadership roles does Yuvraj Singh hold?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yuvraj Singh serves as an Executive Member at Singularity Research Lab, Technical Co-Head at Microsoft Student Community SRM AP, Technical Team Member at IEEE Student Branch SRM AP, and was a Top 15 Campus Ambassador nationwide for E-Cell IIT Guwahati.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Yuvraj Singh?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach Yuvraj Singh via email at satishyuvraj.singh3178@gmail.com, connect on LinkedIn at linkedin.com/in/yuvraj-singh-3178saturn, or inspect his open-source code on GitHub at github.com/YUVRAJ-SINGH-3178.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plexCondensed.variable} ${plexSans.variable} ${plexMono.variable} h-full scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink)] font-sans antialiased selection:bg-[var(--accent)] selection:text-white">
        <ThemeToggle />
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
