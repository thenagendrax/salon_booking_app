"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CustomerDashboard() {
  return (
    <main className="min-h-screen bg-background">
      <header className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold text-foreground">My Bookings</h1>
            <Link href="/">
              <Button variant="ghost">Home</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="p-6 bg-card">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Upcoming Appointments</h2>
          <div className="space-y-4">
            <div className="border border-border rounded p-4 bg-muted">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-foreground">Luxury Hair Salon - Haircut</p>
                  <p className="text-muted-foreground">Tomorrow at 10:00 AM</p>
                </div>
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
              </div>
            </div>
            <div className="border border-border rounded p-4 bg-muted">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-foreground">Beauty Haven - Facial</p>
                  <p className="text-muted-foreground">Friday at 2:00 PM</p>
                </div>
                <Button variant="outline" size="sm">
                  Reschedule
                </Button>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 mt-6 bg-card">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Past Appointments</h2>
          <div className="space-y-4">
            <div className="border border-border rounded p-4">
              <div className="flex justify-between">
                <div>
                  <p className="font-semibold text-foreground">Elite Salon - Haircut</p>
                  <p className="text-muted-foreground">Last completed 5 days ago</p>
                </div>
                <Button variant="outline" size="sm">
                  Write Review
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  )
}
