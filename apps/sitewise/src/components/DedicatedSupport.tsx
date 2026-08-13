import { Phone } from 'lucide-react'
import { contact } from '../data'

/** Dedicated-support band over a photo background with a green CTA + phone number. */
export function DedicatedSupport() {
  return (
    <section id="support" className="relative overflow-hidden">
      <img
        src="https://picsum.photos/seed/sitewise-support/1920/800"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary-950/85" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center">
        <h2 className="text-3xl leading-snug font-normal text-white sm:text-4xl">
          Dedicated support from engineers who know your stack
        </h2>
        <p className="mt-5 text-base leading-7 text-white/80">
          Whether you run a WordPress blog or a multi-region application, our team is on call around
          the clock to keep your sites fast, secure, and online.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-6 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent-500 px-10 py-3 text-base font-medium text-white transition-colors hover:bg-accent-600"
          >
            Get Start Now
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-lg font-medium text-accent-500"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {contact.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
