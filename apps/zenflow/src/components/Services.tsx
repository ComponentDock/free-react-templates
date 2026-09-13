import { Code, Camera, Palette, Megaphone, Film, Headphones } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.',
  },
  {
    icon: Camera,
    title: 'Photography',
    description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur.',
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.',
  },
  {
    icon: Film,
    title: 'Digital Media',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-ink sm:text-4xl">
          Services We Provides
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-primary-400" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-400">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-bold uppercase tracking-wider text-ink">
                {service.title}
              </h3>
              <p className="mt-4 text-body leading-relaxed">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
