import { Check } from 'lucide-react'

const TICKETS = [
  {
    type: 'General',
    price: 'Free',
    features: ['Museum entry', 'Self-guided tour', 'Gallery access', 'Audio guide app'],
    featured: false,
  },
  {
    type: 'Premium',
    price: '$25',
    features: [
      'Museum entry',
      'Guided tour',
      'All galleries',
      'Exhibition catalogue',
      'Gift shop discount',
    ],
    featured: true,
  },
  {
    type: 'VIP',
    price: '$60',
    features: [
      'Museum entry',
      'Private guided tour',
      'All galleries',
      'Opening gala access',
      'Artist meet & greet',
      'Complimentary drinks',
    ],
    featured: false,
  },
]

export function Ticket() {
  return (
    <section id="ticket" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-bold text-navy">
          <span className="font-[family-name:var(--font-playfair)]">Ticket Pricing</span>
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TICKETS.map((ticket) => (
            <div
              key={ticket.type}
              className={`rounded-lg p-8 text-center ${
                ticket.featured ? 'bg-navy text-white ring-2 ring-accent' : 'bg-light-bg text-navy'
              }`}
            >
              <h3 className="mb-2 text-xl font-semibold">{ticket.type}</h3>
              <p className="mb-6 text-3xl font-bold text-accent">{ticket.price}</p>
              <ul className="mb-8 space-y-3 text-sm">
                {ticket.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2">
                    <Check className="h-4 w-4 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`inline-block px-8 py-3 text-sm font-bold uppercase tracking-wider transition-colors ${
                  ticket.featured
                    ? 'bg-accent text-white hover:bg-accent-dark'
                    : 'bg-navy text-white hover:bg-navy-light'
                }`}
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
