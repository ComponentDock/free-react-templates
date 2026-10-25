import { CONTACT, PHONE_HREF } from '../content'
import { Container } from './ui'

/**
 * The page's only saturated ground. Its two CTAs are 8 px rectangles, not
 * pills — the pill is reserved for phone numbers throughout this design.
 */
export function Contact() {
  return (
    <section id="contact" className="section bg-primary-700">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {CONTACT.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-100">{CONTACT.lede}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-bold text-primary-700 transition-colors hover:bg-primary-50"
            >
              {CONTACT.primary}
            </a>
            <a
              href={CONTACT.mailto}
              className="inline-flex items-center justify-center rounded-lg border-2 border-white/40 px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white/10"
            >
              {CONTACT.secondary}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
