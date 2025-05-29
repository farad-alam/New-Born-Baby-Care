"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckIcon, MailIcon } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Newsletter from '@/components/Newsletter';

export default function About() {
  const teamMembers = [
    {
      name: 'ডাঃ নাজনীন আক্তার',
      role: 'প্রধান শিশুরোগ বিশেষজ্ঞ',
      bio: 'ডাঃ নাজনীন আক্তার একজন অভিজ্ঞ শিশুরোগ বিশেষজ্ঞ, যিনি ১০ বছরেরও বেশি সময় ধরে বাংলাদেশের বিভিন্ন হাসপাতালে কাজ করছেন।',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'ডাঃ ফারজানা রহমান',
      role: 'শিশুরোগ বিশেষজ্ঞ',
      bio: 'ডাঃ ফারজানা রহমান একজন শিশুরোগ বিশেষজ্ঞ এবং বাংলাদেশ শিশু চিকিৎসা সমিতির সদস্য।',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'রুমানা আক্তার',
      role: 'শিশু বিকাশ বিশেষজ্ঞ',
      bio: 'রুমানা আক্তার শিশু বিকাশ বিষয়ে ৮ বছরের অভিজ্ঞতা সম্পন্ন। তিনি বিশেষত নবজাতক শিশুদের প্রারম্ভিক বিকাশ নিয়ে কাজ করেন।',
      image: 'https://images.pexels.com/photos/3779853/pexels-photo-3779853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];
  
  const missionPoints = [
    'নবজাতক শিশু সম্পর্কে সঠিক ও বিশ্বাসযোগ্য তথ্য প্রদান',
    'বাংলাদেশের মায়েদের জন্য উপযোগী শিশু যত্নের পরামর্শ দেওয়া',
    'নতুন মায়েদের মধ্যে আত্মবিশ্বাস বৃদ্ধি করা',
    'শিশু স্বাস্থ্য ও বিকাশ সম্পর্কে সচেতনতা বাড়ানো',
    'বাংলাদেশে শিশুমৃত্যু হার কমাতে অবদান রাখা'
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="w-full bg-gradient-to-r from-pink-50 to-blue-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
                আমাদের সম্পর্কে
              </h1>
              <p className="text-lg text-gray-600">
                আমরা বাংলাদেশের মায়েদের জন্য নবজাতক শিশুদের যত্ন ও পরিচর্যা সম্পর্কিত নির্ভরযোগ্য তথ্য প্রদানের লক্ষ্যে কাজ করছি।
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image 
                src="https://images.pexels.com/photos/3933249/pexels-photo-3933249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="মা ও শিশু"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">আমাদের গল্প</h2>
              <p className="text-gray-600">
                ২০২০ সালে, আমরা লক্ষ্য করলাম যে বাংলাদেশে নবজাতক শিশুদের যত্ন সম্পর্কিত তথ্য বাংলা ভাষায় খুব কম পাওয়া যায়। নতুন মা-বাবাদের জন্য এই যাত্রা অনেক সময় উদ্বেগপূর্ণ হয়ে উঠে।
              </p>
              <p className="text-gray-600">
                তাই, আমরা শিশুরোগ বিশেষজ্ঞ, শিশু বিকাশ বিশেষজ্ঞ এবং অভিজ্ঞ মায়েদের একটি দল গঠন করি এবং "নিউবর্ন বেবি কেয়ার" ব্লগ চালু করি। আমাদের লক্ষ্য হলো বাংলাদেশের মায়েদের জন্য সহজবোধ্য, বিশ্বাসযোগ্য এবং প্রাসঙ্গিক তথ্য প্রদান করা।
              </p>
              <p className="text-gray-600">
                আমরা বিশ্বাস করি যে সঠিক তথ্য এবং সহায়তার মাধ্যমে, প্রতিটি মা তার নবজাতক শিশুর যত্নে আরও আত্মবিশ্বাসী হতে পারেন।
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Mission */}
        <section className="bg-gradient-to-r from-blue-50 to-pink-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
              <h2 className="text-3xl font-bold text-gray-900">আমাদের লক্ষ্য</h2>
              <p className="text-gray-600">
                নবজাতক শিশুর যত্নে সহায়ক তথ্য প্রদানের মাধ্যমে আমরা বাংলাদেশের মায়েদের ক্ষমতায়ন করতে চাই।
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-sm p-6 text-center space-y-4">
                <div className="rounded-full bg-pink-100 w-16 h-16 flex items-center justify-center mx-auto">
                  <CheckIcon className="h-8 w-8 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">বিশ্বাসযোগ্য তথ্য</h3>
                <p className="text-gray-600">
                  শিশুরোগ বিশেষজ্ঞ এবং শিশু বিকাশ বিশেষজ্ঞদের দ্বারা যাচাইকৃত তথ্য প্রদান করা।
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 text-center space-y-4">
                <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mx-auto">
                  <CheckIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">সহজবোধ্য সামগ্রী</h3>
                <p className="text-gray-600">
                  জটিল চিকিৎসা তথ্যকে সহজবোধ্য ভাষায় উপস্থাপন করা যাতে সকলে বুঝতে পারে।
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm p-6 text-center space-y-4">
                <div className="rounded-full bg-purple-100 w-16 h-16 flex items-center justify-center mx-auto">
                  <CheckIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">সম্প্রদায় গঠন</h3>
                <p className="text-gray-600">
                  বাংলাদেশের মায়েদের মধ্যে একটি সহায়ক সম্প্রদায় গড়ে তোলা যেখানে তারা তাদের অভিজ্ঞতা শেয়ার করতে পারেন।
                </p>
              </div>
            </div>
            
            <div className="mt-12">
              <div className="bg-white rounded-xl shadow-sm p-6 max-w-3xl mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">আমাদের প্রতিশ্রুতি</h3>
                <ul className="space-y-3">
                  {missionPoints.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Team */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
            <h2 className="text-3xl font-bold text-gray-900">আমাদের টিম</h2>
            <p className="text-gray-600">
              আমাদের দলে রয়েছেন বিশেষজ্ঞ শিশুরোগ চিকিৎসক এবং শিশু বিকাশ বিশেষজ্ঞগণ যারা বাংলাদেশের মায়েদের সহায়তা করতে প্রতিশ্রুতিবদ্ধ।
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                <div className="relative h-64 w-full">
                  <Image 
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-pink-600">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-pink-50 to-blue-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                আপনার কোন প্রশ্ন আছে?
              </h2>
              <p className="text-lg text-gray-600">
                আমরা সর্বদা আপনার সাহায্যে প্রস্তুত। আপনার যেকোনো প্রশ্ন বা মতামত আমাদের জানান।
              </p>
              <Button asChild className="bg-pink-600 hover:bg-pink-700">
                <Link href="/contact">
                  যোগাযোগ করুন <MailIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}