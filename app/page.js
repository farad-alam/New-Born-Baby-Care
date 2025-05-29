"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart, Share2, MessageCircle, ArrowRight } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import FeaturedPost from '@/components/blog/FeaturedPost';
import BlogCard from '@/components/blog/BlogCard';

export default function Home() {
  const [email, setEmail] = useState('');
  
  const featuredPost = {
    slug: 'how-to-bathe-newborn',
    title: 'নবজাতককে প্রথমবারের মতো কিভাবে গোসল করাবেন?',
    excerpt: 'নবজাতক শিশুকে প্রথমবারের মত গোসল করানো নতুন মায়েদের জন্য একটি চ্যালেঞ্জ হতে পারে। এই নির্দেশিকা আপনাকে সহজ ধাপে ধাপে সাহায্য করবে।',
    image: 'https://images.pexels.com/photos/6823609/pexels-photo-6823609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 20, 2025',
    readTime: '8 min read',
    author: 'ডাঃ নাজনীন আক্তার',
    authorImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  };
  
  const recentPosts = [
    {
      slug: 'newborn-skin-care',
      title: 'সদ্যোজাত শিশুর ত্বকের যত্নে ঘরোয়া উপায়',
      excerpt: 'আপনার সদ্যোজাত শিশুর ত্বক অত্যন্ত সংবেদনশীল। জেনে নিন কিভাবে ঘরোয়া উপায়ে আপনি শিশুর ত্বকের যত্ন নিতে পারেন।',
      image: 'https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 15, 2025',
      readTime: '6 min read',
      category: 'ত্বকের যত্ন'
    },
    {
      slug: 'body-temperature-control',
      title: 'নবজাতকের শরীরের তাপমাত্রা নিয়ন্ত্রণে রাখার উপায়',
      excerpt: 'নবজাতকের শরীরের তাপমাত্রা সঠিকভাবে নিয়ন্ত্রণ করা অত্যন্ত গুরুত্বপূর্ণ। জেনে নিন কিভাবে আপনি আপনার শিশুর তাপমাত্রা ঠিক রাখবেন।',
      image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 12, 2025',
      readTime: '5 min read',
      category: 'শিশুর স্বাস্থ্য'
    },
    {
      slug: 'holding-baby-techniques',
      title: 'শিশুকে কোলে নেওয়ার সঠিক কৌশল',
      excerpt: 'নবজাতক শিশুকে কোলে নেওয়ার সময় সঠিক কৌশল জানা খুব জরুরি। এই প্রবন্ধে জানুন কিভাবে আপনার শিশুকে নিরাপদে কোলে নিবেন।',
      image: 'https://images.pexels.com/photos/3662478/pexels-photo-3662478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      date: 'April 10, 2025',
      readTime: '7 min read',
      category: 'শিশুর যত্ন'
    }
  ];

  const categories = [
    { name: 'শিশুর যত্ন', count: 12 },
    { name: 'শিশুর স্বাস্থ্য', count: 8 },
    { name: 'ত্বকের যত্ন', count: 5 },
    { name: 'শিশুর খাদ্য', count: 7 },
    { name: 'মায়ের যত্ন', count: 6 }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-pink-50 to-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-pink-700">
                  আপনার নবজাতক শিশুর যত্নের সেরা পরামর্শ
                </h1>
                <p className="text-lg md:text-xl text-gray-600">
                  বাংলাদেশের মায়েদের জন্য নবজাতকের যত্নে বিশেষজ্ঞদের পরামর্শ ও
                  টিপস।
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="bg-pink-600 hover:bg-pink-700">
                    প্রবন্ধ দেখুন
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-pink-200 text-pink-700 hover:bg-pink-50"
                  >
                    আমাদের সম্পর্কে
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative w-full max-w-md h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="মা ও শিশু"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Post Section */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              আজকের সেরা প্রবন্ধ
            </h2>
            <Link
              href="/blog"
              className="text-pink-600 hover:text-pink-700 flex items-center"
            >
              সব প্রবন্ধ দেখুন <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedPost post={featuredPost} />
        </section>

        {/* Recent Posts Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              সাম্প্রতিক প্রবন্ধ
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild variant="outline" className="rounded-full px-8">
                <Link href="/blog">আরও প্রবন্ধ দেখুন</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            বিভাগসমূহ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${encodeURIComponent(category.name)}`}
                className="bg-white border border-gray-100 hover:border-pink-200 hover:bg-pink-50 transition-colors rounded-lg p-4 text-center shadow-sm"
              >
                <h3 className="font-medium text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-500">
                  {category.count} প্রবন্ধ
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}