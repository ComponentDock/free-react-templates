import { Palette, Code } from 'lucide-react'

const SERVICES = [
  {
    icon: Palette,
    title: 'Design & Development',
    description: 'Strategy and creative',
    bullets: [
      'Design better websites and spend.',
      "We'll extend your term.",
      'Get the breathing space now.',
    ],
  },
  {
    icon: Code,
    title: 'Engineering & Delivery',
    description: 'Technical execution',
    bullets: [
      'Design better websites and spend.',
      "We'll extend your term.",
      'Get the breathing space now.',
    ],
  },
]

export function Services() {
  return (
    <section id="services" className="bg-light-gray py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-[44px] font-bold leading-[1.4] text-navy">
          Improved Digital Experience
        </h2>
        <p className="mb-12 max-w-3xl text-navy-gray">
          Apply for a business loan today and, if approved, you could enjoy the first 8 weeks with
          no repayments. Get the breathing space now, and we&apos;ll extend your term at the other
          end (interest will accrue from the settlement date to the end of the term).
        </p>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-8">
            {SERVICES.map((service) => (
              <div key={service.title}>
                <div className="mb-3 flex items-center gap-3">
                  <service.icon size={28} className="text-brand" />
                  <h5 className="text-lg font-semibold text-navy">
                    <a href="#" className="hover:text-brand">
                      {service.title}
                    </a>
                  </h5>
                </div>
                <ul className="mb-3 space-y-1 pl-1 text-navy-gray">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="text-sm font-semibold text-brand underline decoration-brand decoration-2 underline-offset-4 transition-colors hover:text-navy"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
          <div className="lg:col-span-2">
            <img
              src="https://picsum.photos/seed/crest-services/800/500"
              alt="Services"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
