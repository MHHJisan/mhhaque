"use client";

/* =======================
   Types
======================= */

type Service = {
  id: number;
  title: string;
  description: string;
  highlights: string[];
};

/* =======================
   Data
======================= */

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

/* =======================
   Services Section
======================= */

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-1.5 text-sm font-semibold text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            Services & Expertise
          </span>

          <h2 className="mt-6 bg-gradient-to-r from-slate-900 to-indigo-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-indigo-400 sm:text-5xl">
            Solutions That Drive Digital Transformation
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Leveraging cutting-edge technologies to build robust, scalable, and
            user-centric applications that solve real-world problems.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-xl transition hover:-translate-y-1 hover:border-indigo-200 hover:shadow-2xl dark:border-white/10 dark:bg-white/5 dark:hover:border-indigo-500/40"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-lg font-semibold text-indigo-600 transition group-hover:scale-110 dark:bg-indigo-500/20 dark:text-indigo-200">
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
  );
}
