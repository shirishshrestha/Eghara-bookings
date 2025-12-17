'use client';

import React, { useState } from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from '@/features/shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            refetchOnWindowFocus: false,
          },
        },
      })
  );

  return (
    <ClerkProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </QueryClientProvider>
    </ClerkProvider>
  );
};

export default Providers;
