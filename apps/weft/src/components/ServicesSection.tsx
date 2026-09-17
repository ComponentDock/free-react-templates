import { Palette, Globe, Camera, Compass } from 'lucide-react'

const SERVICES = [
  {
    icon: Palette,
    title: 'Brand Design',
    description:
      'Complete brand identity systems including logos, color palettes, typography, and brand guidelines that tell your story.',
  },
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom website solutions built with modern technologies, optimized for performance and user experience.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description:
      'Professional photography services for products, portraits, and editorial content that captures attention.',
  },
  {
    icon: Compass,
    title: 'Creative Strategy',
    description:
      'Strategic planning and creative direction to ensure your brand message reaches the right audience effectively.',
  },
]

export function ServicesSection() {
  return (
    <div className="bg-bg-light px-6 py-16 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="relative mb-12 text-2xl font-medium text-heading lg:text-3xl">
          Our Services
          <span className="absolute bottom-[-10px] left-[2px] h-[2px] w-[30px] bg-accent" />
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <service.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-medium text-heading">{service.title}</h3>
              <p className="text-sm leading-relaxed text-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
