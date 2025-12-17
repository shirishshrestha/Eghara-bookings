'use client';

import { useState } from 'react';
import {
  TrendingUp,
  DollarSign,
  Calendar,
  Users,
  Star,
  Plus,
  Edit,
  Eye,
  MessageSquare,
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const revenueData = [
  { month: 'Jan', revenue: 45000 },
  { month: 'Feb', revenue: 52000 },
  { month: 'Mar', revenue: 48000 },
  { month: 'Apr', revenue: 61000 },
  { month: 'May', revenue: 55000 },
  { month: 'Jun', revenue: 67000 },
  { month: 'Jul', revenue: 72000 },
];

const bookingData = [
  { day: 'Mon', bookings: 12 },
  { day: 'Tue', bookings: 19 },
  { day: 'Wed', bookings: 15 },
  { day: 'Thu', bookings: 22 },
  { day: 'Fri', bookings: 28 },
  { day: 'Sat', bookings: 35 },
  { day: 'Sun', bookings: 32 },
];

const membershipData = [
  { name: 'Active', value: 234, color: 'rgb(0, 152, 95)' },
  { name: 'Expired', value: 45, color: 'rgb(159, 159, 159)' },
  { name: 'Pending', value: 23, color: 'rgb(255, 206, 44)' },
];

const recentBookings = [
  {
    id: 1,
    customer: 'Rajesh Kumar',
    date: '2025-12-08',
    time: '06:00 PM',
    amount: 2500,
    status: 'confirmed',
  },
  {
    id: 2,
    customer: 'Suman Thapa',
    date: '2025-12-08',
    time: '07:00 PM',
    amount: 2500,
    status: 'confirmed',
  },
  {
    id: 3,
    customer: 'Amit Shrestha',
    date: '2025-12-09',
    time: '06:00 PM',
    amount: 2500,
    status: 'pending',
  },
  {
    id: 4,
    customer: 'Prakash Rai',
    date: '2025-12-10',
    time: '08:00 PM',
    amount: 2500,
    status: 'confirmed',
  },
];

const reviews = [
  {
    id: 1,
    customer: 'Rajesh Kumar',
    rating: 5,
    comment: 'Excellent facility!',
    date: '2 days ago',
  },
  {
    id: 2,
    customer: 'Suman Thapa',
    rating: 5,
    comment: 'Great experience',
    date: '1 week ago',
  },
  {
    id: 3,
    customer: 'Amit Shrestha',
    rating: 4,
    comment: 'Good but parking is tight',
    date: '2 weeks ago',
  },
];

export function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'bookings' | 'members' | 'tournaments' | 'reviews'
  >('overview');

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="mb-2">Owner Dashboard</h1>
            <p className="text-text-tertiary">Elite Futsal Arena</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors">
            <Plus className="w-5 h-5" />
            <span>Add New Post</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">
                +12.5%
              </div>
            </div>
            <p className="text-3xl font-semibold mb-1">NPR 72,000</p>
            <p className="text-text-tertiary">Monthly Revenue</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">+8.2%</div>
            </div>
            <p className="text-3xl font-semibold mb-1">163</p>
            <p className="text-text-tertiary">Total Bookings</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">
                +15.3%
              </div>
            </div>
            <p className="text-3xl font-semibold mb-1">234</p>
            <p className="text-text-tertiary">Active Members</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="px-3 py-1 rounded-full bg-green-50 text-green-600 text-sm">+0.2</div>
            </div>
            <p className="text-3xl font-semibold mb-1">4.8</p>
            <p className="text-text-tertiary">Average Rating</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-border">
          <div className="flex gap-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('overview')}
              className={`pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'overview'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-tertiary hover:text-foreground'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              className={`pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'bookings'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-tertiary hover:text-foreground'
              }`}
            >
              Bookings
            </button>
            <button
              onClick={() => setActiveTab('members')}
              className={`pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'members'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-tertiary hover:text-foreground'
              }`}
            >
              Memberships
            </button>
            <button
              onClick={() => setActiveTab('tournaments')}
              className={`pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'tournaments'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-tertiary hover:text-foreground'
              }`}
            >
              Tournaments
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === 'reviews'
                  ? 'border-primary text-primary'
                  : 'border-transparent text-text-tertiary hover:text-foreground'
              }`}
            >
              Reviews
            </button>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2>Revenue Overview</h2>
                    <p className="text-text-tertiary mt-1">Monthly revenue trend</p>
                  </div>
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgb(232, 232, 232)" />
                    <XAxis dataKey="month" stroke="rgb(113, 113, 113)" />
                    <YAxis stroke="rgb(113, 113, 113)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid rgb(232, 232, 232)',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="rgb(0, 152, 95)"
                      strokeWidth={3}
                      dot={{ fill: 'rgb(0, 152, 95)', r: 5 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Bookings Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2>Weekly Bookings</h2>
                    <p className="text-text-tertiary mt-1">This week&apos;s activity</p>
                  </div>
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={bookingData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgb(232, 232, 232)" />
                    <XAxis dataKey="day" stroke="rgb(113, 113, 113)" />
                    <YAxis stroke="rgb(113, 113, 113)" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid rgb(232, 232, 232)',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="bookings" fill="rgb(14, 135, 224)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Recent Bookings */}
              <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2>Recent Bookings</h2>
                  <button className="text-primary hover:underline">View All</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-divider">
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                          Customer
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                          Date
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                          Time
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                          Amount
                        </th>
                        <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map(booking => (
                        <tr
                          key={booking.id}
                          className="border-b border-divider hover:bg-hover-background"
                        >
                          <td className="py-4 px-4">{booking.customer}</td>
                          <td className="py-4 px-4 text-text-tertiary">{booking.date}</td>
                          <td className="py-4 px-4 text-text-tertiary">{booking.time}</td>
                          <td className="py-4 px-4">NPR {booking.amount}</td>
                          <td className="py-4 px-4">
                            <span
                              className={`px-3 py-1 rounded-full text-sm ${
                                booking.status === 'confirmed'
                                  ? 'bg-green-50 text-green-600'
                                  : 'bg-yellow-50 text-yellow-600'
                              }`}
                            >
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Membership Distribution */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="mb-6">Membership Status</h2>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={membershipData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {membershipData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3 mt-6">
                  {membershipData.map(item => (
                    <div key={item.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{item.name}</span>
                      </div>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bookings Tab */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="mb-6">All Bookings</h2>
            <div className="mb-6 flex flex-wrap gap-4">
              <select className="px-4 py-2 rounded-xl border border-border outline-none focus:border-primary bg-background">
                <option>All Status</option>
                <option>Confirmed</option>
                <option>Pending</option>
                <option>Cancelled</option>
              </select>
              <input
                type="date"
                className="px-4 py-2 rounded-xl border border-border outline-none focus:border-primary bg-background"
              />
              <input
                type="text"
                placeholder="Search customer..."
                className="flex-1 px-4 py-2 rounded-xl border border-border outline-none focus:border-primary bg-background"
              />
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-divider">
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                      ID
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                      Customer
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                      Time
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                      Amount
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                      Status
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-medium text-text-tertiary">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentBookings.map(booking => (
                    <tr
                      key={booking.id}
                      className="border-b border-divider hover:bg-hover-background"
                    >
                      <td className="py-4 px-4">#{booking.id}</td>
                      <td className="py-4 px-4">{booking.customer}</td>
                      <td className="py-4 px-4 text-text-tertiary">{booking.date}</td>
                      <td className="py-4 px-4 text-text-tertiary">{booking.time}</td>
                      <td className="py-4 px-4">NPR {booking.amount}</td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            booking.status === 'confirmed'
                              ? 'bg-green-50 text-green-600'
                              : 'bg-yellow-50 text-yellow-600'
                          }`}
                        >
                          {booking.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex gap-2">
                          <button className="p-2 rounded-lg hover:bg-hover-background">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg hover:bg-hover-background">
                            <Edit className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Memberships Tab */}
        {activeTab === 'members' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2>Membership Management</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                <Plus className="w-5 h-5" />
                <span>Add Member</span>
              </button>
            </div>
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="p-6 rounded-xl bg-linear-to-br from-green-50 to-white border border-green-100">
                <p className="text-3xl font-semibold mb-2">234</p>
                <p className="text-text-tertiary">Active Members</p>
              </div>
              <div className="p-6 rounded-xl bg-linear-to-br from-yellow-50 to-white border border-yellow-100">
                <p className="text-3xl font-semibold mb-2">23</p>
                <p className="text-text-tertiary">Pending Renewals</p>
              </div>
              <div className="p-6 rounded-xl bg-linear-to-br from-gray-50 to-white border border-gray-100">
                <p className="text-3xl font-semibold mb-2">45</p>
                <p className="text-text-tertiary">Expired</p>
              </div>
            </div>
            <p className="text-text-tertiary">
              Member list and management features would be displayed here...
            </p>
          </div>
        )}

        {/* Tournaments Tab */}
        {activeTab === 'tournaments' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2>Tournament Management</h2>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                <Plus className="w-5 h-5" />
                <span>Create Tournament</span>
              </button>
            </div>
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
              <p className="text-text-tertiary mb-4">No active tournaments</p>
              <button className="px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90">
                Create Your First Tournament
              </button>
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2>Customer Reviews</h2>
                <div className="flex items-center gap-2 mt-2">
                  <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-semibold">4.8</span>
                  <span className="text-text-tertiary">(234 reviews)</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {reviews.map(review => (
                <div
                  key={review.id}
                  className="p-5 rounded-xl border border-border hover:border-primary transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="font-medium mb-1">{review.customer}</p>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-text-tertiary">{review.date}</span>
                  </div>
                  <p className="text-text-tertiary mb-4">{review.comment}</p>
                  <button className="flex items-center gap-2 text-primary text-sm hover:underline">
                    <MessageSquare className="w-4 h-4" />
                    <span>Reply</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
