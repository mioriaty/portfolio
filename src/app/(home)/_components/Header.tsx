'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/shared/components/ui/button';

const navigationItems = [
  {
    title: 'Home',
    href: '/',
    description: ''
  },
  {
    title: 'Posts',
    href: '/blogs',
    description: ''
  },
  {
    title: 'About',
    href: '/about',
    description: ''
  }
];

export const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="w-full z-40 fixed top-0 left-0 bg-gray-100/90 backdrop-blur-sm">
      <div className="container relative mx-auto min-h-16 flex items-center justify-end px-8">
        {/* Navigation Menu */}
        <div className="flex items-center gap-1">
          {navigationItems.map((item, index) => (
            <Link
              key={item.title}
              href={item.href}
              className={`
              px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 transition-colors
              ${index === 0 ? 'bg-green-200' : ''}
              ${index === navigationItems.length - 1 ? '' : 'border-r border-gray-400'}
            `}
            >
              {item.title}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden ml-4">
          <Button variant="ghost" onClick={() => setOpen(!isOpen)} size="sm">
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </Button>
          {isOpen && (
            <div className="absolute top-16 right-0 bg-gray-100 shadow-lg py-4 min-w-[150px]">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
