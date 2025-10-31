import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Download } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 animate-fade-in-down" style={{ willChange: 'transform' }}>
      <div className="container mx-auto px-6 py-4">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl" style={{
          background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.6) 0%, transparent 70%), radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.3) 0%, transparent 70%), linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.1) 100%)',
          backdropFilter: 'blur(16px) saturate(180%)',
          WebkitBackdropFilter: 'blur(16px) saturate(180%)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}>
          <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image src="/logoq.png" alt="ncrypt" width={28} height={28} className="rounded" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-black/90 hover:text-primary transition-all font-medium hover:scale-110">
              Home
            </Link>
            <Link href="/docs" className="text-sm text-black/90 hover:text-primary transition-all font-medium hover:scale-110">
              Docs
            </Link>
            <Link href="/whitepaper.pdf" download className="flex items-center gap-1.5 text-sm text-black/90 hover:text-primary transition-all font-medium hover:scale-110">
              Whitepaper
              <Download className="h-3.5 w-3.5 transition-transform hover:translate-x-1 hover:-translate-y-1" />
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link 
              href="https://x.com/ncryptsolquant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full text-black/90 hover:text-primary transition-all font-medium hover:scale-110 border border-black/20 hover:border-primary/50"
              style={{
                background: 'radial-gradient(circle at center, rgba(240, 248, 255, 0.9) 0%, rgba(208, 216, 224, 0.85) 100%)',
                backdropFilter: 'blur(8px)'
              }}
              aria-label="Visit us on X (Twitter)"
            >
              <svg 
                className="h-5 w-5" 
                viewBox="0 0 24 24" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
