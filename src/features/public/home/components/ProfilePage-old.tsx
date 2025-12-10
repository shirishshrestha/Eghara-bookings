"use client";

import { useState } from "react";
import {
  Star,
  MapPin,
  Wifi,
  Car,
  ShowerHead,
  User,
  ChevronLeft,
  ChevronRight,
  Calendar,
  Phone,
  Mail,
  Share2,
  Heart,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface ProfilePageProps {
  futsalId: string;
}

const images = [
  "https://images.unsplash.com/photo-1760174053338-4def27153cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NjQ4MzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1708472329334-c0550c39dba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBpdGNoJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjQ5NDg1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1723231462004-069caa209740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmYWNpbGl0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ5NDg1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1723074832950-9fb031b0f4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBzcG9ydHMlMjBoYWxsfGVufDF8fHx8MTc2NDk0ODU2MXww&ixlib=rb-4.1.0&q=80&w=1080",
];

const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    rating: 5,
    date: "2 days ago",
    comment:
      "Excellent facility! Well maintained courts and friendly staff. Highly recommended for weekend games.",
    avatar: "R",
  },
  {
    id: 2,
    name: "Suman Thapa",
    rating: 5,
    date: "1 week ago",
    comment:
      "Great location and amenities. The booking process was smooth and the court was in perfect condition.",
    avatar: "S",
  },
  {
    id: 3,
    name: "Amit Shrestha",
    rating: 4,
    date: "2 weeks ago",
    comment:
      "Good experience overall. Parking can be a bit challenging during peak hours but worth it.",
    avatar: "A",
  },
];

const timeSlots = [
  { time: "06:00 AM", available: true },
  { time: "07:00 AM", available: true },
  { time: "08:00 AM", available: false },
  { time: "09:00 AM", available: false },
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: true },
  { time: "12:00 PM", available: true },
  { time: "01:00 PM", available: false },
  { time: "02:00 PM", available: true },
  { time: "03:00 PM", available: true },
  { time: "04:00 PM", available: true },
  { time: "05:00 PM", available: false },
  { time: "06:00 PM", available: false },
  { time: "07:00 PM", available: true },
  { time: "08:00 PM", available: true },
  { time: "09:00 PM", available: true },
];

