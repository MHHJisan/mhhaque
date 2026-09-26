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
    <main className="min-h-screen">
      {/* Back button */}
      <div className="container mx-auto px-4 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900"
        >
          <FiArrowLeft />
          Back to Blog
        </Link>
      </div>

      {/* Article */}
      <article className="container mx-auto max-w-4xl px-4 py-8">
        {/* Featured image */}
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
          <Image
            src={post.image}
            alt={content.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Category */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm">
            {content.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">{content.title}</h1>

        {/* Meta information */}
        <div className="flex flex-wrap items-center gap-5 text-gray-500 mb-8">
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

          <button
            type="button"
            onClick={() =>
              setLanguage((current) => (current === "en" ? "bn" : "en"))
            }
            className="flex items-center gap-2"
          >
            <FiGlobe />
            {language === "en" ? "বাংলা" : "English"}
          </button>
        </div>

        {/* Excerpt */}
        <p className="text-xl text-gray-600 mb-8">{content.excerpt}</p>

        {/* Article content */}
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{
            __html: content.content,
          }}
        />

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
