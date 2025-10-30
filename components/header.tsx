import Link from "next/link"
import Image from "next/image"
import logo from "@/components/logoq.png"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, Globe } from "lucide-react"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="mx-auto max-w-6xl rounded-3xl bg-black/30 border border-white/20 backdrop-blur-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Image src={logo} alt="QANT" width={28} height={28} className="rounded" />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="#whitepaper" className="text-sm text-white/80 hover:text-primary transition-colors">
              Whitepaper
            </Link>
            <Link href="/docs" className="text-sm text-white/80 hover:text-primary transition-colors">
              Docs
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
