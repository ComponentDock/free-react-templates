import { Phone } from 'lucide-react'
import { contact, site } from '../content'
import { containerClass } from './ui'

/** The closing band: two buttons that are different shapes on purpose. */
export function Contact() {
  return (
    <section id="contact" className="bg-primary-700 py-20 lg:py-28">
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-white sm:text-4xl sm:leading-10">
            {contact.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-7 text-primary-100">
            {contact.lead}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#quote"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base leading-6 font-bold text-primary-700 transition-colors hover:bg-primary-50"
            >
              {contact.primary}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-base leading-6 font-bold text-white transition-colors hover:border-white/70"
            >
              <Phone aria-hidden="true" className="h-5 w-5" />
              {contact.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
