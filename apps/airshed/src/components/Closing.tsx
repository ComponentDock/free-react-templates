import { Phone } from 'lucide-react'
import { CLOSING } from '../content'
import { ActionLink, Container } from './ui'

/**
 * The only saturated surface on the page: a flat violet band with a white `h2`,
 * a violet-100 lede, a white fill and a translucent outline that dials.
 */
export function Closing() {
  return (
    <section id="contact" className="bg-primary-700 py-20 lg:py-28">
      <Container className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.9px] text-white sm:text-4xl">
          {CLOSING.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg leading-7 text-primary-100">
          {CLOSING.lede}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <ActionLink href="#hero-form" variant="white" size="lg" className="w-full sm:w-auto">
            {CLOSING.primaryCta}
          </ActionLink>
          <ActionLink
            href="tel:+15551401400"
            variant="outlineWhite"
            size="lg"
            className="w-full sm:w-auto"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {CLOSING.secondaryCta}
          </ActionLink>
        </div>
      </Container>
    </section>
  )
}
