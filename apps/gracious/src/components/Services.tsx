import { HandCoins, HeartHandshake, Handshake } from 'lucide-react'

const services = [
  {
    title: 'Make Donation',
    icon: HandCoins,
    description:
      'Your generous donations help us provide essential resources to communities in need around the world.',
  },
  {
    title: 'Become A Volunteer',
    icon: HeartHandshake,
    description:
      'Join our team of dedicated volunteers and make a real difference in the lives of those who need it most.',
  },
  {
    title: 'Sponsorship',
    icon: Handshake,
    description:
      'Sponsor a child or a community project and help create lasting change for generations to come.',
  },
] as const

export function Services() {
  return (
    <section id="about" className="bg-section py-16 transition-colors lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            What We Do
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">Our Services</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group overflow-hidden rounded bg-white shadow-md transition-all hover:shadow-lg"
            >
              <div className="flex items-center justify-center px-6 py-10">
                <service.icon className="h-14 w-14 text-teal" aria-hidden="true" />
              </div>
              <div className="px-5 pb-6 text-center">
                <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
