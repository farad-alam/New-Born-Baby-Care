"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { MailIcon, ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error('দয়া করে একটি বৈধ ইমেইল ঠিকানা দিন');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success('আপনি সফলভাবে আমাদের নিউজলেটারে সাবস্ক্রাইব করেছেন!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="bg-gradient-to-r from-pink-50 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center justify-center rounded-full bg-pink-100 px-4 py-1 text-sm font-medium text-pink-700">
            <MailIcon className="mr-2 h-3 w-3" /> নিউজলেটার
          </span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            শিশুর যত্নে নতুন পরামর্শ পেতে সাবস্ক্রাইব করুন
          </h2>
          
          <p className="text-lg text-gray-600">
            আমাদের নিউজলেটারে সাবস্ক্রাইব করে পান নবজাতক শিশুর যত্ন, স্বাস্থ্য, এবং বিকাশ সম্পর্কে নিয়মিত আপডেট।
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="আপনার ইমেইল ঠিকানা"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button 
              type="submit" 
              className="bg-pink-600 hover:bg-pink-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'সাবস্ক্রাইব হচ্ছে...' : 'সাবস্ক্রাইব করুন'}
              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
            </Button>
          </form>
          
          <p className="text-xs text-gray-500">
            * আমরা আপনার ইমেইল কখনই অন্য কারো সাথে শেয়ার করব না। আপনি যে কোনো সময় আনসাবস্ক্রাইব করতে পারবেন।
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;