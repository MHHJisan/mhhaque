"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import dynamic from "next/dynamic";
const ExperienceSection = dynamic(
  () => import("./components/ExperienceSection"),
  {
    ssr: false,
    loading: () => <div className="py-20">Loading experience…</div>,
  }
);
import Image from "next/image";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { FaAndroid, FaApple, FaWhatsapp } from "react-icons/fa";
import { FcTabletAndroid } from "react-icons/fc";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ServicesSection from "./components/ServicesSection";

type Service = {
  id: number;
  title: string;
  description: string;
  highlights: string[];
};

type SocialLink = {
  id: number;
  label: string;
  href: string;
  icon: IconType;
};

function AnimatedNumber({
  target,
  duration = 1200,
  suffix = "",
}: {
  target: number;
  duration?: number;
  suffix?: string;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const current = Math.floor(progress * target);
      setValue(current);
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(target);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, duration]);

  return (
    <>
      {value}
      {suffix}
    </>
  );
}

const heroStats = [
  {
    id: 1,
    label: "Years of experience",
    value: (
      <span className="text-amber-500 dark:text-amber-400">
        {" "}
        <AnimatedNumber target={6} suffix="+" />{" "}
      </span>
    ),
  },
  {
    id: 2,
    label: "Products shipped",
    value: (
      <span className="text-green-500 dark:text-green-400">
        <AnimatedNumber target={28} />
      </span>
    ),
  },
  {
    id: 3,
    label: "Satisfied clients",
    value: (
      <span className="text-amber-500 dark:text-amber-400">
        <AnimatedNumber target={50} suffix="+" />
      </span>
    ),
  },
];

const awards = [
  {
    id: 1,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    year: "2022",
    link: "https://www.cncf.io/",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect — Associate",
    issuer: "Amazon Web Services",
    year: "2021",
    link: "https://aws.amazon.com/certification/",
  },
  {
    id: 3,
    title: "Frontend Developer Nanodegree",
    issuer: "Udacity",
    year: "2020",
    link: "https://www.udacity.com/",
  },
];

const volunteering = [
  {
    id: 1,
    title: "Chief of Volunteer & Fundraising Manager",
    period: "June 2021 — Present",
    organization: "CPFINT.ORG (Companigonj Probashi Foundation)",
    link: "https://www.cpfint.org",
    emoji: "🏆",
    details: [
      "Strategically managed and coordinated volunteer activities for the organization.",
      "Successfully led fundraising initiatives and campaigns to support the foundation's projects (as IT Officer and Treasurer, June 2020 – Oct 2021).",
      "Applied a goal-oriented and proactive approach to expanding the foundation's reach and impact.",
    ],
  },
  {
    id: 2,
    title: "Volunteer",
    period: "Apr 2015 — Present",
    organization: "We. Foundation",
    link: "https://www.facebook.com/groups/902085893250334",
    emoji: "🤝",
    details: [
      "Contributed to various charitable and non-profit initiatives, demonstrating a long-term commitment to community service and philanthropic goals.",
    ],
  },
];

