import { Phone } from 'lucide-react'
import { CONTACT, site } from '../content'
import { containerClass } from './ui'

export function Contact() {
  return (
    <section id="contact" className="bg-primary-700 py-20 lg:py-28">
      <div className={containerClass}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-[30px] leading-[34px] font-bold tracking-[-0.9px] text-white sm:text-4xl sm:leading-10">
            {CONTACT.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-primary-100">{CONTACT.lead}</p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center">
            <a
              href="#proposal"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base leading-6 font-bold text-primary-700 transition-colors hover:bg-primary-50"
            >
              {CONTACT.primary}
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/40 px-8 py-4 text-base leading-6 font-bold text-white transition-colors hover:border-white/70"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              {CONTACT.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
