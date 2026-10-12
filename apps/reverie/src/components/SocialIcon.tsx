import type { ReactNode } from 'react'
import type { SocialMark } from '../lib/site'
import { socialGlyphClass } from '../lib/styles'

/**
 * The four marks the design draws from its icon font. No brand glyph ships with this app, so each
 * mark is plain geometry — a path, a ring, a rounded square — and every one of them inherits its
 * colour from the link it sits in.
 */
const MARKS: Record<SocialMark, ReactNode> = {
  facebook: (
    <path
      d="M14.5 21v-7h2.6l.4-3h-3V9.2c0-.9.3-1.5 1.6-1.5H17.7V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H8.6v3h2.7v7h3.2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  twitter: (
    <path
      d="M20.4 6.3c-.6.3-1.3.5-2 .6a3.4 3.4 0 0 0-5.8 3.1 9.7 9.7 0 0 1-7-3.6 3.4 3.4 0 0 0 1 4.6c-.5 0-1-.2-1.5-.4a3.4 3.4 0 0 0 2.7 3.4 3.4 3.4 0 0 1-1.5.1 3.4 3.4 0 0 0 3.2 2.4A9.7 9.7 0 0 1 3.7 18a9.6 9.6 0 0 0 5.2 1.5c6.3 0 9.7-5.2 9.7-9.7v-.4a6.9 6.9 0 0 0 1.8-1.9Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  instagram: (
    <>
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </>
  ),
  dribbble: (
    <>
      <circle cx="12" cy="12" r="8.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.7 3.9c3.2 4.4 4.6 7.4 5.9 14.6M18.9 5.6c-3 3.6-6.9 4.6-13.5 4.8M20.2 13.2c-3.4-.9-6.2-.6-8.3.6-1.9 1-3.4 2.8-4.6 5.2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </>
  ),
}

interface SocialIconProps {
  mark: SocialMark
}

/** One mark, sized by the styling module; the link that wraps it carries the accessible name. */
export function SocialIcon({ mark }: SocialIconProps) {
  return (
    <svg
      className={socialGlyphClass}
      viewBox="0 0 24 24"
      strokeLinecap="round"
      aria-hidden="true"
      focusable="false"
    >
      {MARKS[mark]}
    </svg>
  )
}
