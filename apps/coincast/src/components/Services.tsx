import { Wallet, TrendingUp, ShieldCheck, Cpu } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const services = [
  {
    icon: Wallet,
    title: 'Crypto Wallet Setup',
    description:
      'We help you set up secure wallets for storing, sending, and receiving cryptocurrencies across multiple blockchains.',
  },
  {
    icon: TrendingUp,
    title: 'Trading Strategies',
    description:
      'Custom trading algorithms and strategies tailored to your risk tolerance and investment goals.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Audits',
    description:
      'Comprehensive security assessments of your crypto infrastructure to identify and mitigate vulnerabilities.',
  },
  {
    icon: Cpu,
    title: 'Blockchain Development',
    description:
      'Custom smart contracts, DApps, and blockchain solutions built on Ethereum, Solana, and other networks.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section title */}
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">
            Why Choose Coincast
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand" />
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Left: intro */}
          <div className="flex flex-col justify-center">
            <h3 className="text-xl font-bold text-ink">Trusted by Thousands of Crypto Investors</h3>
            <p className="mt-3 text-mist">
              With over a decade of experience in the cryptocurrency market, our team has helped
              thousands of clients achieve their financial goals through smart digital asset
              management.
            </p>
            <Button variant="primary" className="mt-6 self-start">
              Free Consultation
            </Button>
          </div>

          {/* Middle: 2 services */}
          <div className="space-y-6">
            {services.slice(0, 2).map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink">{s.title}</h4>
                    <p className="mt-1 text-sm text-mist">{s.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right: 2 services */}
          <div className="space-y-6">
            {services.slice(2).map((s) => {
              const Icon = s.icon
              return (
                <div key={s.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-ink">{s.title}</h4>
                    <p className="mt-1 text-sm text-mist">{s.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
