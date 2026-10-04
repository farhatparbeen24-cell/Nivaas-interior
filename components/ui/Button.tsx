'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'ghost' | 'lime' | 'huge-lime' | 'ink' | 'dark-outline';
  size?: 'sm' | 'md' | 'lg' | 'huge';
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  target?: string;
  rel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'blue',
  size = 'md',
  className,
  href,
  icon,
  iconPosition = 'left',
  target,
  rel,
  ...props
}) => {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 cursor-pointer select-none active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2330F5] focus-visible:ring-offset-2';

  const variantClasses = {
    blue: 'bg-[#2330F5] text-white hover:bg-[#1a25d9] shadow-sm hover:-translate-y-0.5',
    ghost:
      'bg-transparent border border-black/15 text-[#111111] hover:bg-black/5 hover:-translate-y-0.5',
    lime: 'bg-[#E5FF6E] text-[#111111] hover:bg-[#D4F04F] hover:-translate-y-0.5 font-medium',
    'huge-lime':
      'bg-[#E5FF6E] text-[#111111] hover:bg-[#D4F04F] w-full font-semibold tracking-tight hover:-translate-y-0.5',
    ink: 'bg-[#111111] text-white hover:bg-[#222222] hover:-translate-y-0.5',
    'dark-outline':
      'bg-transparent border border-[#2A2A2A] text-white hover:border-white/40 hover:bg-white/[0.03]',
  };

  const sizeClasses = {
    sm: 'h-9 px-4 text-xs tracking-wide',
    md: 'h-11 sm:h-12 px-6 text-sm',
    lg: 'h-[52px] px-8 text-[15px]',
    huge: 'h-20 sm:h-24 px-8 text-2xl sm:text-3xl',
  };

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="mr-2 shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ml-2 shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {content}
    </button>
  );
};
