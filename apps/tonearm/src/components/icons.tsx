/**
 * Transport glyphs, authored to the reference's own paths so the skip numerals
 * sit centred over the arrow the way the design draws them.
 */
interface IconProps {
  readonly className?: string
}

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export function PlayIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M7 4.5v15l13-7.5Z" />
    </svg>
  )
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <rect x="6" y="4.5" width="4" height="15" rx="1" />
      <rect x="14" y="4.5" width="4" height="15" rx="1" />
    </svg>
  )
}

export function BackIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  )
}

export function ForwardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M21 12a9 9 0 1 1-3-6.7L21 8" />
      <path d="M21 3v5h-5" />
    </svg>
  )
}

export function QueueIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...stroke}>
      <path d="M3 6h13M3 12h13M3 18h8M18 15v6M15 18h6" />
    </svg>
  )
}

/** A yellow sun over two translucent waves — the podcast's cover scene. */
export function PodcastCover() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="block h-full w-full">
      <circle cx="150" cy="104" r="28" fill="#ffd166" />
      <path d="M0 150 Q50 110 100 140 T200 130 V200 H0Z" fill="#ef476f" opacity="0.85" />
      <path d="M0 170 Q60 140 110 165 T200 160 V200 H0Z" fill="#7b2cbf" />
    </svg>
  )
}

/** A pale disc over two teal hills — the album's cover scene. */
export function AlbumCover() {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className="block h-full w-full">
      <circle cx="100" cy="92" r="46" fill="#fef3c7" opacity="0.95" />
      <path d="M0 120 C40 100 60 140 100 124 S160 100 200 118 V200 H0Z" fill="#0f766e" />
      <path d="M0 146 C50 128 70 160 110 150 S170 130 200 146 V200 H0Z" fill="#134e4a" />
    </svg>
  )
}
