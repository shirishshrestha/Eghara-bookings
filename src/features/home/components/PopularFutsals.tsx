"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { FutsalCard } from "@/features/shared/components/FutsalCard";
import { Futsal } from "../types";
import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PopularFutsalsProps {
  futsals: Futsal[];
}

export const PopularFutsals: FC<PopularFutsalsProps> = ({ futsals }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Most Booked
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Popular Futsals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most loved futsal venues across Kathmandu. Booked by
            thousands of players every month.
          </p>
        </motion.div>

        {/* Futsals Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {futsals.map((futsal, index) => (
            <FutsalCard key={futsal.id} futsal={futsal} index={index} />
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Venues
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
