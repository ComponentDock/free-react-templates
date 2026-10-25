import { contact, site } from '../content'
import { ActionLink, containerClass } from './ui'

/** The close: brand-700, one white CTA back up to the finder, one phone call. */
export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 bg-primary-700 py-20 lg:py-28">
      <div className={`${containerClass} text-center`}>
        <h2 className="mx-auto max-w-3xl text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10">
          {contact.title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-primary-100">{contact.lead}</p>
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
          <ActionLink href="#identify" variant="white" className="px-8 py-4 text-base">
            {contact.primary}
          </ActionLink>
          <ActionLink
            href={site.phoneHref}
            data-phone=""
            variant="outlineWhite"
            className="px-8 py-4 text-base"
          >
            {contact.secondary}
          </ActionLink>
        </div>
      </div>
    </section>
  )
}
