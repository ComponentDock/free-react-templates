import { Headphones, Sparkles, Car, UtensilsCrossed } from 'lucide-react'
import { Star } from './Star'

const SERVICES = [
  {
    icon: Headphones,
    title: '24/7 Front Desk',
    description:
      'Our front desk team is available around the clock to assist you with anything you need.',
  },
  {
    icon: Sparkles,
    title: 'Spa Suites',
    description: 'Indulge in luxurious spa treatments designed to rejuvenate your body and mind.',
  },
  {
    icon: Car,
    title: 'Transfer Services',
    description: 'Complimentary airport transfers and chauffeur services for our guests.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Restaurant & Bar',
    description: 'Savor exquisite cuisines and handcrafted cocktails at our in-house dining.',
  },
]

export function Services() {
  return (
    <section id="amenities" className="bg-white py-20" aria-labelledby="services-heading">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-2 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} filled />
            ))}
          </div>
          <h2 id="services-heading" className="mb-3 font-heading text-3xl text-black">
            Services
          </h2>
          <p className="mx-auto max-w-md text-sm text-text-body">
            Experience world-class hospitality with our exceptional range of services
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto mb-4 flex h-[120px] w-[120px] items-center justify-center rounded-full bg-icon-circle">
                <service.icon size={40} className="text-brand-blue" />
              </div>
              <h3 className="mb-2 font-heading text-lg text-black">{service.title}</h3>
              <p className="text-sm leading-relaxed text-text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