const socialLinks: SocialLink[] = [
  {
    id: 1,
    label: "GitHub",
    href: "https://github.com/MHHJisan",
    icon: FiGithub,
  },
  {
    id: 2,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mhhaquejisan/",
    icon: FiLinkedin,
  },
  {
    id: 3,
    label: "WhatsApp",
    href: "https://wa.me/8801796206206?text=Hi%20Hasibul%2C%20I%20found%20your%20site%20and%20would%20like%20to%20talk.",
    icon: FaWhatsapp,
  },
];

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },

  { href: "#skills", label: "Skills" },

  { href: "#projects", label: "Projects" },

  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnResize = () => setMenuOpen(false);
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [menuOpen]);

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-linear-to-br from-indigo-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="bg-grid-slate absolute inset-0 mix-blend-multiply dark:opacity-40" />
      </div>

      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          hasScrolled
            ? "border-b border-white/40 bg-white/80 shadow-xl backdrop-blur-2xl dark:border-slate-800/60 dark:bg-slate-950/80"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-6">
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight text-slate-900 transition-colors hover:text-indigo-600 dark:text-white"
          >
            Hasibul Haque Jisan
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-5 py-2.5"
              >
                <span className="relative z-10 font-display text-base font-semibold tracking-wide text-green-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent dark:text-cyan-400">
                  {item.label}
                </span>
                <span className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-indigo-50 to-purple-50 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 dark:from-indigo-900/30 dark:to-purple-900/30" />
                <style jsx>{`
                  @import url("https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&display=swap");
                  @keyframes float {
                    0%,
                    100% {
                      transform: translateY(0) scale(1);
                    }
                    50% {
                      transform: translateY(-4px) scale(1.02);
                    }
                  }
                  .font-display {
                    font-family: "Plus Jakarta Sans", -apple-system,
                      BlinkMacSystemFont, sans-serif;
                  }
                  .group {
                    animation: float 4s ease-in-out infinite;
                    animation-delay: calc(
                      0.08s * ${navItems.findIndex((i) => i.href === item.href)}
                    );
                  }
                  .group:hover {
                    animation: none;
                    transform: translateY(-2px);
                  }
                `}</style>
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 inline-flex items-center gap-2 rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
            >
              Let’s talk
              <FiArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-full p-2 bg-white/90 border border-slate-200 text-slate-700 shadow-md transition-transform duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            title={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <FiX
                className={`h-6 w-6 transition-transform duration-300 ${
                  menuOpen ? "rotate-0" : "rotate-0"
                }`}
              />
            ) : (
              <FiMenu
                className={`h-6 w-6 transition-transform duration-300 ${
                  menuOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-white/95 px-6 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/95 md:hidden">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-4 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/40"
              >
                Let’s talk
                <FiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        )}
      </nav>

      <section
        id="hero"
        className="relative overflow-hidden pt-32 pb-24 sm:pt-36 md:pt-40"
      >
        <div
          className="absolute left-32 top-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/40"
          aria-hidden="true"
        />
        <div
          className="absolute right-10 top-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/30"
          aria-hidden="true"
        />

        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-white/10 dark:text-slate-200">
                <span className="h-2 w-2 rounded-full bg-green-500" />
                Available for freelance & full-time roles
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                I design & build thoughtful web & mobile applications that feel
                effortless.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                I&apos;m Hasibul Haque Jisan, a full-stack engineer obsessed
                with experience quality. I partner with founders, design teams,
                and startups to ship reliable software—from elegant marketing
                sites to complex product ecosystems.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-2xl shadow-slate-900/30 transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-900"
                >
                  View recent work
                  <FiArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="mailto:mhhaque.tech@gmail.com"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-300/80 bg-white/80 px-6 py-3 text-base font-semibold text-slate-700 backdrop-blur transition hover:border-slate-400 hover:text-slate-900 dark:border-white/20 dark:bg-white/5 dark:text-white"
                >
                  mhhaque.tech@gmail.com
                </a>
              </div>
              <div className="mt-12 grid gap-6 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-indigo-100/60 backdrop-blur lg:grid-cols-3 dark:border-white/5 dark:bg-white/5 dark:shadow-none">
                {heroStats.map((stat) => (
                  <div key={stat.id}>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-4xl border border-white/60 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.15)] backdrop-blur dark:border-white/10 dark:bg-white/10 dark:shadow-[0_20px_60px_rgba(2,6,23,0.8)]">
                <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-slate-900/5 dark:border-white/10">
                  <Image
                    src="/profile.png"
                    alt="Portrait of Hasibul Haque Jisan"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 480px"
                    className="object-cover object-top"
                    style={{ objectPosition: "50% 10%" }}
                  />
                </div>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
                    <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-300">
                      Focus
                    </p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      Design systems & DX
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">
                      From pixel-perfect UI to maintainable component libraries.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 text-sm shadow-sm dark:border-white/10 dark:bg-white/5">
                    <p className="text-xs uppercase tracking-wide text-slate-400 dark:text-slate-300">
                      Current mission
                    </p>
                    <p className="mt-1 font-semibold text-slate-900 dark:text-white">
                      Teaching teams to move faster
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-300">
                      Workshops, audits, and embedded product pairs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-full mt-4 hidden rounded-2xl border border-white/70 bg-white/90 px-4 py-3 text-sm font-semibold shadow-lg shadow-indigo-500/20 backdrop-blur md:flex dark:border-white/10 dark:bg-indigo-500/10 dark:text-white z-10">
                Crafting detail-oriented experiences since 2017
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutSection />

      <ExperienceSection />

      <SkillsSection />

      <ProjectsSection />

      <ServicesSection />

      {/* Client-only ExperienceSection loaded dynamically to avoid SSR/CSR mismatch */}

      <section id="awards" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              Awards & Certifications
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
              Selected recognitions and certificates
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              A selection of certifications and awards that reflect recent
              training and achievements.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((a) => (
              <div
                key={a.id}
                className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 text-left shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                  {a.issuer}
                </p>
                <p className="mt-1 text-xs text-slate-400">{a.year}</p>
                {a.link && (
                  <a
                    href={a.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    View
                    <FiArrowRight className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="volunteering" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="text-2xl">🌱</span>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
                Volunteering & Top Management Experiences
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
              Community leadership & volunteer roles
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Selected volunteer roles and management-level contributions.
            </p>
          </div>

          <div className="mt-10 space-y-6">
            {volunteering.map((v) => (
              <div
                key={v.id}
                className="flex gap-4 items-start rounded-3xl border border-slate-200/70 bg-white/80 p-6 shadow-md hover:shadow-xl transition dark:border-white/10 dark:bg-white/5"
              >
                <div className="shrink-0">
                  <div className="h-14 w-14 rounded-full bg-linear-to-br from-indigo-500 to-cyan-400 flex items-center justify-center text-2xl shadow-lg">
                    <span role="img" aria-label={v.title}>
                      {v.emoji}
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white flex items-center gap-3">
                        {v.title}
                        {v.link ? (
                          <a
                            href={v.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm inline-flex items-center gap-2 rounded-full bg-slate-100 px-2 py-0.5 text-slate-600 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300"
                          >
                            {v.organization}
                            <FiArrowRight className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="text-sm inline-block rounded-full bg-slate-100 px-2 py-0.5 text-slate-600 dark:bg-white/10 dark:text-slate-300">
                            {v.organization}
                          </span>
                        )}
                      </h3>
                    </div>
                    <p className="text-sm text-slate-400">{v.period}</p>
                  </div>

                  <ul className="mt-4 list-disc pl-5 text-sm text-slate-600 dark:text-slate-300">
                    {v.details.map((d) => (
                      <li key={d} className="mt-1">
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="resume" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              Resume
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
              Download my resume
            </h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Want a PDF copy? Click the button below to download my resume.
            </p>
            <div className="mt-8">
              <a
                href="/Hasibul_Haque_Resume.pdf"
                download
                className="inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-600/30 transition hover:-translate-y-0.5 hover:bg-indigo-500"
                aria-label="Download resume PDF"
              >
                Download resume
                <FiArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative py-24">
        <div className="container mx-auto px-6">
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/80 p-10 text-center shadow-2xl shadow-indigo-100/80 backdrop-blur dark:border-white/10 dark:bg-slate-900/60 dark:shadow-none">
            <div
              className="absolute -left-8 -top-8 h-40 w-40 rounded-full bg-indigo-500/20 blur-3xl dark:bg-indigo-500/40"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-8 right-0 h-52 w-52 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/40"
              aria-hidden="true"
            />
            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-300">
                Contact
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
                Let’s build something meaningful together.
              </h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                I reply to every note. Send a quick brief, a product idea, or a
                link to your roadmap—I&apos;ll respond within 48 hours.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:mhhaque.tech@gmail.com"
                  className="inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-indigo-600/40 transition hover:-translate-y-0.5 hover:bg-indigo-500"
                >
                  <FiMail className="h-5 w-5" />
                  mhhaque.tech@gmail.com
                </a>
                <a
                  href="tel:+8801796206206"
                  aria-label="Call +88 017 9620 6206"
                  className="inline-flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white/80 px-8 py-4 text-lg font-semibold text-slate-700 shadow-sm transition hover:border-slate-400 hover:text-slate-900 dark:border-white/20 dark:bg-white/5 dark:text-white"
                >
                  Book a call
                  <FiArrowRight className="h-5 w-5" />
                </a>
              </div>
              <div className="mt-10 flex justify-center gap-6">
                {socialLinks.map(({ id, label, href, icon: Icon }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200/80 text-slate-600 transition hover:border-indigo-300 hover:text-indigo-600 dark:border-white/20 dark:text-white dark:hover:border-indigo-400 dark:hover:text-indigo-200"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/70 bg-white/80 py-8 text-center text-sm text-slate-500 dark:border-white/5 dark:bg-slate-950/80 dark:text-slate-400">
        <div className="container mx-auto px-6">
          <p>Designed & built by Mh Haque · © {new Date().getFullYear()}</p>
        </div>
      </footer>
    </main>
  );
}
