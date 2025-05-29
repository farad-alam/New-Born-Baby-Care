"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const BlogCard = ({ post }) => {
  const [isSaved, setIsSaved] = useState(false);
  
  const handleSave = () => {
    setIsSaved(!isSaved);
    
    if (!isSaved) {
      toast.success('প্রবন্ধটি সেভ করা হয়েছে!');
    } else {
      toast.info('প্রবন্ধটি আনসেভ করা হয়েছে!');
    }
  };
  
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: `/blog/${post.slug}`,
      }).catch(console.error);
    } else {
      toast.success('লিংক কপি করা হয়েছে!');
    }
  };
  
  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full flex flex-col"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {post.category && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-pink-600 hover:bg-pink-700">{post.category}</Badge>
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 space-x-3 mb-3">
          <span className="flex items-center">
            <Calendar className="mr-1 h-3 w-3" /> {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="mr-1 h-3 w-3" /> {post.readTime}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <Button 
            variant="link" 
            asChild 
            className="p-0 h-auto font-medium text-pink-600 hover:text-pink-700 hover:no-underline"
          >
            <Link href={`/blog/${post.slug}`}>
              আরও পড়ুন
            </Link>
          </Button>
          
          <div className="flex space-x-1">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleShare}
              className="h-8 w-8 text-gray-500 hover:text-pink-600 hover:bg-pink-50"
            >
              <Share2 className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={handleSave} 
              className={`h-8 w-8 ${isSaved ? 'text-pink-600 bg-pink-50' : 'text-gray-500'} hover:text-pink-600 hover:bg-pink-50`}
            >
              <BookmarkPlus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;