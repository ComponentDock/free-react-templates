import { Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { CLOSING_GHOST, CLOSING_HEADING, CLOSING_LEDE, PHONE_HREF, PHONE_LABEL } from '../content'
import { Reveal } from './Reveal'

export function ClosingCta() {
  return (
    <section id="contact" className="bg-primary-700 py-20 text-white lg:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{CLOSING_HEADING}</h2>
          <p className="mt-4 text-lg text-primary-100">{CLOSING_LEDE}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink
              href={PHONE_HREF}
              className="w-full bg-white px-8 py-4 text-base font-bold text-primary-700 hover:bg-primary-50 sm:w-auto"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {PHONE_LABEL}
            </ButtonLink>
            <a
              href="#response"
              className="inline-flex w-full items-center justify-center rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors hover:border-white/70 sm:w-auto"
            >
              {CLOSING_GHOST}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
