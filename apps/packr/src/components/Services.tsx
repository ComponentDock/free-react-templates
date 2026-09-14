import { PenTool, Code, Headphones, Megaphone, Camera, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Web Design',
    description: 'Separated they live in Bookmarksgrove right at the coast',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Separated they live in Bookmarksgrove right at the coast',
  },
  {
    icon: Headphones,
    title: 'Help & Support',
    description: 'Separated they live in Bookmarksgrove right at the coast',
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'Separated they live in Bookmarksgrove right at the coast',
  },
  {
    icon: Camera,
    title: 'Digital Marketing',
    description: 'Separated they live in Bookmarksgrove right at the coast',
  },
  {
    icon: Lightbulb,
    title: 'Web Strategy',
    description: 'Separated they live in Bookmarksgrove right at the coast',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center font-mono text-3xl font-normal text-ink sm:text-4xl">
          What I do
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-6 w-6 text-brand" aria-hidden="true" />
                </div>
                <h3 className="font-mono text-lg font-medium text-ink">{service.title}</h3>
                <p className="mt-2 font-mono text-sm text-mist">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
