import { CONTACT, EMAIL } from '../content'
import { ActionLink, Container } from './ui'

/**
 * The only steel-blue surface on the page: a centred closing band whose
 * terminal action is the bids inbox, not a form.
 */
export function Contact() {
  return (
    <section id="contact" className="bg-primary-700 py-20 dark:bg-primary-700 lg:py-28">
      <Container className="text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl">
            {CONTACT.heading}
          </h2>
          <p className="mx-auto mt-4 max-w-[576px] text-lg leading-7 text-primary-100">
            {CONTACT.lede}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ActionLink href={`mailto:${EMAIL}`} variant="white" size="lg">
              {CONTACT.primaryCta}
            </ActionLink>
            <ActionLink href="#capabilities" variant="onSteel" size="lg">
              {CONTACT.secondaryCta}
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  )
}
