'use client';

import React, { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "Who is Yuvraj Singh (Software Engineer & DevSecOps)?",
    answer: "Yuvraj Singh is a Computer Science & Engineering undergraduate at SRM University AP (2025–2029) specializing in DevSecOps tooling, telemetry normalization pipelines, and developer infrastructure. He builds production-grade systems in Python and TypeScript, serves in executive leadership across university research labs, and actively contributes to open-source software."
  },
  {
    question: "What core open-source projects has Yuvraj Singh developed?",
    answer: "Yuvraj Singh has developed four flagship systems: (1) ULPF: Universal Log Pre-processing Framework converting firewall/network logs into OCSF 1.1.0 format offline; (2) Etio: an automated CI failure diagnosis tool live on the GitHub Marketplace; (3) VeriFace Protocol (PoF): a biometric face verification pipeline with cryptographic Polygon Amoy blockchain proof; and (4) Errly: a terminal CLI crash explanation tool with client-side secret redaction."
  },
  {
    question: "What leadership and community roles does Yuvraj Singh hold?",
    answer: "On campus at SRM University AP, Yuvraj serves as an Executive Member at Singularity Research Lab, Technical Co-Head at Microsoft Student Community, and Technical Team Member at IEEE Student Branch. Additionally, he was recognized in the top 15 campus ambassadors nationwide for E-Cell IIT Guwahati during UDGAM'26."
  },
  {
    question: "How is this Yuvraj Singh distinguished from the cricketer Yuvraj Singh?",
    answer: "This portfolio belongs to Yuvraj Singh, a software engineer, systems developer, and DevSecOps specialist based in Vijayawada, India. He is not the former Indian international cricketer. His work focuses on cybersecurity, log telemetry pipelines, and developer tooling on GitHub (@YUVRAJ-SINGH-3178)."
  },
  {
    question: "How can recruiters, mentors, and collaborators contact Yuvraj Singh?",
    answer: "Yuvraj Singh is open to software engineering internships and technical collaborations. He can be contacted directly by email at satishyuvraj.singh3178@gmail.com, on LinkedIn at linkedin.com/in/yuvraj-singh-3178saturn, or through his GitHub profile at github.com/YUVRAJ-SINGH-3178."
  }
];

export default function SectionFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="space-y-3" itemScope itemType="https://schema.org/FAQPage">
      {FAQS.map((faq, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className="border border-[var(--border)] bg-[var(--paper)] rounded-[6px] overflow-hidden transition-colors hover:border-[var(--ink)]/40"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full flex items-center justify-between p-4 text-left font-sans text-xs sm:text-sm font-bold text-[var(--ink)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              aria-expanded={isOpen}
            >
              <span itemProp="name">{faq.question}</span>
              <svg
                viewBox="0 0 24 24"
                className={`w-4 h-4 text-[var(--muted)] shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[var(--accent)]' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isOpen && (
              <div
                className="px-4 pb-4 font-sans text-xs sm:text-[13px] text-[var(--muted)] leading-relaxed border-t border-[var(--border)] pt-3"
                itemScope
                itemProp="acceptedAnswer"
                itemType="https://schema.org/Answer"
              >
                <p itemProp="text" className="text-[var(--ink)]">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
