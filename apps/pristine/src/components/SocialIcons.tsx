interface BrandIconProps {
  className?: string
  label: string
  'aria-hidden'?: boolean | 'true' | 'false'
}

/** Inline brand icons (Facebook/Instagram/Twitter were removed from
 *  lucide-react) — stroke-free, fill-based glyphs matching the original's
 *  simple social glyphs. */
export function FacebookIcon({ className, label, 'aria-hidden': ariaHidden }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label={label}
      aria-hidden={ariaHidden}
      className={className}
    >
      <path d="M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.3-1.5 1.6-1.5h1.3V4.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.6 1.3-3.6 3.7V11H8.3v3h2.4v7h2.8z" />
    </svg>
  )
}

export function InstagramIcon({ className, label, 'aria-hidden': ariaHidden }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-label={label}
      aria-hidden={ariaHidden}
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TwitterIcon({ className, label, 'aria-hidden': ariaHidden }: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-label={label}
      aria-hidden={ariaHidden}
      className={className}
    >
      <path d="M17.8 4h2.7l-6 6.8L21.8 20h-5.5l-4.3-5.6L7 20H4.3l6.4-7.3L3.2 4h5.6l3.9 5.1L17.8 4zm-1 14.4h1.5L8.3 5.5H6.7l10.1 12.9z" />
    </svg>
  )
}
