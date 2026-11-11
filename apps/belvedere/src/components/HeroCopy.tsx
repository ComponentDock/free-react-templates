import { Mail } from 'lucide-react'
import { ABOUT_ID, BIO, CV_CTA, HEADLINE, INTRO, PRIMARY_CTA, TITLE_ID } from '../data/site'
import { MetaBand } from './MetaBand'

/**
 * Intro, one headline, bio, the CTA pair and the meta band — no divider between
 * the first three. The `<mark>` is a real element rather than a span so the
 * highlight survives a wrapped phrase (two bands, not one broken rectangle) and
 * so screen readers still hear one sentence.
 */
export function HeroCopy() {
  return (
    <div className="bv-copy">
      <p className="bv-hello">{INTRO}</p>

      <h1 className="bv-title" id={TITLE_ID}>
        {HEADLINE.before}
        <mark className="bv-mark">{HEADLINE.highlight}</mark>
        {HEADLINE.after}
      </h1>

      <p className="bv-bio" id={ABOUT_ID}>
        {BIO}
      </p>

      <div className="bv-actions">
        <a className="bv-primary" href={PRIMARY_CTA.href}>
          <Mail size={18} aria-hidden="true" />
          {PRIMARY_CTA.label}
        </a>
        <a className="bv-secondary" href={CV_CTA.href}>
          {CV_CTA.label} <span>{CV_CTA.meta}</span>
        </a>
      </div>

      <MetaBand />
    </div>
  )
}
