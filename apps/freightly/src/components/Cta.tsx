import { Check, Phone } from 'lucide-react'

const bullets = ['Call 1-800-SWIFT-GO', 'Free tracking', 'No hidden fees', 'Cancel anytime']

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-950 to-gray-950 py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Ship?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-300">
          Get started with Freightly today and experience the difference a dedicated logistics
          partner makes.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {bullets.map((bullet) => (
            <span
              key={bullet}
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-200"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary-500/25 text-primary-400">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              {bullet}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#calculator"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-10 py-4 text-base font-semibold text-white shadow-lg shadow-primary-500/30 transition-colors hover:bg-primary-700"
          >
            Get a Quote
          </a>
          <a
            href="tel:+18007943846"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call 1-800-SWIFT-GO
          </a>
        </div>
      </div>
    </section>
  )
}
