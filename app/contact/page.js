"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { MapPin, Phone, Mail, Clock, SendIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('দয়া করে সকল প্রয়োজনীয় ঘর পূরণ করুন।');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('আপনার বার্তা সফলভাবে পাঠানো হয়েছে! আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-pink-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                যোগাযোগ করুন
              </h1>
              <p className="text-lg text-gray-600">
                আপনার যেকোনো প্রশ্ন বা মতামতের জন্য আমাদের সাথে যোগাযোগ করুন। আমরা আপনাকে সাহায্য করতে এখানে আছি।
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Info and Form */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900">আমাদের সাথে যোগাযোগ করুন</h2>
              <p className="text-gray-600">
                আমাদের দল আপনার সমস্ত প্রশ্ন ও উদ্বেগের জন্য এখানে আছে। আপনি আমাদের যেকোনো সময় কল করতে পারেন বা ইমেইল পাঠাতে পারেন।
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="rounded-full bg-pink-100 w-12 h-12 flex items-center justify-center mb-4">
                    <MapPin className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ঠিকানা</h3>
                  <p className="text-gray-600">
                    মিরপুর-১০, ঢাকা<br />
                    বাংলাদেশ
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="rounded-full bg-blue-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ফোন</h3>
                  <p className="text-gray-600">
                    +৮৮০ ১৭১২ ৩৪৫ ৬৭৮
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">ইমেইল</h3>
                  <p className="text-gray-600">
                    contact@newbornbabycare.bd
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="rounded-full bg-green-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">কার্য সময়</h3>
                  <p className="text-gray-600">
                    সোম - শুক্র: সকাল ৯টা - সন্ধ্যা ৬টা<br />
                    শনি: সকাল ১০টা - দুপুর ২টা
                  </p>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">আমাদের একটি বার্তা পাঠান</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">আপনার নাম *</label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="আপনার নাম লিখুন"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">আপনার ইমেইল *</label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="আপনার ইমেইল লিখুন"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">বিষয়</label>
                  <Input 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="বার্তার বিষয় লিখুন"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">বার্তা *</label>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="আপনার বার্তা লিখুন..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-pink-600 hover:bg-pink-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                      পাঠানো হচ্ছে...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      বার্তা পাঠান <SendIcon className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
                সাধারণ জিজ্ঞাসা
              </h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    আপনাদের সাথে কিভাবে পরামর্শের জন্য যোগাযোগ করব?
                  </h3>
                  <p className="text-gray-600">
                    আমাদের সাথে যোগাযোগের জন্য আপনি এই পৃষ্ঠার যোগাযোগ ফর্ম পূরণ করতে পারেন, বা সরাসরি আমাদের ইমেইল বা ফোন নম্বরে যোগাযোগ করতে পারেন।
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    আপনাদের কি অনলাইন পরামর্শের সুবিধা আছে?
                  </h3>
                  <p className="text-gray-600">
                    হ্যাঁ, আমরা অনলাইন পরামর্শ সেবা প্রদান করি। আপনি আমাদের ইমেইলে যোগাযোগ করে অনলাইন পরামর্শের সময় নির্ধারণ করতে পারেন।
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    আমি কি আপনাদের ব্লগে নিজের অভিজ্ঞতা শেয়ার করতে পারি?
                  </h3>
                  <p className="text-gray-600">
                    অবশ্যই! আমরা সবসময় নতুন মায়েদের অভিজ্ঞতা শেয়ার করতে উৎসাহিত করি। আপনি আমাদের ইমেইল করে আপনার গল্প পাঠাতে পারেন, এবং আমরা তা আমাদের ব্লগে প্রকাশ করতে পারি।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}