import {
  ArrowRight,
  Building2,
  Compass,
  DraftingCompass,
  Factory,
  HardHat,
  Ruler,
} from 'lucide-react'

const services = [
  {
    title: 'Pre-Construction Services',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: Compass,
  },
  {
    title: 'General Construction',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: Building2,
  },
  {
    title: 'Expert Engineer',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: HardHat,
  },
  {
    title: 'Design Build',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: DraftingCompass,
  },
  {
    title: 'Modeling',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: Ruler,
  },
  {
    title: 'Industrial',
    blurb:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    Icon: Factory,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 dark:bg-gray-950 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[2.4px] text-brand">Services</p>
          <h2 className="mt-2 font-display text-4xl font-extrabold uppercase text-ink dark:text-white">
            Our Services
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, blurb, Icon }) => (
            <div key={title} className="group">
              <Icon
                className="h-12 w-12 text-brand transition-transform duration-300 group-hover:-translate-y-1"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-display text-lg font-bold uppercase text-ink dark:text-white">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">{blurb}</p>
              <a
                href="#services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase text-brand transition-colors hover:text-brand-dark"
              >
                Learn more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
