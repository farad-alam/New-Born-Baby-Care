"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { 
  Calendar, 
  Clock, 
  Share2, 
  Heart, 
  MessageCircle, 
  BookmarkPlus,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Badge
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';
import BlogCard from '@/components/blog/BlogCard';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';

// This would be replaced with actual data from a CMS
const blogPosts = {
  'how-to-bathe-newborn': {
    title: 'নবজাতককে প্রথমবারের মতো কিভাবে গোসল করাবেন?',
    excerpt: 'নবজাতক শিশুকে প্রথমবারের মত গোসল করানো নতুন মায়েদের জন্য একটি চ্যালেঞ্জ হতে পারে। এই নির্দেশিকা আপনাকে সহজ ধাপে ধাপে সাহায্য করবে।',
    image: 'https://images.pexels.com/photos/6823609/pexels-photo-6823609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 20, 2025',
    readTime: '8 min read',
    author: 'ডাঃ নাজনীন আক্তার',
    authorImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    authorBio: 'ডাঃ নাজনীন আক্তার একজন শিশুরোগ বিশেষজ্ঞ, যিনি বাংলাদেশের বিভিন্ন হাসপাতালে ১০ বছরেরও বেশি সময় ধরে কাজ করছেন।',
    category: 'শিশুর যত্ন',
    content: `
## নবজাতককে গোসল করানোর পূর্ব প্রস্তুতি

নবজাতক শিশুকে প্রথমবারের মত গোসল করানো অনেক মায়েদের জন্যই উদ্বেগের কারণ হতে পারে। তবে সঠিক প্রস্তুতি নিলে এটি একটি আনন্দদায়ক অভিজ্ঞতা হতে পারে। এখানে কিছু গুরুত্বপূর্ণ পদক্ষেপ দেওয়া হল:

### প্রয়োজনীয় জিনিসপত্র

গোসল শুরু করার আগে নিম্নলিখিত জিনিসগুলি প্রস্তুত রাখুন:

- একটি শিশু বাথটাব বা বেসিন
- হালকা উষ্ণ পানি (৩৭-৩৮ ডিগ্রি সেলসিয়াস)
- শিশুর জন্য মাইল্ড সাবান (যদি প্রয়োজন হয়)
- নরম তোয়ালে বা হুডেড বেবি টাওয়েল
- শিশুর পরিষ্কার কাপড়
- ডায়াপার
- শিশুর মৃদু লোশন (যদি প্রয়োজন হয়)

### পরিবেশ তৈরি

গোসলের আগে রুমের তাপমাত্রা নিশ্চিত করুন যাতে এটি উষ্ণ থাকে। এতে শিশু ঠান্ডা লাগবে না। সব জিনিসপত্র হাতের নাগালের মধ্যে রাখুন, যাতে গোসল চলাকালীন আপনাকে শিশুকে একা ছেড়ে যেতে না হয়।

## ধাপে ধাপে গোসল করানোর নিয়ম

### ১. পানির তাপমাত্রা পরীক্ষা

বাথটাবে পানি ঢালার আগে পানির তাপমাত্রা পরীক্ষা করুন। পানি হালকা উষ্ণ হওয়া উচিত, কনুইয়ের ভিতরের অংশে পানি টেস্ট করলে আরামদায়ক লাগতে হবে।

### ২. শিশুকে ধরার সঠিক পদ্ধতি

শিশুকে একহাতে ধরুন, শিশুর মাথা ও ঘাড় আপনার কব্জি এবং হাতের তালুর উপর রাখুন। অন্য হাত দিয়ে শিশুর পা ধরুন।

### ৩. গোসল করানোর ক্রম

- প্রথমে শিশুর মুখ একটি ভেজা, নরম কাপড় দিয়ে মুছুন, সাবান ব্যবহার করবেন না।
- এরপর মাথা থেকে শুরু করে, পায়ের আঙুল পর্যন্ত ধীরে ধীরে গোসল করান।
- মাথার চুল ধোয়ার সময় বিশেষ সতর্কতা অবলম্বন করুন, ফোন্টানেল (মাথার নরম অংশ) এড়িয়ে যান।
- শরীরের ভাঁজগুলি (ঘাড়, বাহু, কাছ ইত্যাদি) বিশেষ মনোযোগ দিয়ে ধুয়ে ফেলুন।
- সবশেষে, সাবধানে শিশুকে ধুয়ে ফেলুন যাতে কোনো সাবান না থাকে।

### ৪. গোসল শেষে যত্ন

গোসল শেষ হওয়ার পর, শিশুকে সঙ্গে সঙ্গে একটি নরম তোয়ালে দিয়ে মুড়ে ফেলুন। বিশেষ করে মাথা ঢেকে রাখুন যাতে শিশু ঠান্ডা না হয়ে যায়।

## গুরুত্বপূর্ণ সতর্কতা

- কখনই শিশুকে পানিতে একা ছেড়ে যাবেন না, এমনকি এক সেকেন্ডের জন্যও নয়।
- গোসলের সময় ৫-১০ মিনিটের বেশি নয়, বিশেষ করে প্রথম কয়েকবারে।
- নবজাতকের জন্য সপ্তাহে ২-৩ বার গোসল যথেষ্ট; প্রতিদিন গোসল করানোর প্রয়োজন নেই।
- শিশুর নাভির অংশ সম্পূর্ণ শুকিয়ে না গেলে, সেই অংশে সাবধানতা অবলম্বন করুন।

## প্রায়শই জিজ্ঞাসিত প্রশ্ন

### শিশুকে কতদিন পর পর গোসল করাতে হবে?
নবজাতকের ত্বক খুবই সংবেদনশীল, তাই সপ্তাহে ২-৩ বার গোসল করানো যথেষ্ট। প্রতিদিন গোসল দেওয়া দরকার নেই।

### গোসলের সময় সাবান ব্যবহার করা কি নিরাপদ?
হ্যাঁ, তবে শিশুদের জন্য বিশেষভাবে তৈরি মাইল্ড সাবান ব্যবহার করুন। সাধারণ সাবান শিশুর ত্বকের জন্য কঠোর হতে পারে।

### নবজাতকের গোসলের সময় সবচেয়ে বড় ভুল কী?
অনেক নতুন বাবা-মা পানির তাপমাত্রা সঠিকভাবে পরীক্ষা না করে শিশুকে গোসল করান, যা বিপজ্জনক হতে পারে। সবসময় পানির তাপমাত্রা পরীক্ষা করে নিন।
    `,
    relatedPosts: [
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
      }
    ]
  },
  'newborn-skin-care': {
    title: 'সদ্যোজাত শিশুর ত্বকের যত্নে ঘরোয়া উপায়',
    excerpt: 'আপনার সদ্যোজাত শিশুর ত্বক অত্যন্ত সংবেদনশীল। জেনে নিন কিভাবে ঘরোয়া উপায়ে আপনি শিশুর ত্বকের যত্ন নিতে পারেন।',
    image: 'https://images.pexels.com/photos/265987/pexels-photo-265987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 15, 2025',
    readTime: '6 min read',
    author: 'ডাঃ নাজনীন আক্তার',
    authorImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    authorBio: 'ডাঃ নাজনীন আক্তার একজন শিশুরোগ বিশেষজ্ঞ, যিনি বাংলাদেশের বিভিন্ন হাসপাতালে ১০ বছরেরও বেশি সময় ধরে কাজ করছেন।',
    category: 'ত্বকের যত্ন'
  },
  'body-temperature-control': {
    title: 'নবজাতকের শরীরের তাপমাত্রা নিয়ন্ত্রণে রাখার উপায়',
    excerpt: 'নবজাতকের শরীরের তাপমাত্রা সঠিকভাবে নিয়ন্ত্রণ করা অত্যন্ত গুরুত্বপূর্ণ। জেনে নিন কিভাবে আপনি আপনার শিশুর তাপমাত্রা ঠিক রাখবেন।',
    image: 'https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 12, 2025',
    readTime: '5 min read',
    author: 'ডাঃ ফারজানা রহমান',
    authorImage: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    authorBio: 'ডাঃ ফারজানা রহমান একজন শিশুরোগ বিশেষজ্ঞ এবং বাংলাদেশ শিশু চিকিৎসা সমিতির সদস্য।',
    category: 'শিশুর স্বাস্থ্য'
  },
  'holding-baby-techniques': {
    title: 'শিশুকে কোলে নেওয়ার সঠিক কৌশল',
    excerpt: 'নবজাতক শিশুকে কোলে নেওয়ার সময় সঠিক কৌশল জানা খুব জরুরি। এই প্রবন্ধে জানুন কিভাবে আপনার শিশুকে নিরাপদে কোলে নিবেন।',
    image: 'https://images.pexels.com/photos/3662478/pexels-photo-3662478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    date: 'April 10, 2025',
    readTime: '7 min read',
    author: 'ডাঃ মাহমুদা আক্তার',
    authorImage: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    authorBio: 'ডাঃ মাহমুদা আক্তার একজন অভিজ্ঞ শিশুরোগ বিশেষজ্ঞ এবং পেরেন্টিং কনসালটেন্ট।',
    category: 'শিশুর যত্ন'
  }
};

