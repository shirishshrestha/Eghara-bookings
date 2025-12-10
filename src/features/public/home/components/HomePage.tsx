"use client";

import {
  Search,
  MapPin,
  Star,
  TrendingUp,
  Users,
  ChevronRight,
  Award,
  Shield,
  Zap,
  Heart,
  Calendar,
} from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Spotlight } from "@/components/ui/spotlight";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { motion } from "framer-motion";

const futsals = [
  {
    id: 1,
    name: "Elite Futsal Arena",
    location: "Lalitpur, Kathmandu",
    image:
      "https://images.unsplash.com/photo-1760174053338-4def27153cb7?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 234,
    price: 2500,
    type: "Indoor",
    featured: true,
  },
  {
    id: 2,
    name: "Champions Futsal Court",
    location: "Thamel, Kathmandu",
    image:
      "https://images.unsplash.com/photo-1708472329334-c0550c39dba6?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 189,
    price: 3000,
    type: "Outdoor",
    featured: true,
  },
  {
    id: 3,
    name: "Victory Sports Complex",
    location: "Bhaktapur",
    image:
      "https://images.unsplash.com/photo-1723231462004-069caa209740?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 156,
    price: 2800,
    type: "Indoor",
    featured: true,
  },
  {
    id: 4,
    name: "Premier Futsal Hub",
    location: "Baneshwor, Kathmandu",
    image:
      "https://images.unsplash.com/photo-1723074832950-9fb031b0f4ec?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 198,
    price: 2200,
    type: "5-a-side",
    featured: false,
  },
];

const categories = [
  { name: "5-a-side", icon: Users, count: 45, color: "bg-blue-500" },
  { name: "7-a-side", icon: Users, count: 38, color: "bg-green-500" },
  { name: "Indoor", icon: MapPin, count: 62, color: "bg-purple-500" },
  { name: "Outdoor", icon: MapPin, count: 51, color: "bg-orange-500" },
];

