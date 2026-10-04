'use client';

import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  className?: string;
  viewportMargin?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  duration = 0.5,
  className = '',
  viewportMargin = '-60px',
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const offset = 24;
  const initialOffset = {
    up: { y: offset, opacity: 0 },
    down: { y: -offset, opacity: 0 },
    left: { x: offset, opacity: 0 },
    right: { x: -offset, opacity: 0 },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      initial={initialOffset[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: true, margin: viewportMargin }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1], // Current style smooth ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
