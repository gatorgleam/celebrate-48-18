"use client"

import { useState, useEffect, useMemo } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function BirthdayInvite() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)
  const [showAnimatedText, setShowAnimatedText] = useState(false)
  const [showPause, setShowPause] = useState(false)
  const [showInvite, setShowInvite] = useState(false)

  const mediaItems = useMemo(() => [
    { id: 1, type: "image", src: "/photos/mom-1.jpg", alt: "Sarah Beth memory 1" },
    { id: 2, type: "video", src: "/videos/mom-video-1.mp4", alt: "Sarah Beth video 1" },
    { id: 3, type: "image", src: "/photos/mom-2.jpg", alt: "Sarah Beth memory 2" },
    { id: 4, type: "image", src: "/photos/mom-3.jpg", alt: "Sarah Beth memory 3" },
    { id: 5, type: "video", src: "/videos/mom-video-2.mp4", alt: "Sarah Beth video 2" },
    { id: 6, type: "image", src: "/photos/mom-4.jpg", alt: "Sarah Beth memory 4" },
    { id: 7, type: "image", src: "/photos/mom-5.jpg", alt: "Sarah Beth memory 5" },
    { id: 8, type: "image", src: "/photos/mom-6.jpg", alt: "Sarah Beth memory 6" },
    { id: 9, type: "video", src: "/videos/mom-video-3.mp4", alt: "Sarah Beth video 3" },
    { id: 10, type: "image", src: "/photos/mom-7.jpg", alt: "Sarah Beth memory 7" },
    { id: 11, type: "image", src: "/photos/mom-8.jpg", alt: "Sarah Beth memory 8" },
    { id: 12, type: "image", src: "/photos/mom-9.jpg", alt: "Sarah Beth memory 9" },
  ], [])

  // Shuffle media once on mount so the collage order varies per load
  const [shuffledItems, setShuffledItems] = useState(mediaItems)
  useEffect(() => {
    const shuffled = [...mediaItems].sort(() => Math.random() - 0.5)
    setShuffledItems(shuffled)
  }, [mediaItems])

  useEffect(() => {
    const photoTimer = setInterval(() => {
      setCurrentPhotoIndex((prev) => {
        if (prev < shuffledItems.length - 1) {
          return prev + 1
        } else {
          clearInterval(photoTimer)
          setTimeout(() => setShowAnimatedText(true), 500)
          return prev
        }
      })
    }, 300)

    return () => clearInterval(photoTimer)
  }, [shuffledItems.length])

  useEffect(() => {
    if (showAnimatedText) {
      setTimeout(() => {
        setShowPause(true)
      }, 4500)
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
      {/* Subtle animated gradient blobs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 size-72 rounded-full bg-gradient-to-br from-purple-600/25 to-blue-500/25 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-24 size-80 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 blur-3xl animate-float" style={{ animationDelay: "1.2s" }} />
        <div className="absolute bottom-0 left-1/3 size-64 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 blur-3xl animate-float" style={{ animationDelay: "2.4s" }} />
      </div>

      {/* Photo/Video Collage Grid */}
      {!showInvite && (
        <div className="absolute inset-0 p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 md:grid-rows-3 gap-1 sm:gap-2 md:gap-4 h-full overflow-visible">
            {shuffledItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all duration-500 will-change-transform ${
                  index <= currentPhotoIndex ? "opacity-100" : "opacity-0"
                } -m-0.5 sm:-m-1 md:-m-2`}
                style={{
                  zIndex: 10 + index,
                  transform: `rotate(${index % 3 === 0 ? 0 : ((index * 6) % 12) - 6}deg) scale(${index <= currentPhotoIndex ? 1.04 + ((index % 4) * 0.01) : 0.98})`,
                }}
              >
                <div className="relative w-full pb-[140%] sm:pb-[130%] md:pb-[130%] md:h-auto lg:pb-[120%]">
                  <Card className="absolute inset-0 h-full overflow-hidden p-0 rounded-xl">
                    {item.type === "video" ? (
                      <video className="w-full h-full object-cover object-[center_25%] rounded-xl" autoPlay muted loop playsInline>
                        <source src={item.src} type="video/mp4" />
                        <div className="w-full h-full bg-purple-200 flex items-center justify-center">
                          <div className="text-center text-purple-800">
                            <div className="text-4xl mb-2">🎥</div>
                            <p className="text-sm font-medium">Video {item.id}</p>
                          </div>
                        </div>
                      </video>
                    ) : (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.src || "/placeholder.svg"}
                          alt={item.alt}
                          className="w-full h-full object-cover object-[center_25%] rounded-xl"
                        />
                      </>
                    )}
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Animated Text Overlays */}
      {showAnimatedText && !showInvite && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="bg-white/85 rounded-3xl px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-8 shadow-2xl">
            <div className="text-center space-y-6">
              <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs tracking-wide uppercase">
                You&apos;re Invited To
              </Badge>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text animate-pulse">
                Celebrate 48
              </h1>
              <p className="text-base sm:text-lg text-slate-700">Music, Drinks & Memories</p>
            </div>
          </div>
        </div>
      )}

      {showPause && !showInvite && (
        <div className="absolute inset-0 z-50 flex items-center justify-center pointer-events-none">
          <div className="text-center space-y-6 bg-black/70 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 border border-white/10">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              Get Ready! 🎉
            </h1>
            <div className="flex justify-center gap-3 sm:gap-4 text-3xl sm:text-4xl opacity-90">
              <span className="animate-gentle-bounce">🎵</span>
              <span className="animate-gentle-bounce" style={{ animationDelay: "0.2s" }}>🍷</span>
              <span className="animate-gentle-bounce" style={{ animationDelay: "0.4s" }}>🎂</span>
              <span className="animate-gentle-bounce" style={{ animationDelay: "0.6s" }}>🎉</span>
            </div>
          </div>
        </div>
      )}

      {/* Main Invitation */}
      {showInvite && (
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
          <Card className="relative max-w-4xl mx-4 p-6 sm:p-8 md:p-12 rounded-3xl overflow-hidden border-[3px] border-amber-300/60 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            {/* Card video background with white overlay */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/mom-video-2.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
            />
            <div className="absolute inset-0 bg-white/85" />

            <div className="relative z-10 text-center space-y-8">
              {/* Decorative elements */}
              <div className="flex justify-center space-x-6 text-3xl sm:text-4xl md:text-5xl opacity-90">
                <span className="animate-bounce">🎉</span>
                <span className="animate-bounce delay-100">🎂</span>
                <span className="animate-bounce delay-200">🎵</span>
                <span className="animate-bounce delay-300">🍷</span>
                <span className="animate-bounce delay-400">🎉</span>
              </div>

              {/* Main title */}
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-balance animate-pulse">
                  Celebrate 48
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-black text-balance bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full py-3 px-6">
                  Sarah Beth&apos;s Birthday Bash
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-blue-400 italic">Music, Drinks & Memories! 🎵🍷</p>
              </div>

              {/* Event details in responsive grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-base sm:text-lg md:text-xl">
                <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-blue-400/30 p-4 sm:p-5 md:p-6">
                  <div className="text-center space-y-3">
                    <p className="font-bold text-blue-500 text-2xl">📅 When</p>
                    <p className="text-black text-xl">Friday, September 26th</p>
                    <p className="text-black text-xl">7:00 PM</p>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border-purple-400/30 p-4 sm:p-5 md:p-6">
                  <div className="text-center space-y-3">
                    <p className="font-bold text-purple-500 text-2xl">📍 Where</p>
                    <p className="text-black text-xl">Lake Geneva</p>
                    <p className="text-black text-xl">House of Music 🎵</p>
                  </div>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border-blue-400/30 p-4 sm:p-5 md:p-6">
                  <div className="text-center space-y-3">
                    <p className="font-bold text-blue-500 text-2xl">📞 RSVP</p>
                    <p className="text-black text-xl">Call or text Abby</p>
                    <p className="text-black text-xl font-mono">(262) 210-2921</p>
                  </div>
                </Card>
              </div>

              {/* Call to action */}
              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-8 py-3 text-xl sm:px-10 sm:py-4 sm:text-2xl rounded-full shadow-lg transform hover:scale-105 transition-all"
                  onClick={() => window.open("tel:+12622102921")}
                >
                  RSVP Now! 🎉
                </Button>
              </div>

              {/* Decorative footer */}
              <div className="pt-6 text-center">
                <p className="text-blue-400 italic text-base sm:text-lg">Let&apos;s make this birthday unforgettable! 🎈✨</p>
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
          className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-sm border-blue-400/30 text-slate-200 hover:bg-white/20"
          onClick={() => setShowInvite(true)}
        >
          Skip Animation
        </Button>
      )}
    </div>
  )
}
