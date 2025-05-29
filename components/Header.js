"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  BabyIcon, 
  SearchIcon, 
  Menu, 
  X, 
  Heart, 
  Users, 
  Newspaper, 
  Phone,
  BookOpen
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "হোম", href: "/" },
    { name: "ব্লগ", href: "/blog" },
    { name: "বিভাগসমূহ", href: "/category" },
    { name: "আমাদের সম্পর্কে", href: "/about" },
    { name: "যোগাযোগ", href: "/contact" },
  ];
  
  const categories = [
    { name: "শিশুর যত্ন", value: "শিশুর যত্ন", icon: BabyIcon },
    { name: "শিশুর স্বাস্থ্য", value: "শিশুর স্বাস্থ্য", icon: Heart },
    { name: "মায়ের যত্ন", value: "ত্বকের যত্ন", icon: Users },
    { name: "শিশুর খাদ্য", value: "শিশুর খাদ্য", icon: BookOpen },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BabyIcon className="h-8 w-8 text-pink-600" />
            <span className="font-bold text-xl text-gray-900">
              নিউবর্ন বেবি কেয়ার
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === "/"}
                    >
                      হোম
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/blog" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === "/blog"}
                    >
                      ব্লগ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>বিভাগসমূহ</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {categories.map((category) => (
                        <li key={category.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/category/${category.value}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-pink-50 hover:text-pink-700"
                            >
                              <div className="flex items-center gap-2">
                                <category.icon className="h-5 w-5 text-pink-600" />
                                <div className="text-sm font-medium leading-none">
                                  {category.name}
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === "/about"}
                    >
                      আমাদের সম্পর্কে
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                      active={pathname === "/contact"}
                    >
                      যোগাযোগ
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="অনুসন্ধান করুন..."
                className="pl-10 w-[200px] bg-gray-50 border-gray-200 focus:border-pink-300"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden fixed inset-0 z-50 bg-white transform transition-transform ease-in-out duration-300
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Link
              href="/"
              className="flex items-center space-x-2"
              onClick={closeMenu}
            >
              <BabyIcon className="h-7 w-7 text-pink-600" />
              <span className="font-bold text-xl">নিউবর্ন বেবি কেয়ার</span>
            </Link>
            <button className="p-2 text-gray-600" onClick={closeMenu}>
              <X />
            </button>
          </div>

          <div className="p-4">
            <div className="relative mb-6">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="অনুসন্ধান করুন..."
                className="pl-10 w-full bg-gray-50 border-gray-200 focus:border-pink-300"
              />
            </div>

            <nav className="space-y-6">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "block py-2 text-lg font-medium hover:text-pink-600 transition-colors",
                      pathname === link.href ? "text-pink-600" : "text-gray-700"
                    )}
                    onClick={closeMenu}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">বিভাগসমূহ</h3>
                <div className="space-y-2 pl-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.value}
                      className="flex items-center space-x-2 py-1 text-gray-700 hover:text-pink-600 transition-colors"
                      onClick={closeMenu}
                    >
                      <category.icon className="h-4 w-4" />
                      <span>{category.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;