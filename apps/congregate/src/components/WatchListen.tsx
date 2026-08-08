import { Play } from 'lucide-react'

const messages = [
  {
    title: 'Unshakeable Peace in the Storm',
    meta: 'Pastor David Chen · January 19, 2025',
    duration: '38:24',
    seed: 'congregate-2',
  },
  {
    title: 'Unshakeable Faith Over Fear',
    meta: 'Pastor David Chen · January 12, 2025',
    duration: '35:52',
    seed: 'congregate-3',
  },
  {
    title: 'Unshakeable Built to Last',
    meta: 'Pastor David Chen · January 5, 2025',
    duration: '32:10',
    seed: 'congregate-4',
  },
  {
    title: 'The Gift of Hope',
    meta: 'Pastor Sarah Mitchell · December 24, 2024',
    duration: 'Christmas',
    seed: 'congregate-5',
  },
] as const

export function WatchListen() {
  return (
    <section id="watch" className="bg-charcoal-50 py-20 dark:bg-charcoal-900 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-600 dark:text-amber-400">
              Watch &amp; Listen
            </p>
            <h2 className="mt-3 text-3xl font-bold text-charcoal-900 dark:text-white sm:text-4xl">
              Recent Messages
            </h2>
          </div>
          <a
            href="#watch"
            className="text-sm font-semibold text-amber-600 transition-colors hover:text-amber-700 dark:text-amber-400"
          >
            View All Messages
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {messages.map((message) => (
            <article
              key={message.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm dark:bg-charcoal-800"
            >
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${message.seed}/800/450`}
                  alt={message.title}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <span className="absolute bottom-3 left-3 rounded bg-charcoal-900/80 px-2 py-1 text-xs font-semibold text-white">
                  {message.duration}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold leading-snug text-charcoal-900 dark:text-white">
                  {message.title}
                </h3>
                <p className="mt-2 text-xs text-charcoal-600 dark:text-charcoal-300">
                  {message.meta}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#watch"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-amber-600"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Watch Live Every Sunday
          </a>
        </div>
      </div>
    </section>
  )
}
