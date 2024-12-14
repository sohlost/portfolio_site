import { MetadataRoute } from "next";
import { getBlogPosts } from "@/data/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://prasen.dev";

  // Get all blog posts
  const posts = await getBlogPosts();
  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const routes = [
    {
      route: '/',
      changeFreq: 'weekly' as const,
      priority: 1.0,
    },
    {
      route: '/blog',
      changeFreq: 'weekly' as const,
      priority: 0.8,
    },
    {
      route: '/videos',
      changeFreq: 'weekly' as const,
      priority: 0.8,
    },
    {
      route: '/gadgets',
      changeFreq: 'monthly' as const,
      priority: 0.7,
    },
  ].map(({ route, changeFreq, priority }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority: priority,
  }));

  return [...routes, ...blogUrls];
}
