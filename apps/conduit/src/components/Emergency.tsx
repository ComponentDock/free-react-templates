import { Phone } from 'lucide-react'
import { emergency, site } from '../content'
import { containerClass } from './ui'

/**
 * The page's only strip with no heading, no eyebrow and no section padding: it is
 * a rule between two information bands, not a band of its own.
 */
export function Emergency() {
  return (
    <section id="emergency" className="bg-primary-600 py-6 text-white lg:py-8">
      <div
        className={`${containerClass} flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10`}
      >
        <div>
          <p className="flex items-center gap-2 text-sm leading-5 font-semibold tracking-[0.35px] text-white/90 uppercase">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            {emergency.kicker}
          </p>
          <p className="mt-2 text-lg leading-7 font-bold lg:text-xl lg:leading-7">
            {emergency.headline}
          </p>
          <p className="mt-2 max-w-2xl text-sm leading-5 text-white/90">{emergency.body}</p>
        </div>

        <a
          href={site.phoneHref}
          className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 text-lg leading-6 font-bold text-primary-700 transition-colors hover:bg-primary-50"
        >
          <Phone aria-hidden="true" className="h-5 w-5" />
          {site.phone}
        </a>
      </div>
    </section>
  )
}
