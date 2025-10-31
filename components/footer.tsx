"use client"

import Link from "next/link"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { Download } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <footer 
      ref={elementRef}
      className={`border-t border-black/10 scroll-fade-up ${isVisible ? 'visible' : ''}`}
      style={{
        background: 'linear-gradient(135deg, #708090 0%, #A8B8C8 30%, #D0D8E0 60%, #F0F8FF 100%)'
      }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Image src="/logoq.png" alt="ncrypt" width={36} height={36} className="rounded" />
                <span className="text-xl font-bold text-black/90">ncrypt</span>
              </Link>
              <p className="text-sm text-black/70 leading-relaxed font-medium">
                Quantum-resistant Layer 1 blockchain with selectable privacy levels.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-black/90 uppercase tracking-wider">Navigation</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/" className="text-sm text-black/80 hover:text-primary transition-colors font-medium">
                  Home
                </Link>
                <Link href="/docs" className="text-sm text-black/80 hover:text-primary transition-colors font-medium">
                  Documentation
                </Link>
                <Link 
                  href="/whitepaper.pdf" 
                  download 
                  className="flex items-center gap-1.5 text-sm text-black/80 hover:text-primary transition-colors font-medium"
                >
                  Whitepaper
                  <Download className="h-3 w-3" />
                </Link>
              </nav>
            </div>

            {/* Resources */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-black/90 uppercase tracking-wider">Resources</h3>
              <nav className="flex flex-col gap-3">
                <Link href="/docs" className="text-sm text-black/80 hover:text-primary transition-colors font-medium">
                  Getting Started
                </Link>
                <Link href="/docs" className="text-sm text-black/80 hover:text-primary transition-colors font-medium">
                  API Reference
                </Link>
                <Link href="/docs" className="text-sm text-black/80 hover:text-primary transition-colors font-medium">
                  Security
                </Link>
              </nav>
            </div>

            {/* Social & Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-black/90 uppercase tracking-wider">Connect</h3>
              <div className="flex flex-col gap-3">
                <Link
                  href="https://x.com/ncryptsolquant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-black/80 hover:text-primary transition-colors font-medium group"
                >
                  <svg 
                    className="h-4 w-4 group-hover:scale-110 transition-transform" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                  Follow us on X
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-black/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-sm text-black/70 font-medium">
                © {currentYear} ncrypt. All rights reserved.
              </div>
              <div className="flex items-center gap-6 text-xs text-black/60">
                <Link href="/docs" className="hover:text-black/80 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/docs" className="hover:text-black/80 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

