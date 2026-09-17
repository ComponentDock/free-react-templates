import { Check } from 'lucide-react'

const benefits = [
  'Professional stylists with 10+ years experience',
  'Premium organic hair products',
  'Relaxing salon atmosphere',
  'Affordable luxury for every visit',
]

export function WhyChooseUs() {
  return (
    <section className="bg-alt-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Image */}
          <div>
            <img
              src="https://picsum.photos/seed/shearglow-why/700/500"
              alt="ShearGlow salon experience"
              className="w-full rounded object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-dark">Why Choose Us</h2>
            <div className="mt-2 h-1 w-16 bg-gold-400" />
            <p className="mt-6 leading-relaxed text-muted">
              At ShearGlow, we believe every client deserves a premium experience. Our team of
              expert stylists uses only the finest products and latest techniques to ensure you
              leave looking and feeling your absolute best.
            </p>
            <ul className="mt-6 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-400 text-white">
                    <Check className="h-3 w-3" />
                  </span>
                  <span className="text-dark">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
