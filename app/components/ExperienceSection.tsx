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

export default function ExperienceSection({
  experiences,
}: {
  experiences: Experience[];
}) {
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
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            Experience
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-white">
            Building high-quality software with teams across the globe.
          </h2>
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
