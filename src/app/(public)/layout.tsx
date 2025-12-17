import { Footer, Navigation } from '@/features/shared';

export const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />

      {children}
      <Footer />
    </>
  );
};
