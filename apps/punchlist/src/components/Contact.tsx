import { ArrowRight, Phone } from 'lucide-react'
import { CONTACT_COPY } from '../content'
import { ActionButton, ActionLink, Container } from './ui'

/**
 * Orange gradient closing band with a dot grid, two actions and no form — the
 * form is the dialog the primary action opens.
 */
export function Contact({ onOpenQuote }: { readonly onOpenQuote: () => void }) {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(255 255 255) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
            {CONTACT_COPY.heading}
          </h2>
          <p className="mt-4 text-base leading-6 text-primary-100 sm:text-lg sm:leading-7">
            {CONTACT_COPY.lede}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <ActionButton variant="white" size="lg" className="w-full sm:w-auto" onClick={onOpenQuote}>
              {CONTACT_COPY.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ActionButton>
            <ActionLink
              href="#rates"
              size="lg"
              variant="outlineWhite"
              className="w-full sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {CONTACT_COPY.secondaryCta}
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
