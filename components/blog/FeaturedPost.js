"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, Share2, BookmarkPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { toast } from 'sonner';

const FeaturedPost = ({ post }) => {
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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[300px] lg:h-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
          <div className="absolute top-4 left-4">
            <Badge className="bg-pink-600 hover:bg-pink-700">ফিচার্ড</Badge>
          </div>
        </div>
        
        <div className="p-6 lg:p-8 flex flex-col">
          <div className="flex items-center space-x-4 mb-4">
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
          
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          
          <p className="text-gray-600 mb-6 flex-grow">
            {post.excerpt}
          </p>
          
          <div className="mt-auto flex justify-between items-center">
            <Button asChild className="bg-pink-600 hover:bg-pink-700">
              <Link href={`/blog/${post.slug}`}>
                পুরো প্রবন্ধ পড়ুন
              </Link>
            </Button>
            
            <div className="flex space-x-2">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={handleShare}
                className="text-gray-500 hover:text-pink-600 hover:bg-pink-50"
              >
                <Share2 className="h-4 w-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={handleSave} 
                className={`${isSaved ? 'text-pink-600 bg-pink-50' : 'text-gray-500'} hover:text-pink-600 hover:bg-pink-50`}
              >
                <BookmarkPlus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedPost;