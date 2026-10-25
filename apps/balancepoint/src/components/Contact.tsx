import { CONTACT, PHONE_HREF } from '../content'
import { ActionLink, Container } from './ui'

/** The one large lime surface on the page: the closing band. */
export function Contact() {
  return (
    <section id="contact" className="section bg-primary-700">
      <Container className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
          {CONTACT.heading}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-lg leading-7 text-primary-100">{CONTACT.lede}</p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ActionLink href={CONTACT.primaryHref} variant="white" size="lg">
            {CONTACT.primaryCta}
          </ActionLink>
          <ActionLink href={PHONE_HREF} variant="outlineWhite" size="lg">
            {CONTACT.secondaryCta}
          </ActionLink>
        </div>
      </Container>
    </section>
  )
}
