import { Scissors, Droplets, Hand, Sparkles } from 'lucide-react'

const services = [
  {
    title: 'Beard Trimming',
    description:
      'Expert beard shaping and trimming to keep your facial hair looking sharp and well-groomed at all times.',
    icon: Scissors,
  },
  {
    title: 'Quality Gel Shave',
    description:
      'Smooth and comfortable gel shaves with premium products that leave your skin feeling refreshed.',
    icon: Droplets,
  },
  {
    title: 'Effective Body Massage',
    description:
      'Relaxing full-body massage treatments designed to relieve tension and promote overall wellness.',
    icon: Hand,
  },
  {
    title: 'Stylish Hair Cutting',
    description:
      'Professional haircuts tailored to your style, from classic cuts to the latest modern trends.',
    icon: Sparkles,
  },
]

export function Services() {
  return (
    <section id="service" className="bg-section-light py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">What We Can Do for You</h2>
          <p className="mt-2 text-gray-500">Expert grooming services for the modern gentleman.</p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="flex gap-5">
                <Icon
                  className="h-12 w-12 shrink-0 text-pink-400"
                  aria-hidden="true"
                  strokeWidth={1.5}
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">
                    {service.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
