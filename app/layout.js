import './globals.css';
import { Metadata } from 'next';
import { Toaster } from "@/components/ui/toaster";
import localFont from 'next/font/local';

// Define local Bengali font
const bangla = localFont({
  src: [
    {
      path: "../public/fonts/HindSiliguri-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/HindSiliguri-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/HindSiliguri-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-bangla",
});

export const metadata = {
  title: "নিউবর্ন বেবি কেয়ার - বাংলাদেশের মায়েদের জন্য শিশু যত্নের ব্লগ",
  description:
    "বাংলাদেশের মায়েদের জন্য নবজাতক শিশুর যত্ন, স্বাস্থ্য এবং বিকাশ সম্পর্কে বিশেষজ্ঞদের পরামর্শ ও টিপস।",
  keywords:
    "নবজাতক শিশু, শিশুর যত্ন, মায়ের যত্ন, শিশুর স্বাস্থ্য, বাংলাদেশ, নতুন মা",
  openGraph: {
    title: "নিউবর্ন বেবি কেয়ার - বাংলাদেশের মায়েদের জন্য শিশু যত্নের ব্লগ",
    description:
      "বাংলাদেশের মায়েদের জন্য নবজাতক শিশুর যত্ন, স্বাস্থ্য এবং বিকাশ সম্পর্কে বিশেষজ্ঞদের পরামর্শ ও টিপস।",
    url: "https://new-born-baby-care.vercel.app",
    siteName: "নিউবর্ন বেবি কেয়ার",
    images: [
      {
        url: "https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress",
        width: 1200,
        height: 630,
        alt: "নিউবর্ন বেবি কেয়ার",
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <meta
        name="google-site-verification"
        content="ST1Hhm9DearRT78yeK7x1Qr3HHzcw5iUNYSGUguuMGk"
      />
      <body className={`${bangla.variable} font-sans`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}