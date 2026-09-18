import { Phone, Mail } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CTA() {
  return (
    <section aria-label="Call to action" className="bg-primary-400 py-14">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">
          Need to clean your house? Just hire us!
        </h2>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <ButtonLink
            href="tel:+012304567890"
            className="inline-flex items-center gap-2 rounded bg-white px-6 py-3 text-sm font-semibold text-primary-400 transition-colors hover:bg-gray-100"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            0-1230-456-7890
          </ButtonLink>
          <ButtonLink
            href="mailto:youremail@email.com"
            className="inline-flex items-center gap-2 rounded border border-white px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            youremail@email.com
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
