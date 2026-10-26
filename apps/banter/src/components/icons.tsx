import { cn } from '@free-react-templates/ui'

/** The one icon box both bars share: 20 px, tightening to 16 below 360. */
const BOX = 'size-5 shrink-0 max-[359px]:size-4'

const STROKE = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.9,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

/** The inert `⋯` control: decoration with an accessible name, no menu. */
export function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={BOX} fill="currentColor">
      <circle cx="5" cy="12" r="1.8" />
      <circle cx="12" cy="12" r="1.8" />
      <circle cx="19" cy="12" r="1.8" />
    </svg>
  )
}

export interface HeartIconProps {
  filled: boolean
}

/** A pressed heart fills and plays the 0.45 s beat. */
export function HeartIcon({ filled }: HeartIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn(BOX, filled && 'beat')}
      {...STROKE}
      fill={filled ? 'currentColor' : 'none'}
    >
      <path d="M12 20.5s-7.5-4.6-9.3-9.2C1.5 8 3.6 4.5 7.2 4.5c2 0 3.6 1.1 4.8 2.8 1.2-1.7 2.8-2.8 4.8-2.8 3.6 0 5.7 3.5 4.5 6.8-1.8 4.6-9.3 9.2-9.3 9.2Z" />
    </svg>
  )
}

export function CommentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={BOX} {...STROKE}>
      <path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-6.2A8 8 0 1 1 21 12Z" />
    </svg>
  )
}

export function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={BOX} {...STROKE}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
    </svg>
  )
}

/** The link preview's white code glyph, 28 px at a 2 px stroke. */
export function CodeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="size-7 shrink-0"
      {...STROKE}
      strokeWidth={2}
    >
      <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />
    </svg>
  )
}
