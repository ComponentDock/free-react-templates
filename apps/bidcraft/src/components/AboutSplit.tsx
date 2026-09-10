import { Headphones, Clock } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: 'Fast Support',
    description:
      'Our dedicated team provides quick assistance for all your bidding and selling needs.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock customer service to help you whenever you need it.',
  },
] as const

export function AboutSplit() {
  return (
    <section id="about" className="py-16 sm:py-20" aria-label="About Us">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <img
            src="https://picsum.photos/seed/bidcraft-about/700/500"
            alt="About Bidcraft"
            className="h-auto w-full rounded-sm object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-wider text-primary-400">About</span>
          <h2 className="mt-2 font-display text-3xl font-bold text-ink">
            About <span className="text-primary-400">Us</span>
          </h2>
          <div className="mt-8 space-y-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-primary-50">
                    <Icon className="h-6 w-6 text-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-ink">{feature.title}</h3>
                    <p className="mt-1 text-sm text-smoke">{feature.description}</p>
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
