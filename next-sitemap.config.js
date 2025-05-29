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
};
