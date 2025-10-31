import { AlertCircle } from "lucide-react"

const threats = [
  "Quantum breaks ECC/RSA—harvest-now, decrypt-later threatens today’s data",
  "Chain privacy is binary—no fine-grained compliance or selective disclosure",
  "Institutions require auditability without mass deanonymization",
]

export function ThreatSection() {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-black mb-8">Quantum Is a Time Bomb.</h2>
            <p className="text-lg text-black/90 leading-relaxed font-medium">
              NCRYPT addresses post-quantum risk and compliance head-on with lattice cryptography, selective disclosure,
              and DAPOA-based privacy.
            </p>
          </div>

          <div className="space-y-4">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-2xl p-6 shadow-sm border border-black/15"
                style={{
                  background: 'radial-gradient(ellipse at top left, rgba(255, 255, 255, 0.35) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(112, 128, 144, 0.12) 0%, transparent 60%), linear-gradient(135deg, rgba(240, 248, 255, 0.9) 0%, rgba(208, 216, 224, 0.87) 50%, rgba(192, 208, 224, 0.85) 100%)',
                  backdropFilter: 'blur(12px)'
                }}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                </div>
                <p className="text-black/90 font-semibold">{threat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
