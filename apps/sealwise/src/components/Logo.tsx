import { cn } from '@free-react-templates/ui'
import { site } from '../content'

export interface LogoProps {
  /** The footer and the dark-mode header use the inverted plate. */
  variant?: 'dark' | 'light'
  className?: string
}

/**
 * The wordmark is drawn, not photographed: a 26 px plate, a dashed square that
 * reads as a sealed perimeter, one lime dot, and live text at 16/700 over a
 * 9/500 sub-line with 2.2 px of letter-spacing.
 */
export function Logo({ variant = 'dark', className }: LogoProps) {
  const light = variant === 'light'
  const plate = light ? '#84cc3c' : '#1a201a'
  const mark = light ? '#0e120e' : '#84cc3c'
  const word = light ? '#ffffff' : '#1a201a'
  const sub = light ? '#a4ae9f' : '#566151'

  return (
    <svg
      viewBox="0 0 200 40"
      role="img"
      aria-label={`${site.name} ${site.subline}`}
      className={cn('h-8 w-auto lg:h-9', className)}
    >
      <rect width="26" height="26" y="7" rx="7" fill={plate} />
      <rect
        x="6"
        y="13"
        width="14"
        height="14"
        fill="none"
        stroke={mark}
        strokeWidth="1.6"
        strokeDasharray="4 3"
      />
      <circle cx="13" cy="20" r="2.6" fill={mark} />
      <text x="34" y="21" fill={word} fontFamily="Outfit, system-ui, sans-serif" fontSize="16" fontWeight="700">
        {site.name}
      </text>
      <text
        x="34"
        y="32"
        fill={sub}
        fontFamily="Outfit, system-ui, sans-serif"
        fontSize="9"
        fontWeight="500"
        letterSpacing="2.2"
      >
        {site.subline}
      </text>
    </svg>
  )
}
