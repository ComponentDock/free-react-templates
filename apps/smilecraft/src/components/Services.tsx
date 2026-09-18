import { Sparkles, Stethoscope, Smile, Sun } from 'lucide-react'

const services = [
  {
    title: 'Teeth Whitening',
    description: 'Professional whitening treatments to brighten your smile safely and effectively.',
    icon: Sun,
  },
  {
    title: 'Teeth Cleaning',
    description: 'Thorough dental cleanings to remove plaque and tartar for healthier gums.',
    icon: Sparkles,
  },
  {
    title: 'Quality Brackets',
    description:
      'Advanced orthodontic solutions for perfectly aligned teeth and a confident smile.',
    icon: Smile,
  },
  {
    title: 'Modern Anesthetic',
    description: 'Painless treatments with the latest anesthetic technology for your comfort.',
    icon: Stethoscope,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-ink sm:text-3xl">Our Service Keeps You Smile</h2>
          <p className="mx-auto mt-3 max-w-xl text-body">
            We provide a wide range of dental services to keep your smile healthy and beautiful.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-300/20 text-primary-300">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-2 text-sm text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
