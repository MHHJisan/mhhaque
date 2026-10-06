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

import { blogPosts } from "../data/blogPosts.new";

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
    yourVisits: "Total readers",
    visits: "readers",
  },
  bn: {
    blog: "ব্লগ",
    title: "চিন্তা ও দৃষ্টিভঙ্গি",
    description:
      "সফটওয়্যার ডেভেলপমেন্ট, প্রয়ক্তি এবং দুর্দান্ত পণ্য তৈরির উপর আমার অভিজ্ঞতা, শেখা এবং দৃষ্টিভঙ্গি শেয়ার করা।",
    readMore: "আরও পড়ুন",
    comingSoon: "আরও নিবন্ধ শীঘ্রই আসছে...",
    backToHome: "হোম পেজে ফিরুন",
    react: "React",
    typescript: "TypeScript",
    backend: "ব্যাকএন্ড",
    publicPolicy: "পাবলিক পলিসি",
    featured: "বৈশিষ্ট্যযুক্ত",
    yourVisits: "মোট পাঠক",
    visits: "জন পড়েছেন",
  },
};

export default function BlogPage() {
  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  const t = translations[language];
  const posts = blogPosts.map((post) => ({
    id: post.id,
    title: post[language].title,
    excerpt: post[language].excerpt,
    date: post[language].date,
    readTime: post[language].readTime,
    category: post[language].category,
    featured: post.featured ?? false,
    image: post.image,
  }));

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = posts.filter((post) => !post.featured);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"));
  };

  // Load unique reader counts from the API
  useEffect(() => {
    const loadViewCounts = async () => {
      try {
        const results = await Promise.all(
          posts.map(async (post) => {
            const response = await fetch(`/api/blog-views?id=${post.id}`, {
              cache: "no-store",
            });

            if (!response.ok) {
              throw new Error(`Failed to load views for post ${post.id}`);
            }

            const data = await response.json();

            return {
              id: post.id,
              views: data.views,
            };
          }),
        );

        const counts: Record<number, number> = {};

        results.forEach((result) => {
          counts[result.id] = result.views;
        });

        setViewCounts(counts);
      } catch (error) {
        console.error("Error loading blog view counts:", error);
      }
    };

    loadViewCounts();
  }, [language]);

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
          {featuredPost && (
            <article className="mb-12 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-white/5">
              <div className="relative h-64 w-full md:h-80">
                <Image
                  src={
                    posts.find((post) => post.featured)?.image ||
                    "/blog/default-blog.png"
                  }
                  alt={
                    posts.find((post) => post.featured)?.title ||
                    "Featured blog post"
                  }
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    {t.featured}
                  </span>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-4 flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1">
                    <FiCalendar className="h-4 w-4" />

                    {new Date(featuredPost.date).toLocaleDateString(
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

                    {featuredPost.readTime}
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <FiEye className="h-4 w-4" />
                    {t.yourVisits}: {viewCounts[featuredPost.id] || 0}{" "}
                    {t.visits}
                  </span>
                </div>

                <h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">
                  {featuredPost.title}
                </h2>

                <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300">
                    {featuredPost.category}
                  </span>

                  <Link
                    href={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    {t.readMore}

                    <FiArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          )}

          {/* Regular Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/5"
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
                    {viewCounts[post.id] || 0} {t.visits}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">
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

                    <FiArrowRight className="h-4 w-4" />
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
