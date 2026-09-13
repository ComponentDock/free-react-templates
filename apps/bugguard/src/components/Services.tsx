import { Bug, TreePine, BugOff, Shell, Fish, Worm, BugPlay, SprayCan } from 'lucide-react'

const services = [
  {
    icon: Bug,
    title: 'Cockroaches',
    desc: 'We eliminate cockroach infestations using targeted gel baits and residual sprays for long-lasting protection.',
  },
  {
    icon: TreePine,
    title: 'Ants',
    desc: 'Our ant control solutions target the colony at its source, preventing re-infestation effectively.',
  },
  {
    icon: BugOff,
    title: 'Rodents',
    desc: 'Professional rodent removal with humane traps and exclusion techniques to seal entry points.',
  },
  {
    icon: Shell,
    title: 'Scorpion',
    desc: 'Specialized scorpion treatments for homes and businesses in affected regions.',
  },
  {
    icon: Fish,
    title: 'Silver Fish',
    desc: 'We address silverfish problems with moisture control and targeted insecticide application.',
  },
  {
    icon: Worm,
    title: 'Millipedes',
    desc: 'Our team removes millipedes and treats the perimeter to keep them from returning.',
  },
  {
    icon: BugPlay,
    title: 'Spiders',
    desc: 'Comprehensive spider control including web removal, treatment, and preventive barrier application.',
  },
  {
    icon: SprayCan,
    title: 'Centipede',
    desc: 'We eliminate centipedes and address the moisture conditions that attract them.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-paper py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink md:text-4xl">Our Services</h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-mist">
          We offer a complete range of pest control services to keep your property safe and
          pest-free.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative rounded-lg bg-white p-6 text-center shadow-[10px_5px_30px_rgba(35,46,14,0.05)] transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto -mt-12 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-brand text-white shadow-md">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
