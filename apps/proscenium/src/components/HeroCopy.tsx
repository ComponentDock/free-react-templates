import { Check, ChevronRight, Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { ACTIONS, ANNOUNCEMENT, HEADLINE, HERO_ID, SUBCOPY, TRUST_POINTS } from '../data/hero'

/** The copy column: pill, gradient headline, sub, two actions, three proofs. */
export function HeroCopy() {
  return (
    <div className="hero-copy">
      <a
        href={ANNOUNCEMENT.href}
        className="inline-flex items-center gap-[10px] rounded-full border border-line bg-white/80 py-[5px] pr-3 pl-[5px] text-[14px] font-medium text-muted transition-colors duration-200 hover:text-ink focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent"
      >
        <span className="rounded-full bg-accent px-[10px] py-[2px] text-[12.5px] font-bold text-white">
          {ANNOUNCEMENT.tag}
        </span>
        {ANNOUNCEMENT.label}
        <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
      </a>

      {/* The accent is an inline span inside the h1 and it wraps mid-phrase:
          at 1440 its rect merges two line boxes. Never a block, never a h2. */}
      <h1 id={`${HERO_ID}-title`} className="hero-title">
        {HEADLINE.lead}
        <span className="hero-accent">{HEADLINE.accent}</span>
      </h1>

      <p className="hero-sub text-muted">{SUBCOPY}</p>

      <div className="mt-8 flex flex-wrap gap-3 heroSm:[&>*]:[flex:1_1_100%] heroSm:[&>*]:justify-center">
        <ButtonLink
          href={ACTIONS.primary.href}
          className="min-h-[50px] rounded-xl bg-accent px-6 text-base font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.25),0_10px_24px_-10px_rgba(91,61,245,.7)] transition-[transform,box-shadow,background-color] duration-200 hover:-translate-y-px hover:bg-accent-hover focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent"
        >
          {ACTIONS.primary.label}
        </ButtonLink>

        <ButtonLink
          href={ACTIONS.demo.href}
          variant="outline"
          className="min-h-[50px] gap-[10px] rounded-xl border-line bg-surface pr-5 pl-3 font-semibold text-ink transition-colors duration-200 hover:border-[#c9c3f5] hover:bg-surface focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-accent"
        >
          <span
            aria-hidden="true"
            className="grid h-7 w-7 place-items-center rounded-full bg-[rgba(91,61,245,.1)] text-accent"
          >
            <Play className="h-[10px] w-[10px] fill-current" />
          </span>
          {ACTIONS.demo.label}
        </ButtonLink>
      </div>

      <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[14px] font-medium text-muted">
        {TRUST_POINTS.map((point) => (
          <li key={point} className="inline-flex items-center gap-1.5">
            <Check className="h-4 w-4 text-success" aria-hidden="true" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
