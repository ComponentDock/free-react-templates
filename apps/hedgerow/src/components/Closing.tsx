import { Phone } from 'lucide-react'
import { closing } from '../content'

/**
 * The closing band: brand-green diagonal, a 40 px white dot grid at 10 % and two
 * soft corner blobs. No form — the enquiry happens from the band's CTAs.
 */
export function Closing() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {closing.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-primary-100">{closing.lede}</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={closing.primary.target}
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 transition-colors hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            {closing.primary.label}
          </a>
          <a
            href={closing.secondary.target}
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:border-white hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
          >
            <Phone aria-hidden="true" className="h-5 w-5" />
            {closing.secondary.label}
          </a>
        </div>
      </div>
    </section>
  )
}
