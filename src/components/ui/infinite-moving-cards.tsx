'use client';

import { cn } from '@/lib/utils';
import React, { useCallback, useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'slow',
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    image?: string;
    content: string;
    role: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards');
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse');
      }
    }
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '30s');
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '60s');
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s');
      }
    }
  }, [speed]);

  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Create multiple duplicates for seamless infinite scroll
      // Duplicate 3 more times (total of 4 sets of items)
      for (let i = 0; i < 3; i++) {
        scrollerContent.forEach(item => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();

      // Set initial position for right direction to start cards visible
      if (direction === 'right' && scrollerRef.current) {
        scrollerRef.current.style.transform = 'translateX(0)';
      }

      setTimeout(() => setStart(true), 0);
    }
  }, [getDirection, getSpeed, direction]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  overflow-hidden mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex min-w-full list-none shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll',
          pauseOnHover && 'hover:paused'
        )}
      >
        {items.map(item => (
          <li className="group w-[380px] max-w-full relative shrink-0 md:w-[480px]" key={item.name}>
            {/* Gradient border effect */}
            <div className="absolute -inset-px bg-linear-to-r from-emerald-500 via-cyan-500 to-emerald-500 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500" />

            {/* Main card */}
            <div className="relative h-full bg-white dark:bg-neutral-900 rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-cyan-50/50 dark:from-emerald-950/20 dark:to-cyan-950/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <blockquote className="relative z-10">
                {/* Quote icon */}
                <div className="absolute -top-2 -left-2 text-emerald-500/20 dark:text-emerald-400/20">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.5 10c-1.833 0-3.5 1.167-3.5 3.5S4.667 17 6.5 17c1.25 0 2.25-.5 3-1.5-.5 2.5-2.5 4.5-5 4.5v2c4.5 0 7-4 7-8.5S9.333 10 6.5 10zm10 0c-1.833 0-3.5 1.167-3.5 3.5s1.667 3.5 3.5 3.5c1.25 0 2.25-.5 3-1.5-.5 2.5-2.5 4.5-5 4.5v2c4.5 0 7-4 7-8.5s-2.667-3.5-5.5-3.5z" />
                  </svg>
                </div>

                {/* Testimonial text */}
                <p className="relative text-base leading-relaxed text-neutral-700 dark:text-neutral-300 font-medium mb-6 italic">
                  &ldquo;{item.content}&rdquo;
                </p>

                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Author info with avatar */}
                <div className="flex items-center gap-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
                  {/* Avatar with gradient border */}
                  <div className="relative">
                    <div className="absolute -inset-0.5 bg-linear-to-r from-emerald-500 to-cyan-500 rounded-full" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        item.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`
                      }
                      alt={item.name}
                      className="relative w-12 h-12 rounded-full border-2 border-white dark:border-neutral-900 object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="font-bold text-neutral-900 dark:text-white">{item.name}</div>
                    <div className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                      {item.role}
                    </div>
                  </div>

                  {/* Verified badge */}
                  <div className="flex items-center gap-1 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 rounded-full">
                    <svg
                      className="w-4 h-4 text-emerald-600 dark:text-emerald-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                      Verified
                    </span>
                  </div>
                </div>
              </blockquote>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
