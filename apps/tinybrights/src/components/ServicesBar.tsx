import { BookOpen, Palette, Music, Sparkles } from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Fun Learning',
    description: 'Engaging curriculum designed to make education enjoyable for every child.',
    bgColor: 'bg-brand-blue',
  },
  {
    icon: Palette,
    title: 'Art & Crafts',
    description: 'Creative workshops that let little artists express themselves freely.',
    bgColor: 'bg-brand-green',
  },
  {
    icon: Music,
    title: 'Music & Dance',
    description: 'Rhythm and movement classes that inspire joy and coordination.',
    bgColor: 'bg-brand-purple',
  },
  {
    icon: Sparkles,
    title: 'Creative Play',
    description: 'Safe play areas where imagination and social skills come to life.',
    bgColor: 'bg-brand-red',
  },
]

export function ServicesBar() {
  return (
    <section className="py-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className={`${service.bgColor} flex flex-col items-center px-6 py-12 text-center text-white`}
            >
              <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white">
                <Icon className="h-8 w-8 text-brand-blue" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
