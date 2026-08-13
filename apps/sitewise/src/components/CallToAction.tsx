import { Mail, MessageCircle, Phone } from 'lucide-react'
import { contact } from '../data'

/** "Let's Launch your Website Now" CTA band over a photo with dark overlay. */
export function CallToAction() {
  return (
    <section id="launch" className="relative overflow-hidden">
      <img
        src="https://picsum.photos/seed/sitewise-launch/1920/800"
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-primary-950/85" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center">
        <h2 className="text-3xl leading-snug font-normal text-white sm:text-4xl">
          Let&apos;s Launch your Website Now
        </h2>
        <p className="mt-5 text-base leading-7 text-white/80">
          Move your domain, your email, and your applications today — our team will handle the
          migration while you keep working.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-accent-500 px-8 py-3 text-base font-medium text-white transition-colors hover:bg-accent-600"
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
            Live Chat
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-transparent px-8 py-3 text-base font-medium text-white ring-2 ring-accent-500 transition-colors hover:bg-accent-500"
          >
            get start now
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 text-lg font-medium text-accent-500"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            {contact.supportPhone}
          </a>
        </div>
        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-accent-500"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {contact.email}
        </a>
      </div>
    </section>
  )
}
