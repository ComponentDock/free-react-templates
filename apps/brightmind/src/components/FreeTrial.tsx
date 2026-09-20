import { ArrowRight } from 'lucide-react'

export function FreeTrial() {
  return (
    <section className="bg-gold-400 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <div>
          <h2 className="mb-2 text-xl font-bold text-dark">Try our free trial course</h2>
          <p className="text-sm text-dark/80">
            Experience our teaching methodology with a complimentary trial session. No commitment
            required.
          </p>
        </div>
        <a
          href="#apply"
          className="inline-flex shrink-0 items-center gap-2 rounded bg-dark px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
        >
          Join now!
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  )
}
