import { HERO_CTA } from '../data'

/* Signature "View Our Services" treatment from the original (`.more-29291`):
   uppercase 14px weight-900 link with a 2px indigo bar under the full text
   width. Used in the hero, feature cards and CTA band. */
export function CtaLink({ href = '#services-section' }: { href?: string }) {
  return (
    <a
      href={href}
      className="inline-block border-b-2 border-brand pb-1.5 text-[14px] font-black tracking-wider text-brand uppercase transition-colors hover:text-primary-800"
    >
      {HERO_CTA}
    </a>
  )
}
