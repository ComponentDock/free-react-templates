import type { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'
import { useReveal } from '../lib/motion'
import type { PaintingStatus } from '../content'

/** 1,280 px container, 16 / 24 / 32 px gutters. */
export const containerClass = 'mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8'

/** The band rhythm: 80 px of air, 112 px from `sm`. */
export const sectionClass = 'py-20 sm:py-28'

/** 12 px, 500, uppercase, 0.2em — rosewood on light bands, rose on the dark one. */
export function Eyebrow({
  children,
  tone = 'light',
  className,
}: {
  children: ReactNode
  tone?: 'light' | 'dark'
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-xs leading-4 font-medium tracking-[0.2em] uppercase',
        tone === 'dark' ? 'text-accent-400' : 'text-accent-700',
        className,
      )}
    >
      {children}
    </p>
  )
}

export interface SectionHeadingProps {
  title: string
  /** `#statement` opens straight into its prose, so the lead is optional. */
  lead?: string
  eyebrow?: string
  tone?: 'light' | 'dark'
  /** `#faq` and `#contact` return to the sans; every other band is serif. */
  sans?: boolean
}

export function SectionHeading({
  title,
  lead,
  eyebrow,
  tone = 'light',
  sans = false,
}: SectionHeadingProps) {
  const dark = tone === 'dark'
  return (
    <div>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'mt-3 text-3xl leading-9 tracking-[-0.9px] text-gray-900 sm:text-4xl sm:leading-10 dark:text-white',
          sans ? 'font-sans font-bold' : 'font-serif font-medium',
          dark ? 'text-primary-100 dark:text-primary-100' : '',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            'mt-4 max-w-2xl text-base leading-7',
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
  /** The one square control on the page, at the end of the band about money. */
  squareOutline:
    'rounded-none border border-primary-900 px-8 py-3.5 text-primary-900 hover:bg-primary-900 hover:text-primary-50',
  header: 'bg-primary-600 px-5 py-2.5 text-sm text-white hover:bg-primary-700',
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

export function Badge({
  children,
  tone = 'outline',
}: {
  children: ReactNode
  tone?: 'outline' | 'solid'
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm leading-5 font-medium text-primary-700',
        tone === 'solid'
          ? 'border border-primary-200 bg-primary-100 dark:bg-primary-800 dark:text-primary-100'
          : 'border border-primary-200 bg-primary-50 dark:border-primary-700 dark:bg-primary-900/40 dark:text-primary-200',
      )}
    >
      {children}
    </span>
  )
}

const DOT_TONE: Record<PaintingStatus, string> = {
  Available: 'bg-accent-600',
  Reserved: 'bg-primary-400',
  Sold: 'bg-primary-300',
  'Private collection': 'bg-primary-300',
}

/** The dot's colour is the status; its label is the accessible version. */
export function StatusDot({ status }: { status: PaintingStatus }) {
  const available = status === 'Available'
  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden="true" className={cn('h-1.5 w-1.5 rounded-full', DOT_TONE[status])} />
      <span
        className={cn(
          'text-sm leading-5',
          available ? 'font-medium text-accent-700' : 'text-primary-500 dark:text-primary-300',
        )}
      >
        {status}
      </span>
    </span>
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
