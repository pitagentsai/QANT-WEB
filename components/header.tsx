import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Globe, Download } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/30 shadow-2xl overflow-hidden" style={{
          background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.6) 0%, transparent 70%), radial-gradient(ellipse at bottom right, rgba(255, 255, 255, 0.3) 0%, transparent 70%), linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.1) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)'
        }}>
          <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image src="/logoq.png" alt="ncrypt" width={28} height={28} className="rounded" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-black/90 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link href="/docs" className="text-sm text-black/90 hover:text-primary transition-colors font-medium">
              Docs
            </Link>
            <Link href="/whitepaper.pdf" download className="flex items-center gap-1.5 text-sm text-black/90 hover:text-primary transition-colors font-medium">
              Whitepaper
              <Download className="h-3.5 w-3.5" />
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-black/90 font-medium">
              <span>EN</span>
              <Globe className="h-4 w-4" />
            </button>
          </div>
          </div>
        </div>
      </div>
    </header>
  )
}
