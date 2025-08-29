"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Cookies from "js-cookie"
import { Navigation } from "@/components/navigation"
import Image from "next/image"

export default function LoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Updated password
    if (password === "MaJilolo@3!") {
      // Set a cookie that expires in 24 hours
      Cookies.set("adminAuthenticated", "true", { expires: 1 })
      router.push("/admin")
    } else {
      setError("Incorrect password. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      <Navigation />

      {/* Decorative flowers */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rotate-180 opacity-10">
        <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
      </div>

      <div className="container flex flex-1 flex-col items-center justify-center pt-16 relative z-10">
        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <CardDescription>Enter your password to access the admin dashboard</CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {error && <div className="rounded-md bg-red-50 p-4 text-sm text-red-700">{error}</div>}
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700">
                Login
              </Button>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  )
}
