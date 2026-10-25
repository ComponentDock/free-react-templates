import type { ReactNode } from 'react'
import { Droplet, Phone, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { PHONE_DISPLAY, PHONE_HREF, RATING, RATING_NOTE } from '../content'

/** 1280 px max, 16 / 32 px gutters — 1,216 px of content at a 1440 px viewport. */
export function Container({
  children,
  className,
}: {
  readonly children: ReactNode
  readonly className?: string
}) {
  return (
    <div className={cn('mx-auto w-full max-w-[1280px] px-4 lg:px-8', className)}>{children}</div>
  )
}

const EYEBROW_WEIGHT = {
  medium: 'font-medium',
  bold: 'font-bold',
} as const

/** 14 / 20 uppercase sage label above every band heading (+0.35 px tracking). */
export function Eyebrow({
  children,
  weight = 'medium',
  className,
}: {
  readonly children: ReactNode
  readonly weight?: keyof typeof EYEBROW_WEIGHT
  readonly className?: string
}) {
  return (
    <p
      className={cn(
        'text-sm uppercase leading-5 tracking-wide text-primary-700 dark:text-primary-300',
        EYEBROW_WEIGHT[weight],
        className,
      )}
    >
      {children}
    </p>
  )
}

const LINK_VARIANTS = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500/40',
  outline:
    'border border-ink-200 text-ink-700 hover:border-ink-300 hover:bg-ink-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800',
  white:
    'bg-white text-primary-700 hover:bg-primary-50 focus-visible:ring-white/50 dark:bg-white dark:text-primary-700',
  onGreen:
    'border-2 border-white/40 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white/40',
} as const

const LINK_SIZES = {
  sm: 'px-5 py-2.5 text-sm font-bold',
  md: 'px-6 py-3.5 text-base font-semibold',
  lg: 'px-8 py-4 text-base font-bold',
} as const

interface LinkShapeProps {
  readonly children: ReactNode
  readonly href: string
  readonly variant?: keyof typeof LINK_VARIANTS
  readonly size?: keyof typeof LINK_SIZES
  readonly className?: string
}

/** The page's button shapes: 8 px radius, no shadow, no gradient. */
export function ActionLink({ children, href, variant = 'primary', size = 'md', className }: LinkShapeProps) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        LINK_VARIANTS[variant],
        LINK_SIZES[size],
        className,
      )}
    >
      {children}
    </a>
  )
}

/** Full-radius outlined pill — the header phone number and the hero meta. */
export function PhonePill({ className }: { readonly className?: string }) {
  return (
    <a
      href={PHONE_HREF}
      data-phone
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800 transition-colors hover:border-primary-500 hover:text-primary-700 dark:border-gray-700 dark:text-gray-200',
        className,
      )}
    >
      <Phone className="h-4 w-4 shrink-0" aria-hidden="true" />
      {PHONE_DISPLAY}
    </a>
  )
}

/** Original mark: a sage droplet beside a serif wordmark, never the source SVG. */
export function Logo({
  brand,
  tone = 'dark',
  className,
}: {
  readonly brand: string
  readonly tone?: 'dark' | 'light'
  readonly className?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <Droplet
        aria-hidden="true"
        className={cn(
          'h-7 w-7 shrink-0',
          tone === 'light' ? 'text-primary-300' : 'text-primary-600',
        )}
        strokeWidth={2.2}
      />
      <span
        className={cn(
          'font-serif text-xl font-semibold leading-none tracking-tight',
          tone === 'light' ? 'text-white' : 'text-ink-800 dark:text-white',
        )}
      >
        {brand}
      </span>
    </span>
  )
}

/** Five decorative stars, labelled once for assistive technology. */
export function Stars({
  label,
  size = 'sm',
  tone = 'amber',
}: {
  readonly label: string
  readonly size?: 'sm' | 'md'
  readonly tone?: 'amber' | 'primary'
}) {
  return (
    <span role="img" aria-label={label} className="inline-flex items-center gap-0.5">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          aria-hidden="true"
          className={cn(
            'fill-current',
            size === 'md' ? 'h-5 w-5' : 'h-4 w-4',
            tone === 'primary' ? 'text-primary-400' : 'text-star',
          )}
        />
      ))}
    </span>
  )
}

/** The hero's rating line: stars, the figure, then the sample-data caveat. */
export function RatingLine() {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm leading-5 text-ink-600 dark:text-gray-300">
      <Stars label={`Rated ${RATING} out of 5`} />
      <span className="font-bold text-ink-800 dark:text-white">{RATING}</span>
      <span className="text-ink-600/80 dark:text-gray-400">{RATING_NOTE}</span>
    </div>
  )
}
