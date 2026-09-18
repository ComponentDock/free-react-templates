import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 font-heading text-sm font-medium text-gold-400">
            Join 15,000+ learners worldwide
          </span>
          <h1 className="font-heading text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Advance Your Career with Expert-Led Courses
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-navy-200">
            Gain in-demand skills from industry professionals. Our courses combine hands-on
            projects, mentorship, and industry-recognized certificates to help you land your dream
            role.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#courses"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-coral-500 to-gold-400 px-8 py-3 font-heading text-sm font-semibold text-white shadow-lg transition hover:shadow-xl"
            >
              Browse Courses
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-3 font-heading text-sm font-semibold text-white transition hover:border-white/60"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </div>

      {/* Decorative circle */}
      <div className="pointer-events-none absolute -right-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-coral-500/10" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-64 w-64 rounded-full bg-gold-400/10" />
    </section>
  )
}
