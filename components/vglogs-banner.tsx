"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"

export default function Banner() {
  const [isVisible, setIsVisible] = useState(true)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  if (!isVisible) return null

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 text-zinc-100 p-3">
      <div
        className={`max-w-4xl mx-auto transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-base font-medium mb-0.5 flex items-center justify-center gap-2">
          Thanks for being part of the journey!
          <span className="text-zinc-400">•</span>
          <span className="text-zinc-400 text-sm">
            Check back soon for our next chapter
          </span>
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-2.5 right-2.5 text-zinc-400 hover:text-zinc-200 transition-colors"
        aria-label="Close banner"
        type="button"
      >
        <X size={20} />
      </button>
    </div>
  )
}
