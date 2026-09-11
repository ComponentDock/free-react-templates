import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Exciting Opportunity',
    description:
      'Access early-stage ICOs and blockchain projects with transparent tokenomics and real-time progress tracking.',
  },
  {
    icon: Shield,
    title: 'Vetted ICO Marketplace',
    description:
      'Every project undergoes rigorous due diligence to ensure legitimacy, compliance, and long-term viability.',
  },
  {
    icon: TrendingUp,
    title: 'Diverse Profit Ways',
    description:
      'From token staking to yield farming, explore multiple avenues to grow your digital asset portfolio.',
  },
]

export function Features() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((f) => (
            <a
              key={f.title}
              href="#"
              className="group rounded-xl bg-brand/30 p-8 text-center transition-colors hover:bg-brand/50"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/20">
                <f.icon className="h-8 w-8 text-accent" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-white">{f.title}</h3>
              <p className="text-sm text-light/70">{f.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
