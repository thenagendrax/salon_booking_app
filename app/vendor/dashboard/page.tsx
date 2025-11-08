"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function VendorDashboard() {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-foreground">Vendor Dashboard</h1>
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-card">
            <div className="text-3xl font-bold text-primary">24</div>
            <p className="text-muted-foreground mt-2">Total Bookings</p>
          </Card>
          <Card className="p-6 bg-card">
            <div className="text-3xl font-bold text-accent">8</div>
            <p className="text-muted-foreground mt-2">Today's Bookings</p>
          </Card>
          <Card className="p-6 bg-card">
            <div className="text-3xl font-bold text-chart-4">₹18,500</div>
            <p className="text-muted-foreground mt-2">Monthly Revenue</p>
          </Card>
          <Card className="p-6 bg-card">
            <div className="text-3xl font-bold text-chart-1">4.8★</div>
            <p className="text-muted-foreground mt-2">Average Rating</p>
          </Card>
        </div>

        <Card className="p-6 bg-card">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Upcoming Bookings</h2>
          <div className="space-y-4">
            <div className="border border-border rounded p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-foreground">Sarah Johnson - Haircut</p>
                  <p className="text-muted-foreground">Today at 2:00 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
            <div className="border border-border rounded p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-foreground">Emma Davis - Hair Color</p>
                  <p className="text-muted-foreground">Today at 3:30 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
