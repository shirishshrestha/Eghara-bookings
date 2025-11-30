"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Location } from "../types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface KathmanduFutsalsProps {
  locations: Location[];
}

export const KathmanduFutsals: FC<KathmanduFutsalsProps> = ({ locations }) => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-chart-3/10 rounded-full mb-4">
            <MapPin className="w-4 h-4 text-chart-3" />
            <span className="text-sm font-semibold text-chart-3">
              Explore by Location
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Futsals in Kathmandu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse premium futsal venues across different areas of Kathmandu.
            Find the closest court to you.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-primary/5 rounded-2xl p-8 mb-12 border border-primary/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                15+
              </div>
              <div className="text-sm text-muted-foreground">Areas Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-sm text-muted-foreground">Total Venues</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">
                Booking Available
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                4.8★
              </div>
              <div className="text-sm text-muted-foreground">
                Average Rating
              </div>
            </div>
          </div>
        </motion.div>

        {/* Location Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="group relative hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardContent className="relative z-10 p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>

                  {/* Location Name */}
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {location.name}
                  </h3>

                  {/* Area Info */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {location.area}, {location.city}
                  </p>

                  {/* Futsal Count */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      {location.futsalCount}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      venues available
                    </span>
                  </div>

                  {/* Arrow Icon */}
                  <div className="absolute bottom-6 right-6 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                    <ArrowRight className="w-5 h-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button size="lg" className="inline-flex items-center gap-2">
            Explore All Locations
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
