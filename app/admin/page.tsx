"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { Loader2 } from "lucide-react"

type RSVP = {
  id: string
  first_name: string
  last_name: string
  telephone: string
  attending: "yes" | "no"
  message?: string
  created_at: string
}

export default function AdminPage() {
  const [rsvps, setRsvps] = useState<RSVP[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchRSVPs()
  }, [])

  const fetchRSVPs = async () => {
    try {
      const response = await fetch("/api/rsvp")
      const result = await response.json()

      if (result.success) {
        setRsvps(result.rsvps)
      }
    } catch (error) {
      console.error("Error fetching RSVPs:", error)
    } finally {
      setLoading(false)
    }
  }

  const attending = rsvps.filter((rsvp) => rsvp.attending === "yes")
  const notAttending = rsvps.filter((rsvp) => rsvp.attending === "no")

  if (loading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navigation />
        <div className="flex-1 flex items-center justify-center pt-20">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <div className="container mx-auto py-10 pt-20 relative">
        {/* Decorative flowers */}
        <div className="absolute top-0 left-0 w-64 h-64 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 rotate-90 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 left-0 w-64 h-64 -rotate-90 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>
        <div className="absolute bottom-0 right-0 w-64 h-64 rotate-180 opacity-10">
          <Image src="/images/sage-flowers.png" alt="Decorative flowers" fill className="object-cover" />
        </div>

        <div className="relative z-10">
          <div className="mb-8 space-y-4">
            <h1 className="text-3xl font-bold text-sage-800">RSVP Dashboard</h1>
            <p className="text-sage-600">Track and manage your wedding RSVPs</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Total Responses</CardTitle>
                <CardDescription>All RSVP submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{rsvps.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Attending</CardTitle>
                <CardDescription>Guests who accepted</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{attending.length}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Not Attending</CardTitle>
                <CardDescription>Guests who declined</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">{notAttending.length}</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Tabs defaultValue="all">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All Responses</TabsTrigger>
                <TabsTrigger value="attending">Attending</TabsTrigger>
                <TabsTrigger value="not-attending">Not Attending</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <Card>
                  <CardHeader>
                    <CardTitle>All RSVP Responses</CardTitle>
                    <CardDescription>Complete list of all submissions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Telephone</TableHead>
                          <TableHead>Attending</TableHead>
                          <TableHead>Submitted</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rsvps.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center">
                              No RSVPs yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          rsvps.map((rsvp) => (
                            <TableRow key={rsvp.id}>
                              <TableCell>
                                {rsvp.first_name} {rsvp.last_name}
                              </TableCell>
                              <TableCell>{rsvp.telephone}</TableCell>
                              <TableCell>{rsvp.attending === "yes" ? "Yes" : "No"}</TableCell>
                              <TableCell>{new Date(rsvp.created_at).toLocaleDateString()}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="attending">
                <Card>
                  <CardHeader>
                    <CardTitle>Attending Guests</CardTitle>
                    <CardDescription>Guests who have accepted the invitation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Telephone</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Submitted</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {attending.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center">
                              No attending guests yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          attending.map((rsvp) => (
                            <TableRow key={rsvp.id}>
                              <TableCell>
                                {rsvp.first_name} {rsvp.last_name}
                              </TableCell>
                              <TableCell>{rsvp.telephone}</TableCell>
                              <TableCell>{rsvp.message || "No message"}</TableCell>
                              <TableCell>{new Date(rsvp.created_at).toLocaleDateString()}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="not-attending">
                <Card>
                  <CardHeader>
                    <CardTitle>Not Attending</CardTitle>
                    <CardDescription>Guests who have declined the invitation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Name</TableHead>
                          <TableHead>Telephone</TableHead>
                          <TableHead>Message</TableHead>
                          <TableHead>Submitted</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {notAttending.length === 0 ? (
                          <TableRow>
                            <TableCell colSpan={4} className="text-center">
                              No declined RSVPs yet
                            </TableCell>
                          </TableRow>
                        ) : (
                          notAttending.map((rsvp) => (
                            <TableRow key={rsvp.id}>
                              <TableCell>
                                {rsvp.first_name} {rsvp.last_name}
                              </TableCell>
                              <TableCell>{rsvp.telephone}</TableCell>
                              <TableCell>{rsvp.message || "No message"}</TableCell>
                              <TableCell>{new Date(rsvp.created_at).toLocaleDateString()}</TableCell>
                            </TableRow>
                          ))
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
