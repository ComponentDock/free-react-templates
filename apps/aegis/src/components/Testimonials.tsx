import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const quotes = [
  {
    name: 'Marcus Chen',
    role: 'CISO, Meridian Financial Group',
    quote:
      'Aegis cut our mean time to contain from hours to minutes. The automated response playbooks are a game changer for a team our size.',
  },
  {
    name: 'Sarah Blackwell',
    role: 'VP of Security, HealthCore Systems',
    quote:
      'We evaluated every major platform and Aegis was the only one that caught real zero-days in our evaluation. The false positive rate is genuinely 0.001%.',
  },
  {
    name: 'James Okafor',
    role: 'Head of InfoSec, NovaTech Industries',
    quote:
      'Deployment took under 24 hours across 14,000 endpoints. The agent is so light our users never noticed a thing.',
  },
  {
    name: 'Elena Petrova',
    role: 'SOC Manager, Global Logistics Corp',
    quote:
      'The dashboard gives our analysts exactly what they need, and the 24/7 SOC coverage means we finally sleep at night.',
  },
  {
    name: 'David Kim',
    role: 'CISO, Pacific Retail Holdings',
    quote:
      'Aegis integrated with our existing SIEM instead of replacing it. Best procurement decision we made this year.',
  },
  {
    name: 'Rachel Torres',
    role: 'Director of IT Security, Apex Manufacturing',
    quote:
      'From endpoint to cloud, everything is visible in one place. Their incident response team was phenomenal during our simulated attack.',
  },
] as const

const PAGE_SIZE = 3

function initials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

function Stars() {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [page, setPage] = useState(0)
  const pageCount = quotes.length - PAGE_SIZE + 1

  const next = () => setPage((current) => (current + 1) % pageCount)
  const prev = () => setPage((current) => (current - 1 + pageCount) % pageCount)

  const visible = quotes.slice(page, page + PAGE_SIZE)

  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Trusted by Security Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            See why CISOs and security teams across industries choose Aegis to protect their
            organizations.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {visible.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <Stars />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600/10 text-sm font-bold text-primary-600 dark:bg-primary-600/20 dark:text-primary-400"
                >
                  {initials(item.name)}
                </span>
                <span>
                  <span className="block text-sm font-semibold text-gray-900 dark:text-white">
                    {item.name}
                  </span>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">
                    {item.role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex items-center gap-2">
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setPage(index)}
                aria-label={`Go to testimonial slide ${index + 1}`}
                aria-current={page === index}
                className={cn(
                  'h-2.5 rounded-full transition-all',
                  page === index
                    ? 'w-8 bg-primary-600 dark:bg-primary-400'
                    : 'w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonials"
            className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
