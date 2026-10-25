import { Phone } from 'lucide-react'
import { CONTACT, PHONE_HREF } from '../content'
import { ActionLink, Container } from './ui'

/** The one large sage surface on the page: a white pill and an outlined one. */
export function Contact() {
  return (
    <section id="contact" className="bg-primary-700 py-20 lg:py-28 dark:bg-primary-900">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-10 tracking-tight text-white sm:text-4xl">
            {CONTACT.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-[1.625] text-primary-100">
            {CONTACT.lede}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink href={CONTACT.primaryHref} variant="white" size="lg">
              {CONTACT.primaryCta}
            </ActionLink>
            <ActionLink href={PHONE_HREF} variant="onGreen" size="lg">
              <Phone className="h-5 w-5" aria-hidden="true" />
              {CONTACT.secondaryCta}
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
