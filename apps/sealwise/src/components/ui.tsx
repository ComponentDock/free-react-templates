import type { ReactNode } from 'react'
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import { Check, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { useReveal } from '../lib/motion'

/** 1,280 px container, 16 / 32 px gutters — 1,216 px of content at `lg`. */
export const containerClass = 'mx-auto w-full max-w-7xl px-4 lg:px-8'

export interface KickerProps {
  children: ReactNode
  /** `#identify` is the one band where the eyebrow inverts to the pale green. */
  tone?: 'light' | 'dark'
  className?: string
}

/** 14/700 uppercase, and the +0.35 px tracking is half of the type pair. */
export function Kicker({ children, tone = 'light', className }: KickerProps) {
  return (
    <p
      className={cn(
        'text-sm leading-5 font-bold tracking-[0.35px] uppercase',
        tone === 'dark' ? 'text-primary-400' : 'text-primary-700',
        className,
      )}
    >
      {children}
    </p>
  )
}

export interface SectionIntroProps {
  kicker?: string
  title: string
  lead?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  width?: 'max-w-2xl' | 'max-w-3xl'
}

export function SectionIntro({
  kicker,
  title,
  lead,
  tone = 'light',
  align = 'left',
  width = 'max-w-2xl',
}: SectionIntroProps) {
  const dark = tone === 'dark'
  return (
    <div className={cn(width, align === 'center' && 'mx-auto text-center')}>
      {kicker ? <Kicker tone={tone}>{kicker}</Kicker> : null}
      <h2
        className={cn(
          'mt-3 text-3xl leading-9 font-bold tracking-tight sm:text-4xl sm:leading-10',
          dark ? 'text-white' : 'text-ink-800 dark:text-ink-50',
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={cn(
            'mt-4 text-lg leading-7',
            dark ? 'text-white/70' : 'text-ink-500 dark:text-ink-300',
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  )
}

const ACTION_BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-bold transition-colors disabled:opacity-60'

const ACTION_VARIANTS = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700',
  outline: 'border border-ink-200 text-ink-700 hover:border-primary-600 hover:text-primary-700',
  white: 'bg-white text-primary-700 hover:bg-primary-50',
  outlineWhite: 'border-2 border-white/40 text-white hover:border-white/70',
  quiet: 'border border-ink-200 text-ink-600 hover:border-primary-600 hover:text-primary-700',
} as const

export type ActionVariant = keyof typeof ACTION_VARIANTS

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ActionVariant
}

export function ActionButton({ variant = 'primary', className, ...rest }: ActionButtonProps) {
  return <button type="button" className={cn(ACTION_BASE, ACTION_VARIANTS[variant], className)} {...rest} />
}

export interface ActionLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ActionVariant
  external?: boolean
}

export function ActionLink({
  variant = 'primary',
  external = false,
  className,
  ...rest
}: ActionLinkProps) {
  const rel = external ? { rel: 'noreferrer', target: '_blank' } : {}
  return (
    <a className={cn(ACTION_BASE, ACTION_VARIANTS[variant], className)} {...rel} {...rest} />
  )
}

/** Five 20 px stars, in one colour, repeated — the page's only graphic flourish. */
export function Stars({ className, size = 'h-4 w-4' }: { className?: string; size?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5 text-primary-400', className)} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((index) => (
        <Star key={index} className={cn(size, 'fill-current')} />
      ))}
    </span>
  )
}

export function CheckLine({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-base leading-6 font-medium text-ink-700 dark:text-ink-300">
      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-primary-600 dark:text-primary-400" />
      <span>{children}</span>
    </li>
  )
}

export interface RevealProps {
  children: ReactNode
  /** The reference staggers 100–300 ms; the first element carries none. */
  delay?: number
  className?: string
}

/**
 * 0 → 1 over 600 ms, 20 px up. Under `prefers-reduced-motion` the element is
 * simply painted: the hook answers `visible` immediately.
 */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      data-animate="fade-in-up"
      className={cn(
        'transition-[opacity,transform] duration-600 ease-out motion-reduce:transition-none',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
