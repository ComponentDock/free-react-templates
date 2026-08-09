import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-24 text-white"
    >
      <div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-secondary-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Ready to Take Control of Your Finances?
        </h2>
        <p className="mt-4 text-lg text-primary-100">
          Join 150,000+ people who&apos;ve transformed their financial lives with Finley. Start your
          free trial today—no credit card required.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#pricing"
            className="h-auto rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-lg transition-colors hover:bg-gray-100"
          >
            Start Free Trial
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
          <ButtonLink
            href="#"
            variant="outline"
            className="h-auto rounded-lg border-white/40 px-8 py-4 text-base font-semibold text-white transition-colors hover:border-white/70 hover:bg-white/10"
          >
            Talk to Sales
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm font-medium text-primary-100">
          30-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  )
}
