import { Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800">
      <div
        className="absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-accent-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center lg:px-8 lg:py-28">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready to Make Your Move?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-primary-100">
          Get a free, no-obligation quote today — or call us and we will plan your move in minutes.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ButtonLink
            href="#quote"
            className="rounded-full bg-white px-6 py-3 text-sm text-primary-700 shadow-lg hover:bg-gray-100"
          >
            Get Free Quote
          </ButtonLink>
          <ButtonLink
            href="tel:+15558901234"
            className="rounded-full border border-white/60 px-6 py-3 text-sm text-white hover:bg-white/10"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call Now
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
