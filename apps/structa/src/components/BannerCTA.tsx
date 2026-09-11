import { ButtonLink } from '@free-react-templates/ui'
import { Phone } from 'lucide-react'

export function BannerCTA() {
  return (
    <section className="bg-dark py-16" aria-label="Call to action">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-white md:text-4xl">Any help needed?</h2>
        <p className="mx-auto mt-4 max-w-xl text-white/70">
          Our team is ready to assist you with any questions or concerns about your construction
          project.
        </p>
        <ButtonLink
          href="#contact"
          className="mt-8 inline-flex items-center rounded-full bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
        >
          <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
          Contact Us
        </ButtonLink>
      </div>
    </section>
  )
}
