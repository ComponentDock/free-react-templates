import { HeartHandshake, Palette, Rocket } from 'lucide-react'

const columns = [
  {
    title: 'Fast setup',
    icon: Rocket,
    blurb: 'Go from zero to a polished landing page in minutes, not days.',
  },
  {
    title: 'Modern design',
    icon: Palette,
    blurb: 'Clean typography and a fresh look that makes your product shine.',
  },
  {
    title: 'Reliable support',
    icon: HeartHandshake,
    blurb: 'Helpful docs and a community that has your back at every step.',
  },
] as const

export function Brands() {
  return (
    <section id="about" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Leading brands trust Bold for good
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Used by fast-growing teams who value clean design and dependable performance.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {columns.map((column) => {
            const Icon = column.icon
            return (
              <article
                key={column.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
                <Icon className="mx-auto h-8 w-8 text-primary-500" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-semibold text-ink dark:text-white">
                  {column.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-gray-400">
                  {column.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
