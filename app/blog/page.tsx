"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiGlobe,
  FiEye,
} from "react-icons/fi";

const translations = {
  en: {
    blog: "Blog",
    title: "Thoughts & Insights",
    description:
      "Sharing my experiences, learnings, and perspectives on software development, technology, and building great products.",
    readMore: "Read more",
    comingSoon: "More articles coming soon...",
    backToHome: "Back to Home",
    react: "React",
    typescript: "TypeScript",
    backend: "Backend",
    publicPolicy: "Public Policy",
    featured: "Featured",
    view: "view",
    views: "views",
  },
  bn: {
    blog: "ব্লগ",
    title: "চিন্তা ও দৃষ্টিভঙ্গি",
    description:
      "সফটওয়্যার ডেভেলপমেন্ট, প্রযুক্তি এবং দুর্দান্ত পণ্য তৈরির উপর আমার অভিজ্ঞতা, শেখা এবং দৃষ্টিভঙ্গি শেয়ার করা।",
    readMore: "আরও পড়ুন",
    comingSoon: "আরও নিবন্ধ শীঘ্রই আসছে...",
    backToHome: "হোম পেজে ফিরুন",
    react: "React",
    typescript: "TypeScript",
    backend: "ব্যাকএন্ড",
    publicPolicy: "পাবলিক পলিসি",
    featured: "বৈশিষ্ট্যযুক্ত",
    view: "বার দেখা হয়েছে",
    views: "বার দেখা হয়েছে",
  },
};

const blogPosts = {
  en: [
    {
      id: 4,
      title: "Why Do Government Services Feel So Slow?",
      excerpt:
        "Is job security creating an incentive problem in Bangladesh's public sector? Exploring the paradox of government employment and organizational performance.",
      date: "2024-09-26",
      readTime: "12 min read",
      category: "Public Policy",
      featured: true,
      image: "/blog/blog-government.png",
    },
    {
      id: 1,
      title: "Getting Started with Next.js 14",
      excerpt:
        "A comprehensive guide to building modern web applications with Next.js 14 and the App Router.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
    },
    {
      id: 2,
      title: "TypeScript Best Practices for 2024",
      excerpt:
        "Learn the essential TypeScript patterns and practices that will improve your code quality.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "TypeScript",
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js",
      excerpt:
        "Explore architectural patterns and best practices for creating production-ready Node.js APIs.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Backend",
    },
  ],
  bn: [
    {
      id: 4,
      title: "সরকারি সেবাগুলো কেন এত ধীর মনে হয়?",
      excerpt:
        "বাংলাদেশের পাবলিক সেক্টরে চাকরির নিরাপত্তা কি একটি প্রণোদনা সমস্যা তৈরি করছে? সরকারি কর্মসংস্থান এবং সাংগঠনিক কর্মক্ষমতার বিষয়ে অন্বেষণ।",
      date: "2024-09-26",
      readTime: "১২ মিনিটের পাঠ",
      category: "পাবলিক পলিসি",
      featured: true,
      image: "/blog/blog-government.png",
    },
    {
      id: 1,
      title: "Next.js 14 দিয়ে শুরু করা",
      excerpt:
        "Next.js 14 এবং App Router দিয়ে আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির একটি বিস্তারিত গাইড।",
      date: "2024-01-15",
      readTime: "৫ মিনিটের পাঠ",
      category: "React",
    },
    {
      id: 2,
      title: "২০২৪ এর জন্য TypeScript সেরা অনুশীলন",
      excerpt:
        "আপনার কোডের গুণমান উন্নত করতে প্রয়োজনীয় TypeScript প্যাটার্ন এবং অনুশীলনগুলি শিখুন।",
      date: "2024-01-10",
      readTime: "৮ মিনিটের পাঠ",
      category: "TypeScript",
    },
    {
      id: 3,
      title: "Node.js দিয়ে স্কেলেবল API তৈরি করা",
      excerpt:
        "প্রোডাকশন-রেডি Node.js API তৈরির জন্য আর্কিটেকচারাল প্যাটার্ন এবং সেরা অনুশীলনগুলি অন্বেষণ করুন।",
      date: "2024-01-05",
      readTime: "৬ মিনিটের পাঠ",
      category: "ব্যাকএন্ড",
    },
  ],
};

export default function BlogPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  const t = translations[language];
  const posts = blogPosts[language];

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  useEffect(() => {
    // Load view counts from localStorage
    try {
      const viewCounts = JSON.parse(
        localStorage.getItem("blogViewCounts") || "{}",
      );
      setViewCounts(viewCounts);
    } catch (error) {
      console.error("Error loading view counts:", error);
      setViewCounts({});
    }
  }, []);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-linear-to-br from-indigo-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="bg-grid-slate absolute inset-0 mix-blend-multiply dark:opacity-40" />
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <FiArrowLeft className="h-4 w-4" />
            {t.backToHome}
          </Link>

          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <FiGlobe className="h-4 w-4" />
            {language === "en" ? "বাংলা" : "English"}
          </button>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600 dark:text-indigo-400">
            {t.blog}
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 sm:text-5xl dark:text-white">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {t.description}
          </p>
        </div>

        <div className="mt-16">
          {/* Featured Post */}
          {posts.find((post) => post.featured) && (
            <article className="mb-12 rounded-3xl border border-slate-200/70 bg-white/80 overflow-hidden shadow-lg backdrop-blur transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src="/blog/blog-government.png"
                  alt="Government Services & Incentives"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-bold text-white">
                    {t.featured}
                  </span>
                </div>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span className="inline-flex items-center gap-1">
                    <FiCalendar className="h-4 w-4" />
                    {new Date(
                      posts.find((post) => post.featured)!.date,
                    ).toLocaleDateString(
                      language === "en" ? "en-US" : "bn-BD",
                      {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      },
                    )}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FiClock className="h-4 w-4" />
                    {posts.find((post) => post.featured)!.readTime}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <FiEye className="h-4 w-4" />
                    {viewCounts[posts.find((post) => post.featured)!.id] ||
                      0}{" "}
                    {(viewCounts[posts.find((post) => post.featured)!.id] ||
                      0) === 1
                      ? t.view
                      : t.views}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400 mb-4">
                  {posts.find((post) => post.featured)!.title}
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                  {posts.find((post) => post.featured)!.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {posts.find((post) => post.featured)!.category}
                  </span>
                  <Link
                    href={`/blog/${posts.find((post) => post.featured)!.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {t.readMore}
                    <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Regular Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts
              .filter((post) => !post.featured)
              .map((post) => (
                <article
                  key={post.id}
                  className="group rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border-white/10 dark:bg-white/5"
                >
                  <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <FiCalendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString(
                        language === "en" ? "en-US" : "bn-BD",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        },
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiClock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <FiEye className="h-4 w-4" />
                      {viewCounts[post.id] || 0}{" "}
                      {(viewCounts[post.id] || 0) === 1 ? t.view : t.views}
                    </span>
                  </div>

                  <h2 className="mt-4 text-xl font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                    {post.title}
                  </h2>

                  <p className="mt-3 text-slate-600 dark:text-slate-300">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                      {post.category}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      {t.readMore}
                      <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 dark:text-slate-300">{t.comingSoon}</p>
        </div>
      </div>
    </main>
  );
}
