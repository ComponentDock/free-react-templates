import { BookOpen, Lightbulb, HelpCircle } from 'lucide-react'

const resources = [
  {
    icon: BookOpen,
    title: 'Crypto Education',
    description:
      'Comprehensive guides and tutorials covering everything from blockchain basics to advanced trading strategies.',
  },
  {
    icon: Lightbulb,
    title: 'Market Insights',
    description:
      'Daily market analysis, trend reports, and investment opportunities curated by our expert team.',
  },
  {
    icon: HelpCircle,
    title: 'Support Center',
    description:
      '24/7 support with dedicated account managers to help you navigate the world of cryptocurrency.',
  },
]

export function Resources() {
  return (
    <section id="resources" className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink lg:text-4xl">Our Resources</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand" />
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r) => {
            const Icon = r.icon
            return (
              <article
                key={r.title}
                className="rounded-lg border border-border bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={28} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-mist">{r.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
