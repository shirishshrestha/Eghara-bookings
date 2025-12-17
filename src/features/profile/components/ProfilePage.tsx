'use client';

import { useState } from 'react';
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
  Check,
  X,
  Users,
  Trophy,
  Shield,
  Zap,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { format } from 'date-fns';

interface ProfilePageProps {
  futsalId: string;
}

const images = [
  'https://images.unsplash.com/photo-1760174053338-4def27153cb7?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1708472329334-c0550c39dba6?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1723231462004-069caa209740?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1723074832950-9fb031b0f4ec?w=1200&h=800&fit=crop',
  'https://images.unsplash.com/photo-1721557247595-c419f82c67ba?w=1200&h=800&fit=crop',
];

const reviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    rating: 5,
    date: '2 days ago',
    comment:
      'Excellent facility! Well maintained courts and friendly staff. Highly recommended for weekend games.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh',
  },
  {
    id: 2,
    name: 'Suman Thapa',
    rating: 5,
    date: '1 week ago',
    comment:
      'Great location and amenities. The booking process was smooth and the court was in perfect condition.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Suman',
  },
  {
    id: 3,
    name: 'Amit Shrestha',
    rating: 4,
    date: '2 weeks ago',
    comment: 'Good facilities overall. The parking was convenient. Would book again!',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amit',
  },
];

const timeSlots = [
  { time: '06:00 AM', available: true },
  { time: '07:00 AM', available: true },
  { time: '08:00 AM', available: false },
  { time: '09:00 AM', available: true },
  { time: '10:00 AM', available: true },
  { time: '11:00 AM', available: false },
  { time: '12:00 PM', available: true },
  { time: '01:00 PM', available: true },
  { time: '02:00 PM', available: false },
  { time: '03:00 PM', available: true },
  { time: '04:00 PM', available: true },
  { time: '05:00 PM', available: true },
  { time: '06:00 PM', available: false },
  { time: '07:00 PM', available: true },
  { time: '08:00 PM', available: true },
];

const similarVenues = [
  {
    id: 2,
    name: 'Champions Futsal Court',
    location: 'Thamel, Kathmandu',
    image: 'https://images.unsplash.com/photo-1708472329334-c0550c39dba6?w=400&h=300&fit=crop',
    rating: 4.9,
    price: 3000,
  },
  {
    id: 4,
    name: 'Premier Futsal Hub',
    location: 'Baneshwor, Kathmandu',
    image: 'https://images.unsplash.com/photo-1723074832950-9fb031b0f4ec?w=400&h=300&fit=crop',
    rating: 4.6,
    price: 2200,
  },
  {
    id: 3,
    name: 'Victory Sports Complex',
    location: 'Bhaktapur',
    image: 'https://images.unsplash.com/photo-1723231462004-069caa209740?w=400&h=300&fit=crop',
    rating: 4.7,
    price: 2800,
  },
];

