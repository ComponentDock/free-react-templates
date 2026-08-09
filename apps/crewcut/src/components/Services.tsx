import { Droplets, Hand, Scissors, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Scissors,
    title: 'Beard Trimming',
    color: 'text-[#4cd3e3]',
    blurb: 'Precision beard shaping and line-up for a sharp, tidy look every time.',
  },
  {
    icon: Droplets,
    title: 'Quality Gel Shave',
    color: 'text-[#38a4ff]',
    blurb: 'Hot-towel gel shaves with soothing products for a smooth, clean finish.',
  },
  {
    icon: Hand,
    title: 'Effective Body Massage',
    color: 'text-[#f4e700]',
    blurb: 'Relaxing scalp and shoulder massage to round off your appointment.',
  },
  {
    icon: Sparkles,
    title: 'Stylish Hair Cutting',
    color: 'text-[#f44a40]',
    blurb: 'Modern cuts and classic styles tailored to your face and taste.',
  },
] as const

export function Services() {
  return (
    <section
      id="service"
      className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-black text-ink dark:text-white lg:text-4xl">
            What We Can Do for You
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-paper p-8 text-center transition-shadow hover:shadow-lg dark:bg-gray-900"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm dark:bg-gray-800">
                <service.icon className={`h-8 w-8 ${service.color}`} aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.blurb}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
