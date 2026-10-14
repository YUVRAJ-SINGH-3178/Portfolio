import React from 'react';
import DotHero from '@/components/dot-matrix/DotHero';
import DotTicker from '@/components/dot-matrix/DotTicker';
import DotActivityChart from '@/components/dot-matrix/DotActivityChart';
import SectionExperience from '@/components/sections/SectionExperience';
import SectionProjects from '@/components/sections/SectionProjects';
import SectionOpenSourceTable from '@/components/sections/SectionOpenSourceTable';
import SectionSkillsTable from '@/components/sections/SectionSkillsTable';
import SectionFaq from '@/components/sections/SectionFaq';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function PortfolioPage() {
  return (
    <main className="w-full flex-1 max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12 space-y-12">
      {/* 1. Header Profile & Status Bar */}
      <section className="space-y-4" aria-label="Profile and introduction">
        {/* Availability & Location Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[var(--border)] font-mono text-xs text-[var(--muted)]">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
            </span>
            <span className="font-semibold text-[var(--ink)]">Available for Internships & Projects</span>
            <span>•</span>
            <span>{PORTFOLIO_DATA.location}</span>
          </div>

          <div>
            <a
              href={PORTFOLIO_DATA.links.resumePdf}
              download="Yuvraj_Singh_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] border border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)] text-[11px] font-mono font-medium hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-colors focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
              aria-label="Download Resume PDF"
            >
              <span>Resume PDF</span>
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
            </a>
          </div>
        </div>

        {/* Hero Dot-Matrix Display */}
        <div className="rounded-[6px] overflow-hidden border border-[var(--border)]">
          <DotHero />
          <DotTicker />
        </div>

        {/* Bio Narrative & Direct Links */}
        <div className="pt-2 space-y-3 font-sans text-sm text-[var(--ink)] leading-relaxed">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--ink)]">
              {PORTFOLIO_DATA.name}
            </h1>
            <p className="text-sm font-medium text-[var(--muted)] font-mono mt-0.5">
              {PORTFOLIO_DATA.tagline} • {PORTFOLIO_DATA.institution}
            </p>
          </div>

          <p className="font-medium text-sm sm:text-base text-[var(--ink)] leading-relaxed">
            {PORTFOLIO_DATA.summary}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-xs">
            <a
              href={PORTFOLIO_DATA.links.resumePdf}
              download="Yuvraj_Singh_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)] transition-colors font-medium"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              <span>Download Resume</span>
            </a>

            <a
              href={PORTFOLIO_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              <span>GitHub</span>
            </a>

            <a
              href={PORTFOLIO_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2z" />
              </svg>
              <span>LinkedIn</span>
            </a>

            <a
              href={PORTFOLIO_DATA.links.email}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME */}
      <section id="about" className="space-y-3">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            About Me
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            BACKGROUND & PHILOSOPHY
          </span>
        </div>
        <div className="border border-[var(--border)] bg-[var(--paper)] p-4 sm:p-5 rounded-[6px] font-sans text-xs sm:text-[13px] text-[var(--ink)] leading-relaxed space-y-3">
          <p>
            I am a Computer Science & Engineering undergraduate at SRM University AP (2025–2029) specializing in DevSecOps tooling, log telemetry pipelines, and developer infrastructure. My engineering work bridges systems-level programming in Python and C/C++ with full-stack web engineering in TypeScript, Next.js, and Node.js.
          </p>
          <p className="text-[var(--muted)]">
            I believe software should be reliable, secure by default, and thoroughly tested. On campus, I serve in technical leadership roles across Singularity Research Lab and the Microsoft Student Community, mentoring fellow students and building platforms that serve hundreds of active members.
          </p>
          <div className="pt-3 border-t border-[var(--border)] font-mono text-[11px] text-[var(--muted)] flex flex-wrap gap-4">
            <span>Specialization: DevSecOps & Telemetry Pipelines</span>
            <span>•</span>
            <span>Focus: High Reliability & Offline-First Systems</span>
            <span>•</span>
            <span>Status: Open to Summer & Fall Internships</span>
          </div>
        </div>
      </section>

      {/* 3. LEADERSHIP & EXPERIENCE */}
      <section id="experience" className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            Leadership & Experience
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            CAMPUS & COMMUNITY ROLES
          </span>
        </div>
        <SectionExperience experiences={PORTFOLIO_DATA.experiences} />
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section id="projects" className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            Featured Projects
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            {PORTFOLIO_DATA.projects.length} SYSTEMS DEPLOYED
          </span>
        </div>
        <SectionProjects projects={PORTFOLIO_DATA.projects} />
      </section>

      {/* 5. OPEN-SOURCE CONTRIBUTIONS */}
      <section id="open-source" className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            Open-Source Contributions
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            VERIFIED GITHUB PRs
          </span>
        </div>
        <SectionOpenSourceTable prs={PORTFOLIO_DATA.prs} />
      </section>

      {/* 6. GITHUB ACTIVITY */}
      <section id="activity" className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            GitHub Activity
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            ANNUAL ACTIVITY LOG
          </span>
        </div>
        <div className="rounded-[6px] overflow-hidden">
          <DotActivityChart />
        </div>
      </section>

      {/* 7. TECHNICAL SKILLS */}
      <section id="skills" className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            Technical Skills
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            LANGUAGES & TOOLING
          </span>
        </div>
        <SectionSkillsTable skillCategories={PORTFOLIO_DATA.skills} />
      </section>

      {/* 8. ACHIEVEMENTS & CERTIFICATIONS */}
      <section id="achievements" className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            Achievements & Certifications
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            HONORS & CREDENTIALS
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {PORTFOLIO_DATA.achievements.map((item, idx) => (
            <div
              key={idx}
              className="border border-[var(--border)] bg-[var(--paper)] p-4 rounded-[6px] flex flex-col justify-between hover:border-[var(--ink)]/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 pb-2 mb-2 border-b border-[var(--border)] font-mono text-[10px]">
                  <span className="text-[var(--accent)] font-semibold uppercase tracking-wider">
                    [{item.category}]
                  </span>
                  <span className="text-[var(--muted)]">
                    {item.organization}
                  </span>
                </div>
                <h3 className="font-sans text-xs sm:text-sm font-bold text-[var(--ink)] mb-1">
                  {item.title}
                </h3>
                <p className="font-sans text-xs text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS & ENTITY OVERVIEW */}
      <section id="faq" className="space-y-4" aria-label="Frequently asked questions about Yuvraj Singh">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            Frequently Asked Questions
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            OVERVIEW & DISAMBIGUATION
          </span>
        </div>
        <SectionFaq />
      </section>

      {/* 10. CONTACT / GET IN TOUCH */}
      <section id="contact" className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-[var(--border)]">
          <h2 className="font-sans text-lg sm:text-xl font-bold tracking-tight text-[var(--ink)]">
            Get In Touch
          </h2>
          <span className="font-mono text-[10px] text-[var(--muted)]">
            CONNECT & COLLABORATE
          </span>
        </div>

        <div className="border border-[var(--border)] bg-[var(--paper)] p-4 sm:p-6 rounded-[6px] space-y-4">
          <div className="space-y-1">
            <h3 className="font-sans text-sm sm:text-base font-bold text-[var(--ink)]">
              Let&apos;s build something great together.
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
              I am open to software engineering internships, research collaborations, and open-source projects. Feel free to reach out directly via email or connect on LinkedIn and GitHub.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
            <a
              href={PORTFOLIO_DATA.links.email}
              className="flex items-center justify-between p-3 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] hover:border-[var(--ink)] transition-colors group"
            >
              <div>
                <span className="text-[10px] text-[var(--muted)] block">EMAIL</span>
                <span className="font-semibold text-xs text-[var(--ink)] truncate block max-w-[170px]" title={PORTFOLIO_DATA.email}>
                  {PORTFOLIO_DATA.email}
                </span>
              </div>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>

            <a
              href={PORTFOLIO_DATA.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] hover:border-[var(--ink)] transition-colors group"
            >
              <div>
                <span className="text-[10px] text-[var(--muted)] block">LINKEDIN</span>
                <span className="font-semibold text-xs text-[var(--ink)]">
                  yuvraj-singh-3178
                </span>
              </div>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>

            <a
              href={PORTFOLIO_DATA.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] hover:border-[var(--ink)] transition-colors group"
            >
              <div>
                <span className="text-[10px] text-[var(--muted)] block">GITHUB</span>
                <span className="font-semibold text-xs text-[var(--ink)]">
                  YUVRAJ-SINGH-3178
                </span>
              </div>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* 10. FOOTER */}
      <footer className="pt-8 border-t border-[var(--border)] font-mono text-xs text-[var(--muted)] space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[var(--ink)]">{PORTFOLIO_DATA.name}</span>
            <span>•</span>
            <span>SRM UNIVERSITY AP</span>
            <span>•</span>
            <span>2026</span>
          </div>

          <div>
            <a
              href={PORTFOLIO_DATA.links.resumePdf}
              download="Yuvraj_Singh_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] border border-[var(--border)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--ink)] transition-colors font-medium"
            >
              <span>Download Resume PDF</span>
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
