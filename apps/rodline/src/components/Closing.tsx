import { Phone } from 'lucide-react'
import { availability, contact } from '../content'

/** Full-bleed brand band that closes the page, with the one live animation. */
export function Availability() {
  return (
    <section id="availability" className="bg-primary-600 text-white">
      <div className="container mx-auto flex flex-col gap-4 px-4 py-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-8">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase opacity-90">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
            </span>
            {availability.label}
          </p>
          <p className="mt-1 text-lg font-bold lg:text-xl">{availability.line}</p>
        </div>

        <a
          href={contact.phoneHref}
          className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-6 py-3 text-lg font-bold text-primary-700 transition-colors hover:bg-primary-50 lg:self-auto"
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
          {contact.phone}
        </a>
      </div>
    </section>
  )
}

/** 73 px call bar for viewports under 1024; absent above it. */
export function StickyCall() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-200 bg-white p-3 lg:hidden dark:border-gray-800 dark:bg-gray-900">
      <a
        href={contact.phoneHref}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 py-3 text-base font-bold text-white"
      >
        <Phone aria-hidden="true" className="h-4 w-4" />
        {availability.sticky}
      </a>
    </div>
  )
}
