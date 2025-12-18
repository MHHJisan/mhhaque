"use client";

/* =======================
   Types
======================= */

type SkillCategory = {
  title: string;
  skills: string[];
};

/* =======================
   Data
======================= */

const skillCategories: SkillCategory[] = [
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

/* =======================
   Skills Section
======================= */

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75 duration-1000" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            Technical Arsenal
          </span>

          <h2 className="mt-6 bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-indigo-400 sm:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            A carefully curated set of tools and technologies that power modern,
            scalable, and efficient solutions.
          </p>
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
  );
}
