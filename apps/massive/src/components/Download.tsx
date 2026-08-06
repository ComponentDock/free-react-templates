import { Apple, Play } from 'lucide-react'

export function Download() {
  return (
    <section
      id="download"
      aria-label="Download"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl dark:text-white">
          Get Download Massive app !
        </h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
          Rapidiously monetize market-driven web services. Completely synthesize end-to-end models
          and emerging niches. Continually visualize long-term high-impact niches.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#download"
            className="flex items-center gap-3 rounded-full bg-gradient-to-r from-aqua via-teal to-sky px-8 py-4 text-white transition-opacity hover:opacity-90"
          >
            <Play className="h-6 w-6 fill-current" aria-hidden="true" />
            <span className="text-left">
              <span className="block text-xs uppercase tracking-wide opacity-90">Get it on</span>
              <span className="block font-semibold">Download From Google Play</span>
            </span>
          </a>
          <a
            href="#download"
            className="flex items-center gap-3 rounded-full border-2 border-gray-200 px-8 py-4 text-ink transition-colors hover:border-teal hover:text-teal dark:border-gray-700 dark:text-white dark:hover:border-cyan dark:hover:text-cyan"
          >
            <Apple className="h-6 w-6" aria-hidden="true" />
            <span className="text-left">
              <span className="block text-xs uppercase tracking-wide opacity-70">
                Download on the
              </span>
              <span className="block font-semibold">Download On The App Store</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
