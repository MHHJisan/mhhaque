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

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  screenshots?: string[];
  githubUrl: string;
  liveUrl?: string;
  type: "web" | "mobile";
  appStoreUrl?: string;
  playStoreUrl?: string;
};

type Experience = {
  id: number;
  period: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
};

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

const services: Service[] = [
  {
    id: 1,
    title: "Product Engineering",
    description:
      "Plan, build, and launch performant web products that scale with your roadmap.",
    highlights: [
      "Full-stack Next.js development",
      "Design system implementation",
      "Web vitals & accessibility focus",
    ],
  },
  {
    id: 2,
    title: "Experience Design",
    description:
      "Translate complex requirements into elegant, human-centered interfaces.",
    highlights: [
      "Rapid prototyping",
      "Collaborative UX workshops",
      "Component-driven design",
    ],
  },
  {
    id: 3,
    title: "Technical Leadership",
    description:
      "Partner with founders and teams to ship faster while raising the quality bar.",
    highlights: [
      "Roadmap prioritisation",
      "Code reviews & mentoring",
      "Process automation",
    ],
  },
];

const skillCategories = [
  {
    title: "Core stack",
    skills: ["TypeScript", "React 19", "Next.js", "Node.js", "Express"],
  },
  {
    title: "Data & tooling",
    skills: ["MongoDB", "PostgreSQL", "Prisma", "REST & GraphQL APIs"],
  },
  {
    title: "Dev experience",
    skills: ["Tailwind CSS", "Storybook", "Git & CI/CD", "Docker", "AWS"],
  },
];

const projects: Project[] = [
  {
    id: 1,
    title: "Techraverse Learning Platform",
    description:
      "Modular learning platform with real-time classrooms, cohort analytics, and a custom CMS powering 30k+ monthly sessions.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
    image: "/projects/techra_lms.png",
    githubUrl: "https://github.com/MHHJisan/techra_lms",
    liveUrl: "https://learn.techraverse.com",
    type: "web",
  },
  {
    id: 2,
    title: "Techra Quiz Web",
    description:
      "Gamified quiz experience featuring adaptive question banks, instant scoring, and shareable summaries for each attempt.",
    tags: ["Next.js", "React", "Firebase", "Framer Motion"],
    image: "/projects/techra_quiz.png",
    githubUrl: "https://github.com/MHHJisan/techra_quiz",
    liveUrl: "https://techra-quiz-web.vercel.app",
    type: "web",
  },
  {
    id: 3,
    title: "CPF International",
    description:
      "High-conversion non-profit site with multilingual support, donation funnel, and event publishing workflow.",
    tags: ["Multilingual"],
    image: "/projects/cpf.png",
    githubUrl: "https://github.com/MHHJisan/cpfint_new",
    liveUrl: "https://www.cpfint.org",
    type: "web",
  },
  {
    id: 4,
    title: "Techraverse.com",
    description:
      "Content platform for engineering notes, MDX-powered articles, and tooling reviews with custom search.",
    tags: ["Next.js", "TypeScript", "MDX", "Contentful"],
    image: "/projects/techra_site.png",
    githubUrl: "https://github.com/MHHJisan/techraverse",
    liveUrl: "https://techraverse.com",
    type: "web",
  },
  // Add your mobile apps here with type: 'mobile'
  // Example:
  {
    id: 5,
    title: "Mobile App Example",
    description: "A sample mobile application",
    tags: ["React Native", "TypeScript", "Firebase"],
    image: "/projects/tasbeeh_tracker/SS_main_page.png",
    screenshots: [
      "/projects/tasbeeh_tracker/SS_main_page.png",
      "/projects/tasbeeh_tracker/SS_01.png",
      "/projects/tasbeeh_tracker/SS_02.png",
      "/projects/tasbeeh_tracker/SS_03.png",
      "/projects/tasbeeh_tracker/SS_04.png",
      "/projects/tasbeeh_tracker/SS_05.png",
      "/projects/tasbeeh_tracker/SS_06.png",
      "/projects/tasbeeh_tracker/SS_07.png",
      "/projects/tasbeeh_tracker/SS_08.png",
      "/projects/tasbeeh_tracker/SS_09.png",
      "/projects/tasbeeh_tracker/SS_10.png",
      "/projects/tasbeeh_tracker/SS_11.png",
      "/projects/tasbeeh_tracker/SS_12.png",
      "/projects/tasbeeh_tracker/SS_13.png",
      "/projects/tasbeeh_tracker/SS_14.png",
      "/projects/tasbeeh_tracker/SS_15.png",
      "/projects/tasbeeh_tracker/SS_16.png",
      "/projects/tasbeeh_tracker/SS_17.png",
      "/projects/tasbeeh_tracker/SS_18.png",
      "/projects/tasbeeh_tracker/SS_19.png",
    ],
    githubUrl: "#",
    type: "mobile",
    appStoreUrl: "#app-store-link", // Replace with actual App Store URL
    playStoreUrl: "#play-store-link", // Replace with actual Play Store URL
  },
];

