import { CheckCircle2 } from 'lucide-react'

const reasons = [
  'We Strive For LIVE Answer On Our Calls',
  'A Wide Spectrum Of Skills And Experience',
  'Fast Response To Requests & Critical Response Time Guaranteed',
  'We Help Solve Your Business Problems',
] as const

export function WhyChooseUs() {
  return (
    <section
      aria-label="Why choose us"
      className="bg-paper py-20 transition-colors dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-brand">
            Our promise
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Why Choose Us</h2>
          <p className="mt-5 leading-relaxed text-mist dark:text-gray-400">
            We believe great hair is built on trust, skill, and a genuine love for the craft. Here
            is why clients keep coming back to Gilded.
          </p>
          <ul className="mt-8 space-y-4">
            {reasons.map((reason) => (
              <li key={reason} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="font-medium">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/gilded-why/800/600"
            alt="Stylist working with a client"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
