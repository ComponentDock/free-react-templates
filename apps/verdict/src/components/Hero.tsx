import { ArrowRight, Clock, Shield } from 'lucide-react'
import { EvaluationForm } from './EvaluationForm'

const trustIndicators = [
  { label: 'AV Rated', sub: 'Martindale-Hubbell', icon: Shield },
  { label: '24/7 Available', sub: 'For emergencies', icon: Clock },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary-900 py-20 lg:py-28 dark:bg-primary-950"
    >
      {/* Decorative background image with navy overlay */}
      <img
        src="https://picsum.photos/seed/verdict-hero/1920/1080"
        alt=""
        aria-hidden="true"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/80 via-primary-900/90 to-primary-900" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <span className="inline-flex items-center rounded-full border border-accent-400/40 bg-accent-400/10 px-4 py-1.5 text-sm font-semibold text-accent-400">
            Serving clients since 1985
          </span>

          <h1 className="font-display mt-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Trusted Legal <span className="italic text-accent-400">Excellence</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
            At Verdict, we combine decades of experience with a client-focused approach to deliver
            exceptional legal representation. Your success is our priority.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#home"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-500 px-8 py-4 text-base font-semibold text-primary-950 shadow-lg shadow-accent-500/25 transition-colors hover:bg-accent-600"
            >
              Schedule Consultation
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10"
            >
              Our Practice Areas
            </a>
          </div>

          <div className="mt-12 flex flex-wrap gap-8">
            {trustIndicators.map((indicator) => (
              <div key={indicator.label} className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-accent-400">
                  <indicator.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{indicator.label}</p>
                  <p className="text-xs text-gray-400">{indicator.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <EvaluationForm />
      </div>
    </section>
  )
}
