import { ArrowRight, Phone } from 'lucide-react'
import { contact } from '../content'
import { containerClass } from './ui'

/** Plum ground, two pale circles, a 40 px dot grid, and exactly two CTAs. */
export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-primary-600 to-primary-800 py-20 lg:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-10 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
            backgroundSize: '40px 40px',
            color: '#fff',
          }}
        />
      </div>

      <div className={containerClass}>
        <div className="relative z-10 mx-auto max-w-3xl pb-16 text-center lg:pb-0">
          <h2 className="text-3xl leading-9 font-bold tracking-tight text-white sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-[3rem]">
            {contact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-7 text-primary-100">{contact.lede}</p>
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@slotline.app"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-primary-700 transition-colors hover:bg-primary-50"
            >
              {contact.primary}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-white/10"
            >
              <Phone aria-hidden="true" className="h-4 w-4" />
              {contact.secondary}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
