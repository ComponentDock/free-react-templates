import { Code, Palette, Lightbulb, PenTool } from 'lucide-react'
import type { ReactNode } from 'react'

const services: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <Code className="h-8 w-8" aria-hidden="true" />,
    title: 'Web Development',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: <Lightbulb className="h-8 w-8" aria-hidden="true" />,
    title: 'Web Design',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: <Palette className="h-8 w-8" aria-hidden="true" />,
    title: 'Graphic Design',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: <PenTool className="h-8 w-8" aria-hidden="true" />,
    title: 'Copywriting',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-ink">Services</h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex items-start gap-4 rounded-lg border border-gray-100 p-6 transition-shadow hover:shadow-md"
            >
              <div className="shrink-0 rounded-full bg-primary-50 p-3 text-primary-400">
                {service.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
