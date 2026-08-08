import { Check } from 'lucide-react'

const assurances = [
  'Free initial consultation',
  'No obligation',
  'completely confidential',
  'in-person or virtual',
]

export function Cta() {
  return (
    <section className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="font-display text-3xl font-bold text-primary-900 sm:text-4xl lg:text-5xl dark:text-white">
          Ready to Discuss Your Legal Matter?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          Schedule a free, confidential consultation with one of our experienced attorneys.
          We&apos;re here to listen, advise, and advocate for you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {assurances.map((assurance) => (
            <span
              key={assurance}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-accent-400/20 text-accent-600 dark:text-accent-400">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              {assurance}
            </span>
          ))}
        </div>

        <a
          href="#home"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-accent-500 px-10 py-4 text-base font-semibold text-primary-950 shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
        >
          Request Free Consultation
        </a>
      </div>
    </section>
  )
}
