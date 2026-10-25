import { cn } from '@free-react-templates/ui'

interface LogoProps {
  tone?: 'dark' | 'light'
  className?: string
}

/**
 * The mark is drawn, not fetched: a plum clock face with a sage minute hand,
 * next to the wordmark in Fraunces.
 */
export function Logo({ tone = 'dark', className }: LogoProps) {
  const ink = tone === 'dark' ? '#493748' : '#f4ecf3'
  const hand = tone === 'dark' ? '#688554' : '#cddac2'
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8 lg:h-9 lg:w-9">
        <circle cx="16" cy="16" r="15" fill={ink} />
        <circle cx="16" cy="16" r="11.5" fill="none" stroke={hand} strokeOpacity="0.35" strokeWidth="1" />
        <path d="M16 8.5V16l5.5 3.5" stroke={hand} strokeWidth="2.2" fill="none" strokeLinecap="round" />
      </svg>
      <span
        className={cn(
          'font-serif text-xl leading-6 font-semibold tracking-tight',
          tone === 'dark' ? 'text-gray-900' : 'text-white',
        )}
      >
        Slotline
      </span>
    </span>
  )
}
