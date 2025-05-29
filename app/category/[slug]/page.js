"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import React from "react";
import categories from "@/public/categories/categories";
import blogPosts from "@/public/posts/blogPosts";
import { usePathname, use, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import BlogCard from "@/components/blog/BlogCard";

function page() {
    const router = useRouter()
  const pathname = usePathname();
  const slug = decodeURIComponent(pathname.split("/").pop());
  console.log(slug);
  const filteredPosts = blogPosts.filter((post) => post.category == slug);
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Banner */}
        <section className="w-full bg-gradient-to-r from-pink-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                নিউবর্ন বেবি কেয়ার ব্লগ
              </h1>
              <p className="text-lg text-gray-600">
                বাংলাদেশের মায়েদের জন্য নবজাতক শিশুর যত্ন ও স্বাস্থ্য সম্পর্কিত
                সেরা প্রবন্ধসমূহ
              </p>
            </div>
          </div>
        </section>

        {/* Blog Listing */}
        <section className="container mx-auto px-4 py-12">
          {/* Filtering Options */}

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-600 mb-4">
                  কোন প্রবন্ধ খুঁজে পাওয়া যায়নি।
                </p>
                <Button
                  onClick={() => {
                    router.push('/')
                  }}
                >
                  সকল ফিল্টার পরিষ্কার করুন
                </Button>
              </div>
            )}
          </div>

          {/* Pagination */}
          {filteredPosts.length > 0 && (
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" className="w-9 h-9 p-0" disabled>
                  &lt;
                </Button>
                <Button
                  variant="outline"
                  className="w-9 h-9 p-0 bg-pink-50 text-pink-600 border-pink-200"
                >
                  1
                </Button>
                <Button variant="outline" className="w-9 h-9 p-0">
                  2
                </Button>
                <Button variant="outline" className="w-9 h-9 p-0">
                  3
                </Button>
                <span>...</span>
                <Button variant="outline" className="w-9 h-9 p-0">
                  8
                </Button>
                <Button variant="outline" className="w-9 h-9 p-0">
                  &gt;
                </Button>
              </div>
            </div>
          )}
        </section>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

export default page;
