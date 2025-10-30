import { AlertCircle } from "lucide-react"

const threats = [
  "Quantum breaks ECC/RSA—harvest-now, decrypt-later threatens today’s data",
  "Chain privacy is binary—no fine-grained compliance or selective disclosure",
  "Institutions require auditability without mass deanonymization",
]

export function ThreatSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-background to-background/60">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8">Quantum Is a Time Bomb.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              QUANT addresses post-quantum risk and compliance head-on with lattice cryptography, selective disclosure,
              and DAPOA-based privacy.
            </p>
          </div>

          <div className="space-y-4">
            {threats.map((threat, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-white/5 backdrop-blur-sm rounded-2xl p-6 shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/15 flex items-center justify-center">
                  <AlertCircle className="h-4 w-4 text-red-400" />
                </div>
                <p className="text-foreground/90 font-medium">{threat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
