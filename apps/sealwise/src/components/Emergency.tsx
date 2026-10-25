import { Phone } from 'lucide-react'
import { emergency, site } from '../content'
import { containerClass } from './ui'

/** 164 px of brand green, an 8 px dot that pings, and one white phone pill. */
export function Emergency() {
  return (
    <section
      id="emergency"
      data-emergency=""
      className="bg-primary-600 py-6 text-white lg:py-8"
    >
      <div
        className={`${containerClass} flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between`}
      >
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm leading-5 font-semibold uppercase opacity-90">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-current" />
            </span>
            {emergency.kicker}
          </p>
          <p className="mt-1 text-lg leading-7 font-bold lg:text-xl">{emergency.title}</p>
          <p className="mt-1 max-w-2xl text-sm leading-5 opacity-90">{emergency.body}</p>
        </div>
        <a
          href={site.phoneHref}
          data-phone=""
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-lg leading-7 font-bold text-primary-700"
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
          {site.phone}
        </a>
      </div>
    </section>
  )
}