const experiences: Experience[] = [
  {
    id: 1,
    period: "06/2022 — Present",
    company: "TechRA Learning Center",
    role: "Instructor, Web Development and Basic Programming and IELTS",
    description:
      "Co-founded and instructed at a skill development institution in Noakhali, BD, teaching Basic Programming in Java and Web Development with PHP & React.",
    achievements: [
      "Established curriculum and taught Basic Programming in Java to multiple cohorts",
      "Designed and delivered Web Development courses using PHP and React",
      "Taught IELTS preparation to students alongside technical subjects",
      "Built the institution from the ground up with tech enthusiast friends",
    ],
  },
  {
    id: 2,
    period: "2023 — Present",
    company: "Techraverse",
    role: "Lead Frontend Engineer",
    description:
      "Guiding the frontend guild, defining standards, and partnering directly with founders to launch new verticals.",
    achievements: [
      "Refactored the design system to support theming and dark mode",
      "Cut CLS issues by 68% through streaming & suspense-first layouts",
      "Mentored a team of 6 engineers across two timezones",
    ],
  },
  {
    id: 3,
    period: "2021 — 2023",
    company: "CPF International",
    role: "Full Stack Engineer",
    description:
      "Owned the digital fundraising stack end-to-end, from CRM integrations to performance budgets.",
    achievements: [
      "Scaled donation revenue 2.5× with a revamped checkout flow",
      "Built a custom content approval workflow with audit trails",
      "Established automated Lighthouse monitoring in CI",
    ],
  },
  {
    id: 4,
    period: "2024 — 2025",
    company: "HI-TECH SoftSys",
    role: "Software Engineer",
    description:
      "Developed an LMS system for web and mobile using Vue + Laravel for the web and Flutter for the mobile app (https://online-academy.islamicdigitallane.com/).",
    achievements: [
      "Built core LMS features for both web and mobile: courses, enrollments, and progress tracking",
      "Collaborated on cross-platform API design with Laravel back-end",
      "Delivered responsive Vue front-end components and Flutter mobile screens",
    ],
  },
  {
    id: 5,
    period: "Sep 2023 — Nov 2024",
    company: "Bioforge Health System LTD",
    role: "Software Engineer",
    description:
      "Developed and maintained a Hospital Management System (HMS) using Java Spring for the backend and AngularJS/ReactJS for the frontend. Integrated and configured Odoo accounting software with the HMS.",
    achievements: [
      "Implemented core HMS modules and integrations with Odoo",
      "Maintained and extended backend services in Java Spring",
      "Improved deployment and integration workflows",
    ],
  },
  {
    id: 6,
    period: "Feb 2024 — May 2024",
    company: "Octagon Learning (Bioforge)",
    role: "Software Engineer (Part-time) — ChatCls",
    description:
      "Developed a WhatsApp chatbot that delivers scheduled question sets to registered students using Node.js and Express.",
    achievements: [
      "Built a scheduling system to send subject-specific question sets",
      "Integrated with WhatsApp messaging for automated delivery",
      "Streamlined registration and message flows for student cohorts",
    ],
  },
  {
    id: 7,
    period: "May 2024 — Nov 2024",
    company: "Octagon Learning (Bioforge)",
    role: "Project Lead (Part-time) — QuestionpaperSplitter",
    description:
      "Led development of a script that ingests PDFs and auto-splits them into images where each image contains a single question, exporting results to a configured folder.",
    achievements: [
      "Designed a robust PDF-to-image pipeline for batch splitting",
      "Automated export and folder workflows for downstream processing",
      "Improved accuracy of question detection and split timing",
    ],
  },
  {
    id: 8,
    period: "Nov 2021 — May 2022",
    company: "ISZTECHS",
    role: "Web Developer",
    description:
      "Worked on PHP and Laravel-based web solutions for US-based clients, implementing core features and maintaining applications.",
    achievements: [
      "Delivered client-facing features in Laravel and core PHP",
      "Maintained legacy codebases and migrated features to Laravel",
      "Collaborated with remote teams to meet delivery deadlines",
    ],
  },
  {
    id: 9,
    period: "May 2019 — Apr 2020",
    company: "Sis InflextionPoint",
    role: "Jr. Software Developer",
    description:
      "Worked on iOS app development using Swift, contributing to app features and bug fixes.",
    achievements: [
      "Implemented UI components and view controllers in Swift",
      "Fixed bugs and improved app stability across iOS versions",
      "Collaborated with senior developers on feature design",
    ],
  },
  {
    id: 10,
    period: "Apr 2017 — Nov 2017",
    company: "Relativeagro Limited",
    role: "PHP Developer (Contractual, Part-time)",
    description:
      "Worked as a 3rd-year student on a web-based Livestock Management System using core PHP, and integrated an Account Management System.",
    achievements: [
      "Developed core modules for livestock management in PHP",
      "Integrated accounting features into the system",
      "Delivered features while balancing academic commitments",
    ],
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
  { href: "#skills", label: "Skills" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

// Add this before the Home component
type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  // If no screenshots are provided, use the main project image
  const slides = project.screenshots?.length
    ? project.screenshots
    : [project.image];

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-xl transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
      <div
        className="relative h-60 overflow-hidden cursor-pointer"
        onClick={() => openLightbox(0)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="pointer-proevents-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
          <span className="text-white font-medium text-lg">
            Click to view screenshots
          </span>
        </div>
      </div>

      {/* Rest of your ProjectCard component remains the same */}
      <div className="flex flex-1 flex-col p-6">
        {/* ... existing content ... */}

        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
          {project.liveUrl && (
            <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-300">
              Live Project
            </span>
          )}
        </div>
        <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/15 dark:text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-300"
            >
              Visit site
              <FiArrowRight className="h-4 w-4" />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-200"
          >
            View code
            <FiGithub className="h-4 w-4" />
          </a>
          {project.appStoreUrl && (
            <a
              href={project.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-200"
            >
              <FaApple className="h-6 w-6" />
              Get on iOS
            </a>
          )}
          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-200"
            >
              <FcTabletAndroid className="h-6 w-6" />
              Get on Android
            </a>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3"></div>
      </div>

      {/* Lightbox component */}
      {isOpen && (
        <Lightbox
          open={isOpen}
          close={closeLightbox}
          slides={slides.map((src) => ({ src }))}
          index={currentImageIndex}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true,
          }}
          on={{
            view: ({ index }) => setCurrentImageIndex(index),
          }}
        />
      )}
    </div>
  );
};

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
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.label}
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
                I design & build thoughtful web products that feel effortless.
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

      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
              Engineering calm, reliable interfaces for ambitious teams.
            </h2>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
              From marketing websites to multi-tenant applications, I obsess
              over the details that make software
              approachable—micro-interactions, motion, and systemised component
              workflows. I thrive in product squads where design, engineering,
              and business strategy overlap.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Human-centered thinking",
              "A11y-first implementations",
              "Long-term maintainability",
            ].map((principle) => (
              <div
                key={principle}
                className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
              >
                <span className="text-base font-semibold text-slate-900 dark:text-white">
                  {principle}
                </span>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
                  Thoughtful defaults, clear flows, and measurable impact on
                  business goals.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              Toolkit
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
              A pragmatic stack honed on production systems.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-lg shadow-slate-200/60 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none"
              >
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-300">
                  {category.title}
                </p>
                <ul className="mt-4 space-y-2 text-base font-medium text-slate-800 dark:text-slate-100">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/40"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 group-hover:scale-110 dark:bg-indigo-500/20 dark:text-indigo-200">
                  {service.id}
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-base text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-slate-500 dark:text-slate-300">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-slate-200/60 bg-white/80 py-20 dark:border-white/5 dark:bg-slate-950"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
              Selected Work
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
              Recent projects that moved the needle.
            </h2>
          </div>

          {/* Web Apps Section */}
          <div className="mt-16">
            <h3 className="mb-8 text-2xl font-semibold text-slate-900 dark:text-white">
              Web Applications
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {projects
                .filter((project) => project.type === "web")
                .map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
            </div>
          </div>

          {/* Mobile Apps Section */}
          <div className="mt-20">
            <h3 className="mb-8 text-2xl font-semibold text-slate-900 dark:text-white">
              Mobile Applications
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.filter((project) => project.type === "mobile").length >
              0 ? (
                projects
                  .filter((project) => project.type === "mobile")
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} />
                  ))
              ) : (
                <div className="col-span-2 py-12 text-center">
                  <p className="text-slate-500 dark:text-slate-400">
                    No mobile applications to display yet. Check back soon for
                    updates!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Project Card Component */}
      {/* {function ProjectCard({ project }: { project: Project }) {
        return (
          <div className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-xl transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
            <div className="relative h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 520px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-80" />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
                {project.liveUrl && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900/30 dark:text-green-300">
                    {project.type === "web" ? "Live Project" : "View App"}
                  </span>
                )}
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/15 dark:text-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-300"
                  >
                    {project.type === "web" ? "Visit site" : "View App"}
                    <FiArrowRight className="h-4 w-4" />
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-indigo-600 dark:text-slate-200"
                >
                  View code
                  <FiGithub className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        );
      }} */}

      {/* Client-only ExperienceSection loaded dynamically to avoid SSR/CSR mismatch */}
      <ExperienceSection experiences={experiences} />

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
