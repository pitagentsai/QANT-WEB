import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { QuickGlance } from "@/components/quick-glance"
import { ThreatSection } from "@/components/threat-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <QuickGlance />
      <ThreatSection />
    </main>
  )
}
