import { Coffee, Leaf, Timer } from 'lucide-react'

const features = [
  {
    icon: Coffee,
    title: 'Hand-Roasted',
    description: 'Small-batch roasting brings out the unique character of every bean.',
  },
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    description: 'Direct trade relationships ensure fair prices for farmers worldwide.',
  },
  {
    icon: Timer,
    title: 'Fresh Daily',
    description: 'Roasted every morning so you always get the freshest possible cup.',
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-paper py-20 transition-colors dark:bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            A Passion for Perfect Coffee
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-mist">
            Founded by coffee lovers, for coffee lovers. We travel the world to source the finest
            beans, then roast them to perfection right here in our micro-roastery.
          </p>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <feature.icon className="h-7 w-7 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold text-ink dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
