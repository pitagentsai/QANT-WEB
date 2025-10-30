import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"
import logo from "@/components/logoq.png"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary/80 leading-tight">
              Preserving Security for Future-Proof Blockchains
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              QUANT is a quantum-resistant Layer 1 with selectable privacy levels—transparent, fully private, or
              private-with-accountability—powered by lattice cryptography, zero-knowledge proofs, and homomorphic
              commitments.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg">
              Go Quantum Resistance Today
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-30" />
            <div className="relative z-10 w-[600px] h-[600px] mx-auto">
              <svg viewBox="0 0 600 600" className="w-full h-full text-primary" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="300" cy="300" r="240" fill="url(#glow)" />
                <g className="qant-orbit" style={{ animationDuration: "200s" }}>
                  {Array.from({ length: 6 }).map((_, ringIndex) => {
                    const ringRadius = 60 + ringIndex * 40
                    const dash = 2 + ringIndex
                    const gap = 10 - ringIndex * 1
                    // deterministic PRNG so positions are stable across renders
                    const mulberry32 = (seed: number) => {
                      return () => {
                        let t = (seed += 0x6d2b79f5)
                        t = Math.imul(t ^ (t >>> 15), t | 1)
                        t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
                        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
                      }
                    }
                    const rng = mulberry32(1337 + ringIndex * 101)
                    const particleCount = 12
                    const phase = rng() * Math.PI * 2
                    return (
                      <g key={`ring-${ringIndex}`}>
                        <circle
                          cx="300"
                          cy="300"
                          r={ringRadius}
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeDasharray={`${dash} ${Math.max(gap, 3)}`}
                          className="qant-dash"
                          style={{ animationDuration: "40s" }}
                          opacity={0.7 - ringIndex * 0.1}
                        />
                        {Array.from({ length: particleCount }).map((_, j) => {
                          // evenly spaced angles with random phase and small jitter per point
                          const base = (j / particleCount) * Math.PI * 2
                          const jitter = (rng() - 0.5) * 0.35 // +/- ~20 degrees
                          const angle = phase + base + jitter
                          const x = 300 + Math.cos(angle) * ringRadius
                          const y = 300 + Math.sin(angle) * ringRadius
                          return (
                            <circle
                              key={`dot-${ringIndex}-${j}`}
                              cx={x}
                              cy={y}
                              r={3}
                              fill="currentColor"
                              opacity={0.9}
                            />
                          )
                        })}
                      </g>
                    )
                  })}
                </g>
              </svg>
              <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Image src={logo} alt="QANT" width={96} height={96} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
