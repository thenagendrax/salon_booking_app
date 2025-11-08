"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SalonsPage() {
  const salons = [
    { id: 1, name: "Luxury Hair Studio", rating: 4.9, reviews: 324, image: "🏫" },
    { id: 2, name: "Beauty Haven", rating: 4.7, reviews: 287, image: "✨" },
    { id: 3, name: "Elite Salon", rating: 4.8, reviews: 412, image: "💇" },
    { id: 4, name: "Glamour Boutique", rating: 4.6, reviews: 195, image: "💅" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-foreground">Browse Salons</h1>
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Search salons..."
              className="w-full border border-input rounded-lg p-3 bg-background text-foreground placeholder:text-muted-foreground"
            />
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {salons.map((salon) => (
            <Card key={salon.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 h-32 flex items-center justify-center text-5xl">
                {salon.image}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg text-foreground">{salon.name}</h3>
                <div className="flex items-center gap-2 my-2">
                  <span className="text-accent">⭐</span>
                  <span className="font-medium">{salon.rating}</span>
                  <span className="text-muted-foreground">({salon.reviews})</span>
                </div>
                <Link href="/booking">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">Book Now</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