export function ProfilePage({ futsalId }: ProfilePageProps) {
  const router = useRouter();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextLightboxImage = () => {
    setLightboxIndex(prev => (prev + 1) % images.length);
  };

  const prevLightboxImage = () => {
    setLightboxIndex(prev => (prev - 1 + images.length) % images.length);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      router.push(`/booking/${futsalId}?date=${selectedDate.toISOString()}&time=${selectedTime}`);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Elite Futsal Arena',
          text: 'Check out this amazing futsal court!',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share failed', error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Image Gallery with Lightbox */}
      <div className="container px-4 py-6 sm:px-6 lg:px-8">
        <div className="grid gap-2 lg:grid-cols-4 lg:grid-rows-2">
          {/* Main Image */}
          <div
            className="group relative aspect-video cursor-pointer overflow-hidden rounded-2xl bg-muted lg:col-span-2 lg:row-span-2 lg:aspect-auto"
            onClick={() => openLightbox(0)}
          >
            <Image
              src={images[0]}
              alt="Main court view"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
          </div>

          {/* Thumbnail Grid */}
          {images.slice(1, 5).map((image, index) => (
            <div
              key={index}
              className="group relative hidden aspect-video cursor-pointer overflow-hidden rounded-2xl bg-muted lg:block"
              onClick={() => openLightbox(index + 1)}
            >
              <Image
                src={image}
                alt={`Court view ${index + 2}`}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" />
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-white">
                  <span className="text-2xl font-bold">+{images.length - 5} more</span>
                </div>
              )}
            </div>
          ))}

          {/* View All Photos Button */}
          <Button
            variant="secondary"
            className="absolute bottom-4 right-4 shadow-lg lg:bottom-6 lg:right-6"
            onClick={() => openLightbox(0)}
          >
            View All Photos
          </Button>
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl p-0">
          <div className="relative aspect-video bg-black">
            <Image
              src={images[lightboxIndex]}
              alt={`Court view ${lightboxIndex + 1}`}
              fill
              className="object-contain"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              onClick={prevLightboxImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
              onClick={nextLightboxImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-sm text-white">
              {lightboxIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <div className="container px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Info */}
          <div className="lg:col-span-2">
            {/* Header */}
            <div className="mb-6">
              <div className="mb-4 flex items-start justify-between">
                <div>
                  <h1 className="mb-2">Elite Futsal Arena</h1>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium text-foreground">4.8</span>
                      <span>(234 reviews)</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-5 w-5" />
                      <span>Lalitpur, Kathmandu</span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" onClick={handleShare}>
                    <Share2 className="h-5 w-5" />
                  </Button>
                  <Button variant="outline" size="icon" onClick={() => setIsFavorite(!isFavorite)}>
                    <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : ''}`} />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <Badge>Indoor</Badge>
                <Badge>5-a-side</Badge>
                <Badge variant="secondary">Premium</Badge>
                <Badge variant="outline">Verified</Badge>
              </div>
            </div>

            {/* Description */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>About This Venue</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Elite Futsal Arena is a premium indoor futsal facility located in the heart of
                  Lalitpur. Our state-of-the-art court features professional-grade artificial turf,
                  excellent lighting, and modern amenities to ensure the best playing experience.
                </p>
                <p className="text-muted-foreground">
                  Perfect for both casual games and competitive matches, we offer flexible booking
                  options and competitive pricing. Our facility includes changing rooms, shower
                  facilities, parking, and a cafeteria.
                </p>
              </CardContent>
            </Card>

            {/* Features */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Facilities & Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { icon: Car, label: 'Free Parking' },
                    { icon: ShowerHead, label: 'Shower Facilities' },
                    { icon: Wifi, label: 'Free WiFi' },
                    { icon: User, label: 'Changing Rooms' },
                    { icon: Zap, label: 'Floodlights' },
                    { icon: Shield, label: 'First Aid' },
                    { icon: Trophy, label: 'Equipment Available' },
                    { icon: Users, label: 'Cafeteria' },
                  ].map(feature => {
                    const Icon = feature.icon;
                    return (
                      <div key={feature.label} className="flex items-center gap-3">
                        <div className="rounded-lg bg-primary/10 p-2 text-primary">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span>{feature.label}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Opening Hours */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Opening Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {[
                  { day: 'Monday - Friday', hours: '6:00 AM - 10:00 PM' },
                  { day: 'Saturday', hours: '6:00 AM - 11:00 PM' },
                  { day: 'Sunday', hours: '6:00 AM - 11:00 PM' },
                ].map(schedule => (
                  <div key={schedule.day} className="flex justify-between">
                    <span className="text-muted-foreground">{schedule.day}</span>
                    <span className="font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Reviews ({reviews.length})</CardTitle>
                  <Button variant="outline" size="sm">
                    Write Review
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id}>
                    <div className="flex items-start gap-4">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <div className="mb-1 flex items-center justify-between">
                          <span className="font-semibold">{review.name}</span>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <div className="mb-2 flex gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    </div>
                    {review.id !== reviews[reviews.length - 1].id && <Separator className="mt-4" />}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Similar Venues */}
            <div className="mt-8">
              <h2 className="mb-4">Similar Venues</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {similarVenues.map(venue => (
                  <Link key={venue.id} href={`/futsal/${venue.id}`}>
                    <Card className="overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative aspect-video bg-muted">
                        <Image src={venue.image} alt={venue.name} fill className="object-cover" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-1 text-sm font-semibold">{venue.name}</h3>
                        <div className="mb-2 flex items-center text-xs text-muted-foreground">
                          <MapPin className="mr-1 h-3 w-3" />
                          {venue.location}
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-xs font-medium">{venue.rating}</span>
                          </div>
                          <span className="text-sm font-bold">NPR {venue.price}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex items-baseline justify-between">
                    <CardTitle>Quick Booking</CardTitle>
                    <div>
                      <span className="text-2xl font-bold">NPR 2,500</span>
                      <span className="text-muted-foreground">/hour</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Date Picker */}
                  <div>
                    <Label className="mb-2 block text-sm font-medium">Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left">
                          <Calendar className="mr-2 h-4 w-4" />
                          {selectedDate ? format(selectedDate, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                          mode="single"
                          selected={selectedDate}
                          onSelect={setSelectedDate}
                          disabled={(date: Date) => date < new Date()}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Time Slots */}
                  <div>
                    <Label className="mb-2 block text-sm font-medium">Select Time</Label>
                    <div className="grid max-h-60 grid-cols-2 gap-2 overflow-y-auto">
                      {timeSlots.map(slot => (
                        <Button
                          key={slot.time}
                          variant={selectedTime === slot.time ? 'default' : 'outline'}
                          size="sm"
                          disabled={!slot.available}
                          onClick={() => setSelectedTime(slot.time)}
                          className="justify-start"
                        >
                          {slot.available ? (
                            <Check className="mr-2 h-3 w-3" />
                          ) : (
                            <X className="mr-2 h-3 w-3" />
                          )}
                          {slot.time}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Summary */}
                  {selectedDate && selectedTime && (
                    <div className="rounded-lg bg-muted p-4 text-sm">
                      <div className="mb-2 flex justify-between">
                        <span className="text-muted-foreground">Date</span>
                        <span className="font-medium">{format(selectedDate, 'PP')}</span>
                      </div>
                      <div className="mb-2 flex justify-between">
                        <span className="text-muted-foreground">Time</span>
                        <span className="font-medium">{selectedTime}</span>
                      </div>
                      <Separator className="my-2" />
                      <div className="flex justify-between text-base font-semibold">
                        <span>Total</span>
                        <span>NPR 2,500</span>
                      </div>
                    </div>
                  )}

                  {/* Book Button */}
                  <Button
                    className="w-full"
                    size="lg"
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleBooking}
                  >
                    {selectedDate && selectedTime ? 'Proceed to Booking' : 'Select Date & Time'}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    Free cancellation up to 24 hours before booking
                  </p>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="mt-4">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-muted-foreground" />
                    <span>+977 9801234567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span>info@elitefutsal.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                    <span>Pulchowk, Lalitpur</span>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View on Map
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Label({ className, children, ...props }: React.ComponentProps<'label'>) {
  return (
    <label className={`text-sm font-medium ${className || ''}`} {...props}>
      {children}
    </label>
  );
}
