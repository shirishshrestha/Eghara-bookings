export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-linear-to-br from-primary/5 via-background to-accent">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-sm font-semibold text-primary">
                Nepal&apos;s Leading Futsal Platform
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Futsal Management & Booking System
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              A modern, integrated web-based platform designed to digitalize
              futsal discovery, booking, management, and community engagement
              throughout Nepal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Book a Court
              </button>
              <button className="px-8 py-3 bg-card text-card-foreground border border-border rounded-lg font-semibold hover:bg-accent transition-colors">
                List Your Venue
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Seamless Digital Ecosystem
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Players */}
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                For Players
              </h3>
              <p className="text-muted-foreground">
                Discover nearby futsal courts, book instantly, and connect with
                the local sports community.
              </p>
            </div>

            {/* Venue Owners */}
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-chart-2/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-chart-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                For Venue Owners
              </h3>
              <p className="text-muted-foreground">
                Enhance venue visibility, manage bookings efficiently, and grow
                your business online.
              </p>
            </div>

            {/* Admins */}
            <div className="bg-background border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-chart-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                For Admins
              </h3>
              <p className="text-muted-foreground">
                Comprehensive dashboard to oversee operations, analytics, and
                platform management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Active Venues</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/80">Players</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-primary-foreground/80">Bookings</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Cities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Why Choose Eghara?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Instant Booking
                  </h3>
                  <p className="text-muted-foreground">
                    Book your favorite court in seconds with real-time
                    availability.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Easy Discovery
                  </h3>
                  <p className="text-muted-foreground">
                    Find courts near you with advanced search and filters.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🤝</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Community Driven
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with players, join matches, and build your network.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-6 bg-card border border-border rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">
                    Smart Management
                  </h3>
                  <p className="text-muted-foreground">
                    Powerful tools for venue owners to optimize operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Play?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of players across Nepal who are already enjoying
            seamless futsal bookings.
          </p>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Eghara Bookings. Empowering
            Nepal&apos;s futsal community.
          </p>
        </div>
      </footer>
    </div>
  );
}
