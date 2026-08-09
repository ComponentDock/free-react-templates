import { Brush, Palette, Scissors, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Haircuts & Styling',
    copy: 'Precision cuts and styling for every face shape, finished to your taste.',
  },
  {
    icon: Brush,
    title: 'Beard Treatment',
    copy: 'Hot-towel conditioning and sculpting that keeps your beard in line.',
  },
  {
    icon: Palette,
    title: 'Coloring Services',
    copy: 'From subtle highlights to bold transformations by our colorists.',
  },
  {
    icon: Sparkles,
    title: 'Beard Waxing',
    copy: 'Clean lines and smooth results with gentle, professional waxing.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-24 transition-colors dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Our <span className="text-brand">Services</span>
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group text-center transition-transform hover:-translate-y-1"
            >
              <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand">
                <service.icon
                  className="h-9 w-9 text-brand transition-colors group-hover:text-white"
                  aria-hidden="true"
                />
              </span>
              <h3 className="mt-6 text-lg font-semibold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
