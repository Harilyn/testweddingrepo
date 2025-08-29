"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function RSVPForm() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState("")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    attending: "yes",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setFormSubmitted(true)
        setMessage(result.message)
      } else {
        setMessage(result.message)
      }
    } catch (error) {
      setMessage("There was an error submitting your RSVP. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  if (formSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <Check className="mb-4 h-16 w-16 text-sage-600" />
        <h3 className="mb-2 text-2xl font-medium text-sage-800">Thank You!</h3>
        <p className="text-sage-700">
          {message || "Your RSVP has been received. We look forward to celebrating with you!"}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {message && (
        <Alert className={message.includes("error") ? "bg-red-50 border-red-200" : "bg-green-50 border-green-200"}>
          <AlertDescription className={message.includes("error") ? "text-red-700" : "text-green-700"}>
            {message}
          </AlertDescription>
        </Alert>
      )}

      <div className="space-y-4">
        <Alert className="bg-sage-50 border-sage-200">
          <AlertDescription className="text-sage-700">
            <strong>Important:</strong> Our wedding is by invitation only. If you have received an invitation, please
            RSVP below.
          </AlertDescription>
        </Alert>

        <Alert className="bg-sage-50 border-sage-200">
          <AlertDescription className="text-sage-700">
            <strong>Adults-Only Celebration:</strong> We kindly request that guests under 18 years of age not attend, as
            this will be an adults-only celebration.
          </AlertDescription>
        </Alert>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="telephone">Telephone</Label>
        <Input
          id="telephone"
          type="tel"
          value={formData.telephone}
          onChange={(e) => handleInputChange("telephone", e.target.value)}
          required
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-2">
        <Label>Will you be attending?</Label>
        <RadioGroup
          value={formData.attending}
          onValueChange={(value) => handleInputChange("attending", value)}
          className="flex space-x-4"
          disabled={isSubmitting}
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="attending-yes" />
            <Label htmlFor="attending-yes">Joyfully Accept</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="attending-no" />
            <Label htmlFor="attending-no">Regretfully Decline</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message to the Couple (Optional)</Label>
        <Textarea
          id="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Share your well wishes or a special message..."
          disabled={isSubmitting}
        />
      </div>

      <Button type="submit" className="w-full bg-sage-600 hover:bg-sage-700" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Submitting...
          </>
        ) : (
          "Submit RSVP"
        )}
      </Button>
    </form>
  )
}
