"use client"

import { useEffect, useState } from "react"

interface CountdownTimerProps {
  targetDate: string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-4 md:gap-8">
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 text-2xl font-bold backdrop-blur-sm md:h-20 md:w-20 md:text-3xl">
          {timeLeft.days}
        </div>
        <span className="mt-2 text-sm">Days</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 text-2xl font-bold backdrop-blur-sm md:h-20 md:w-20 md:text-3xl">
          {timeLeft.hours}
        </div>
        <span className="mt-2 text-sm">Hours</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 text-2xl font-bold backdrop-blur-sm md:h-20 md:w-20 md:text-3xl">
          {timeLeft.minutes}
        </div>
        <span className="mt-2 text-sm">Minutes</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 text-2xl font-bold backdrop-blur-sm md:h-20 md:w-20 md:text-3xl">
          {timeLeft.seconds}
        </div>
        <span className="mt-2 text-sm">Seconds</span>
      </div>
    </div>
  )
}
