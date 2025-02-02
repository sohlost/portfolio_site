import { getBlogPosts } from "@/data/blog";
import { DATA } from "@/data/resume";

export async function GET() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${DATA.name}'s Blog</title>
        <description>Latest blog posts from ${DATA.name}</description>
        <link>${DATA.url}</link>
        <atom:link href="${DATA.url}/rss.xml" rel="self" type="application/rss+xml"/>
        ${sortedPosts
          .map(
            (post) => `
            <item>
              <title>${post.metadata.title}</title>
              <description>${post.metadata.summary}</description>
              <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
              <link>${DATA.url}/blog/${post.slug}</link>
              <guid isPermaLink="true">${DATA.url}/blog/${post.slug}</guid>
            </item>
          `
          )
          .join('')}
      </channel>
    </rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
} 