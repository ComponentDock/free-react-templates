import type { ReactNode } from 'react'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { easeOutCubic, formatFigure, parseFigure } from '../lib/figure'
import { useReducedMotion } from '../lib/motion'

/** 1,280 px max, 16 / 32 px gutters — 1,216 px of content at a 1440 px viewport. */
export function Container({
  children,
  className,
}: {
  readonly children: ReactNode
  readonly className?: string
}) {
  return <div className={cn('mx-auto w-full max-w-[1280px] px-4 lg:px-8', className)}>{children}</div>
}

const PILL_TONES = {
  /** Pale chip on white bands — rates, credentials, reviews, questions. */
  pale: 'bg-primary-100 text-primary-800',
  /** Solid orange chip on the dark coverage band. */
  solid: 'bg-primary-500 text-white',
  /** Dark chip on the `#f9fafb` work band. */
  dark: 'bg-accent-900 text-primary-300',
} as const

/** 12 / 700 uppercase label above every band heading. */
export function SectionPill({
  children,
  tone = 'pale',
  className,
}: {
  readonly children: ReactNode
  readonly tone?: keyof typeof PILL_TONES
  readonly className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md px-3 py-1 text-xs font-bold uppercase leading-4 tracking-wider',
        PILL_TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}

const LINK_VARIANTS = {
  /** Every orange CTA on the page. */
  primary:
    'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 focus-visible:ring-primary-500/40',
  /** White with a hairline — the hero's second action. */
  secondary:
    'border border-gray-300 bg-white text-gray-700 hover:border-gray-400 hover:text-gray-900 focus-visible:ring-primary-500/40 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200',
  /** White fill, orange label — the closing band's primary. */
  white: 'bg-white text-primary-700 hover:bg-primary-50 focus-visible:ring-white/50',
  /** 2 px translucent outline for the closing band's second action. */
  outlineWhite:
    'border-2 border-white/30 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white/40',
} as const

const LINK_SIZES = {
  header: 'px-5 py-2.5 text-sm font-medium',
  md: 'px-5 py-3 text-sm font-medium',
  lg: 'px-7 py-3.5 text-base font-semibold',
} as const

const ACTION_BASE =
  'inline-flex items-center justify-center gap-2 rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'

interface ActionProps {
  readonly children: ReactNode
  readonly variant?: keyof typeof LINK_VARIANTS
  readonly size?: keyof typeof LINK_SIZES
  readonly className?: string
}

/** The page's link-shaped actions: radius 8, no gradient. */
export function ActionLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}: ActionProps & { readonly href: string; readonly onClick?: () => void }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(ACTION_BASE, LINK_VARIANTS[variant], LINK_SIZES[size], className)}
    >
      {children}
    </a>
  )
}

/** The same shapes as real buttons — anything that opens the quote dialog. */
export function ActionButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
}: ActionProps & {
  readonly onClick?: () => void
  readonly type?: 'button' | 'submit'
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(ACTION_BASE, LINK_VARIANTS[variant], LINK_SIZES[size], className)}
    >
      {children}
    </button>
  )
}

/** Band heading block: eyebrow pill, `h2`, lede — the same three parts in six bands. */
export function BandHeading({
  pill,
  tone = 'pale',
  heading,
  lede,
  onDark = false,
  centered = false,
  className,
}: {
  readonly pill: ReactNode
  readonly tone?: keyof typeof PILL_TONES
  readonly heading: string
  readonly lede?: string
  readonly onDark?: boolean
  readonly centered?: boolean
  readonly className?: string
}) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      <SectionPill tone={tone}>{pill}</SectionPill>
      <h2
        className={cn(
          'mt-4 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl',
          onDark ? 'text-white' : 'text-gray-900 dark:text-white',
        )}
      >
        {heading}
      </h2>
      {lede ? (
        <p
          className={cn(
            'mt-3 text-base leading-6',
            onDark ? 'text-accent-300' : 'text-gray-600 dark:text-gray-300',
            centered && 'mx-auto max-w-2xl',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  )
}

/**
 * Original mark: a list glyph (two ticks and a rule) in an orange tile beside a
 * tight wordmark. Rendered at 40 px tall in the header and the footer.
 */
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
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-8 w-8 shrink-0 rounded-lg"
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="32" height="32" rx="8" className="fill-primary-600 stroke-none" />
        <path d="M9 11.5 11.5 14 9 16.5" className="stroke-white" />
        <path d="M15 15h8" className="stroke-white" />
        <path d="M9 21.5 11.5 24 9 26.5" className="stroke-white/70" />
        <path d="M15 23h8" className="stroke-white/70" />
      </svg>
      <span
        className={cn(
          'text-xl font-bold leading-none tracking-tight',
          tone === 'light' ? 'text-white' : 'text-gray-900 dark:text-white',
        )}
      >
        {brand}
      </span>
    </span>
  )
}

/**
 * Scroll reveal staged 0–500 ms in 100 ms steps. Falls back to visible when
 * IntersectionObserver is absent (jsdom) and never animates under
 * `prefers-reduced-motion: reduce`.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  readonly children: ReactNode
  readonly className?: string
  readonly delay?: number
}) {
  const [shown, setShown] = useState(false)
  const reduced = useReducedMotion()
  const observerRef = useRef<IntersectionObserver | null>(null)

  const setNode = useCallback((node: HTMLDivElement | null) => {
    if (!node) {
      observerRef.current?.disconnect()
      return
    }
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true)
      return
    }
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setShown(true)
          observer.disconnect()
        }
      }
    })
    observer.observe(node)
    observerRef.current = observer
  }, [])

  const visible = shown || reduced

  return (
    <div
      ref={setNode}
      data-reveal
      data-delay={delay}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn(
        'transition-all duration-700 ease-out',
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** Five orange stars plus a text equivalent for screen readers. */
export function Stars({ className }: { readonly className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5', className)}>
      <span className="sr-only">5 out of 5</span>
      {[0, 1, 2, 3, 4].map((star) => (
        <Star key={star} aria-hidden="true" className="h-4 w-4 fill-primary-400 text-primary-400" />
      ))}
    </span>
  )
}

/**
 * A figure that counts up over 2,000 ms when it enters the viewport. The
 * authored value is what renders before the animation (and whenever
 * IntersectionObserver is missing), so crawlers and tests see `2,400`, not `0`.
 */
export function Counter({
  value,
  label,
  className,
}: {
  readonly value: string
  readonly label: string
  readonly className?: string
}) {
  const parsed = useMemo(() => parseFigure(value), [value])
  const nodeRef = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState<string | null>(null)

  useEffect(() => {
    const node = nodeRef.current
    if (!parsed || !node || typeof IntersectionObserver === 'undefined') {
      return undefined
    }
    let frame = 0
    let start = 0
    const step = (now: number) => {
      const progress = Math.min((now - start) / 2000, 1)
      setAnimated(progress < 1 ? formatFigure(easeOutCubic(progress) * parsed.target, parsed) : null)
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      }
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) {
            continue
          }
          observer.disconnect()
          start = performance.now()
          frame = requestAnimationFrame(step)
        }
      },
      { threshold: 0.5 },
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
    }
  }, [parsed])

  return (
    <div ref={nodeRef} className={cn('text-center sm:text-left', className)}>
      <div
        data-counter
        className="text-4xl font-bold leading-none tabular-nums text-primary-600 lg:text-5xl dark:text-primary-400"
      >
        {animated ?? value}
      </div>
      <div className="mt-3 text-sm leading-5 text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  )
}
