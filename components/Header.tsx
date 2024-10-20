"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Image src="/assets/logo.png" alt="SGN Academy Logo" width={130} height={60} className="mr-4" />
            <div>
              <h1 className="text-2xl font-bold text-secondary">SGN Academy</h1>
              <p className="text-sm text-gray-300">Shaping Futures, Inspiring Minds</p>
            </div>
          </div>
          <nav className="hidden md:flex space-x-6">
            {['Home', 'About Us', 'Academic', 'Admissions', 'Gallery', 'Contact Us'].map((item) => (
              <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-secondary">
                {item}
              </Link>
            ))}
          </nav>
          <Button
            className="md:hidden"
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {['Home', 'About Us', 'Academic', 'Admissions', 'Gallery', 'Contact Us'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(' ', '-')}`}
                className="block py-2 hover:text-secondary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <div className="bg-secondary text-primary py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <span className="font-semibold mr-4">Announcements:</span>
          <div className="overflow-hidden flex-1">
            <div className="animate-marquee whitespace-nowrap">
              Welcome to the new academic year! | Admissions open for 2023-24 | Annual Sports Day on 15th May | Parent-Teacher Meeting scheduled for next week
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}