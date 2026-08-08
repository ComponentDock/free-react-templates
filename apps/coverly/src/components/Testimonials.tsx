import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const quotes = [
  {
    name: 'Jennifer Martinez',
    role: 'Homeowner, Austin TX',
    quote:
      'They found us a bundle that cut our home and auto bill by 28%. The whole process took one phone call.',
  },
  {
    name: 'David Thompson',
    role: 'Auto Insurance Client',
    quote:
      'After a fender bender, my claim was approved the same day. I have never had an insurer move that fast.',
  },
  {
    name: 'Patricia Chen',
    role: 'CEO, Bright Ideas LLC',
    quote:
      'Their business liability coverage is straightforward and their advisors actually understand startups.',
  },
  {
    name: 'Tom & Lisa Park',
    role: 'Homeowner, Portland OR',
    quote:
      'Our advisor reviews our coverage every year without us asking. It feels like a partnership, not a policy.',
  },
  {
    name: 'Sarah Nguyen',
    role: 'Life Insurance Client',
    quote:
      'As a single mom, the $15/month life plan gave me peace of mind I could actually afford.',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Business Owner, Miami FL',
    quote:
      'Umbrella coverage through ShieldGuard saved us when a lawsuit threatened our shop. Worth every penny.',
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
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Real stories from the families and businesses we protect.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {visible.map((item) => (
            <figure
              key={item.name}
              className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <blockquote className="flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
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

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonials"
            className="rounded-full bg-white p-2 shadow-lg transition-colors hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {page + 1} / {pageCount}
          </span>
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
