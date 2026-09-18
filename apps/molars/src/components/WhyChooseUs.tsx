import { Zap, Smile, Clock } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Fast Support',
    description: 'Quick response times and efficient treatment scheduling for your convenience.',
  },
  {
    icon: Smile,
    title: 'Happy Customers',
    description: 'Thousands of satisfied patients who trust us with their dental health.',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock emergency dental care whenever you need it most.',
  },
] as const

export function WhyChooseUs() {
  return (
    <section id="about" className="flex flex-col bg-gray-50 md:flex-row">
      {/* Image */}
      <div className="order-2 flex-1 md:order-1">
        <img
          src="https://picsum.photos/seed/molars-why/800/600"
          alt="Modern dental clinic"
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Content */}
      <div className="order-1 flex-1 px-6 py-12 sm:px-10 md:order-2 md:py-16 lg:px-16">
        <h2 className="mb-3 font-display text-2xl font-bold text-gray-900 sm:text-3xl">
          Why <span className="font-extrabold">Choose us</span>
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-ink">
          We are committed to providing the highest quality dental care with modern technology and a
          compassionate approach.
        </p>
        <div className="space-y-6">
          {reasons.map((r) => (
            <div key={r.title} className="flex items-start gap-4">
              <r.icon className="mt-0.5 h-6 w-6 shrink-0 text-primary-400" aria-hidden="true" />
              <div>
                <h3 className="mb-1 text-lg font-semibold text-gray-900">{r.title}</h3>
                <p className="text-sm leading-relaxed text-ink">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
