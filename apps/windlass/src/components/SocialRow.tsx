import type { ReactNode } from 'react'
import { SOCIAL } from '../lib/site'
import type { Platform } from '../lib/site'
import { markClass, socialLinkClass, socialListClass } from '../lib/styles'

/**
 * The four platform marks. No icon font and no brand glyph ships with this app, so each mark
 * is drawn here as plain geometry — two fills, two outlines — and every one of them inherits
 * its colour from the circle it sits in.
 */
const MARKS: Record<Platform, ReactNode> = {
  Facebook: (
    <path
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      fill="currentColor"
      stroke="none"
    />
  ),
  Twitter: (
    <path
      d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
      fill="currentColor"
      stroke="none"
    />
  ),
  Instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="currentColor" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  Dribbble: (
    <>
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" />
      <path
        d="M8.5 2.8c4.3 6 6 9.4 8 17.6M19 6.3c-3.7 4.3-8.9 5.6-16.8 5.8M21.4 13.6c-3.5-.9-6.6-.8-8.9 0-2.6.9-5 2.8-7.4 6.3"
        fill="none"
        stroke="currentColor"
      />
    </>
  ),
}

/**
 * The block of platform circles at the card's right end: four `40px` rings above 992px —
 * `30px` with white rings below — each one a real profile on a real platform, named for what
 * it opens, opening in a new tab and carrying a mark drawn by this app rather than a glyph
 * borrowed from an icon font.
 */
export function SocialRow() {
  return (
    <ul className={socialListClass} data-testid="social">
      {SOCIAL.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noreferrer"
            aria-label={item.label}
            className={socialLinkClass}
          >
            <svg
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              strokeLinecap="round"
              aria-hidden="true"
              focusable="false"
              className={markClass}
            >
              {MARKS[item.label]}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
