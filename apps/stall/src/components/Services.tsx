import { Truck, Shield, Headphones, RotateCcw, CreditCard, Gift } from 'lucide-react'

const services = [
  { icon: Truck, title: 'Free Shipping', desc: 'Free shipping on all orders over $50.' },
  {
    icon: Shield,
    title: 'Secure Payment',
    desc: 'Your payment information is processed securely.',
  },
  { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock customer support.' },
  { icon: RotateCcw, title: 'Easy Returns', desc: '30-day hassle-free return policy.' },
  { icon: CreditCard, title: 'Flexible Payment', desc: 'Multiple payment options available.' },
  { icon: Gift, title: 'Gift Cards', desc: 'Perfect gift for your loved ones.' },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black uppercase tracking-wide text-heading">
          Our Services
        </h2>
        <div className="mx-auto mt-2 h-1 w-16 bg-brand" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-gray-100 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <s.icon className="mx-auto h-10 w-10 text-brand" />
              <h3 className="mt-4 text-lg font-bold text-heading">{s.title}</h3>
              <p className="mt-2 text-sm text-body">{s.desc}</p>
              <a
                href="#learn-more"
                className="mt-4 inline-block text-sm font-bold uppercase text-brand hover:underline"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
