"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SearchIcon, FilterIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import BlogCard from '@/components/blog/BlogCard';
import blogPosts from "@/public/posts/blogPosts";
import categories from "@/public/categories/categories";




export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  
  
  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || post.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

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
                বাংলাদেশের মায়েদের জন্য নবজাতক শিশুর যত্ন ও স্বাস্থ্য সম্পর্কিত সেরা প্রবন্ধসমূহ
              </p>
              <div className="relative max-w-md mx-auto mt-6">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input 
                  placeholder="প্রবন্ধ খুঁজুন..." 
                  className="pl-10 py-6 border-gray-200 rounded-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Listing */}
        <section className="container mx-auto px-4 py-12">
          {/* Filtering Options */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <h2 className="text-2xl font-bold text-gray-900">সকল প্রবন্ধ</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="বিভাগ বাছাই করুন" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select defaultValue="recent">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="সাজানোর ধরণ" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">সাম্প্রতিক</SelectItem>
                  <SelectItem value="popular">জনপ্রিয়</SelectItem>
                  <SelectItem value="oldest">পুরাতন</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <BlogCard key={index} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-lg text-gray-600 mb-4">কোন প্রবন্ধ খুঁজে পাওয়া যায়নি।</p>
                <Button onClick={() => {setSearchQuery(''); setCategoryFilter('all');}}>
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
                <Button variant="outline" className="w-9 h-9 p-0 bg-pink-50 text-pink-600 border-pink-200">1</Button>
                <Button variant="outline" className="w-9 h-9 p-0">2</Button>
                <Button variant="outline" className="w-9 h-9 p-0">3</Button>
                <span>...</span>
                <Button variant="outline" className="w-9 h-9 p-0">8</Button>
                <Button variant="outline" className="w-9 h-9 p-0">
                  &gt;
                </Button>
              </div>
            </div>
          )}
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}