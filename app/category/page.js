"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import Link from "next/link";
import React from "react";
import categories from "@/public/categories/categories";


// const categories = [
//   { name: "সকল", value: "all" },
//   { name: "শিশুর যত্ন", value: "baby-care" },
//   { name: "ত্বকের যত্ন", value: "skin-care" },
//   { name: "শিশুর স্বাস্থ্য", value: "baby-helth" },
//   { name: "শিশুর খাদ্য", value: "baby-food" },
//   { name: "শিশুর প্রস্তুতি", value: "baby-preparation" },
// ];

function page() {
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

        {/* display Categories */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            ক্যাটেগরিসমূহ
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/category/${encodeURIComponent(category.value)}`}
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

        <Newsletter />
        <Footer />
      </main>
    </>
  );
}

export default page;
