"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"

interface PhotoCollageProps {
  onComplete: () => void
}

export function PhotoCollage({ onComplete }: PhotoCollageProps) {
  const [visiblePhotos, setVisiblePhotos] = useState<number[]>([])
  const [showText, setShowText] = useState(false)

  const photos = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    delay: i * 300,
    position: {
      top: `${Math.random() * 70 + 10}%`,
      left: `${Math.random() * 70 + 10}%`,
      rotation: Math.random() * 20 - 10,
    },
  }))

  useEffect(() => {
    // Show photos one by one
    photos.forEach((photo, index) => {
      setTimeout(() => {
        setVisiblePhotos((prev) => [...prev, photo.id])
      }, photo.delay)
    })

    // Show text after 2 seconds
    setTimeout(() => setShowText(true), 2000)

    // Complete after 7 seconds
    setTimeout(() => onComplete(), 7000)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0">
        {["🍷", "🥂", "🍸", "🍾", "🎵", "🎶", "🎼", "🎤", "🎸", "🎹"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-2xl opacity-20 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Photo grid */}
      <div className="absolute inset-0">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className={`absolute transition-all duration-500 ${
              visiblePhotos.includes(photo.id) ? "opacity-100 scale-100" : "opacity-0 scale-50"
            }`}
            style={{
              top: photo.position.top,
              left: photo.position.left,
              transform: `rotate(${photo.position.rotation}deg)`,
            }}
          >
            <Card className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-600 border-2 border-yellow-300 shadow-2xl shadow-yellow-400/20">
              <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-2xl mb-1">📸</div>
                  <div className="text-xs font-medium">Photo {photo.id}</div>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>

      {/* Animated text overlay */}
      {showText && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div className="text-center space-y-8">
            <h1 className="text-6xl md:text-8xl font-script text-yellow-400 text-shadow-glow animate-pulse">
              You're Invited To
            </h1>
            <h2 className="text-7xl md:text-9xl font-script text-white text-shadow-glow animate-bounce">
              Celebrate 48
            </h2>
          </div>
        </div>
      )}
    </div>
  )
}
