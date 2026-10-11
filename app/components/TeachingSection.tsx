"use client";

import { useState } from "react";
import Image from "next/image";
import { FiBook, FiUsers, FiCalendar, FiChevronDown, FiChevronUp } from "react-icons/fi";

type Course = {
  id: number;
  title: string;
  institution: string;
  period: string;
  description: string;
  students: number;
  curriculum: string[];
  images: string[];
};

const courses: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    institution: "Dhaka University",
    period: "Spring 2024",
    description: "Comprehensive introduction to modern web development covering HTML, CSS, JavaScript, and responsive design principles.",
    students: 45,
    curriculum: [
      "HTML5 Semantic Structure",
      "CSS3 Layouts & Animations",
      "JavaScript ES6+ Fundamentals",
      "Responsive Web Design",
      "Git & Version Control",
      "Project-based Learning",
    ],
    images: ["/teaching/web-class-1.jpg", "/teaching/web-class-2.jpg"],
  },
  {
    id: 2,
    title: "React & Modern Frontend",
    institution: "BUET",
    period: "Fall 2023",
    description: "Advanced frontend development course focusing on React ecosystem, state management, and modern JavaScript frameworks.",
    students: 38,
    curriculum: [
      "React Fundamentals & Hooks",
      "State Management (Redux, Context)",
      "TypeScript Integration",
      "Component Architecture",
      "Performance Optimization",
      "Testing & Debugging",
    ],
    images: ["/teaching/react-class-1.jpg", "/teaching/react-class-2.jpg"],
  },
  {
    id: 3,
    title: "Database Design & SQL",
    institution: "United International University",
    period: "Summer 2023",
    description: "Practical database design course covering relational databases, SQL optimization, and modern database technologies.",
    students: 52,
    curriculum: [
      "Database Normalization",
      "Advanced SQL Queries",
      "Indexing & Performance",
      "NoSQL Databases",
      "Database Security",
      "Real-world Case Studies",
    ],
    images: ["/teaching/db-class-1.jpg", "/teaching/db-class-2.jpg"],
  },
];

export default function TeachingSection() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string>("");

  const toggleCurriculum = (courseId: number) => {
    setExpandedCourse(expandedCourse === courseId ? null : courseId);
  };

  const openLightbox = (imageSrc: string) => {
    setLightboxImage(imageSrc);
    setLightboxOpen(true);
  };

  return (
    <section id="teaching" className="py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75 duration-1000" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            Teaching Journey
          </span>

          <h2 className="mt-6 bg-gradient-to-r from-slate-900 to-green-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent dark:from-white dark:to-green-400 sm:text-5xl">
            Sharing Knowledge & Inspiring Future Developers
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Teaching has been a cornerstone of my professional journey. I've had the privilege
            of mentoring students, designing curricula, and helping shape the next generation
            of developers through hands-on, practical learning experiences.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group rounded-2xl border border-slate-200/70 bg-white/80 overflow-hidden shadow-sm backdrop-blur transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {course.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-3">
                      {course.institution}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <span className="inline-flex items-center gap-1">
                        <FiCalendar className="h-3 w-3" />
                        {course.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <FiUsers className="h-3 w-3" />
                        {course.students} students
                      </span>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                    <FiBook className="h-5 w-5 text-white" />
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                  {course.description}
                </p>

                <button
                  onClick={() => toggleCurriculum(course.id)}
                  className="w-full flex items-center justify-between rounded-xl border border-slate-200/70 bg-slate-50/50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:bg-slate-800/50 dark:text-slate-200 dark:hover:bg-slate-700/50"
                >
                  <span>View Curriculum</span>
                  {expandedCourse === course.id ? (
                    <FiChevronUp className="h-4 w-4" />
                  ) : (
                    <FiChevronDown className="h-4 w-4" />
                  )}
                </button>

                {expandedCourse === course.id && (
                  <div className="mt-4 border-t border-slate-200/70 pt-4 dark:border-white/10">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Course Curriculum:
                    </h4>
                    <ul className="space-y-2">
                      {course.curriculum.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {course.images.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-slate-200/70 dark:border-white/10">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                      Classroom Gallery:
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {course.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative aspect-video rounded-lg overflow-hidden bg-slate-200 dark:bg-slate-800 cursor-pointer hover:opacity-80 transition"
                          onClick={() => openLightbox(image)}
                        >
                          <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500">
                            <span className="text-xs">Image {index + 1}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {lightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                onClick={() => setLightboxOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-slate-300 transition"
              >
                <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900">
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <p className="text-center">Classroom Image</p>
                  <p className="text-sm text-slate-400 mt-2">Add your images to: {lightboxImage}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
