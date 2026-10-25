import type { ReactNode } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { useReveal } from '../lib/motion'

/** 1,280 px container, 16 / 24 / 32 px gutters — 1,216 px of content at lg. */
export const containerClass = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'

/** 112 px of air between bands. */
export const sectionClass = 'py-28'

export interface ChipProps {
  children: ReactNode
  /** `#disciplines` is the one band where the chip inverts. */
  tone?: 'dark' | 'inverted'
  className?: string
}

/**
 * The page's eyebrow, and its print idiom: square, 12/700 uppercase, 1.8 px of
 * tracking, charcoal plate with lime words — a plate, not a pill.
 */
export function Chip({ children, tone = 'dark', className }: ChipProps) {
  return (
    <span
      className={cn(
        'inline-block px-2 py-0.5 text-xs leading-5 font-bold tracking-[1.8px] uppercase',
        tone === 'inverted' ? 'bg-accent-400 text-primary-900' : 'bg-primary-900 text-accent-400',
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Square, hairline-bordered, mono — the tag pills inside `#disciplines`. */
export function TagPill({ children }: { children: ReactNode }) {
  return (
    <li className="border border-primary-600 px-2.5 py-1 font-mono text-[11px] leading-4 tracking-[0.55px] uppercase">
      {children}
    </li>
  )
}

export interface MonoLabelProps {
  children: ReactNode
  className?: string
}

/** The technical layer: every company line, price, duration and file format. */
export function MonoLabel({ children, className }: MonoLabelProps) {
  return (
    <span className={cn('font-mono text-xs leading-4 tracking-[0.55px] uppercase', className)}>
      {children}
    </span>
  )
}

/** The rounded pill used by the testimonial and FAQ bands only. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-primary-100 px-3 py-1 text-sm leading-5 font-medium text-primary-700">
      {children}
    </span>
  )
}

export interface SectionIntroProps {
  eyebrow: string
  title: string
  lead?: string
  tone?: 'light' | 'dark'
  /** `#disciplines` inverts its chip; every other band uses the dark plate. */
  chipTone?: 'dark' | 'inverted'
  align?: 'left' | 'center'
  /** `#work` and `#disciplines` are wider than the centred bands. */
  width?: 'max-w-2xl' | 'max-w-3xl'
}

export function SectionIntro({
  eyebrow,
  title,
  lead,
  tone = 'light',
  chipTone = 'dark',
  align = 'left',
  width = 'max-w-2xl',
}: SectionIntroProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn(width, align === 'center' ? 'mx-auto text-center' : '')}>
      <Chip tone={chipTone}>{eyebrow}</Chip>
      <h2
        className={cn(
          'mt-4 text-3xl leading-9 font-bold tracking-[-0.9px] sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-[48px] lg:tracking-[-1.2px]',
          dark ? 'text-primary-50' : 'text-primary-900 dark:text-primary-50',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            'mt-4 text-base leading-7',
            dark ? 'text-primary-300' : 'text-primary-600 dark:text-primary-300',
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}

const ACTION_BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors'

const ACTION_VARIANTS = {
  primary:
    'bg-primary-600 px-6 py-3 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 hover:shadow-xl',
  secondary:
    'border border-gray-300 bg-white px-6 py-3 text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:bg-transparent dark:text-gray-200',
  onDark: 'bg-white px-8 py-4 text-primary-700 shadow-lg hover:shadow-xl',
  onDarkOutline: 'border-2 border-white/30 px-8 py-4 text-white hover:bg-white/10',
  /** The cookie strip's *Decline*, a hairline rather than a fill. */
  outlineSm:
    'border border-gray-300 px-4 py-2 text-gray-700 hover:border-gray-400 dark:border-gray-700 dark:text-gray-200',
  header: 'bg-primary-600 px-5 py-2.5 text-sm text-white hover:bg-primary-700',
  /** The cookie strip's two answers. */
  cookieAccept: 'bg-primary-600 px-4 py-2 text-white hover:bg-primary-700',
} as const

export type ActionVariant = keyof typeof ACTION_VARIANTS

export interface ActionLinkProps {
  href: string
  children: ReactNode
  variant?: ActionVariant
  className?: string
  external?: boolean
}

export function ActionLink({
  href,
  children,
  variant = 'primary',
  className,
  external = false,
}: ActionLinkProps) {
  return (
    <a
      href={href}
      className={cn(ACTION_BASE, ACTION_VARIANTS[variant], className)}
      {...(external ? { target: '_blank', rel: 'noopener' } : {})}
    >
      {children}
    </a>
  )
}

export interface ActionButtonProps {
  children: ReactNode
  onClick: () => void
  variant?: ActionVariant
  className?: string
  ariaLabel?: string
}

export function ActionButton({
  children,
  onClick,
  variant = 'primary',
  className,
  ariaLabel,
}: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(ACTION_BASE, ACTION_VARIANTS[variant], className)}
    >
      {children}
    </button>
  )
}

/** A 36/40 numeral over a 14/400 label, under the hero's hairline. */
export function StatCell({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-3xl leading-10 font-bold text-primary-900 sm:text-4xl dark:text-primary-50">
        {value}
      </p>
      <p className="mt-1 text-sm leading-5 text-primary-600 dark:text-primary-300">{label}</p>
    </div>
  )
}

/** Five grey stars — deliberately not branded: the testimonial band stays grey. */
export function Stars() {
  return (
    <div className="flex gap-1" aria-label="Five out of five">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star
          key={index}
          aria-hidden="true"
          className="h-5 w-5 fill-primary-400 text-primary-400"
        />
      ))}
    </div>
  )
}

export interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/** 20 px up and in over 600 ms, staggered by `delay`, and never under reduced motion. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      data-testid="reveal"
      data-delay={delay}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
