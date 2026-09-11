import { TrendingUp, Shield, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Crypto Trading',
    description:
      'Advanced trading algorithms and real-time market analysis to maximize your cryptocurrency portfolio returns.',
    image: 'https://picsum.photos/seed/coincast-feat1/400/300',
  },
  {
    icon: Shield,
    title: 'Secure Storage',
    description:
      'Industry-leading cold storage solutions and multi-signature wallets to keep your digital assets safe.',
    image: 'https://picsum.photos/seed/coincast-feat2/400/300',
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description:
      'Comprehensive market research and trend analysis to inform your investment decisions.',
    image: 'https://picsum.photos/seed/coincast-feat3/400/300',
  },
]

export function Featured() {
  return (
    <section className="bg-paper py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <article
                key={f.title}
                className="group overflow-hidden rounded-lg bg-white shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-4 left-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>
                <div className="px-6 pb-6 pt-8">
                  <h3 className="font-display text-xl font-bold text-ink">{f.title}</h3>
                  <p className="mt-3 text-mist">{f.description}</p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-sm font-semibold uppercase text-brand hover:text-brand-dark"
                  >
                    Read More
                  </a>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
