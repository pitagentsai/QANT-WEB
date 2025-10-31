"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const features = [
  {
    title: "Quantum Resistance",
    description:
      "Post-quantum primitives (Module-LWE/SIS) protect assets beyond ECC/RSA—future-proof by design.",
    image: "/quick-glance-quantum-resistance.svg",
  },
  {
    title: "Privacy, Your Way",
    description:
      "Choose transparent, fully private, or private-with-accountability. Compliance-ready when needed.",
    image: "/quick-glance-privacy-modes.svg",
  },
  {
    title: "DAPOA Framework",
    description:
      "Selective disclosure with verifiable encryption—prove compliance without breaking anonymity.",
    image: "/quick-glance-dapoa.svg",
  },
]

export function QuickGlance() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section id="features" className="py-20 px-6 animate-fade-in">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-black/80 mb-4 font-medium animate-fade-in-down animate-delay-100">A quick overview of ncrypt's core advantages</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-black animate-fade-in-up animate-delay-200">NCRYPT Quick Glance</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-8">
            <button
              onClick={prevSlide}
              className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-black/20 text-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 animate-fade-in-left"
              style={{
                background: 'radial-gradient(circle at center, rgba(240, 248, 255, 0.9) 0%, rgba(208, 216, 224, 0.85) 100%)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'radial-gradient(circle at center, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.9) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'radial-gradient(circle at center, rgba(240, 248, 255, 0.9) 0%, rgba(208, 216, 224, 0.85) 100%)';
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 transition-transform hover:-translate-x-1" />
            </button>

            <div className="flex-1 grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-3xl overflow-hidden border border-black/15 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                    index === currentIndex ? "md:scale-105" : "md:scale-95 md:opacity-80"
                  } animate-fade-in-up`}
                  style={{
                    background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.4) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(112, 128, 144, 0.15) 0%, transparent 60%), linear-gradient(135deg, rgba(240, 248, 255, 0.95) 0%, rgba(208, 216, 224, 0.92) 50%, rgba(192, 208, 224, 0.9) 100%)',
                    backdropFilter: 'blur(16px)',
                    animationDelay: `${0.3 + index * 0.1}s`,
                    opacity: 0
                  }}
                >
                  <div className="aspect-square relative">
                    <Image
                      src={feature.image || "/placeholder.svg"}
                      alt={feature.title}
                      fill
                      className="object-contain p-6"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3">{feature.title}</h3>
                    <p className="text-black/90 leading-relaxed font-medium">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full border border-black/20 text-black shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-110 active:scale-95 animate-fade-in-right"
              style={{
                background: 'radial-gradient(circle at center, rgba(240, 248, 255, 0.9) 0%, rgba(208, 216, 224, 0.85) 100%)',
                backdropFilter: 'blur(8px)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'radial-gradient(circle at center, rgba(255, 255, 255, 0.95) 0%, rgba(240, 248, 255, 0.9) 100%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'radial-gradient(circle at center, rgba(240, 248, 255, 0.9) 0%, rgba(208, 216, 224, 0.85) 100%)';
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 transition-transform hover:translate-x-1" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 hover:scale-125 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-black/30 hover:bg-black/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
