import { ArrowRight } from 'lucide-react'
import { CTA, EYEBROW, HEADLINE, MENU_LINK, STANDFIRST, TITLE_ID } from '../data/site'

/**
 * The copy column: a ruled eyebrow, a sentence-case serif headline with one gold
 * italic word, the standfirst, then a square-cornered gold bar beside an
 * underlined text link.
 *
 * The headline is one string with three runs rather than three blocks: it has to
 * stay a single paragraph so `text-wrap: balance` chooses its own breaks — they
 * move 3 → 2 at 1226 px and back at 428 — and a hard `<br>` disagrees with the
 * reference somewhere in that range.
 */
export function HeroCopy() {
  return (
    <div className="tt-copy">
      <p className="tt-eyebrow">
        <span aria-hidden="true" />
        {EYEBROW}
      </p>

      <h1 className="tt-title" id={TITLE_ID}>
        {HEADLINE.before}
        <em>{HEADLINE.accent}</em>
        {HEADLINE.after}
      </h1>

      <p className="tt-sub">{STANDFIRST}</p>

      <div className="tt-actions">
        <a className="tt-book" href={CTA.href}>
          {CTA.label}
        </a>
        <a className="tt-menu-link" href={MENU_LINK.href}>
          {MENU_LINK.label}
          <ArrowRight size={18} aria-hidden="true" />
        </a>
      </div>
    </div>
  )
}
