"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function BirthdayInvite() {
  const [showCollage, setShowCollage] = useState(true)
  const [currentItemIndex, setCurrentItemIndex] = useState(0)
  const [showAnimatedText, setShowAnimatedText] = useState(false)
  const [showPause, setShowPause] = useState(false)
  const [showInvite, setShowInvite] = useState(false)

  // 12 items total: 9 photos + 3 videos (randomly placed)
  const mediaItems = [
    { id: 1, type: "photo", src: "/photos/mom-photo-1.jpg", alt: "Sarah Beth memory 1" },
    { id: 2, type: "video", src: "/videos/mom-video-1.mp4", alt: "Sarah Beth video 1" },
    { id: 3, type: "photo", src: "/photos/mom-photo-2.jpg", alt: "Sarah Beth memory 2" },
    { id: 4, type: "photo", src: "/photos/mom-photo-3.jpg", alt: "Sarah Beth memory 3" },
    { id: 5, type: "photo", src: "/photos/mom-photo-4.jpg", alt: "Sarah Beth memory 4" },
    { id: 6, type: "video", src: "/videos/mom-video-2.mp4", alt: "Sarah Beth video 2" },
    { id: 7, type: "photo", src: "/photos/mom-photo-5.jpg", alt: "Sarah Beth memory 5" },
    { id: 8, type: "photo", src: "/photos/mom-photo-6.jpg", alt: "Sarah Beth memory 6" },
    { id: 9, type: "photo", src: "/photos/mom-photo-7.jpg", alt: "Sarah Beth memory 7" },
    { id: 10, type: "video", src: "/videos/mom-video-3.mp4", alt: "Sarah Beth video 3" },
    { id: 11, type: "photo", src: "/photos/mom-photo-8.jpg", alt: "Sarah Beth memory 8" },
    { id: 12, type: "photo", src: "/photos/mom-photo-9.jpg", alt: "Sarah Beth memory 9" },
  ]

  useEffect(() => {
    if (showCollage) {
      const timer = setInterval(() => {
        setCurrentItemIndex((prev) => {
          if (prev < mediaItems.length - 1) {
            return prev + 1
          } else {
            // All items shown, show animated text
            setTimeout(() => setShowAnimatedText(true), 500)
            // Then show pause screen
            setTimeout(() => setShowPause(true), 2500)
            // Finally show invite
            setTimeout(() => {
              setShowCollage(false)
              setShowInvite(true)
            }, 5500) // 3 second pause
            return prev
          }
        })
      }, 600) // Fast animation - 600ms per item

      return () => clearInterval(timer)
    }
  }, [showCollage, mediaItems.length])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating drink and music emojis */}
        <div className="absolute top-10 left-10 text-4xl opacity-30 animate-float">🍷</div>
        <div className="absolute top-20 right-20 text-3xl opacity-25 animate-float delay-1000">🎵</div>
        <div className="absolute bottom-20 left-20 text-3xl opacity-20 animate-float delay-2000">🥂</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-30 animate-float delay-3000">🎶</div>
        <div className="absolute top-1/2 left-1/4 text-2xl opacity-15 animate-float delay-4000">🍸</div>
        <div className="absolute top-1/3 right-1/3 text-3xl opacity-25 animate-float delay-5000">🎼</div>

        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-blue-300 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-pulse delay-1000 opacity-50"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-2000 opacity-70"></div>
      </div>

      {/* Fast Photo/Video Collage */}
      {showCollage && (
        <div className="absolute inset-0">
          <div className="grid grid-cols-4 gap-4 p-8 h-full">
            {mediaItems.map((item, index) => (
              <div
                key={item.id}
                className={`relative transition-all duration-500 transform ${
                  index <= currentItemIndex ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 rotate-12"
                } ${index < currentItemIndex ? "animate-pulse" : ""}`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-300"></div>
                  <Card className="relative p-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-sm rounded-xl overflow-hidden">
                    {item.type === "video" ? (
                      <video
                        className="w-full h-32 object-cover rounded-lg"
                        src={item.src}
                        muted
                        autoPlay
                        loop
                        playsInline
                      />
                    ) : (
                      <div className="w-full h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-lg flex items-center justify-center border border-white/10">
                        <div className="text-center text-white/80">
                          <div className="text-2xl mb-1">📸</div>
                          <p className="text-xs font-medium">Photo {item.id}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute -top-1 left-4 w-8 h-4 bg-white/20 rounded-sm rotate-12 shadow-sm"></div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {showAnimatedText && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center space-y-8">
                <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 animate-pulse text-shadow-glow-blue font-serif">
                  You're Invited To
                </h1>
                <h2 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 animate-bounce text-shadow-glow-purple font-serif">
                  Celebrate 48
                </h2>
              </div>
            </div>
          )}

          {showPause && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
              <div className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-2xl backdrop-blur-md">
                <div className="text-6xl animate-bounce">🎉</div>
                <h3 className="text-5xl font-bold text-white text-shadow-glow-blue animate-pulse">Get Ready!</h3>
                <div className="flex justify-center space-x-4 text-3xl">
                  <span className="animate-bounce">🎂</span>
                  <span className="animate-bounce delay-200">🎵</span>
                  <span className="animate-bounce delay-400">🍷</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {showInvite && (
        <div className="absolute inset-0 flex items-center justify-center animate-fade-in p-4">
          <div className="relative max-w-4xl w-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl blur-2xl animate-pulse"></div>

            <Card className="relative p-12 bg-gradient-to-br from-white/95 to-white/90 border-2 border-white/30 shadow-2xl backdrop-blur-xl rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-purple-400/20 to-transparent rounded-tl-full"></div>

              <div className="relative text-center space-y-8">
                <div className="flex justify-center space-x-6 text-5xl mb-8">
                  <span className="animate-bounce text-blue-500">🎉</span>
                  <span className="animate-bounce delay-100 text-purple-500">🎂</span>
                  <span className="animate-bounce delay-200 text-blue-600">🎵</span>
                  <span className="animate-bounce delay-300 text-purple-600">🍷</span>
                  <span className="animate-bounce delay-400 text-blue-500">🎉</span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-pulse font-serif leading-tight">
                    Celebrate 48
                  </h1>
                  <h2 className="text-5xl font-bold text-gray-800 animate-bounce bg-gradient-to-r from-purple-100 to-blue-100 px-8 py-4 rounded-2xl shadow-lg font-serif">
                    Sarah Beth's Birthday Bash
                  </h2>
                  <p className="text-2xl text-purple-700 italic font-medium">Music, Drinks & Memories! 🎶🍾</p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-xl">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="text-center space-y-3">
                      <div className="text-4xl">📅</div>
                      <h3 className="text-2xl font-bold text-blue-700">When</h3>
                      <p className="text-xl font-semibold text-gray-800">Friday, September 26th</p>
                      <p className="text-xl font-semibold text-gray-800">7:00 PM</p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="text-center space-y-3">
                      <div className="text-4xl">🎵</div>
                      <h3 className="text-2xl font-bold text-purple-700">Where</h3>
                      <p className="text-xl font-semibold text-gray-800">Lake Geneva</p>
                      <p className="text-xl font-semibold text-gray-800">House of Music</p>
                    </div>
                  </Card>

                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl rounded-2xl transform hover:scale-105 transition-all duration-300">
                    <div className="text-center space-y-3">
                      <div className="text-4xl">📞</div>
                      <h3 className="text-2xl font-bold text-blue-700">RSVP</h3>
                      <p className="text-xl font-semibold text-gray-800">Call or text Abby</p>
                      <p className="text-xl font-mono font-bold text-purple-700">(262) 210-2921</p>
                    </div>
                  </Card>
                </div>

                <div className="pt-6">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold px-12 py-6 text-2xl rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-white/20"
                    onClick={() => window.open("tel:+12622102921")}
                  >
                    RSVP Now! 🎉✨
                  </Button>
                </div>

                <div className="pt-8 space-y-4">
                  <div className="flex justify-center space-x-4 text-3xl">
                    <span className="animate-pulse">🎈</span>
                    <span className="animate-pulse delay-500">✨</span>
                    <span className="animate-pulse delay-1000">🎈</span>
                  </div>
                  <p className="text-xl text-purple-700 italic font-medium bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-xl">
                    {"Let's make this birthday absolutely magical! 🌟"}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}

      {showCollage && (
        <Button
          variant="outline"
          size="lg"
          className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30 text-lg px-6 py-3 rounded-xl shadow-xl"
          onClick={() => {
            setShowCollage(false)
            setShowInvite(true)
          }}
        >
          Skip Animation ⏭️
        </Button>
      )}
    </div>
  )
}
