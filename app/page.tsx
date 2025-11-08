"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GlamSpace Salon
          </div>
          <div className="flex gap-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90">Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 text-foreground">Book Your Perfect Salon Experience</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover top-rated salons, book appointments instantly, and get beautiful transformations
          </p>
          <Link href="/salons">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
              Browse Salons
            </Button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🏫</div>
            <h3 className="text-xl font-semibold mb-2">Expert Stylists</h3>
            <p className="text-muted-foreground">Book appointments with professional stylists rated by customers</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-muted-foreground">Simple and fast appointment booking with real-time availability</p>
          </Card>
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold mb-2">Top Rated</h3>
            <p className="text-muted-foreground">Find the best salons near you with customer reviews and ratings</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-accent text-primary-foreground py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to look your best?</h2>
          <p className="text-lg mb-8 opacity-90">Join thousands of happy customers</p>
          <div className="flex gap-4 justify-center">
            <Link href="/salons">
              <Button variant="secondary" size="lg">
                Explore Salons
              </Button>
            </Link>
            <Link href="/vendor/dashboard">
              <Button
                variant="outline"
                size="lg"
                className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Vendor Portal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
