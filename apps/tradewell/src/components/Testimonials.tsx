import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Tradewell made investing accessible for me. I started with just $100 and built a diversified portfolio using fractional shares. The app is incredibly intuitive.',
    name: 'Jessica Daniels',
    role: 'First-time investor',
    metricLabel: 'Portfolio Growth',
    metricValue: '+47%',
    initials: 'JD',
  },
  {
    quote:
      'I switched from my old broker and never looked back. Real-time data, instant deposits, and zero commissions have completely changed how I trade.',
    name: 'Marcus Kim',
    role: 'Active trader',
    metricLabel: 'Trades/Month',
    metricValue: '500+',
    initials: 'MK',
  },
  {
    quote:
      'As a financial advisor, I recommend Tradewell to all my clients. The research tools and tax optimization features are genuinely best-in-class.',
    name: 'Amanda Stewart',
    role: 'Financial advisor',
    metricLabel: 'Clients Referred',
    metricValue: '200+',
    initials: 'AS',
  },
  {
    quote:
      'The crypto integration is seamless. I can manage my stocks, ETFs, and Bitcoin all in one place without juggling multiple apps.',
    name: 'Ryan Brooks',
    role: 'Crypto investor',
    metricLabel: 'Crypto Holdings',
    metricValue: '$85K',
    initials: 'RB',
  },
  {
    quote:
      'Tax-loss harvesting saved me over $3,200 this year without me lifting a finger. It pays for the Pro plan many times over.',
    name: 'Taylor Lewis',
    role: 'Long-term investor',
    metricLabel: 'Tax Savings',
    metricValue: '$3,200',
    initials: 'TL',
  },
  {
    quote:
      'The educational content and market insights helped me learn options trading safely. My win rate has improved dramatically.',
    name: 'Priya Natarajan',
    role: 'Options trader',
    metricLabel: 'Win Rate',
    metricValue: '68%',
    initials: 'PN',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Loved by{' '}
            <span className="text-primary-600 dark:text-primary-400">12 Million+ Investors</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            See what our community has to say about their experience with Tradewell.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-4 flex text-amber-400" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="text-gray-700 dark:text-gray-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-600 text-sm font-bold text-white">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </figcaption>
              <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent-100 px-3 py-1.5 dark:bg-accent-900/30">
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {testimonial.metricLabel}
                </span>
                <span className="font-mono text-xs font-bold text-accent-600 dark:text-accent-400">
                  {testimonial.metricValue}
                </span>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