const features = [
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Book your court in seconds with real-time availability",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "Multiple payment options with 100% secure transactions",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book single, multiple, or recurring time slots easily",
  },
  {
    icon: Award,
    title: "Best Venues",
    description: "Curated selection of top-rated futsal courts",
  },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Regular Player",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh",
    content:
      "Best platform for booking futsal courts! Easy to use and great court selection.",
    rating: 5,
  },
  {
    name: "Suman Thapa",
    role: "Team Captain",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Suman",
    content:
      "We book our weekly games here. The process is smooth and courts are always well-maintained.",
    rating: 5,
  },
  {
    name: "Amit Shrestha",
    role: "Weekend Warrior",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit",
    content:
      "Love the variety of courts and the booking flexibility. Highly recommended!",
    rating: 5,
  },
];

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedCourtType, setSelectedCourtType] = useState("all");

  const timeSlots = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
  ];

  const courtTypes = [
    { id: "all", name: "All Courts" },
    { id: "indoor", name: "Indoor" },
    { id: "outdoor", name: "Outdoor" },
    { id: "5-a-side", name: "5-a-side" },
    { id: "7-a-side", name: "7-a-side" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Interactive Booking */}
      <div className="relative min-h-[700px] mt-[-80] pt-20 pb-10 w-full flex items-center justify-center bg-linear-to-br from-emerald-50 via-cyan-50 to-white dark:from-emerald-950 dark:via-emerald-900 dark:to-black antialiased overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 dark:bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-400/10 dark:bg-emerald-400/10 rounded-full blur-3xl" />
        </div>

        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="rgb(16 185 129)"
        />

        <div className="container relative z-10 px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-emerald-500/10 border-emerald-500/30 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20">
                <TrendingUp className="mr-1 h-3 w-3" />
                Book Your Court in Seconds
              </Badge>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-4">
                Find & Book Your
                <span className="block bg-clip-text text-transparent bg-linear-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400">
                  Perfect Court
                </span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-700 dark:text-emerald-100/80 max-w-2xl mx-auto">
                Instant booking • Real-time availability • 150+ courts
              </p>
            </div>

            {/* Interactive Booking Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20"
            >
              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 mb-6">
                {courtTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedCourtType(type.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCourtType === type.id
                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/30"
                        : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                    }`}
                  >
                    {type.name}
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-12 gap-6">
                {/* Location Search */}
                <div className="md:col-span-5">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
                    <Input
                      type="text"
                      placeholder="Lalitpur, Thamel..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-12 h-12 bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                    />
                  </div>
                </div>

                {/* Date Picker */}
                <div className="md:col-span-4">
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400 pointer-events-none z-10" />
                    <Input
                      type="date"
                      value={selectedDate.toISOString().split("T")[0]}
                      onChange={(e) =>
                        setSelectedDate(new Date(e.target.value))
                      }
                      className="pl-12 h-12 bg-neutral-50 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="md:col-span-3 flex items-end">
                  <Button
                    size="lg"
                    className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold shadow-lg shadow-emerald-600/30"
                    asChild
                  >
                    <Link href="/discovery">
                      <Search className="mr-2 h-5 w-5" />
                      Search
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Time Slots */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
                  Popular Time Slots
                </label>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {timeSlots.slice(0, 8).map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedTime === time
                          ? "bg-emerald-600 text-white shadow-md"
                          : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-4 mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
                {[
                  { label: "Courts", value: "150+", icon: MapPin },
                  { label: "Players", value: "25K+", icon: Users },
                  { label: "Bookings", value: "50K+", icon: Calendar },
                  { label: "Rating", value: "4.8★", icon: Star },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <stat.icon className="h-5 w-5 mx-auto mb-1 text-emerald-600" />
                    <div className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-4"
            >
              <span className="text-emerald-200 text-sm">Quick links:</span>
              {["View All Courts", "My Bookings", "How it Works"].map(
                (link) => (
                  <Link
                    key={link}
                    href="/discovery"
                    className="text-sm text-emerald-300 hover:text-white transition-colors underline underline-offset-4"
                  >
                    {link}
                  </Link>
                )
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Browse Categories */}
      <section className="py-16 wrapper sm:py-24 bg-neutral-50 dark:bg-black">
        <div className=" px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2">Browse by Category</h2>
              <p className="text-muted-foreground">
                Find the perfect court for your game
              </p>
            </div>
            <Button variant="ghost" asChild className="hidden sm:flex">
              <Link href="/discovery">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Link
                  key={category.name}
                  href="/discovery"
                  className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all hover:border-primary hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-900"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className={`inline-flex rounded-full ${category.color} p-3 text-white transition-transform group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <Badge variant="secondary">{category.count}</Badge>
                  </div>
                  <h3 className="font-semibold">{category.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {category.count} courts
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Futsals */}
      <section className=" py-16 sm:py-24 bg-background dark:bg-neutral-950">
        <div className=" px-4 wrapper sm:px-6 lg:px-8">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2">Featured Courts</h2>
              <p className="text-muted-foreground">
                Top-rated futsal courts in your area
              </p>
            </div>
            <Button variant="outline" asChild className="hidden sm:flex">
              <Link href="/discovery">
                View All
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {futsals.slice(0, 3).map((futsal) => (
              <Link
                key={futsal.id}
                href={`/futsal/${futsal.id}`}
                className="group"
              >
                <Card className="overflow-hidden transition-all hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="relative aspect-4/3 overflow-hidden bg-muted">
                    <Image
                      src={futsal.image}
                      alt={futsal.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    {futsal.featured && (
                      <Badge className="absolute right-3 top-3 bg-emerald-600">
                        <Award className="mr-1 h-3 w-3" />
                        Featured
                      </Badge>
                    )}
                    <Button
                      size="icon"
                      variant="secondary"
                      className="absolute left-3 top-3 opacity-0 transition-opacity group-hover:opacity-100"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="font-semibold leading-tight">
                        {futsal.name}
                      </h3>
                      <Badge variant="outline">{futsal.type}</Badge>
                    </div>
                    <div className="mb-4 flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-1 h-4 w-4" />
                      {futsal.location}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{futsal.rating}</span>
                        <span className="text-sm text-muted-foreground">
                          ({futsal.reviews})
                        </span>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">
                          NPR {futsal.price.toLocaleString()}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          per hour
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" asChild>
              <Link href="/discovery">
                View All Courts
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with Gradients */}
      <section className="py-20 relative  bg-background dark:bg-neutral-950">
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-400/20 dark:bg-emerald-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-400/20 dark:bg-cyan-600/20 rounded-full blur-3xl" />

        <div className=" px-4 wrapper sm:px-6 lg:px-8 relative z-10">
          <div className="  text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
              Our Features
            </Badge>
            <h2 className="mb-4 text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-neutral-900 via-neutral-700 to-neutral-900 dark:from-white dark:via-neutral-200 dark:to-white">
              Why Choose Eghara?
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              Everything you need for the perfect futsal experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              const gradients = [
                "from-emerald-500 to-teal-600",
                "from-blue-500 to-cyan-600",
                "from-purple-500 to-pink-600",
                "from-orange-500 to-red-600",
              ];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  className="group relative"
                >
                  {/* Gradient Background Card */}
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl from-emerald-400/50 to-cyan-400/50 dark:from-emerald-600/50 dark:to-cyan-600/50" />

                  <div className="relative h-full p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-lg hover:shadow-2xl transition-all duration-300">
                    {/* Icon with Gradient */}
                    <div
                      className={`mb-6 inline-flex p-4 rounded-2xl bg-linear-to-br ${gradients[i]} shadow-lg`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="mb-3 text-xl font-bold text-neutral-900 dark:text-white">
                      {feature.title}
                    </h3>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Decorative gradient line */}
                    <div
                      className={`mt-6 h-1 w-0 group-hover:w-full transition-all duration-500 rounded-full bg-linear-to-r ${gradients[i]}`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courts - Modern Grid */}
      <section className="py-20 bg-neutral-50 dark:bg-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-grid-neutral-900/[0.02] dark:bg-grid-white/[0.02]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

        <div className="wrapper px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-500/10 border-emerald-500/20 text-emerald-700 dark:text-emerald-400">
              Featured Courts
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                Premium Futsal Courts
              </span>
              <br />
              <span className="text-emerald-600 dark:text-emerald-400">
                Book Your Perfect Match
              </span>
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
              Explore our handpicked selection of premium futsal courts across
              Nepal. Each venue is verified for quality and equipped with modern
              facilities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
            {futsals.map((futsal, index) => (
              <motion.div
                key={futsal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href={`/futsal/${futsal.id}`} className="group block">
                  <Card className="overflow-hidden h-full transition-all hover:shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 relative">
                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-linear-to-br from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-300 z-10 pointer-events-none" />

                    <div className="relative aspect-4/3 overflow-hidden">
                      <Image
                        src={futsal.image}
                        alt={futsal.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      {futsal.featured && (
                        <Badge className="absolute right-3 top-3 bg-emerald-600 z-20">
                          <Award className="mr-1 h-3 w-3" />
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4 relative z-10">
                      <h3 className="font-bold text-lg mb-2 text-neutral-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {futsal.name}
                      </h3>
                      <div className="flex items-center text-sm text-neutral-600 dark:text-neutral-400 mb-3">
                        <MapPin className="mr-1 h-4 w-4" />
                        {futsal.location}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{futsal.rating}</span>
                          <span className="text-xs text-neutral-500">
                            ({futsal.reviews})
                          </span>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">
                            NPR {futsal.price.toLocaleString()}
                          </div>
                          <div className="text-xs text-neutral-500">
                            per hour
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant="outline"
                        className="mt-3 w-full justify-center"
                      >
                        {futsal.type}
                      </Badge>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild>
              <Link href="/discovery">
                View All Courts
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <div className="pb-20 antialiased bg-neutral-50 dark:bg-black  relative overflow-hidden">
        <div className="wrapper">
          <div className=" text-center mb-12 relative z-10">
            <h2 className="mb-4">What Players Say</h2>
            <p className="text-lg text-muted-foreground">
              Join thousands of satisfied players
            </p>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>

      {/* CTA Section - Modern Gradient */}
      <section className="relative py-32 overflow-hidden bg-linear-to-br from-emerald-50 via-cyan-50 to-emerald-100 dark:from-emerald-950 dark:via-emerald-900 dark:to-black">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-neutral-900/[0.02] dark:bg-grid-white/[0.02]" />

        <div className="wrapper px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Animated border card */}
            <div className="relative p-1 rounded-3xl bg-linear-to-r from-emerald-500 via-cyan-500 to-emerald-500 bg-size-[200%_auto] animate-gradient">
              <div className="bg-white dark:bg-emerald-950 rounded-3xl p-12">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6">
                  Ready to Play?
                </h2>
                <p className="text-lg md:text-xl text-neutral-700 dark:text-emerald-100 mb-10 max-w-2xl mx-auto">
                  Join thousands of players and book your court now. Experience
                  hassle-free futsal booking across Nepal.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-white dark:text-emerald-950 dark:hover:bg-emerald-50 font-semibold shadow-xl px-8 py-6 text-lg"
                    asChild
                  >
                    <Link href="/discovery">
                      <Search className="mr-2 h-5 w-5" />
                      Browse Courts
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-emerald-600 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-300 dark:text-white dark:hover:bg-emerald-900 px-8 py-6 text-lg"
                    asChild
                  >
                    <Link href="/dashboard/player">
                      <Users className="mr-2 h-5 w-5" />
                      My Dashboard
                    </Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="mt-12 flex flex-wrap justify-center gap-8 text-neutral-600 dark:text-emerald-200">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    <span className="text-sm">Secure Payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <span className="text-sm">Instant Booking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-emerald-500 text-emerald-500 dark:fill-emerald-400 dark:text-emerald-400" />
                    <span className="text-sm">4.8 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
