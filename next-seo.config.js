// Default SEO configuration
const nextSEOConfig = {
  defaultTitle: 'নিউবর্ন বেবি কেয়ার - বাংলাদেশের মায়েদের জন্য শিশু যত্নের ব্লগ',
  titleTemplate: '%s | নিউবর্ন বেবি কেয়ার',
  description: 'বাংলাদেশের মায়েদের জন্য নবজাতক শিশুর যত্ন, স্বাস্থ্য এবং বিকাশ সম্পর্কে বিশেষজ্ঞদের পরামর্শ ও টিপস।',
  openGraph: {
    type: 'website',
    locale: 'bn_BD',
    url: 'https://newbornbabycare.bd/',
    siteName: 'নিউবর্ন বেবি কেয়ার',
    images: [
      {
        url: 'https://images.pexels.com/photos/3662478/pexels-photo-3662478.jpeg',
        width: 1200,
        height: 630,
        alt: 'নিউবর্ন বেবি কেয়ার',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'keywords',
      content: 'নবজাতক শিশু, শিশুর যত্ন, মায়ের যত্ন, শিশুর স্বাস্থ্য, বাংলাদেশ, নতুন মা, নবজাতকের গোসল, শিশুর খাদ্য',
    },
  ],
};

export default nextSEOConfig;