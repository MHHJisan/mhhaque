"use client";

import React from "react";
// No external icons/images required here

type Experience = {
  id: number;
  period: string;
  company: string;
  role: string;
  description: string;
  achievements: string[];
};

function parseStartYear(period: string): number {
  const m = period.match(/(19|20)\d{2}/);
  return m ? parseInt(m[0], 10) : 0;
}
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

export default function ExperienceSection() {
  // Group experiences by start year (descending)
  const grouped = experiences
    .slice()
    .sort((a, b) => parseStartYear(b.period) - parseStartYear(a.period))
    .reduce<Record<number, Experience[]>>((acc, exp) => {
      const year = parseStartYear(exp.period) || 0;
      acc[year] = acc[year] || [];
      acc[year].push(exp);
      return acc;
    }, {});

  const years = Object.keys(grouped)
    .map((y) => parseInt(y, 10))
    .sort((a, b) => b - a);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75 duration-1000"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Professional Journey
          </span>
          <h2 className="mt-6 bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-indigo-400 sm:text-5xl">
            Building Digital Experiences That Matter
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Crafting high-quality software solutions with global teams to solve
            complex challenges.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {years.map((year) => (
            <div key={year}>
              <h3 className="mb-4 text-xl font-semibold text-slate-700 dark:text-slate-300">
                {year}
              </h3>
              <div className="space-y-6">
                {grouped[year].map((experience) => (
                  <div
                    key={experience.id}
                    className="rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-lg shadow-slate-200/50 backdrop-blur dark:border-white/10 dark:bg-white/5 dark:shadow-none"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
                          {experience.period}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
                          {experience.role}
                        </h3>
                        <p className="text-base text-slate-500 dark:text-slate-300">
                          {experience.company}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
                      {experience.description}
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-slate-500 dark:text-slate-300">
                      {experience.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-500" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
