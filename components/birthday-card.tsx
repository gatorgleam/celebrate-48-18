"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function BirthdayCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {["🍷", "🥂", "🍸", "🍾", "🎵", "🎶", "🎼", "🎤", "🎸", "🎹", "🥁", "🎺"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-3xl opacity-10 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      <Card className="max-w-2xl w-full bg-gradient-to-br from-white via-gray-50 to-white border-4 border-yellow-400 shadow-2xl shadow-yellow-400/30 transform hover:scale-105 transition-all duration-300 animate-fade-in">
        <div className="p-8 md:p-12 text-center space-y-8 relative">
          {/* Decorative corner elements */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>
          <div className="absolute -top-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>
          <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-yellow-400 rounded-full shadow-lg"></div>

          {/* Header with animated emojis */}
          <div className="flex justify-center space-x-4 text-4xl">
            {["🎉", "🎂", "🎵", "🍾", "✨"].map((emoji, i) => (
              <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s` }}>
                {emoji}
              </span>
            ))}
          </div>

          {/* Main title */}
          <div className="space-y-4">
            <Badge variant="outline" className="text-lg px-6 py-2 bg-yellow-50 border-yellow-400 text-yellow-800">
              You're Invited To
            </Badge>
            <h1 className="text-6xl md:text-7xl font-script text-yellow-600 text-shadow-glow leading-tight">
              Celebrate 48
            </h1>
            <h2 className="text-3xl md:text-4xl font-serif text-gray-800 font-bold">Sarah Beth's Birthday Bash</h2>
            <p className="text-xl text-gray-600 font-medium">Music, Drinks & Memories! 🎶🥂</p>
          </div>

          {/* Event details in elegant cards */}
          <div className="grid gap-6 md:gap-8">
            <Card className="p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 shadow-lg">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-3xl">📅</div>
                <div className="text-center">
                  <p className="font-bold text-gray-800 text-lg">When</p>
                  <p className="text-gray-700 font-medium">Friday, September 26th</p>
                  <p className="text-gray-700 font-medium">7:00 PM</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 shadow-lg">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-3xl">🎵</div>
                <div className="text-center">
                  <p className="font-bold text-gray-800 text-lg">Where</p>
                  <p className="text-gray-700 font-medium">Lake Geneva House of Music</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 shadow-lg">
              <div className="flex items-center justify-center space-x-4">
                <div className="text-3xl">📞</div>
                <div className="text-center">
                  <p className="font-bold text-gray-800 text-lg">RSVP</p>
                  <p className="text-gray-700 font-medium">Call or text Abby</p>
                  <p className="text-gray-700 font-mono font-bold text-lg">(262) 210-2921</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Call to action */}
          <div className="pt-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold px-12 py-4 text-xl shadow-xl shadow-yellow-400/30 transform hover:scale-105 transition-all duration-200"
              onClick={() => window.open("tel:+12622102921")}
            >
              RSVP Now! 🎉
            </Button>
          </div>

          {/* Footer message */}
          <div className="pt-6 border-t border-yellow-200">
            <p className="text-gray-600 font-serif italic text-lg">Let's make this birthday unforgettable! ✨</p>
          </div>
        </div>
      </Card>
    </div>
  )
}
