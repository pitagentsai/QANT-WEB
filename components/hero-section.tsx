"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      const headerOffset = 100 // Account for fixed header
      const elementPosition = featuresSection.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  // Generate particles only on client to avoid hydration mismatch
  const generateParticles = () => {
    const mulberry32 = (seed: number) => {
      return () => {
        let t = (seed += 0x6d2b79f5)
        t = Math.imul(t ^ (t >>> 15), t | 1)
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
      }
    }

    return Array.from({ length: 6 }).map((_, ringIndex) => {
      const ringRadius = 60 + ringIndex * 40
      const dash = 2 + ringIndex
      const gap = 10 - ringIndex * 1
      const rng = mulberry32(1337 + ringIndex * 101)
      const particleCount = 12
      const phase = rng() * Math.PI * 2
      return {
        ringIndex,
        ringRadius,
        dash,
        gap,
        particles: Array.from({ length: particleCount }).map((_, j) => {
          const base = (j / particleCount) * Math.PI * 2
          const jitter = (rng() - 0.5) * 0.35
          const angle = phase + base + jitter
          const x = 300 + Math.cos(angle) * ringRadius
          const y = 300 + Math.sin(angle) * ringRadius
          return { x: Math.round(x * 100) / 100, y: Math.round(y * 100) / 100, j }
        })
      }
    })
  }

  const particles = isMounted ? generateParticles() : []

  return (
    <section className="pt-32 pb-20 px-6 animate-fade-in">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-black leading-tight animate-fade-in-up animate-delay-100">
              Preserving Security for Future-Proof Blockchains
            </h1>
            <p className="text-lg text-black/90 leading-relaxed max-w-xl font-medium animate-fade-in-up animate-delay-200">
              A quantum-resistant Layer 1 with selectable privacy levels—transparent, private, or accountable—powered by lattice cryptography and zero-knowledge proofs.
            </p>
            <Button 
              onClick={scrollToFeatures}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 text-lg animate-fade-in-up animate-delay-300 hover:scale-105 transition-transform"
            >
              Go Quantum
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative animate-fade-in-right animate-delay-400">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="relative z-10 w-[600px] h-[600px] mx-auto animate-scale-in">
              <svg viewBox="0 0 600 600" className="w-full h-full text-black" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#000000" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#000000" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="300" cy="300" r="240" fill="url(#glow)" />
                <g className="qant-orbit" style={{ animationDuration: "200s" }}>
                  {isMounted ? particles.map(({ ringIndex, ringRadius, dash, gap, particles: ringParticles }) => (
                    <g key={`ring-${ringIndex}`}>
                      <circle
                        cx="300"
                        cy="300"
                        r={ringRadius}
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeDasharray={`${dash} ${Math.max(gap, 3)}`}
                        className="qant-dash"
                        style={{ animationDuration: "40s" }}
                        opacity={0.8 - ringIndex * 0.1}
                      />
                      {ringParticles.map(({ x, y, j }) => (
                        <circle
                          key={`dot-${ringIndex}-${j}`}
                          cx={x}
                          cy={y}
                          r={3.5}
                          fill="#000000"
                          opacity={0.95}
                        />
                      ))}
                    </g>
                  )) : Array.from({ length: 6 }).map((_, ringIndex) => (
                    <g key={`ring-${ringIndex}`}>
                      <circle
                        cx="300"
                        cy="300"
                        r={60 + ringIndex * 40}
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeDasharray={`${2 + ringIndex} ${Math.max(10 - ringIndex * 1, 3)}`}
                        className="qant-dash"
                        style={{ animationDuration: "40s" }}
                        opacity={0.8 - ringIndex * 0.1}
                      />
                    </g>
                  ))}
                </g>
              </svg>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-fade-in animate-delay-500">
                <Image src="/logoq.png" alt="ncrypt" width={96} height={96} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
