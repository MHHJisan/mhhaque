"use client";

type Principle = {
  title: string;
  description: string;
};

const principles: Principle[] = [
  {
    title: "Human-centered thinking",
    description:
      "Thoughtful defaults, clear flows, and measurable impact on business goals.",
  },
  {
    title: "A11y-first implementations",
    description:
      "Accessible interfaces designed to work for everyone from day one.",
  },
  {
    title: "Long-term maintainability",
    description:
      "Systemised components and patterns that scale with product growth.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75 duration-1000" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            About Me
          </span>

          <h2 className="mt-6 bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-indigo-400 sm:text-5xl">
            Crafting Digital Experiences That Inspire
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            I build intuitive, accessible web applications that combine elegant
            design with robust engineering. My approach balances technical
            excellence with user empathy, ensuring every interaction is
            meaningful and every line of code serves a purpose.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                {principle.title}
              </h3>
              <p className="mt-3 text-sm text-slate-500 dark:text-slate-300">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
