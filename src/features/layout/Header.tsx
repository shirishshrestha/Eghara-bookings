"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useState, useEffect } from "react";
import { Menu, X, User } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export const Header: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const { scrollY } = useScroll();
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0px 0px 0px rgba(0,0,0,0)", "0px 2px 8px rgba(0,0,0,0.1)"]
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Using requestAnimationFrame to avoid sync setState warning
    requestAnimationFrame(() => setMounted(true));

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Futsals", href: "/futsals" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      style={{ boxShadow: headerShadow }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-primary-foreground">
                  E
                </span>
              </div>
              <span className="text-2xl font-bold text-foreground">ghara</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
                >
                  {item.label}
                </motion.span>
              </Link>
            ))}
          </nav>

          {/* Auth Buttons & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? "🌞" : "🌙"}
              </Button>
            )}

            <Button variant="ghost">Sign In</Button>

            <Button>
              <User className="w-4 h-4 mr-2" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-card border-t border-border"
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <motion.span
                    whileTap={{ scale: 0.98 }}
                    className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.span>
                </Link>
              ))}

              <div className="border-t border-border pt-4 mt-2">
                {mounted && (
                  <Button
                    variant="ghost"
                    className="w-full justify-start mb-2"
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
                  </Button>
                )}

                <Button variant="ghost" className="w-full justify-start">
                  Sign In
                </Button>

                <Button className="w-full justify-center gap-2 mt-2">
                  <User className="w-4 h-4" />
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
