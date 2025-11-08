"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-card">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-foreground">Book Appointment</h1>
            <Link href="/salons">
              <Button variant="ghost">Back</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-8 bg-card">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Booking Form</h2>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Select Service</label>
              <select className="w-full border border-input rounded-lg p-3 bg-background text-foreground">
                <option>Haircut - ₹300</option>
                <option>Hair Color - ₹800</option>
                <option>Facial - ₹500</option>
                <option>Massage - ₹400</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Select Date</label>
              <input type="date" className="w-full border border-input rounded-lg p-3 bg-background text-foreground" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Select Time</label>
              <select className="w-full border border-input rounded-lg p-3 bg-background text-foreground">
                <option>10:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>3:00 PM</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-foreground">Select Stylist</label>
              <select className="w-full border border-input rounded-lg p-3 bg-background text-foreground">
                <option>Priya (⭐ 4.9)</option>
                <option>Raj (⭐ 4.7)</option>
                <option>Anisha (⭐ 4.8)</option>
              </select>
            </div>

            <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground py-6">
              Confirm Booking
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}
