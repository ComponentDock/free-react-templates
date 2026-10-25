import { ArrowRight } from 'lucide-react'

/** Full-bleed indigo band with the radial dot grid and a white solid control. */
export function ClosingCta() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            The room is already talking
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
            Read anything you like for free. When you want to join in, membership is nine dollars a
            month.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
            >
              Join the Community
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#discussions"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10"
            >
              Browse discussions first
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
