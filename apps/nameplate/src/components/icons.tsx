import { CalendarDays, Code, Globe, Mail, PenLine } from 'lucide-react'
import type { SocialKind } from '../content'

/** 17px glyph inside the 36px disc, 1.8 stroke, round joins — the reference's
 * icon treatment for every disc on the page. */
const GLYPH_CLASS = 'h-[17px] w-[17px]'

/** The brand mark is drawn inline: the icon library no longer ships brand glyphs. */
export function LinkedInGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={GLYPH_CLASS}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

interface SocialGlyphProps {
  kind: SocialKind
}

/** One glyph per disc: LinkedIn for everyone, then the per-person second disc. */
export function SocialGlyph({ kind }: SocialGlyphProps) {
  switch (kind) {
    case 'linkedin':
      return <LinkedInGlyph />
    case 'portfolio':
      return <Globe aria-hidden="true" className={GLYPH_CLASS} strokeWidth={1.8} />
    case 'code':
      return <Code aria-hidden="true" className={GLYPH_CLASS} strokeWidth={1.8} />
    case 'writing':
      return <PenLine aria-hidden="true" className={GLYPH_CLASS} strokeWidth={1.8} />
    case 'calendar':
      return <CalendarDays aria-hidden="true" className={GLYPH_CLASS} strokeWidth={1.8} />
    case 'email':
      return <Mail aria-hidden="true" className={GLYPH_CLASS} strokeWidth={1.8} />
  }
}
