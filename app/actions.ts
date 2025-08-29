"use server"

import fs from "fs/promises"
import path from "path"

export interface RSVPData {
  id: string
  firstName: string
  lastName: string
  email: string
  attending: "yes" | "no"
  message: string
  submittedAt: string
}

const DATA_FILE = path.join(process.cwd(), "rsvp-data.json")

// Initialize the data file if it doesn't exist
async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE)
  } catch (error) {
    await fs.writeFile(DATA_FILE, JSON.stringify([]))
  }
}

// Read all RSVPs
export async function getRSVPs(): Promise<RSVPData[]> {
  await ensureDataFile()
  const data = await fs.readFile(DATA_FILE, "utf8")
  return JSON.parse(data)
}

// Submit a new RSVP
export async function submitRSVP(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    await ensureDataFile()

    const rsvp: RSVPData = {
      id: crypto.randomUUID(),
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      attending: formData.get("attending") as "yes" | "no",
      message: formData.get("message") as string,
      submittedAt: new Date().toISOString(),
    }

    // Validate required fields
    if (!rsvp.firstName || !rsvp.lastName || !rsvp.email || !rsvp.attending) {
      return { success: false, message: "Please fill out all required fields" }
    }

    // Get existing RSVPs
    const existingRSVPs = await getRSVPs()

    // Check if this email has already RSVP'd
    const existingRSVP = existingRSVPs.find((r) => r.email === rsvp.email)
    if (existingRSVP) {
      // Update existing RSVP
      const updatedRSVPs = existingRSVPs.map((r) => (r.email === rsvp.email ? { ...rsvp, id: r.id } : r))
      await fs.writeFile(DATA_FILE, JSON.stringify(updatedRSVPs, null, 2))
      return { success: true, message: "Your RSVP has been updated!" }
    }

    // Add new RSVP
    existingRSVPs.push(rsvp)
    await fs.writeFile(DATA_FILE, JSON.stringify(existingRSVPs, null, 2))

    return { success: true, message: "Your RSVP has been received!" }
  } catch (error) {
    console.error("Error submitting RSVP:", error)
    return { success: false, message: "There was an error submitting your RSVP. Please try again." }
  }
}
