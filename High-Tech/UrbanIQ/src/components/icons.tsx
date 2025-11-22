import React from 'react';
import Link from 'next/link';

export const Logo = ({ className }: { className?: string }) => (
  <Link href="/" className={`flex items-center gap-2 ${className}`}>
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary"
    >
      <path
        d="M12 2C8.68629 2 6 4.68629 6 8C6 10.2541 7.21583 12.1932 9 13.1965V15C9 16.6569 10.3431 18 12 18C13.6569 18 15 16.6569 15 15V13.1965C16.7842 12.1932 18 10.2541 18 8C18 4.68629 15.3137 2 12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 22H15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 8V10C10 11.1046 10.8954 12 12 12C13.1046 12 14 11.1046 14 10V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="font-bold text-xl font-headline text-foreground">UrbanIQ</span>
  </Link>
);
