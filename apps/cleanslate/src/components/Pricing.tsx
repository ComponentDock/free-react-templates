import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 49,
    features: ['1 Bedroom Cleaning', 'Basic Window Wash', 'Dusting Surfaces', 'Floor Vacuuming'],
    featured: false,
  },
  {
    name: 'Standard',
    price: 79,
    features: [
      '2 Bedroom Cleaning',
      'Full Window Wash',
      'Deep Dusting',
      'Floor Mopping',
      'Kitchen Sanitize',
    ],
    featured: true,
  },
  {
    name: 'Premium',
    price: 109,
    features: [
      '4 Bedroom Cleaning',
      'Full Window Wash',
      'Deep Dusting',
      'Floor Polishing',
      'Kitchen + Bathroom',
      'Carpet Clean',
    ],
    featured: false,
  },
  {
    name: 'Platinum',
    price: 159,
    features: [
      'Unlimited Rooms',
      'Full Window Wash',
      'Complete Deep Clean',
      'Floor Polishing',
      'All Areas Sanitized',
      'Carpet + Upholstery',
      'Post-Construction',
    ],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section className="py-16 bg-brand-light" id="pricing">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-brand-heading text-3xl md:text-4xl font-bold">Pricing</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {plans.map(({ name, price, features, featured }) => (
            <div
              key={name}
              className={`rounded-lg p-6 text-center transition-shadow hover:shadow-lg ${
                featured
                  ? 'bg-brand-primary text-white shadow-xl scale-105 relative z-10'
                  : 'bg-white text-brand-heading'
              }`}
            >
              {featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-accent text-brand-heading text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </span>
              )}
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${
                  featured ? 'bg-white/20' : 'bg-brand-primary/10'
                }`}
              >
                <svg
                  className={`w-6 h-6 ${featured ? 'text-white' : 'text-brand-primary'}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="font-bold text-lg mb-2">{name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">${price}</span>
                <span className={`text-sm ${featured ? 'text-white/70' : 'text-brand-body'}`}>
                  {' '}
                  /mo
                </span>
              </div>
              <ul className="space-y-2 mb-6 text-sm text-left">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check
                      className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? 'text-brand-accent' : 'text-brand-primary'}`}
                    />
                    <span className={featured ? 'text-white/90' : 'text-brand-body'}>{f}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-2 px-4 rounded font-medium text-sm transition-colors ${
                  featured
                    ? 'bg-white text-brand-primary hover:bg-white/90'
                    : 'bg-brand-primary text-white hover:bg-brand-primary-dark'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
