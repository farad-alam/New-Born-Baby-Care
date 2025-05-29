"use client";

import Link from 'next/link';
import { BabyIcon, Heart, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { toast } from 'sonner';

const Footer = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('আপনি সফলভাবে আমাদের নিউজলেটারে সাবস্ক্রাইব করেছেন!');
      setEmail('');
    } else {
      toast.error('দয়া করে একটি বৈধ ইমেইল ঠিকানা দিন');
    }
  };

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BabyIcon className="h-6 w-6 text-pink-600" />
              <span className="text-xl font-bold text-gray-900">নিউবর্ন বেবি কেয়ার</span>
            </div>
            <p className="text-gray-600">
              বাংলাদেশের মায়েদের জন্য নবজাতক শিশুর যত্ন, স্বাস্থ্য এবং বিকাশ সম্পর্কে বিশেষজ্ঞদের পরামর্শ ও টিপস।
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-gray-400 hover:text-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" className="text-gray-400 hover:text-pink-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="https://youtube.com" className="text-gray-400 hover:text-red-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">দ্রুত লিঙ্ক</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-pink-600 transition-colors">হোম</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-pink-600 transition-colors">ব্লগ</Link>
              </li>
              <li>
                <Link href="/categories" className="text-gray-600 hover:text-pink-600 transition-colors">বিভাগসমূহ</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-pink-600 transition-colors">আমাদের সম্পর্কে</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-pink-600 transition-colors">যোগাযোগ</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">বিভাগসমূহ</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/baby-care" className="text-gray-600 hover:text-pink-600 transition-colors">শিশুর যত্ন</Link>
              </li>
              <li>
                <Link href="/category/baby-health" className="text-gray-600 hover:text-pink-600 transition-colors">শিশুর স্বাস্থ্য</Link>
              </li>
              <li>
                <Link href="/category/mother-care" className="text-gray-600 hover:text-pink-600 transition-colors">মায়ের যত্ন</Link>
              </li>
              <li>
                <Link href="/category/baby-food" className="text-gray-600 hover:text-pink-600 transition-colors">শিশুর খাদ্য</Link>
              </li>
              <li>
                <Link href="/category/parenting" className="text-gray-600 hover:text-pink-600 transition-colors">পেরেন্টিং টিপস</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-pink-600 flex-shrink-0 mt-1" />
                <span className="text-gray-600">মিরপুর-১০, ঢাকা, বাংলাদেশ</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-pink-600" />
                <span className="text-gray-600">+৮৮০ ১৭১২ ৩৪৫ ৬৭৮</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-pink-600" />
                <span className="text-gray-600">contact@newbornbabycare.bd</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {currentYear} নিউবর্ন বেবি কেয়ার। সর্বসত্ত্ব সংরক্ষিত।</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                গোপনীয়তা নীতি
              </Link>
              <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                সেবার শর্তাবলী
              </Link>
              <Link href="/sitemap" className="text-sm text-gray-500 hover:text-pink-600 transition-colors">
                সাইট ম্যাপ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;