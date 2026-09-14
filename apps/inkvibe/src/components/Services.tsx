import { Brush, Scissors, Trash2, Gem, Zap, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Brush,
    title: 'Tattooing',
    description:
      'Custom tattoos designed and executed with precision. From concept to skin, we bring your vision to life.',
  },
  {
    icon: Gem,
    title: 'Tattoo Design',
    description:
      'Collaborative design sessions to create unique artwork tailored to your style and story.',
  },
  {
    icon: Trash2,
    title: 'Tattoo Removal',
    description:
      'Safe and effective laser removal treatments to fade or eliminate unwanted tattoos.',
  },
  {
    icon: Sparkles,
    title: 'Piercing',
    description:
      'Professional body piercing with sterile equipment and a wide selection of jewelry.',
  },
  {
    icon: Zap,
    title: 'Laser Removal',
    description: 'Advanced laser technology for precise tattoo removal with minimal scarring.',
  },
  {
    icon: Scissors,
    title: 'Henna Design',
    description:
      'Beautiful temporary henna art for special occasions, festivals, and celebrations.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-void py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-white">What We Do</h2>
          <p className="mt-4 text-gray-400">Professional tattoo services for every need</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-800 bg-obsidian p-6 transition-colors hover:border-primary-400/30"
            >
              <service.icon className="h-10 w-10 text-primary-400" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
