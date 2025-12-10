"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const popularDestinations = [
  { name: "Lalitpur", subtitle: "Futsal courts" },
  { name: "Kathmandu", subtitle: "Indoor courts" },
  { name: "Pokhara", subtitle: "Outdoor venues" },
  { name: "Bhaktapur", subtitle: "5-a-side courts" },
  { name: "Butwal", subtitle: "Training facilities" },
  { name: "Chitwan", subtitle: "Sports complexes" },
];

const courtTypes = [
  { name: "5-a-side", subtitle: "Small teams" },
  { name: "7-a-side", subtitle: "Medium teams" },
  { name: "Indoor Courts", subtitle: "All weather" },
  { name: "Outdoor Courts", subtitle: "Natural grass" },
  { name: "Turf Courts", subtitle: "Synthetic" },
  { name: "Premium Venues", subtitle: "Top rated" },
];

const support = [
  "Help Center",
  "Safety information",
  "Cancellation options",
  "Report a concern",
  "Payment support",
  "Court owner resources",
];

const hosting = [
  "List your court",
  "Court owner dashboard",
  "Hosting resources",
  "Community forum",
  "Responsible hosting",
  "Join a hosting class",
];

const eghara = [
  "About us",
  "Newsroom",
  "Careers",
  "Investors",
  "Gift cards",
  "Partnerships",
];

export function Footer() {
  return (
    <footer className="border-t bg-neutral-50 dark:bg-neutral-950 mt-auto">
      <div className="wrapper">
        <div className="container px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8">
            {/* Popular Locations */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-neutral-900 dark:text-white">
                Popular Locations
              </h3>
              <ul className="space-y-3 list-none">
                {popularDestinations.map((dest) => (
                  <li key={dest.name}>
                    <Link
                      href="/discovery"
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      <div>{dest.name}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-500">
                        {dest.subtitle}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Court Types */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-neutral-900 dark:text-white">
                Court Types
              </h3>
              <ul className="space-y-3 list-none">
                {courtTypes.map((type) => (
                  <li key={type.name}>
                    <Link
                      href="/discovery"
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      <div>{type.name}</div>
                      <div className="text-xs text-neutral-500 dark:text-neutral-500">
                        {type.subtitle}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-neutral-900 dark:text-white">
                Support
              </h3>
              <ul className="space-y-3 list-none">
                {support.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hosting */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-neutral-900 dark:text-white">
                Hosting
              </h3>
              <ul className="space-y-3 list-none">
                {hosting.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eghara */}
            <div>
              <h3 className="font-semibold text-sm mb-4 text-neutral-900 dark:text-white">
                Eghara
              </h3>
              <ul className="space-y-3 list-none">
                {eghara.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright and Links */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                <span>© 2024 Eghara, Inc.</span>
                <span className="hidden md:inline">·</span>
                <Link
                  href="#"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Privacy
                </Link>
                <span>·</span>
                <Link
                  href="#"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Terms
                </Link>
                <span>·</span>
                <Link
                  href="#"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Sitemap
                </Link>
                <span>·</span>
                <Link
                  href="#"
                  className="hover:text-neutral-900 dark:hover:text-white transition-colors"
                >
                  Company details
                </Link>
              </div>

              {/* Language, Currency, and Social */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3">
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
