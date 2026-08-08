import { ArrowRight } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Ready to launch faster?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-100">
          Join the waitlist and be the first to get access when we open the doors.
        </p>
        <div className="mt-10">
          <ButtonLink
            href="#contact"
            className="rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 shadow-lg transition-colors hover:bg-primary-50"
          >
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
            Get Early Access
          </ButtonLink>
        </div>
        <p className="mt-6 text-sm text-primary-200">
          Join 2,000+ developers already on the waitlist. No credit card required.
        </p>
      </div>
    </section>
  )
}
