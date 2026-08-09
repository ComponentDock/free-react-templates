import { Brush, Flower2, Gem, Scissors, Sparkles, Waves } from 'lucide-react'

const services = [
  { name: 'Hair Dressing', blurb: 'Cuts, colors and styling by master stylists.', Icon: Scissors },
  { name: 'Zen Massage', blurb: 'Deep relaxation with pressure-point therapy.', Icon: Flower2 },
  { name: 'Manicure & Pedicure', blurb: 'Nail care that finishes every look.', Icon: Sparkles },
  { name: 'Make Up', blurb: 'Event-ready looks for any occasion.', Icon: Brush },
  { name: 'Tanning Bed', blurb: 'A sun-kissed glow, year round.', Icon: Gem },
  { name: 'Spa Treatments', blurb: 'Rejuvenating rituals for body and mind.', Icon: Waves },
] as const

export function Services() {
  return (
    <section id="services" className="bg-gray-950 py-20 text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-sans text-4xl font-bold uppercase tracking-wide">Our Services</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Everything you need to look and feel your best — under one roof.
          </p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ name, blurb, Icon }) => (
            <li
              key={name}
              className="rounded-2xl border border-white/10 bg-white/5 p-8 transition-colors hover:border-rouge-400/60"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-rouge-600 text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-sans text-xl font-bold uppercase tracking-wide">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{blurb}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
