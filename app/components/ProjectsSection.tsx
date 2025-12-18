"use client";

import { useState } from "react";
import Image from "next/image";

import { FiArrowRight, FiGithub } from "react-icons/fi";
import { FaApple } from "react-icons/fa";
import { FcTabletAndroid } from "react-icons/fc";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

/* =======================
   Types
======================= */

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  type: "web" | "mobile";
  screenshots?: string[];
  appStoreUrl?: string;
  playStoreUrl?: string;
};

/* =======================
   Data
======================= */

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
      "Gamified quiz experience featuring adaptive question banks, instant scoring, and shareable summaries.",
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

  //   // Add your mobile apps here with type: 'mobile'
  //   // Example:
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

/* =======================
   Project Card
======================= */

function ProjectCard({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = project.screenshots?.length
    ? project.screenshots
    : [project.image];

  return (
    <div className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-white/5">
      <div
        className="relative h-60 cursor-pointer overflow-hidden"
        onClick={() => setOpen(true)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 transition group-hover:opacity-100" />
        <span className="absolute inset-0 flex items-center justify-center text-white opacity-0 transition group-hover:opacity-100">
          View screenshots
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
          {project.title}
        </h3>

        <p className="mt-3 flex-1 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border px-3 py-1 text-xs dark:border-white/20"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-2 font-semibold text-indigo-600"
            >
              Visit site <FiArrowRight />
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            className="inline-flex items-center gap-2 font-semibold"
          >
            Code <FiGithub />
          </a>

          {project.appStoreUrl && <FaApple className="h-6 w-6" />}
          {project.playStoreUrl && <FcTabletAndroid className="h-6 w-6" />}
        </div>
      </div>

      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          index={index}
          slides={slides.map((src) => ({ src }))}
          on={{ view: ({ index }) => setIndex(index) }}
        />
      )}
    </div>
  );
}

/* =======================
   Projects Section
======================= */

export default function ProjectsSection() {
  const webProjects = projects.filter((p) => p.type === "web");
  const mobileProjects = projects.filter((p) => p.type === "mobile");

  return (
    <section
      id="projects"
      className="border-y border-slate-200/60 bg-white/80 py-20 dark:border-white/5 dark:bg-slate-950"
    >
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse rounded-full bg-indigo-400 opacity-75 duration-1000"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
            </span>
            Portfolio Showcase
          </span>
          <h2 className="mt-6 bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-indigo-400 sm:text-5xl">
            Projects That Make an Impact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A collection of my recent work, showcasing innovative solutions and
            clean, efficient code.
          </p>
        </div>

        {/* Web */}
        <div className="mt-16">
          {/* Web Section Header */}
          <div className="mb-12 flex items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
            <h3 className="mx-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
              Web Applications
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
          </div>{" "}
          <div className="grid gap-8 md:grid-cols-2">
            {webProjects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="mt-20">
          {/* Mobile Section Header (similar structure) */}
          <div className="mb-12 flex items-center">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
            <h3 className="mx-4 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-2xl font-bold text-transparent">
              Mobile Applications
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent dark:via-slate-700"></div>
          </div>{" "}
          <div className="grid gap-8 md:grid-cols-2">
            {mobileProjects.length ? (
              mobileProjects.map((p) => <ProjectCard key={p.id} project={p} />)
            ) : (
              <p className="col-span-2 text-center text-slate-500">
                No mobile applications available yet.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
