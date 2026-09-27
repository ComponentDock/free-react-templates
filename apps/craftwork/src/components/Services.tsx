import { Palette, Code, Camera, Smartphone } from 'lucide-react'

const services = [
  {
    icon: Palette,
    title: 'UI/UX Design',
    description:
      'Research-driven interfaces that balance aesthetics with usability, from wireframes to polished prototypes.',
  },
  {
    icon: Code,
    title: 'Frontend Development',
    description:
      'Clean, performant code using modern frameworks — React, TypeScript, and Tailwind CSS.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Product and lifestyle photography that brings brands to life with authentic visual storytelling.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Design',
    description:
      'Native-feel mobile experiences designed with platform conventions and gesture-driven navigation.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-cloud py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-brand">
            Services
          </span>
          <h2 className="mt-2 text-4xl font-bold text-ink">What I do</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand/15 text-brand">
                <s.icon size={28} />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
