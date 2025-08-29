"use client"

import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export default function AccommodationsPage() {
  const resorts = [
    {
      id: 1,
      name: "Mozza Beach Resort",
      telephone: "072606060",
      description: "Beachfront resort with comfortable accommodations and dining options.",
    },
    {
      id: 2,
      name: "Eden Park Resort",
      telephone: "078174571",
      description: "Scenic resort with beautiful gardens and relaxing atmosphere.",
    },
    {
      id: 3,
      name: "Estuary Resort",
      telephone: "074444850",
      description: "Located near the estuary with stunning water views and amenities.",
    },
    {
      id: 4,
      name: "Fabulous Resort",
      telephone: "079666600/030666600",
      description: "Luxury resort offering premium services and accommodations.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1 pt-16">
        <section className="py-12 md:py-16 lg:py-20 relative overflow-hidden">
          {/* Decorative flowers */}
          <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
            <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-0 w-64 h-64 rotate-180 opacity-20">
            <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <h1 className="mb-12 text-center font-serif text-4xl font-light text-sage-800 md:text-5xl">
              Nearby Accommodations
            </h1>
            <p className="mb-8 text-center text-sage-700 max-w-2xl mx-auto">
              We've compiled a list of comfortable accommodations near our wedding venue. Please contact them directly
              for availability and booking information.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              {resorts.map((resort) => (
                <div key={resort.id} className="rounded-lg bg-white p-6 shadow-md">
                  <h2 className="mb-2 font-serif text-2xl text-sage-800">{resort.name}</h2>
                  <p className="mb-4 text-sage-700">{resort.description}</p>
                  <div className="flex items-center gap-2 text-sage-600">
                    <Phone className="h-4 w-4" />
                    <span>{resort.telephone}</span>
                  </div>
                  <Button
                    className="mt-4 bg-sage-600 hover:bg-sage-700"
                    onClick={() => {
                      navigator.clipboard.writeText(resort.telephone)
                      alert(`${resort.name} phone number copied to clipboard!`)
                    }}
                  >
                    Copy Phone Number
                  </Button>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-sage-600 hover:bg-sage-700">
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-sage-800 py-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="mb-4 font-serif text-3xl font-light">Larry & Eastina</h2>
          <p className="mb-4">October 17, 2025 • John Obey Beach, Sierra Leone</p>
          <p className="text-sage-300">Designed & Built with 💚 by a Talented Developer</p>
        </div>
      </footer>
    </div>
  )
}
