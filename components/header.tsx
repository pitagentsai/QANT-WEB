import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Globe, Download } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="mx-auto max-w-6xl rounded-3xl bg-black/30 border border-white/20 backdrop-blur-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image src="/logoq.png" alt="QANT" width={28} height={28} className="rounded" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm text-white/80 hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/docs" className="text-sm text-white/80 hover:text-primary transition-colors">
              Docs
            </Link>
            <Link href="/whitepaper.pdf" download className="flex items-center gap-1.5 text-sm text-white/80 hover:text-primary transition-colors">
              Whitepaper
              <Download className="h-3.5 w-3.5" />
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm text-white/80">
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
