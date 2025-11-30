"use client";

import { HeroSection } from "@/features/home/components/HeroSection";
import { PopularFutsals } from "@/features/home/components/PopularFutsals";
import { RecommendedFutsals } from "@/features/home/components/RecommendedFutsals";
import { KathmanduFutsals } from "@/features/home/components/KathmanduFutsals";
import { Header } from "@/features/layout/Header";
import { Footer } from "@/features/layout/Footer";
import { MOCK_FUTSALS, MOCK_LOCATIONS } from "@/features/home/data/mockData";
import { SearchParams } from "@/features/home/types";

export default function Home() {
  const handleSearch = (params: SearchParams) => {
    console.log("Search params:", params);
    // TODO: Implement search functionality
    // Navigate to search results page or filter futsals
  };

  const popularFutsals = MOCK_FUTSALS.filter((f) => f.isPopular);
  const recommendedFutsals = MOCK_FUTSALS.filter((f) => f.isRecommended);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection onSearch={handleSearch} />

        <PopularFutsals futsals={popularFutsals} />

        <RecommendedFutsals futsals={recommendedFutsals} />

        <KathmanduFutsals locations={MOCK_LOCATIONS} />
      </main>

      <Footer />
    </div>
  );
}