export default function BlogPost() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const pathname = usePathname();
  const slug = pathname.split('/').pop();
  
  const post = blogPosts[slug];

  if (!post) {
    return (
      <>
        <Header />
        <main className="min-h-screen py-16 container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">পোস্ট খুঁজে পাওয়া যায়নি</h1>
          <p className="text-gray-600 mb-8">আপনি যে পোস্ট খুঁজছেন তা খুঁজে পাওয়া যায়নি।</p>
          <Button asChild>
            <Link href="/blog">সকল পোস্ট দেখুন</Link>
          </Button>
        </main>
        <Footer />
      </>
    );
  }

  const handleLike = () => {
    if (isLiked) {
      setLikes(prev => prev - 1);
      setIsLiked(false);
    } else {
      setLikes(prev => prev + 1);
      setIsLiked(true);
      toast.success('আপনি প্রবন্ধটিকে পছন্দ করেছেন!');
    }
  };
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    
    if (!isSaved) {
      toast.success('প্রবন্ধটি সেভ করা হয়েছে!');
    } else {
      toast.info('প্রবন্ধটি আনসেভ করা হয়েছে!');
    }
  };
  
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('লিংক কপি করা হয়েছে!');
  };

  useEffect(() => {
    // Simulate random likes
    const randomLikes = Math.floor(Math.random() * 50) + 10;
    setLikes(randomLikes);
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen pt-8 pb-16">
        {/* Blog Post Header */}
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-sm text-pink-600 hover:text-pink-700 inline-flex items-center mb-4">
              ← সব প্রবন্ধে ফিরে যান
            </Link>
            
            <div className="mb-6">
              {post.category && (
                <Link href={`/category/${post.category}`}>
                  <Badge className="mb-3 bg-pink-100 text-pink-700 hover:bg-pink-200">
                    {post.category}
                  </Badge>
                </Link>
              )}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>
                      {post.author.split(' ').map(word => word[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{post.author}</p>
                    <div className="flex items-center text-xs text-gray-500 space-x-3">
                      <span className="flex items-center">
                        <Calendar className="mr-1 h-3 w-3" /> {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="mr-1 h-3 w-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={isLiked ? 'text-pink-600 border-pink-200 bg-pink-50' : ''}
                    onClick={handleLike}
                  >
                    <Heart className={`mr-1 h-4 w-4 ${isLiked ? 'fill-pink-600' : ''}`} /> {likes}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={handleSave}
                    className={isSaved ? 'text-pink-600 border-pink-200 bg-pink-50' : ''}
                  >
                    <BookmarkPlus className="mr-1 h-4 w-4" /> সেভ
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Featured Image */}
        <div className="w-full relative h-[300px] md:h-[500px] mb-10">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
        
        {/* Blog Content */}
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-2/3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content ? 
                      marked(post.content) : 
                      '<p>এই প্রবন্ধের বিস্তারিত বিষয়বস্তু শীঘ্রই আসছে।</p>' 
                  }}
                />
                
                {/* Post Footer */}
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center space-x-3">
                      <Button variant="outline" size="sm" onClick={handleLike}>
                        <Heart className={`mr-1 h-4 w-4 ${isLiked ? 'fill-pink-600 text-pink-600' : ''}`} /> পছন্দ
                      </Button>
                      <Button variant="outline" size="sm">
                        <MessageCircle className="mr-1 h-4 w-4" /> মন্তব্য
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-500">শেয়ার করুন:</span>
                      <div className="flex space-x-1">
                        <FacebookShareButton url={typeof window !== 'undefined' ? window.location.href : ''}>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Facebook className="h-4 w-4 text-blue-600" />
                          </Button>
                        </FacebookShareButton>
                        
                        <TwitterShareButton url={typeof window !== 'undefined' ? window.location.href : ''}>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Twitter className="h-4 w-4 text-sky-500" />
                          </Button>
                        </TwitterShareButton>
                        
                        <LinkedinShareButton url={typeof window !== 'undefined' ? window.location.href : ''}>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <Linkedin className="h-4 w-4 text-blue-700" />
                          </Button>
                        </LinkedinShareButton>
                        
                        <Button variant="outline" size="icon" className="h-8 w-8" onClick={handleCopyLink}>
                          <Copy className="h-4 w-4 text-gray-600" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Author Bio */}
                <div className="mt-10 pt-6 border-t border-gray-100">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={post.authorImage} alt={post.author} />
                      <AvatarFallback>
                        {post.author.split(' ').map(word => word[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{post.author}</h3>
                      <p className="text-sm text-gray-600 mt-1">
                        {post.authorBio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Related Posts */}
              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div className="mt-12">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">সম্পর্কিত প্রবন্ধ</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {post.relatedPosts.map((relatedPost, index) => (
                      <BlogCard key={index} post={relatedPost} />
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="w-full md:w-1/3 space-y-6">
              {/* About Author */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">লেখক সম্পর্কে</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={post.authorImage} alt={post.author} />
                    <AvatarFallback>
                      {post.author.split(' ').map(word => word[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">শিশুরোগ বিশেষজ্ঞ</p>
                  </div>
                </div>
                <p className="text-sm text-gray-600">{post.authorBio}</p>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  লেখকের সকল লেখা
                </Button>
              </div>
              
              {/* Popular Topics */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">জনপ্রিয় বিভাগ</h3>
                <div className="flex flex-wrap gap-2">
                  <Link href="/category/baby-care">
                    <Badge variant="outline" className="bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-700">শিশুর যত্ন</Badge>
                  </Link>
                  <Link href="/category/baby-health">
                    <Badge variant="outline" className="bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-700">শিশুর স্বাস্থ্য</Badge>
                  </Link>
                  <Link href="/category/mother-care">
                    <Badge variant="outline" className="bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-700">মায়ের যত্ন</Badge>
                  </Link>
                  <Link href="/category/baby-food">
                    <Badge variant="outline" className="bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-700">শিশুর খাদ্য</Badge>
                  </Link>
                  <Link href="/category/parenting">
                    <Badge variant="outline" className="bg-gray-50 hover:bg-pink-50 text-gray-700 hover:text-pink-700">পেরেন্টিং টিপস</Badge>
                  </Link>
                </div>
              </div>
              
              {/* Popular Posts */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">জনপ্রিয় প্রবন্ধ</h3>
                <div className="space-y-4">
                  {Object.values(blogPosts).slice(0, 3).map((popularPost, index) => (
                    <div key={index} className="flex space-x-3">
                      <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
                        <Image 
                          src={popularPost.image}
                          alt={popularPost.title}
                          fill
                          className="object-cover"
                          sizes="64px"
                        />
                      </div>
                      <div className="flex-1">
                        <Link href={`/blog/${Object.keys(blogPosts)[index]}`} className="font-medium text-sm text-gray-900 hover:text-pink-600 line-clamp-2">
                          {popularPost.title}
                        </Link>
                        <div className="flex text-xs text-gray-500 mt-1">
                          <Calendar className="mr-1 h-3 w-3" /> {popularPost.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Newsletter />
      <Footer />
    </>
  );
}

// Simple markdown rendering function
function marked(markdown) {
  return markdown
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-8 mb-4">$1</h2>')
    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mt-6 mb-3">$1</h3>')
    .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/gim, '<em>$1</em>')
    .replace(/\n- (.*)/gim, '<ul class="list-disc pl-6 my-3"><li>$1</li></ul>')
    .replace(/\n([^\n]+)/gim, '<p class="mb-4">$1</p>')
    .replace(/<\/ul>\n<ul>/gim, '');
}