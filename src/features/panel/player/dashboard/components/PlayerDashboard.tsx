'use client';

import {
  Calendar,
  Clock,
  Users,
  Wallet,
  Bell,
  Heart,
  MapPin,
  Star,
  ChevronRight,
  Trophy,
} from 'lucide-react';
import Link from 'next/link';

const upcomingBookings = [
  {
    id: 1,
    futsal: 'Elite Futsal Arena',
    location: 'Lalitpur, Kathmandu',
    date: '2025-12-08',
    time: '06:00 PM - 07:00 PM',
    price: 2500,
    image:
      'https://images.unsplash.com/photo-1760174053338-4def27153cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NjQ4MzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'confirmed',
  },
  {
    id: 2,
    futsal: 'Champions Futsal Court',
    location: 'Thamel, Kathmandu',
    date: '2025-12-10',
    time: '07:00 PM - 08:00 PM',
    price: 3000,
    image:
      'https://images.unsplash.com/photo-1708472329334-c0550c39dba6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHBpdGNoJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NjQ5NDg1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    status: 'confirmed',
  },
];

const teams = [
  {
    id: 1,
    name: 'Weekend Warriors',
    members: 12,
    wins: 8,
    losses: 3,
    draws: 2,
  },
  { id: 2, name: 'FC Kathmandu', members: 10, wins: 5, losses: 4, draws: 1 },
];

const favorites = [
  {
    id: 1,
    name: 'Elite Futsal Arena',
    location: 'Lalitpur',
    rating: 4.8,
    price: 2500,
    image:
      'https://images.unsplash.com/photo-1760174053338-4def27153cb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXRzYWwlMjBjb3VydCUyMGluZG9vcnxlbnwxfHx8fDE3NjQ4MzQ0ODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    name: 'Victory Sports Complex',
    location: 'Bhaktapur',
    rating: 4.7,
    price: 2800,
    image:
      'https://images.unsplash.com/photo-1723231462004-069caa209740?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBmYWNpbGl0eSUyMGFlcmlhbHxlbnwxfHx8fDE3NjQ5NDg1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const notifications = [
  {
    id: 1,
    type: 'booking',
    message: 'Booking confirmed for Elite Futsal Arena',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'reminder',
    message: 'Upcoming match tomorrow at 6 PM',
    time: '1 day ago',
  },
  {
    id: 3,
    type: 'team',
    message: 'New member joined Weekend Warriors',
    time: '2 days ago',
  },
];

export function PlayerDashboard() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2">My Dashboard</h1>
          <p className="text-text-tertiary">Welcome back, Rajesh!</p>
        </div>

        {/* Stats Overview */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <ChevronRight className="w-5 h-5 text-text-tertiary" />
            </div>
            <p className="text-3xl font-semibold mb-1">12</p>
            <p className="text-text-tertiary">Total Bookings</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <ChevronRight className="w-5 h-5 text-text-tertiary" />
            </div>
            <p className="text-3xl font-semibold mb-1">2</p>
            <p className="text-text-tertiary">My Teams</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <Wallet className="w-6 h-6 text-green-600" />
              </div>
              <ChevronRight className="w-5 h-5 text-text-tertiary" />
            </div>
            <p className="text-3xl font-semibold mb-1">NPR 5,200</p>
            <p className="text-text-tertiary">Wallet Balance</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-orange-600" />
              </div>
              <ChevronRight className="w-5 h-5 text-text-tertiary" />
            </div>
            <p className="text-3xl font-semibold mb-1">13</p>
            <p className="text-text-tertiary">Matches Won</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Bookings */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2>Upcoming Bookings</h2>
                <button className="text-primary hover:underline">View All</button>
              </div>

              <div className="space-y-4">
                {upcomingBookings.map(booking => (
                  <Link
                    key={booking.id}
                    href={`/futsal/${booking.id}`}
                    className="flex gap-4 p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
                  >
                    <div className="flex-1">
                      <h3 className="mb-1">{booking.futsal}</h3>
                      <div className="flex items-center gap-1 text-sm text-text-tertiary mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{booking.location}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-text-tertiary" />
                          <span>{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-text-tertiary" />
                          <span>{booking.time}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary">NPR {booking.price}</p>
                      <span className="inline-block mt-2 px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">
                        {booking.status}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>

              <button className="w-full mt-4 py-3 border-2 border-dashed border-border rounded-xl hover:border-primary transition-colors">
                + Book New Court
              </button>
            </div>

            {/* My Teams */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2>My Teams</h2>
                <button className="text-primary hover:underline">View All</button>
              </div>

              <div className="space-y-4">
                {teams.map(team => (
                  <div
                    key={team.id}
                    className="p-5 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="mb-2">{team.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-text-tertiary">
                          <Users className="w-4 h-4" />
                          <span>{team.members} members</span>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                        View
                      </button>
                    </div>

                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-divider">
                      <div className="text-center">
                        <p className="text-xl font-semibold text-green-600">{team.wins}</p>
                        <p className="text-sm text-text-tertiary">Wins</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-semibold text-text-tertiary">{team.draws}</p>
                        <p className="text-sm text-text-tertiary">Draws</p>
                      </div>
                      <div className="text-center">
                        <p className="text-xl font-semibold text-red-600">{team.losses}</p>
                        <p className="text-sm text-text-tertiary">Losses</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Favorite Futsals */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2>Favorite Futsals</h2>
                <button className="text-primary hover:underline">View All</button>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {favorites.map(futsal => (
                  <Link
                    key={futsal.id}
                    href={`/futsal/${futsal.id}`}
                    className="group cursor-pointer rounded-xl overflow-hidden border border-border hover:border-primary hover:shadow-md transition-all"
                  >
                    <div className="relative aspect-4/3 overflow-hidden bg-secondary">
                      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                      </button>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-2">{futsal.name}</h4>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{futsal.rating}</span>
                        </div>
                        <span className="font-medium text-primary">NPR {futsal.price}/hr</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Wallet */}
            <div className="bg-linear-to-br from-primary to-primary/80 rounded-2xl p-6 text-white shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Wallet className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-white/80">Wallet Balance</p>
                    <p className="text-2xl font-semibold">NPR 5,200</p>
                  </div>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <button className="w-full py-3 bg-white text-primary rounded-xl hover:bg-white/90 transition-colors font-medium">
                  Add Money
                </button>
                <button className="w-full py-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors">
                  Transaction History
                </button>
              </div>

              <div className="pt-4 border-t border-white/20">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white/80">Total Spent</span>
                  <span className="font-medium">NPR 32,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/80">Cashback Earned</span>
                  <span className="font-medium">NPR 1,625</span>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3>Notifications</h3>
                <Bell className="w-5 h-5 text-text-tertiary" />
              </div>

              <div className="space-y-4">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className="flex gap-3 pb-4 border-b border-divider last:border-0 last:pb-0"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      {notification.type === 'booking' && (
                        <Calendar className="w-5 h-5 text-primary" />
                      )}
                      {notification.type === 'reminder' && (
                        <Bell className="w-5 h-5 text-primary" />
                      )}
                      {notification.type === 'team' && <Users className="w-5 h-5 text-primary" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm mb-1">{notification.message}</p>
                      <p className="text-xs text-text-tertiary">{notification.time}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 py-2 text-sm text-primary hover:underline">
                View All Notifications
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <button className="w-full py-3 px-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>Book a Court</span>
                </button>
                <button className="w-full py-3 px-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Create Team</span>
                </button>
                <button className="w-full py-3 px-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all text-left flex items-center gap-3">
                  <Heart className="w-5 h-5 text-primary" />
                  <span>Find Players</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
