"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  CreditCard,
  Check,
  ChevronLeft,
  AlertCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface BookingPageProps {
  futsalId: string;
}

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

export function BookingPage({ futsalId }: BookingPageProps) {
  const router = useRouter();
  const [bookingType, setBookingType] = useState<
    "single" | "multiple" | "recurring"
  >("single");
  const [selectedDate, setSelectedDate] = useState("2025-12-06");
  const [selectedTime, setSelectedTime] = useState("06:00 AM");
  const [duration, setDuration] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState("esewa");

  const pricePerHour = 2500;
  const subtotal = pricePerHour * duration;
  const serviceFee = subtotal * 0.1;
  const total = subtotal + serviceFee;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <button
          onClick={() => router.push(`/futsal/${futsalId}`)}
          className="flex items-center gap-2 text-text-tertiary hover:text-foreground mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to futsal</span>
        </button>

        <h1 className="mb-8">Complete Your Booking</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Booking Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Booking Type */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="mb-6">Booking Type</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                <button
                  onClick={() => setBookingType("single")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    bookingType === "single"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-center">
                    <Calendar className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-medium">Single</p>
                    <p className="text-sm text-text-tertiary mt-1">
                      One-time booking
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => setBookingType("multiple")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    bookingType === "multiple"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-center">
                    <Calendar className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-medium">Multiple</p>
                    <p className="text-sm text-text-tertiary mt-1">
                      Select dates
                    </p>
                  </div>
                </button>
                <button
                  onClick={() => setBookingType("recurring")}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    bookingType === "recurring"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-center">
                    <Calendar className="w-6 h-6 mx-auto mb-2" />
                    <p className="font-medium">Recurring</p>
                    <p className="text-sm text-text-tertiary mt-1">
                      Weekly/Monthly
                    </p>
                  </div>
                </button>
              </div>
            </div>

            {/* Date & Time Selection */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="mb-6">Select Date & Time</h2>

              {bookingType === "single" && (
                <div className="space-y-6">
                  <div>
                    <label className="block mb-3">Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                    />
                  </div>

                  <div>
                    <label className="block mb-3">Time Slot</label>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                      {timeSlots.slice(0, 12).map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`px-3 py-2 rounded-lg border transition-all text-sm ${
                            selectedTime === time
                              ? "border-primary bg-primary text-white"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-3">Duration</label>
                    <div className="flex gap-3">
                      {[1, 2, 3, 4].map((hrs) => (
                        <button
                          key={hrs}
                          onClick={() => setDuration(hrs)}
                          className={`flex-1 px-4 py-3 rounded-xl border transition-all ${
                            duration === hrs
                              ? "border-primary bg-primary text-white"
                              : "border-border hover:border-primary"
                          }`}
                        >
                          {hrs} {hrs === 1 ? "Hour" : "Hours"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {bookingType === "multiple" && (
                <div className="space-y-4">
                  <p className="text-text-tertiary">
                    Select multiple dates for your bookings
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="date"
                      className="px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                    />
                    <input
                      type="date"
                      className="px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                    />
                    <input
                      type="date"
                      className="px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                    />
                    <button className="px-4 py-3 rounded-xl border-2 border-dashed border-border hover:border-primary transition-colors">
                      + Add Date
                    </button>
                  </div>
                </div>
              )}

              {bookingType === "recurring" && (
                <div className="space-y-4">
                  <div>
                    <label className="block mb-3">Frequency</label>
                    <select className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background">
                      <option>Weekly - Every Friday</option>
                      <option>Weekly - Every Saturday</option>
                      <option>Weekly - Every Sunday</option>
                      <option>Bi-weekly</option>
                      <option>Monthly</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-3">Start Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                      />
                    </div>
                    <div>
                      <label className="block mb-3">End Date</label>
                      <input
                        type="date"
                        className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="mb-6">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                  />
                </div>
                <div>
                  <label className="block mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+977 9841234567"
                    className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-border outline-none focus:border-primary bg-background"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="mb-6">Payment Method</h2>
              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod("esewa")}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "esewa"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">eSewa</p>
                      <p className="text-sm text-text-tertiary">
                        Digital wallet
                      </p>
                    </div>
                  </div>
                  {paymentMethod === "esewa" && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod("khalti")}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "khalti"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-purple-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">Khalti</p>
                      <p className="text-sm text-text-tertiary">
                        Digital wallet
                      </p>
                    </div>
                  </div>
                  {paymentMethod === "khalti" && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>

                <button
                  onClick={() => setPaymentMethod("connectips")}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === "connectips"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium">ConnectIPS</p>
                      <p className="text-sm text-text-tertiary">
                        Bank transfer
                      </p>
                    </div>
                  </div>
                  {paymentMethod === "connectips" && (
                    <Check className="w-5 h-5 text-primary" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Summary Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-28 space-y-6">
              {/* Futsal Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="mb-4">Booking Summary</h3>
                <div className="flex gap-4 mb-4">
                  <div className="flex-1">
                    <h4>Elite Futsal Arena</h4>
                    <p className="text-sm text-text-tertiary">
                      Lalitpur, Kathmandu
                    </p>
                  </div>
                </div>

                <div className="space-y-3 border-t border-divider pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-text-tertiary" />
                    <span className="text-text-tertiary">Date:</span>
                    <span className="ml-auto">{selectedDate}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-text-tertiary" />
                    <span className="text-text-tertiary">Time:</span>
                    <span className="ml-auto">{selectedTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-text-tertiary" />
                    <span className="text-text-tertiary">Duration:</span>
                    <span className="ml-auto">
                      {duration} hour{duration > 1 ? "s" : ""}
                    </span>
                  </div>
                </div>
              </div>

              {/* Price Breakdown */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="mb-4">Price Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-tertiary">
                      NPR {pricePerHour} × {duration} hour
                      {duration > 1 ? "s" : ""}
                    </span>
                    <span>NPR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-tertiary">
                      Service fee (10%)
                    </span>
                    <span>NPR {serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-medium pt-3 border-t border-divider">
                    <span>Total (NPR)</span>
                    <span className="text-primary text-xl">
                      NPR {total.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl flex gap-3">
                  <AlertCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium text-blue-900 mb-1">
                      Cancellation Policy
                    </p>
                    <p className="text-blue-700">
                      Free cancellation up to 24 hours before booking time
                    </p>
                  </div>
                </div>

                <button className="w-full mt-6 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-colors font-medium">
                  Confirm & Pay NPR {total.toLocaleString()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
