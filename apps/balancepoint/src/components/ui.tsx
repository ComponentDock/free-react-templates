import type { ReactNode } from 'react'
import { useCallback, useRef, useState } from 'react'
import { cn } from '@free-react-templates/ui'

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

/** 14 / 20 uppercase lime label above every band heading (+0.35 px tracking). */
export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  readonly children: ReactNode
  /** `#b0dc66` on the ledger band instead of the light bands' `#4a6918`. */
  readonly onDark?: boolean
  readonly className?: string
}) {
  return (
    <p
      className={cn(
        'text-sm font-bold uppercase leading-5 tracking-wide',
        onDark ? 'text-primary-300' : 'text-primary-700 dark:text-primary-300',
        className,
      )}
    >
      {children}
    </p>
  )
}

const LINK_VARIANTS = {
  /** The lime fill: header CTA, hero form, newsletter, cookie accept. */
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500/40',
  /** 2 px white outline on the lime closing band. */
  outlineWhite:
    'border-2 border-white/40 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white/40',
  /** White pill with a lime label on the lime closing band. */
  white: 'bg-white text-primary-700 hover:bg-primary-50 focus-visible:ring-white/50',
} as const

const LINK_SIZES = {
  header: 'px-5 py-2.5 text-sm font-bold',
  md: 'px-6 py-3.5 text-base font-bold',
  lg: 'px-8 py-4 text-base font-bold',
} as const

interface LinkShapeProps {
  readonly children: ReactNode
  readonly href: string
  readonly variant?: keyof typeof LINK_VARIANTS
  readonly size?: keyof typeof LINK_SIZES
  readonly className?: string
  readonly onClick?: () => void
}

/** The page's button shapes: 8 px radius, no shadow, no gradient. */
export function ActionLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
}: LinkShapeProps) {
  return (
    <a
      href={href}
      onClick={onClick}
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

/** Full-radius outlined pill — the header phone number and the city. */
export function Pill({
  children,
  href,
  icon,
  className,
}: {
  readonly children: ReactNode
  readonly href: string
  readonly icon: ReactNode
  readonly className?: string
}) {
  return (
    <a
      href={href}
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800 transition-colors hover:border-primary-500 hover:text-primary-700 dark:border-white/20 dark:text-white',
        className,
      )}
    >
      {icon}
      {children}
    </a>
  )
}

/** Full-radius lime chip above the two lower bands — *Reviews* and *Questions*. */
export function SectionPill({
  children,
  className,
}: {
  readonly children: ReactNode
  readonly className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full bg-primary-100 px-4 py-1.5 text-sm font-bold text-primary-700',
        className,
      )}
    >
      {children}
    </span>
  )
}

/**
 * Original mark: a balance-point glyph — a line that flattens where output meets
 * demand — beside a tight wordmark.
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
        className="h-8 w-8 shrink-0"
        fill="none"
        strokeWidth="2.4"
        strokeLinecap="round"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="7"
          className={tone === 'light' ? 'stroke-primary-300' : 'stroke-primary-600'}
        />
        <path
          d="M7 21.5h18"
          className={tone === 'light' ? 'stroke-primary-300' : 'stroke-primary-600'}
        />
        <path
          d="M8 16.5 13.5 11l4.5 3.5L24 8"
          className={tone === 'light' ? 'stroke-primary-400' : 'stroke-primary-500'}
        />
        <circle
          cx="18"
          cy="14.5"
          r="1.8"
          className={tone === 'light' ? 'fill-primary-300 stroke-none' : 'fill-primary-600 stroke-none'}
        />
      </svg>
      <span
        className={cn(
          'text-xl font-bold leading-none tracking-tight',
          tone === 'light' ? 'text-white' : 'text-ink-800 dark:text-white',
        )}
      >
        {brand}
      </span>
    </span>
  )
}

/** Band heading block: eyebrow, `h2`, lede — the same three parts in six bands. */
export function BandHeading({
  eyebrow,
  heading,
  lede,
  onDark = false,
  centered = false,
  className,
}: {
  readonly eyebrow?: string
  readonly heading: string
  readonly lede?: string
  readonly onDark?: boolean
  readonly centered?: boolean
  readonly className?: string
}) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow ? <Eyebrow onDark={onDark}>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'mt-3 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl',
          onDark ? 'text-white' : 'text-ink-800 dark:text-white',
        )}
      >
        {heading}
      </h2>
      {lede ? (
        <p
          className={cn(
            'mt-3 text-lg leading-7',
            onDark ? 'text-white/70' : 'text-ink-500 dark:text-gray-300',
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
 * Scroll reveal used by exactly the reviews and FAQ bands (14 targets). Falls
 * back to visible when IntersectionObserver is absent (jsdom) and never
 * animates under `prefers-reduced-motion: reduce`.
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
  const [reduced] = useState(() => {
    const query = '(prefers-reduced-motion: reduce)'
    return typeof window.matchMedia === 'function' && window.matchMedia(query).matches
  })
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
