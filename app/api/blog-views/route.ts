import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";
import { cookies } from "next/headers";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
});

const VISITOR_COOKIE = "blog_visitor_id";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const postId = searchParams.get("id");

    if (!postId) {
      return NextResponse.json({ error: "Post ID required" }, { status: 400 });
    }

    //get the Redis Set containing unique visitors for this post
    const key = `blog-post-${postId}-readers`;

    //count the number of unique visitors in the Set
    const views = await redis.scard(key);

    return NextResponse.json({ views });
  } catch (error) {
    console.error("Error reading views:", error);
    return NextResponse.json(
      { error: "Failed to read views" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const { postId } = await request.json();

    if (!postId) {
      return NextResponse.json({ error: "Post ID required" }, { status: 400 });
    }

    //get the user's cookies
    const cookieStore = await cookies();

    //check whether this browser already has an anonymous visitor ID.
    let visitorId = cookieStore.get(VISITOR_COOKIE)?.value;

    //if this is a new browser, create a unique anonymous visitor ID.
    if (!visitorId) {
      visitorId = crypto.randomUUID();

      //store the visitor ID in a persistent HTTP-only cookie.
      cookieStore.set(VISITOR_COOKIE, visitorId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 365 * 5, //5 years
        path: "/",
      });
    }

    //Redis Set containing unique visitors for this particular post.
    const key = `blog-post-${postId}-readers`;

    //add visitor to the Set
    //SADD does nothing if this visitor already exist
    await redis.sadd(key, visitorId);

    //get the total number of unique visitors.
    const views = await redis.scard(key);

    return NextResponse.json({ views });
  } catch (error) {
    console.error("Error tracking blog views:", error);
    return NextResponse.json(
      { error: "Failed to track views" },
      { status: 500 },
    );
  }
}
