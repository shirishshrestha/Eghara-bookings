'use client';

import { useState } from 'react';
import { MapPin, Star, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const futsals = [
  {
    id: 1,
    name: 'Elite Futsal Arena',
    location: 'Lalitpur, Kathmandu',
    image:
      'https://images.unsplash.com/photo-1760174053338-4def27153cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NjQ4MzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    reviews: 234,
    price: 2500,
    type: 'Indoor',
    facilities: ['Wifi', 'Parking', 'Showers', 'Changing Room'],
    available: true,
  },
  {
    id: 2,
    name: 'Champions Futsal Court',
    location: 'Thamel, Kathmandu',
    image:
      'https://images.unsplash.com/photo-1708472329334-c0550c39dba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBpdGNoJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjQ5NDg1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    reviews: 189,
    price: 3000,
    type: 'Outdoor',
    facilities: ['Parking', 'Showers', 'Cafeteria'],
    available: true,
  },
  {
    id: 3,
    name: 'Victory Sports Complex',
    location: 'Bhaktapur',
    image:
      'https://images.unsplash.com/photo-1723231462004-069caa209740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmYWNpbGl0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ5NDg1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    reviews: 156,
    price: 2800,
    type: 'Indoor',
    facilities: ['Wifi', 'Parking', 'Showers'],
    available: false,
  },
  {
    id: 4,
    name: 'Premier Futsal Hub',
    location: 'Baneshwor, Kathmandu',
    image:
      'https://images.unsplash.com/photo-1723074832950-9fb031b0f4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvb3IlMjBzcG9ydHMlMjBoYWxsfGVufDF8fHx8MTc2NDk0ODU2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.6,
    reviews: 198,
    price: 2200,
    type: '5-a-side',
    facilities: ['Wifi', 'Parking'],
    available: true,
  },
  {
    id: 5,
    name: 'Golden Goal Arena',
    location: 'Bouddha, Kathmandu',
    image:
      'https://images.unsplash.com/photo-1751283855655-0fd0651ab45f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBmaWVsZCUyMGdyb3VuZHxlbnwxfHx8fDE3NjQ5NDg1NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.5,
    reviews: 142,
    price: 2600,
    type: '7-a-side',
    facilities: ['Parking', 'Showers', 'Cafeteria'],
    available: true,
  },
];

export function DiscoveryPage() {
  const router = useRouter();
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([2000, 3500]);

  return (
    <div className="min-h-screen bg-background">
      {/* Search Header */}
      <div className="bg-background border-b border-border sticky top-20 z-40">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-background">
              <MapPin className="w-5 h-5 text-text-tertiary" />
              <input
                type="text"
                placeholder="Search futsal by location"
                className="flex-1 outline-none bg-transparent"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary transition-colors"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>
          </div>

          {/* Filters Panel */}
          {showFilters && (
            <div className="mt-4 p-6 bg-secondary rounded-xl">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Price Range */}
                <div>
                  <label className="block mb-3">Price Range</label>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="1500"
                      max="5000"
                      step="100"
                      value={priceRange[1]}
                      onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full accent-primary"
                    />
                    <div className="flex justify-between text-sm text-text-tertiary">
                      <span>NPR 1,500</span>
                      <span>NPR {priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div>
                  <label className="block mb-3">Minimum Rating</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-border bg-background outline-none focus:border-primary">
                    <option>Any</option>
                    <option>4.0+</option>
                    <option>4.5+</option>
                    <option>4.8+</option>
                  </select>
                </div>

                {/* Type */}
                <div>
                  <label className="block mb-3">Court Type</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-border bg-background outline-none focus:border-primary">
                    <option>All Types</option>
                    <option>Indoor</option>
                    <option>Outdoor</option>
                    <option>5-a-side</option>
                    <option>7-a-side</option>
                  </select>
                </div>

                {/* Availability */}
                <div>
                  <label className="block mb-3">Availability</label>
                  <select className="w-full px-4 py-2 rounded-lg border border-border bg-background outline-none focus:border-primary">
                    <option>All</option>
                    <option>Available Now</option>
                    <option>Available Today</option>
                  </select>
                </div>
              </div>

              {/* Facilities */}
              <div className="mt-6">
                <label className="block mb-3">Facilities</label>
                <div className="flex flex-wrap gap-2">
                  {[
                    'WiFi',
                    'Parking',
                    'Showers',
                    'Changing Room',
                    'Cafeteria',
                    'Equipment Rental',
                  ].map(facility => (
                    <button
                      key={facility}
                      className="px-4 py-2 rounded-full border border-border hover:border-primary hover:bg-primary hover:text-white transition-all"
                    >
                      {facility}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-0">
          {/* Left: List */}
          <div className="h-[calc(100vh-180px)] overflow-y-auto px-4 sm:px-6 lg:px-12 py-6">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-text-tertiary">
                <span className="font-medium text-foreground">{futsals.length}</span> futsal courts
                found
              </p>
              <select className="px-4 py-2 rounded-lg border border-border bg-background outline-none focus:border-primary">
                <option>Recommended</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Rating: High to Low</option>
              </select>
            </div>

            <div className="space-y-6">
              {futsals.map(futsal => (
                <Link
                  key={futsal.id}
                  href={`/futsal/${futsal.id}`}
                  className="group cursor-pointer bg-background rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary block"
                >
                  <div className="sm:flex">
                    <div className="relative sm:w-80 aspect-4/3 sm:aspect-auto overflow-hidden shrink-0">
                      <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                        {futsal.type}
                      </div>
                      {!futsal.available && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="bg-background px-4 py-2 rounded-lg font-medium">
                            Fully Booked
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between mb-2">
                        <h3>{futsal.name}</h3>
                        <div className="flex items-center gap-1">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="font-medium">{futsal.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-text-tertiary mb-4">
                        <MapPin className="w-4 h-4" />
                        <span>{futsal.location}</span>
                        <span className="mx-2">•</span>
                        <span>{futsal.reviews} reviews</span>
                      </div>

                      {/* Facilities */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {futsal.facilities.slice(0, 4).map(facility => (
                          <span
                            key={facility}
                            className="px-3 py-1 rounded-full bg-secondary text-sm"
                          >
                            {facility}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between mt-auto">
                        <div>
                          <span className="text-2xl font-semibold text-primary">
                            NPR {futsal.price}
                          </span>
                          <span className="text-text-tertiary ml-1">/hour</span>
                        </div>
                        {futsal.available && (
                          <button
                            onClick={e => {
                              e.preventDefault();
                              router.push(`/booking/${futsal.id}`);
                            }}
                            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            Book Now
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Map */}
          <div className="hidden lg:block sticky top-[180px] h-[calc(100vh-180px)] bg-secondary">
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-20 h-20 text-primary mx-auto mb-4" />
                <h3 className="mb-2">Interactive Map</h3>
                <p className="text-text-tertiary max-w-sm">
                  Map view showing all futsal locations with pins. Click on pins to see details.
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 max-w-md mx-auto">
                  {futsals.slice(0, 4).map((futsal, idx) => (
                    <div key={futsal.id} className="bg-background rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mb-2 mx-auto">
                        {idx + 1}
                      </div>
                      <p className="text-sm font-medium truncate">{futsal.name}</p>
                      <p className="text-xs text-text-tertiary truncate">{futsal.location}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
