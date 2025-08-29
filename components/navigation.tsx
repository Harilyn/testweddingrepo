"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-serif text-xl text-sage-800">
          Larry & Eastina
        </Link>

        {/* Mobile menu button - only shown on very small screens */}
        <button
          className="block sm:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6 text-sage-800" /> : <Menu className="h-6 w-6 text-sage-800" />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden items-center space-x-6 sm:flex">
          <Link href="/celebration" className="text-sage-600 hover:text-sage-800">
            Celebration
          </Link>
          <Link href="/gallery" className="text-sage-600 hover:text-sage-800">
            Gallery
          </Link>
        </div>

        {/* Mobile navigation */}
        <div
          className={cn(
            "absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-lg sm:hidden",
            isMenuOpen ? "block" : "hidden",
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/celebration"
              className="p-2 text-sage-600 hover:bg-sage-50 hover:text-sage-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Celebration
            </Link>
            <Link
              href="/gallery"
              className="p-2 text-sage-600 hover:bg-sage-50 hover:text-sage-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
