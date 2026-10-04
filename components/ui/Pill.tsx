import React from 'react';
import { cn } from '@/lib/utils';

export interface PillProps {
  children: React.ReactNode;
  variant?: 'lime' | 'dark' | 'outline' | 'blue' | 'muted';
  size?: 'xs' | 'sm' | 'md';
  className?: string;
}

export const Pill: React.FC<PillProps> = ({
  children,
  variant = 'dark',
  size = 'sm',
  className,
}) => {
  const variantStyles = {
    lime: 'bg-[#E5FF6E] text-[#111111] font-semibold',
    dark: 'bg-[#262626] text-[#E6E6E6] border border-[#333333]',
    outline: 'bg-transparent border border-white/15 text-white/90',
    blue: 'bg-[#2330F5]/10 text-[#2330F5] border border-[#2330F5]/20 font-semibold',
    muted: 'bg-neutral-100 text-[#111111] border border-neutral-200',
  };

  const sizeStyles = {
    xs: 'text-[10px] px-2 py-0.5 rounded-full font-medium uppercase tracking-wider',
    sm: 'text-xs px-3 py-1 rounded-full font-medium',
    md: 'text-xs px-4 py-1.5 rounded-full font-medium',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 select-none whitespace-nowrap',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
};
