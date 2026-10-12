"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { DiscussionEmbed } from "disqus-react";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiGlobe,
  FiEye,
} from "react-icons/fi";

import { blogPosts } from "@/app/data/blogPosts";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [language, setLanguage] = useState<"en" | "bn">("en");
  const [viewCount, setViewCount] = useState(0);

  const postId = Number(id);

  // Find the post by ID
  const post = blogPosts.find((item) => item.id === postId);

  // IMPORTANT:
  // Hooks must run before any early return.
  useEffect(() => {
    // Do not track anything if the post doesn't exist.
    if (!post) {
      return;
    }

    const trackView = async () => {
      try {
        const response = await fetch("/api/blog-views", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            postId,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to track blog view");
        }

        const data = await response.json();

        setViewCount(data.views);
      } catch (error) {
        console.error("Error tracking views:", error);
      }
    };

    trackView();
  }, [post, postId]);

  // Now it is safe to return early.
  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>

          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Select English or Bengali content.
  const content = post[language];

  const disqusConfig = {
    url: `https://mhhaque.vercel.app/blog/${id}`,
    identifier: `blog-post-${id}`,
    title: content.title,
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-linear-to-br from-indigo-100 via-white to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
        <div className="bg-grid-slate absolute inset-0 mix-blend-multiply dark:opacity-40" />
      </div>

      {/* Back button and language toggle */}
      <div className="container mx-auto px-4 pt-8">
        <div className="flex items-center justify-between">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <button
            type="button"
            onClick={() =>
              setLanguage((current) => (current === "en" ? "bn" : "en"))
            }
            className="inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-slate-100 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <FiGlobe className="h-4 w-4" />
            {language === "en" ? "বাংলা" : "English"}
          </button>
        </div>
      </div>

      {/* Article */}
      <article className="container mx-auto max-w-4xl px-4 py-8">
        {/* Featured image */}
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm ${
              content.category === "Teaching" || content.category === "শিক্ষা"
                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300"
                : content.category === "Public Policy" ||
                    content.category === "পাবলিক পলিসি"
                  ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300"
                  : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            }`}
          >
            {content.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
          {content.title}
        </h1>

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-5 text-slate-500 dark:text-slate-400 mb-8">
          <span className="flex items-center gap-2">
            <FiCalendar />
            {post.date}
          </span>

          <span className="flex items-center gap-2">
            <FiClock />
            {content.readTime}
          </span>

          <span className="flex items-center gap-2">
            <FiEye />
            {viewCount} readers
          </span>
        </div>

        {/* Excerpt */}
        <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
          {content.excerpt}
        </p>

        {/* Article content */}
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-p:text-slate-700 prose-strong:text-slate-900 dark:prose-p:text-slate-300 dark:prose-strong:text-white"
          dangerouslySetInnerHTML={{
            __html: content.content,
          }}
        />

        {/* CTA for teaching post */}
        {postId === 2 && (
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 p-8 dark:from-green-900/20 dark:to-emerald-900/20">
            <h3 className="mb-4 text-2xl font-bold text-slate-900 dark:text-white">
              {language === "en"
                ? "I'd love to hear your thoughts on teaching and learning!"
                : "শিক্ষা ও শেখার বিষয়ে আপনার চিন্তাভাবনা শুনতে আমি আগ্রহী!"}
            </h3>
            <p className="mb-6 text-slate-600 dark:text-slate-300">
              {language === "en"
                ? "What's your experience with learning skills vs. building learning capacity? Share your thoughts in the comments."
                : "দক্ষতা শেখা এবং শেখার ক্ষমতা গড়ার বিষয়ে আপনার অভিজ্ঞতা কী? মন্তব্যে আপনার চিন্তাভাবনা শেয়ার করুন।"}
            </p>
            <a
              href="https://www.linkedin.com/in/mhhaquejisan/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              {language === "en"
                ? "Connect on LinkedIn"
                : "লিংকডইনে যোগাযোগ করুন"}
            </a>
          </div>
        )}

        {/* Disqus */}
        <div className="mt-12">
          <DiscussionEmbed
            shortname="mhhaque-github-io"
            config={disqusConfig}
          />
        </div>
      </article>
    </main>
  );
}
