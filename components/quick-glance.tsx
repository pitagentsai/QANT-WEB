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
    <section className="py-20 px-6 bg-gradient-to-b from-background/90 to-transparent">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-muted-foreground mb-4">A quick overview of QUANT’s core advantages</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary">QANT Quick Glance</h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="flex items-center gap-8">
            <button
              onClick={prevSlide}
              className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black/40 border border-white/15 text-white backdrop-blur-md shadow-lg hover:bg-white/10 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <div className="flex-1 grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl shadow-xl transition-all duration-300 ${
                    index === currentIndex ? "md:scale-105" : "md:scale-95 md:opacity-80"
                  }`}
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
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-white/70 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-black/40 border border-white/15 text-white backdrop-blur-md shadow-lg hover:bg-white/10 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-white/30"
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
