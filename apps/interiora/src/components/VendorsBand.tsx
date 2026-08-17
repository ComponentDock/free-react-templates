import { Play } from 'lucide-react'
import { VENDORS_BAND } from '../data'
import { PillLink } from './Pill'

/* VendorsBand — split with the "200 vendors" heading, a CTA, and a video
   play button. */
export function VendorsBand() {
  return (
    <section aria-label="Vendors" className="bg-paper py-24 lg:py-[120px]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand">
            {VENDORS_BAND.eyebrow}
          </p>
          <h2 className="font-display text-[34px] font-medium leading-tight text-ink">
            {VENDORS_BAND.heading}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-body">{VENDORS_BAND.text}</p>
          <PillLink href="#contact" className="mt-8">
            {VENDORS_BAND.ctaLabel}
          </PillLink>
        </div>
        <div className="flex items-center justify-center">
          <a
            href={VENDORS_BAND.videoUrl}
            aria-label={VENDORS_BAND.videoLabel}
            target="_blank"
            rel="noreferrer"
            className="group relative flex h-24 w-24 items-center justify-center rounded-full bg-brand text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="ml-1 h-9 w-9 fill-current" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
