import { CheckCircle } from 'lucide-react'

const features = [
  'Over 15 years of industry experience',
  'Licensed and insured professionals',
  '24/7 emergency service available',
  'Competitive and transparent pricing',
]

export function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded">
            <img
              src="https://picsum.photos/seed/keyforge-about/800/600"
              alt="Locksmith working on a lock"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-brand">
              Why Choose Us
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink">
              Professional Security You Can Trust
            </h2>
            <p className="mt-4 leading-relaxed text-body">
              We are a team of certified security professionals dedicated to providing top-notch
              locksmith and security solutions. Our commitment to quality and customer satisfaction
              sets us apart in the industry.
            </p>
            <ul className="mt-6 space-y-3">
              {features.map((feat) => (
                <li key={feat} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 flex-shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-body">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
