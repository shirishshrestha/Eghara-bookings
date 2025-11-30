"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FC, useState } from "react";
import { FutsalCard } from "@/features/shared/components/FutsalCard";
import { Futsal, FilterOption } from "../types";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RecommendedFutsalsProps {
  futsals: Futsal[];
}

const FILTER_OPTIONS: FilterOption[] = [
  { id: "all", label: "All", value: "all" },
  { id: "5v5", label: "5v5", value: "5v5" },
  { id: "7v7", label: "7v7", value: "7v7" },
  { id: "indoor", label: "Indoor", value: "indoor" },
  { id: "outdoor", label: "Outdoor", value: "outdoor" },
  { id: "turf", label: "Turf", value: "turf" },
];

export const RecommendedFutsals: FC<RecommendedFutsalsProps> = ({
  futsals,
}) => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredFutsals = futsals.filter((futsal) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "5v5" || activeFilter === "7v7") {
      return futsal.type === activeFilter;
    }
    return futsal.surface === activeFilter;
  });

  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart-2/10 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-chart-2" />
            <span className="text-sm font-semibold text-chart-2">
              Picked For You
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Recommended Futsals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked venues based on your preferences and location. Find your
            ideal match.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-3 mb-12 flex-wrap"
        >
          {FILTER_OPTIONS.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.value)}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </motion.div>

        {/* Futsals Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredFutsals.slice(0, 6).map((futsal, index) => (
              <FutsalCard key={futsal.id} futsal={futsal} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredFutsals.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-lg text-muted-foreground">
              No futsals found for this filter. Try another option.
            </p>
          </motion.div>
        )}

        {/* Load More Button */}
        {filteredFutsals.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button size="lg">Load More</Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
