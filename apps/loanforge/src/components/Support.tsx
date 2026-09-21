import { Check } from 'lucide-react'

const features = [
  'Trusted by over 10,000 businesses worldwide',
  'Competitive interest rates starting from 3.5%',
  'Quick approval within 24-48 hours',
  'Dedicated relationship manager for every client',
]

export function Support() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 lg:grid-cols-2 lg:px-8">
        {/* Image */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/loanforge-support/600/500"
            alt="Loanforge team"
            className="rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 rounded-lg bg-brand px-6 py-3 text-sm font-bold text-white shadow-lg lg:-right-8">
            Since 1992
          </div>
        </div>

        {/* Checklist */}
        <div>
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand">
            Why Choose Our Company
          </p>
          <h2 className="mb-6 text-3xl font-bold leading-snug text-navy md:text-4xl">
            We Promise Sustainable Future For You.
          </h2>
          <p className="mb-8 leading-relaxed text-text">
            Our commitment to excellence and customer satisfaction has made us a trusted partner for
            businesses seeking reliable financial solutions.
          </p>
          <ul className="space-y-4">
            {features.map((feat) => (
              <li key={feat} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand">
                  <Check size={14} className="text-white" />
                </span>
                <span className="text-text">{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
