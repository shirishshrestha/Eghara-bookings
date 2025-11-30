"use client";

import { motion } from "framer-motion";
import { FC, useState } from "react";
import { Star, MapPin, Heart } from "lucide-react";
import Image from "next/image";
import { Futsal } from "@/features/home/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface FutsalCardProps {
  futsal: Futsal;
  index?: number;
}

export const FutsalCard: FC<FutsalCardProps> = ({ futsal, index = 0 }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Card className="group relative overflow-hidden hover:shadow-xl transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-muted">
          {!imageLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse" />
          )}
          <Image
            src={futsal.images[0] || "/placeholder-futsal.jpg"}
            alt={futsal.name}
            fill
            className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Favorite Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 w-9 h-9 bg-card/90 backdrop-blur-sm rounded-full hover:bg-card z-10"
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite
                  ? "fill-destructive text-destructive"
                  : "text-foreground"
              } transition-colors`}
            />
          </Button>

          {/* Type Badge */}
          <Badge className="absolute top-3 left-3">{futsal.type}</Badge>
        </div>

        {/* Content */}
        <CardContent className="p-4">
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-1">
            {futsal.name}
          </h3>

          <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
            <MapPin className="w-4 h-4" />
            <span className="line-clamp-1">
              {futsal.location.area}, {futsal.location.city}
            </span>
          </div>

          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-chart-3 text-chart-3" />
              <span className="text-sm font-semibold text-foreground">
                {futsal.rating.toFixed(1)}
              </span>
              <span className="text-sm text-muted-foreground">
                ({futsal.reviewCount})
              </span>
            </div>

            <Badge variant="secondary" className="text-xs">
              {futsal.surface}
            </Badge>
          </div>

          <div className="flex items-center gap-2 mb-3">
            {futsal.amenities.slice(0, 3).map((amenity) => (
              <Badge key={amenity} variant="outline" className="text-xs">
                {amenity}
              </Badge>
            ))}
            {futsal.amenities.length > 3 && (
              <span className="text-xs text-muted-foreground">
                +{futsal.amenities.length - 3}
              </span>
            )}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-border">
            <div>
              <span className="text-2xl font-bold text-primary">
                ₹{futsal.pricePerHour}
              </span>
              <span className="text-sm text-muted-foreground">/hour</span>
            </div>

            <Button size="sm">Book Now</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
