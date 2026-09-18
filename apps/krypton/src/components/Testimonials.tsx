import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Krypton transformed our online presence completely. Their attention to detail and creative vision exceeded our expectations.',
    name: 'Rebecca Torres',
    company: 'Horizon Media',
    img: 'https://picsum.photos/seed/krypton-test1/80/80',
  },
  {
    quote:
      'Working with this team was an absolute pleasure. They delivered a stunning website on time and within budget.',
    name: 'Michael Lawrence',
    company: 'Apex Solutions',
    img: 'https://picsum.photos/seed/krypton-test2/80/80',
  },
  {
    quote:
      'The results speak for themselves — our traffic increased by 150% within three months of launch.',
    name: 'Lisa Nguyen',
    company: 'Stellar Brands',
    img: 'https://picsum.photos/seed/krypton-test3/80/80',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            What Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-body dark:text-gray-400">
            Hear from businesses we've helped succeed.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="relative rounded-xl border border-gray-100 bg-mist p-8 dark:border-gray-800 dark:bg-gray-900"
            >
              <Quote
                className="absolute right-6 top-6 h-8 w-8 text-primary-200 dark:text-primary-800"
                aria-hidden="true"
              />
              <p className="relative z-10 text-sm leading-relaxed text-body dark:text-gray-400">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-ink dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-primary-500">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
