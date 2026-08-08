import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Cta() {
  return (
    <section
      id="cta"
      aria-label="Start deploying"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Ship Faster?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-primary-100">
          Join 10,000+ developers who deploy with confidence on Stratos. Start free, scale without
          limits.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#services"
            className="rounded-lg bg-white px-8 py-4 text-base font-medium text-primary-700 shadow-lg transition-all hover:bg-gray-100 hover:shadow-xl"
          >
            Get Started Free
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="#contact"
            className="rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-all hover:border-white hover:bg-white/10"
          >
            Talk to Sales
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
