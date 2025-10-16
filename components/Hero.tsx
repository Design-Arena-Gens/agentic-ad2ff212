'use client'

import { useState, useEffect } from 'react'

const names = [
  { name: 'Marcus', location: 'Austin, TX' },
  { name: 'Sarah', location: 'Los Angeles, CA' },
  { name: 'Jake', location: 'Miami, FL' },
  { name: 'Emma', location: 'Seattle, WA' },
  { name: 'Alex', location: 'Denver, CO' },
]

export default function Hero() {
  const [currentName, setCurrentName] = useState(0)
  const [userCount, setUserCount] = useState(850)

  useEffect(() => {
    const nameInterval = setInterval(() => {
      setCurrentName((prev) => (prev + 1) % names.length)
    }, 5000)

    const countInterval = setInterval(() => {
      setUserCount((prev) => prev + Math.floor(Math.random() * 3))
    }, 8000)

    return () => {
      clearInterval(nameInterval)
      clearInterval(countInterval)
    }
  }, [])

  const handleCTAClick = () => {
    window.location.href = '#how-it-works'
  }

  return (
    <section className="relative bg-gradient-to-b from-crumbl-light-pink to-white py-12 md:py-20 px-4 overflow-hidden">
      {/* Header */}
      <header className="max-w-6xl mx-auto mb-12">
        <div className="flex justify-end">
          <h1 className="text-2xl md:text-3xl font-heading font-bold text-crumbl-pink">
            Crumbl
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-black mb-6 leading-tight">
          Get a $100 Crumbl Gift Card
        </h2>

        {/* Sub-headline */}
        <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
          Review your favorite cookie flavors and earn a $100 gift card as a thank you for your feedback.
        </p>

        {/* Primary CTA Button */}
        <button
          onClick={handleCTAClick}
          className="bg-black text-white font-bold text-lg md:text-xl px-12 py-5 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg mb-10"
        >
          START NOW
        </button>

        {/* Social Proof */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
          <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-100 animate-pulse">
            <p className="text-sm md:text-base text-gray-700">
              ✅ <span className="font-semibold">{names[currentName].name}</span> from{' '}
              <span className="font-semibold">{names[currentName].location}</span> just claimed their $100 reward
            </p>
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow-md border border-gray-100">
            <p className="text-sm md:text-base text-gray-700">
              👥 <span className="font-semibold">{userCount}</span> users browsing now
            </p>
          </div>
        </div>

        {/* Visual Element - Gift Card Illustration */}
        <div className="relative max-w-md mx-auto">
          <div className="bg-gradient-to-br from-crumbl-pink to-pink-300 rounded-3xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
            <div className="bg-white rounded-2xl p-6 shadow-inner">
              <div className="text-center">
                <p className="text-3xl font-heading font-bold text-crumbl-pink mb-2">$100</p>
                <p className="text-xl font-heading font-bold text-gray-800 mb-4">Crumbl Gift Card</p>
                <div className="flex justify-center items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-200 to-pink-400"
                      style={{
                        transform: `translateY(${Math.sin(i) * 5}px)`,
                      }}
                    />
                  ))}
                </div>
                <div className="flex items-center justify-center gap-2 bg-green-100 px-4 py-2 rounded-full inline-flex">
                  <span className="text-green-600 font-bold">✔️</span>
                  <span className="text-sm font-semibold text-green-800">Verified by TikTok</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative skateboarding emoji */}
          <div className="absolute -bottom-4 -right-4 text-6xl transform rotate-12 animate-bounce">
            🛹
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-crumbl-pink rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 blur-xl"></div>
    </section>
  )
}
