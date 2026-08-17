import { Star } from 'lucide-react'
import { PROFILE } from '../data'
import { PillLink } from './Pill'

/* ProfileBlock — "Personalized design solutions" profile with a five-star
   rating, budget/style facts, and a View Gallery CTA. */
export function ProfileBlock() {
  return (
    <section aria-label="Profile" id="gallery" className="bg-paper py-24 lg:py-[120px]">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-brand">
          {PROFILE.eyebrow}
        </p>
        <h2 className="font-display text-[34px] font-medium leading-tight text-ink">
          {PROFILE.heading}
        </h2>
        <p className="mt-2 text-lg text-subtext">{PROFILE.subtext}</p>
        <div className="mt-6 flex items-center justify-center gap-1" aria-label="Rating">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} aria-label="Star rating" className="h-5 w-5 fill-harvest text-harvest" />
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-body">{PROFILE.text}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          {PROFILE.facts.map((fact) => (
            <div key={fact.label}>
              <p className="text-sm uppercase tracking-[0.2em] text-subtext">{fact.label}</p>
              <p className="mt-1 font-display text-2xl font-semibold text-ink">{fact.value}</p>
            </div>
          ))}
        </div>
        <PillLink href="#gallery" variant="dark" className="mt-10">
          {PROFILE.ctaLabel}
        </PillLink>
      </div>
    </section>
  )
}
