import { BadgeCheck, ShieldCheck, Star } from 'lucide-react'
import { Reveal } from './Reveal'

const testimonials = [
  {
    name: 'Alexandra Chen',
    location: 'Los Angeles, CA',
    seed: 'moda-t-alexandra',
    quote:
      'The quality of the pieces is outstanding. My order arrived in two days and the fit was perfect — I have already placed my third order this month.',
  },
  {
    name: 'Marcus Johnson',
    location: 'Austin, TX',
    seed: 'moda-t-marcus',
    quote:
      'Best shopping experience I have had online. The size guide is accurate, returns are painless, and the customer support team actually responds.',
  },
  {
    name: 'Sophie Williams',
    location: 'New York, NY',
    seed: 'moda-t-sophie',
    quote:
      'From the packaging to the fabric, everything feels premium. The seasonal sale prices are unbeatable and the new arrivals drop every week.',
  },
] as const

const trustRow = [
  { label: 'Trustpilot', icon: Star },
  { label: 'SSL Secured', icon: ShieldCheck },
  { label: 'Verified Reviews', icon: BadgeCheck },
] as const

export function Testimonials() {
  return (
    <section id="about" className="bg-white py-16 dark:bg-gray-950 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal>
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              What Our Customers Say
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-gray-600 dark:text-gray-400">
              Join thousands of satisfied customers who love shopping with us
            </p>
          </div>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.name}
                className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-gray-700 dark:text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={`https://picsum.photos/seed/${testimonial.seed}/200/200`}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-display text-sm font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {testimonial.location}
                    </p>
                  </div>
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                    Verified
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 border-t border-gray-200 pt-8 dark:border-gray-800">
            {trustRow.map((item) => (
              <span
                key={item.label}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400"
              >
                <item.icon
                  className="h-4 w-4 text-primary-600 dark:text-primary-400"
                  aria-hidden="true"
                />
                {item.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
