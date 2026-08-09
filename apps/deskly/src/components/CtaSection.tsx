import { Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
          See It for Yourself
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-primary-100">
          Book a free tour of your nearest Deskly location. Walk the floors, try a desk, and meet
          the community — no commitment required.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="#"
            className="rounded-full bg-white px-7 py-3 text-base font-semibold text-primary-700 shadow-lg transition-colors hover:bg-primary-100"
          >
            Schedule a Tour
          </ButtonLink>
          <ButtonLink
            href="tel:+15125550147"
            className="gap-2 rounded-full border-2 border-white/40 bg-transparent px-7 py-3 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Us
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
