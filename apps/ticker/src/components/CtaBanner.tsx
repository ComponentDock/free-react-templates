import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section id="cta" className="bg-gray-100 py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Ready to Start Your Trading Journey?
        </h2>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Join 50,000+ students learning from millionaire mentors. Your first course is free.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#pricing"
            className="bg-gradient-to-br from-primary-500 to-primary-600 px-10 py-5 text-lg font-semibold text-white"
          >
            Start Trading
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