export function ProfilePage({ futsalId }: ProfilePageProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedDate, setSelectedDate] = useState("2025-12-06");

  const router = useRouter();

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <button
          onClick={() => router.push("/discovery")}
          className="flex items-center gap-2 text-text-tertiary hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to results</span>
        </button>

        {/* Image Gallery */}
        <div className="grid grid-cols-4 gap-2 rounded-2xl overflow-hidden mb-8">
          <div className="col-span-4 sm:col-span-2 sm:row-span-2 relative aspect-[16/10] sm:aspect-auto bg-secondary">
            <ImageWithFallback
              src={images[currentImage]}
              alt="Futsal Court"
              className="w-full h-full object-cover"
            />
            <button
              onClick={() =>
                setCurrentImage(
                  (currentImage - 1 + images.length) % images.length
                )
              }
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setCurrentImage((currentImage + 1) % images.length)
              }
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          {images.slice(1, 4).map((img, idx) => (
            <div
              key={idx}
              onClick={() => setCurrentImage(idx + 1)}
              className="hidden sm:block relative aspect-square cursor-pointer overflow-hidden bg-secondary"
            >
              <ImageWithFallback
                src={img}
                alt={`View ${idx + 2}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
          <button className="hidden sm:flex col-span-1 aspect-square bg-secondary items-center justify-center hover:bg-hover-background transition-colors cursor-pointer">
            <span className="text-sm font-medium">View All Photos</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="mb-2">Elite Futsal Arena</h1>
                  <div className="flex flex-wrap items-center gap-4 text-text-tertiary">
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-foreground">4.8</span>
                      <span>(234 reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>Lalitpur, Kathmandu</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-3 rounded-full border border-border hover:bg-hover-background transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="p-3 rounded-full border border-border hover:bg-hover-background transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="mb-4">About This Futsal</h2>
              <p className="text-text-tertiary leading-relaxed">
                Elite Futsal Arena is one of Kathmandu's premier indoor futsal
                facilities. Our state-of-the-art court features
                professional-grade artificial turf and is climate-controlled for
                year-round comfort. Perfect for casual games, team practice, or
                competitive matches. We pride ourselves on maintaining the
                highest standards of cleanliness and safety.
              </p>
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="mb-6">Facilities & Amenities</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Free WiFi</p>
                    <p className="text-sm text-text-tertiary">
                      High-speed internet
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Car className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Free Parking</p>
                    <p className="text-sm text-text-tertiary">50+ car spaces</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShowerHead className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Showers</p>
                    <p className="text-sm text-text-tertiary">
                      Clean changing rooms
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Equipment Rental</p>
                    <p className="text-sm text-text-tertiary">
                      Balls & bibs available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Calendar */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="mb-6">Check Availability</h2>
              <div className="mb-6">
                <label className="block mb-2">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.time}
                    disabled={!slot.available}
                    className={`px-4 py-3 rounded-xl border transition-all ${
                      slot.available
                        ? "border-border hover:border-primary hover:bg-primary/5 cursor-pointer"
                        : "border-border bg-secondary text-text-tertiary cursor-not-allowed"
                    }`}
                  >
                    <div className="text-sm font-medium">{slot.time}</div>
                    <div className="text-xs mt-1">
                      {slot.available ? "Available" : "Booked"}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2>Reviews</h2>
                <div className="flex items-center gap-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-semibold">4.8</span>
                  <span className="text-text-tertiary">(234 reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-divider last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <span className="text-lg font-medium text-primary">
                          {review.avatar}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-medium">{review.name}</p>
                            <p className="text-sm text-text-tertiary">
                              {review.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-text-tertiary">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 border border-border rounded-xl hover:bg-hover-background transition-colors">
                Show all reviews
              </button>
            </div>

            {/* Location */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="mb-4">Location</h2>
              <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-primary mx-auto mb-2" />
                  <p className="text-text-tertiary">Map View</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-text-tertiary">
                  <MapPin className="w-5 h-5" />
                  <span>Lalitpur-9, Kupondole Heights, Kathmandu</span>
                </div>
                <div className="flex items-center gap-3 text-text-tertiary">
                  <Phone className="w-5 h-5" />
                  <span>+977 9841234567</span>
                </div>
                <div className="flex items-center gap-3 text-text-tertiary">
                  <Mail className="w-5 h-5" />
                  <span>info@elitefutsal.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 bg-white rounded-2xl p-6 shadow-lg border border-border">
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl font-semibold text-primary">
                    NPR 2,500
                  </span>
                  <span className="text-text-tertiary">/hour</span>
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">4.8</span>
                  <span className="text-text-tertiary">(234 reviews)</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block mb-2">Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-tertiary pointer-events-none" />
                  </div>
                </div>

                <div>
                  <label className="block mb-2">Time Slot</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background appearance-none">
                    <option>06:00 AM - 07:00 AM</option>
                    <option>07:00 AM - 08:00 AM</option>
                    <option>10:00 AM - 11:00 AM</option>
                    <option>11:00 AM - 12:00 PM</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2">Duration</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background">
                    <option>1 hour</option>
                    <option>2 hours</option>
                    <option>3 hours</option>
                  </select>
                </div>
              </div>

              <button
                onClick={() => router.push(`/booking/${futsalId}`)}
                className="w-full py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium mb-4"
              >
                Reserve Now
              </button>

              <p className="text-center text-sm text-text-tertiary">
                You won't be charged yet
              </p>

              <div className="mt-6 pt-6 border-t border-divider space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-text-tertiary">NPR 2,500 × 1 hour</span>
                  <span>NPR 2,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-tertiary">Service fee</span>
                  <span>NPR 250</span>
                </div>
                <div className="flex justify-between font-medium pt-3 border-t border-divider">
                  <span>Total</span>
                  <span className="text-primary">NPR 2,750</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
