import { ArrowRight } from 'lucide-react'

/**
 * Saturated closing band: brand→deep-blue gradient, a 10 % white dot grid and
 * two blurred blobs. Both controls are well-formed in-page links.
 */
export function ClosingCta() {
  return (
    <section
      id="contact"
      aria-label="Start with one circle"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 left-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Start with one circle
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-100">
          Most people begin with the group chat they wish had somewhere better to live.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Create your circle
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
          <a
            href="#privacy"
            className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10"
          >
            Read the privacy defaults
          </a>
        </div>
      </div>
    </section>
  )
}
