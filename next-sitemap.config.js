import blogPost from '@/public/posts/blogPosts'

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://new-born-baby-care.vercel.app",
  generateRobotsTxt: true,
  transform: async (config, path) => {
    return {
      loc: path, // generated url
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.8,
    };
  },
  additionalPaths: async (config) => {
    // 🔥 Fetch dynamic routes (e.g., blog posts)
    // const res = await fetch("https://your-api.com/api/posts"); // Replace with your API endpoint
    // const posts = await res.json(); // Must return array like [{ slug: 'baby-care' }, ...]



    return blogPost.map((post) => {
      return {
        loc: `${config.siteUrl}/blog/${post.slug}`,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: new Date().toISOString(),
      };
    });
  },
};
