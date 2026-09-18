import { Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      "Also made from. Give may saying meat there from heaven it lights face had is gathered. God dea earth light for life may itself shall whales made they're blessed.",
    author: 'Mosan Cameron',
    role: 'Executive of FedEx',
  },
  {
    quote:
      'Amazing dining experience. The flavors were incredible and the service was top-notch. Will definitely come back for more of their signature dishes.',
    author: 'Sarah Mitchell',
    role: 'Food Critic',
  },
  {
    quote:
      "From the ambiance to the plate, everything was完美 crafted. The honey meat was a standout dish that I'd recommend to anyone visiting.",
    author: 'David Chen',
    role: 'Regular Customer',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-paper py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white">
            Customers Feedback
          </h2>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.author}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <div className="flex gap-1 text-brand">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                ))}
                <span className="sr-only">5 out of 5 stars</span>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-mist dark:text-gray-400">
                "{t.quote}"
              </p>
              <div className="mt-6 border-t border-gray-100 pt-4 dark:border-gray-700">
                <p className="font-display text-sm font-bold text-ink dark:text-white">
                  {t.author}
                </p>
                <p className="mt-0.5 text-xs text-mist dark:text-gray-500">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
