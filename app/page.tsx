"use client"

import Link from "next/link"
import Image from "next/image"
import { Heart, Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function InvitationPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/landing-bg.jpg"
          alt="Larry and Eastina"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-20 z-10">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>
      <div className="absolute top-0 right-0 w-32 h-32 opacity-20 rotate-90 z-10">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-20 -rotate-90 z-10">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-20 rotate-180 z-10">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>

      <div className="relative z-20 flex min-h-screen items-center justify-center p-4">
        <div className="max-w-2xl mx-auto">
          {/* Main Invitation Content */}
          <div className="text-center space-y-6">
            {/* Header Decoration */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="h-px w-16 bg-white/50"></div>
                <Heart className="h-6 w-6 text-white" />
                <div className="h-px w-16 bg-white/50"></div>
              </div>
            </div>

            {/* Together with families */}
            <p className="text-white/90 text-sm uppercase tracking-widest">Together with our families</p>

            {/* Names */}
            <div className="space-y-2">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light">Larry</h1>
              <p className="text-white/90 text-lg font-light">&</p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-light">Eastina</h1>
            </div>

            {/* Request pleasure */}
            <p className="text-white/90 text-lg tracking-wide">request the pleasure of your company</p>

            {/* Celebration text */}
            <p className="text-white text-xl font-medium">at the celebration of our marriage</p>

            {/* RSVP Button - Green background only */}
            <div className="py-4">
              <div className="bg-sage-600/90 backdrop-blur-sm px-6 py-4 rounded-lg inline-block">
                <Button asChild className="bg-transparent hover:bg-white/10 text-white border-0 px-6 py-2">
                  <Link href="/celebration#rsvp" scroll={true}>
                    Please RSVP via our wedding website by clicking here
                  </Link>
                </Button>
              </div>
            </div>

            {/* Event Details */}
            <div className="space-y-4 py-6">
              <div className="flex items-center justify-center space-x-3">
                <Calendar className="h-5 w-5 text-white" />
                <div className="text-white">
                  <p className="font-medium">Friday, October 17, 2025</p>
                  <p className="text-sm text-white/90">2:00 PM</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-3">
                <MapPin className="h-5 w-5 text-white" />
                <div className="text-white">
                  <p className="font-medium">Aberdeen Water Taxi</p>
                  <p className="text-sm text-white/90">Aberdeen, Freetown</p>
                </div>
              </div>
            </div>

            {/* Decorative Separator */}
            <div className="flex justify-center py-4">
              <div className="flex items-center space-x-2">
                <div className="h-px w-12 bg-white/50"></div>
                <div className="w-2 h-2 bg-white/70 rounded-full"></div>
                <div className="h-px w-12 bg-white/50"></div>
              </div>
            </div>

            {/* RSVP Information */}
            <div className="space-y-3">
              <p className="text-white/90 text-sm">Kindly respond by September 30, 2025</p>
              <p className="text-white/80 text-xs">Adults-only  • Strictly by invitation</p>
            </div>

            {/* Footer Decoration */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <div className="h-px w-16 bg-white/50"></div>
                <Heart className="h-6 w-6 text-white" />
                <div className="h-px w-16 bg-white/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
