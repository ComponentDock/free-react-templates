import { Shield, Palette, Headphones } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Smart Security',
    description:
      'State-of-the-art security systems to keep you and your belongings safe during every training session.',
  },
  {
    icon: Palette,
    title: 'Unlimited Colors',
    description:
      'Customize your workout environment with our adaptable training spaces designed for every preference.',
  },
  {
    icon: Headphones,
    title: 'Endless Support',
    description:
      'Our dedicated support team and expert trainers are available around the clock to guide your fitness journey.',
  },
]

export function Features() {
  return (
    <section id="features" className="bg-[#f9f9ff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Our Topnotch Features</h2>
          <p className="mt-4 text-muted">
            Discover what makes our gym the perfect place for your fitness journey.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-ink">{feature.title}</h3>
                <p className="leading-relaxed text-muted">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
