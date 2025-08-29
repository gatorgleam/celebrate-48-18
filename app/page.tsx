"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BirthdayInvite() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [showAnimatedText, setShowAnimatedText] = useState(false)
  const [showPause, setShowPause] = useState(false)
  const [showInvite, setShowInvite] = useState(false)

  const mediaItems = [
    { id: 1, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 1" },
    { id: 2, type: "video", src: "/placeholder-video-1.mp4", alt: "Sarah Beth video 1" },
    { id: 3, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 2" },
    { id: 4, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 3" },
    { id: 5, type: "video", src: "/placeholder-video-2.mp4", alt: "Sarah Beth video 2" },
    { id: 6, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 4" },
    { id: 7, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 5" },
    { id: 8, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 6" },
    { id: 9, type: "video", src: "/placeholder-video-3.mp4", alt: "Sarah Beth video 3" },
    { id: 10, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 7" },
    { id: 11, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 8" },
    { id: 12, type: "image", src: "/placeholder.svg?height=200&width=200", alt: "Sarah Beth memory 9" },
  ]

  useEffect(() => {
    const photoTimer = setInterval(() => {
      setCurrentPhotoIndex((prev) => {
        if (prev < mediaItems.length - 1) {
          return prev + 1
        } else {
          clearInterval(photoTimer)
          setTimeout(() => setShowAnimatedText(true), 500)
          return prev
        }
      })
    }, 600)

    return () => clearInterval(photoTimer)
  }, [mediaItems.length])

  useEffect(() => {
    if (showAnimatedText) {
      setTimeout(() => {
        setShowPause(true)
      }, 2000)
    }
  }, [showAnimatedText])

  useEffect(() => {
    if (showPause) {
      setTimeout(() => {
        setShowInvite(true)
      }, 3000)
    }
  }, [showPause])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden relative">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-4xl animate-floating opacity-30">🎵</div>
        <div className="absolute top-20 right-20 text-3xl animate-floating opacity-25" style={{ animationDelay: "1s" }}>
          🍷
        </div>
        <div
          className="absolute bottom-20 left-20 text-3xl animate-floating opacity-30"
          style={{ animationDelay: "2s" }}
        >
          🎶
        </div>
        <div
          className="absolute bottom-10 right-10 text-4xl animate-floating opacity-25"
          style={{ animationDelay: "0.5s" }}
        >
          🥂
        </div>
        <div
          className="absolute top-1/2 left-1/4 text-2xl animate-floating opacity-20"
          style={{ animationDelay: "1.5s" }}
        >
          🎸
        </div>
        <div
          className="absolute top-1/3 right-1/3 text-3xl animate-floating opacity-25"
          style={{ animationDelay: "2.5s" }}
        >
          🍸
        </div>
      </div>

      {/* Photo/Video Collage Grid */}
      {!showInvite && (
        <div className="absolute inset-0 p-8">
          <div className="grid grid-cols-4 gap-4 h-full">
            {mediaItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all duration-500 transform ${
                  index <= currentPhotoIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
                style={{
                  transform: `rotate(${((index % 4) - 1.5) * 3}deg)`,
                }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border-2 border-blue-400/30 shadow-xl overflow-hidden">
                  {item.type === "video" ? (
                    <video className="w-full h-full object-cover rounded-lg" autoPlay muted loop playsInline>
                      <source src={item.src} type="video/mp4" />
                      <div className="w-full h-full bg-purple-200 flex items-center justify-center">
                        <div className="text-center text-purple-800">
                          <div className="text-4xl mb-2">🎥</div>
                          <p className="text-sm font-medium">Video {item.id}</p>
                        </div>
                      </div>
                    </video>
                  ) : (
                    <img
                      src={item.src || "/placeholder.svg"}
                      alt={item.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Animated Text Overlays */}
      {showAnimatedText && !showInvite && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-8">
            <h1 className="text-8xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text animate-pulse text-shadow-glow-blue">
              You're Invited To
            </h1>
            <h2 className="text-9xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text animate-bounce text-shadow-glow-purple">
              Celebrate 48
            </h2>
          </div>
        </div>
      )}

      {showPause && !showInvite && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-6 bg-black/50 backdrop-blur-sm rounded-3xl p-12">
            <h1 className="text-7xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text animate-pulse">
              Get Ready! 🎉
            </h1>
            <div className="flex justify-center space-x-4 text-4xl">
              <span className="animate-bounce">🎵</span>
              <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                🍷
              </span>
              <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                🎂
              </span>
              <span className="animate-bounce" style={{ animationDelay: "0.6s" }}>
                🎉
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Invitation */}
      {showInvite && (
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
          <Card className="max-w-4xl mx-4 p-12 bg-gradient-to-br from-white/10 to-blue-900/20 backdrop-blur-lg border-2 border-blue-400/30 shadow-2xl">
            <div className="text-center space-y-8">
              {/* Decorative elements */}
              <div className="flex justify-center space-x-6 text-5xl">
                <span className="animate-bounce">🎉</span>
                <span className="animate-bounce delay-100">🎂</span>
                <span className="animate-bounce delay-200">🎵</span>
                <span className="animate-bounce delay-300">🍷</span>
                <span className="animate-bounce delay-400">🎉</span>
              </div>

              {/* Main title */}
              <div className="space-y-4">
                <h1 className="text-8xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-balance animate-pulse">
                  Celebrate 48
                </h1>
                <h2 className="text-5xl font-semibold text-white text-balance animate-bounce bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-full py-4 px-8">
                  Sarah Beth's Birthday Bash
                </h2>
                <p className="text-2xl text-blue-200 italic">Music, Drinks & Memories! 🎵🍷</p>
              </div>

              {/* Event details in responsive grid */}
              <div className="grid md:grid-cols-3 gap-6 text-xl">
                <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-blue-400/30 p-6">
                  <div className="text-center space-y-3">
                    <p className="font-bold text-blue-300 text-2xl">📅 When</p>
                    <p className="text-white text-xl">Friday, September 26th</p>
                    <p className="text-blue-200 text-xl">7:00 PM</p>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border-purple-400/30 p-6">
                  <div className="text-center space-y-3">
                    <p className="font-bold text-purple-300 text-2xl">📍 Where</p>
                    <p className="text-white text-xl">Lake Geneva</p>
                    <p className="text-purple-200 text-xl">House of Music 🎵</p>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-blue-400/30 p-6">
                  <div className="text-center space-y-3">
                    <p className="font-bold text-blue-300 text-2xl">📞 RSVP</p>
                    <p className="text-white text-xl">Call or text Abby</p>
                    <p className="text-blue-200 text-xl font-mono">(262) 210-2921</p>
                  </div>
                </Card>
              </div>

              {/* Call to action */}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-12 py-4 text-2xl rounded-full shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => window.open("tel:+12622102921")}
                >
                  RSVP Now! 🎉
                </Button>
              </div>

              {/* Decorative footer */}
              <div className="pt-6 text-center">
                <p className="text-blue-200 italic text-xl">{"Let's make this birthday unforgettable! 🎈✨"}</p>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Skip animation button */}
      {!showInvite && (
        <Button
          variant="outline"
          size="sm"
          className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm border-blue-400/30 text-white hover:bg-white/20"
          onClick={() => setShowInvite(true)}
        >
          Skip Animation
        </Button>
      )}
    </div>
  )
}
