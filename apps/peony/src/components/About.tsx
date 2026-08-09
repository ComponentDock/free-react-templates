import { Brush, Flower2, Hand, Scissors, type LucideIcon } from 'lucide-react'

interface Feature {
  icon: LucideIcon
  name: string
  copy: string
}

const features: Feature[] = [
  {
    icon: Brush,
    name: 'Makeup',
    copy: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Scissors,
    name: 'Hair Styling',
    copy: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Hand,
    name: 'Nails',
    copy: 'A small river named Duden flows by their place and supplies.',
  },
  {
    icon: Flower2,
    name: 'Body Treatment',
    copy: 'A small river named Duden flows by their place and supplies.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-white py-20 transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            About Us
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
            A World Class Beauty Salon Company
          </h2>
          <p className="mt-4 text-mist dark:text-white/60">
            But nothing the copy said could convince her and so it didn&apos;t take long until a few
            insidious Copy Writers ambushed her, made her drunk with Longe and Parole and dragged
            her into their agency, where they abused her for their.
          </p>
          <div className="mt-8 h-px w-24 bg-brand" aria-hidden="true" />
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-plum/10 p-6 transition-colors hover:border-brand/40 dark:border-white/10"
            >
              <feature.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold">{feature.name}</h3>
              <p className="mt-2 text-sm text-mist dark:text-white/60">{feature.copy}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
