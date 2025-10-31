import { Header } from "@/components/header"

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="px-6 pt-28 pb-24">
      <div className="container mx-auto max-w-4xl space-y-12">
        <header className="space-y-2">
          <h1 className="text-4xl lg:text-5xl font-bold text-black">NCRYPT: A Quantum-Resistant Cryptocurrency</h1>
          <p className="text-black/80 font-medium">Documentation summary for product, architecture, and roadmap.</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Executive Summary</h2>
          <p className="text-black/90 font-medium">
            NCRYPT is a next-generation, quantum-resistant blockchain platform designed to secure digital assets against
            future quantum computing threats. It introduces a flexible privacy architecture allowing users to select between
            transparent, private, or accountable transaction modes. Built upon advanced post-quantum cryptography, NCRYPT
            aims to balance security, privacy, and regulatory compliance for individuals and enterprises alike.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Vision and Objectives</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-medium">1. Quantum Resistance</h3>
              <p className="text-black/90 font-medium">NCRYPT employs lattice-based primitives (Module-LWE and Module-SIS) to safeguard against quantum attacks that could compromise traditional cryptosystems like ECC or RSA.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">2. Multi-Tier Privacy</h3>
              <ul className="list-disc pl-6 text-black/90 space-y-1 font-medium">
                <li><strong>Basic Privacy:</strong> Transparent transaction data with one-time wallet addresses.</li>
                <li><strong>Full Privacy:</strong> Hidden addresses and encrypted transaction values.</li>
                <li><strong>Full Privacy with Accountability:</strong> Private to all except authorized auditors/regulators.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">3. Privacy with Accountability</h3>
              <p className="text-black/90 font-medium">Selective Disclosure provides lawful traceability for designated authorities without sacrificing broad user anonymity.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">4. Provably Secure Architecture</h3>
              <p className="text-black/90 font-medium">DAPOA (Decentralized Anonymous Payment with Optional Accountability) ensures mathematically sound privacy, anonymity, and accountability guarantees.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Technical Architecture</h2>
          <div className="space-y-3">
            <div>
              <h3 className="text-lg font-medium">1. Cryptographic Foundations</h3>
              <ul className="list-disc pl-6 text-black/90 space-y-1 font-medium">
                <li>Lattice-based signatures for quantum resistance</li>
                <li>Homomorphic commitments for encrypted amounts</li>
                <li>Zero-knowledge range proofs for value validation</li>
                <li>Linkable ring signatures for unlinkability</li>
                <li>Verifiable encryption for controlled accountability</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">2. Data Model</h3>
              <ul className="list-disc pl-6 text-black/90 space-y-1 font-medium">
                <li><strong>Public TXOs:</strong> Fully transparent</li>
                <li><strong>Value-Hidden TXOs:</strong> Encrypted values via commitments</li>
                <li><strong>Private TXOs:</strong> Confidential with ring sets</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">3. Transaction Types</h3>
              <ul className="list-disc pl-6 text-black/90 space-y-1 font-medium">
                <li>Public Transaction</li>
                <li>Mask Transaction</li>
                <li>Private Transaction</li>
                <li>Unmask Transaction</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium">4. Consensus</h3>
              <p className="text-black/90 font-medium">Initial Proof-of-Work (PoW) for decentralization, then a planned transition to Proof-of-Stake (PoS) for sustainability.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">DAPOA Model</h2>
          <ul className="list-disc pl-6 text-black/90 space-y-1 font-medium">
            <li><strong>Anonymity:</strong> Sender/receiver unlinkability</li>
            <li><strong>Value Hiding:</strong> Amount privacy via commitments</li>
            <li><strong>Consumed Coin Hiding:</strong> Input-output unlinkability</li>
            <li><strong>Optional Accountability:</strong> Tracking keys enable regulator-controlled tracing</li>
          </ul>
          <p className="text-black/90 font-medium">Transactions may embed a tracking public key for selective, auditable transparency.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Tokenomics</h2>
          <ul className="list-disc pl-6 text-black/90 space-y-1 font-medium">
            <li><strong>Supply:</strong> Capped (e.g., 21M NCR)</li>
            <li><strong>Distribution:</strong> 60% mining/staking, 20% ecosystem, 10% partnerships & R&D, 10% team (vesting)</li>
            <li><strong>Utility:</strong> Governance, staking, fees, ecosystem usage</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Roadmap</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-black/80 font-semibold">
                  <th className="py-2 pr-4">Phase</th>
                  <th className="py-2 pr-4">Goal</th>
                  <th className="py-2">Deliverable</th>
                </tr>
              </thead>
              <tbody className="text-black/90 font-medium">
                <tr className="border-t border-border">
                  <td className="py-2 pr-4">Q1–Q2 2026</td>
                  <td className="py-2 pr-4">Whitepaper & Architecture</td>
                  <td className="py-2">NCRYPT Framework v1.0</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-2 pr-4">Q3 2026</td>
                  <td className="py-2 pr-4">Testnet Launch</td>
                  <td className="py-2">Quantum-Safe Wallets & Private TX</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-2 pr-4">Q1 2027</td>
                  <td className="py-2 pr-4">Mainnet Beta</td>
                  <td className="py-2">DAPOA Privacy Integration</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-2 pr-4">Q3 2027</td>
                  <td className="py-2 pr-4">Governance Launch</td>
                  <td className="py-2">Stake-Based Consensus</td>
                </tr>
                <tr className="border-t border-border">
                  <td className="py-2 pr-4">2028+</td>
                  <td className="py-2 pr-4">Expansion</td>
                  <td className="py-2">Sidechains, Smart Contracts, Web3 & DeFi Integration</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Strategic Positioning</h2>
          <p className="text-black/90 font-medium">NCRYPT bridges quantum-safe cryptography with scalable blockchain utility, providing a compliant yet private infrastructure for financial institutions, enterprises, and decentralized ecosystems.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Differentiators</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="text-sm text-black/80 font-semibold">
                  <th className="py-2 pr-4">Feature</th>
                  <th className="py-2 pr-4">Bitcoin</th>
                  <th className="py-2 pr-4">Monero</th>
                  <th className="py-2 pr-4">Zcash</th>
                  <th className="py-2">NCRYPT</th>
                </tr>
              </thead>
              <tbody className="text-black/90 font-medium">
                <tr className="border-t border-border"><td className="py-2 pr-4">Quantum Resistance</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">No</td><td className="py-2">Yes</td></tr>
                <tr className="border-t border-border"><td className="py-2 pr-4">Full Privacy</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">Yes</td><td className="py-2 pr-4">Yes</td><td className="py-2">Yes</td></tr>
                <tr className="border-t border-border"><td className="py-2 pr-4">Accountability</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">Partial</td><td className="py-2">Yes</td></tr>
                <tr className="border-t border-border"><td className="py-2 pr-4">Lattice Security</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">No</td><td className="py-2">Yes</td></tr>
                <tr className="border-t border-border"><td className="py-2 pr-4">Privacy Levels</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">No</td><td className="py-2 pr-4">Partial</td><td className="py-2">Yes</td></tr>
                <tr className="border-t border-border"><td className="py-2 pr-4">Regulatory Readiness</td><td className="py-2 pr-4">Low</td><td className="py-2 pr-4">Low</td><td className="py-2 pr-4">Medium</td><td className="py-2">High</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Conclusion</h2>
          <p className="text-black/90 font-medium">NCRYPT establishes a secure, quantum-resistant, and privacy-flexible ecosystem built for the coming era of decentralized finance. By combining post-quantum cryptography with a modular privacy framework, NCRYPT offers both individuals and institutions a resilient foundation for secure digital value exchange.</p>
        </section>
      </div>
      </div>
    </main>
  )
}


