import type { ReactNode } from 'react'
import { useCallback, useRef, useState } from 'react'
import { Star } from 'lucide-react'
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

/** 14 / 20 uppercase violet label above most band headings (+0.35 px tracking). */
export function Eyebrow({
  children,
  onDark = false,
  className,
}: {
  readonly children: ReactNode
  /** Violet-300 on the dark surfaces instead of the light bands' violet-700. */
  readonly onDark?: boolean
  readonly className?: string
}) {
  return (
    <p
      className={cn(
        'text-sm font-bold uppercase leading-5 tracking-[0.35px]',
        onDark ? 'text-primary-300' : 'text-primary-700 dark:text-primary-300',
        className,
      )}
    >
      {children}
    </p>
  )
}

const LINK_VARIANTS = {
  /** The violet fill: header CTA, hero form, closing band's first button. */
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus-visible:ring-primary-500/40',
  /** 2 px white outline on the violet closing band. */
  outlineWhite:
    'border-2 border-white/40 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white/40',
  /** White fill with a violet label on the violet closing band. */
  white: 'bg-white text-primary-700 hover:bg-primary-50 focus-visible:ring-white/50',
} as const

const LINK_SIZES = {
  header: 'px-4 py-2.5 text-sm font-semibold',
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

/** Full-radius outlined pill — the header phone number. */
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
        'inline-flex items-center gap-1.5 rounded-full border border-ink-100 px-3 py-1.5 text-sm font-semibold text-ink-600 transition-colors hover:border-primary-500 hover:text-primary-700 dark:border-white/20 dark:text-white',
        className,
      )}
    >
      {icon}
      {children}
    </a>
  )
}

/** Full-radius violet chip above the reviews and the FAQ. */
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
        'inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700',
        className,
      )}
    >
      {children}
    </span>
  )
}

/** Five amber stars — the hero rating and the licence strip. */
export function Stars({
  count = 5,
  size = 'sm',
  className,
}: {
  readonly count?: number
  readonly size?: 'sm' | 'md'
  readonly className?: string
}) {
  return (
    <span className={cn('inline-flex gap-0.5', className)} aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <Star
          key={index}
          className={cn('fill-accent-400 text-accent-400', size === 'sm' ? 'h-4 w-4' : 'h-5 w-5')}
        />
      ))}
    </span>
  )
}

/**
 * Original mark: three air strata — a rising line that curls back on itself,
 * the shape of a room's air turning over — beside a two-line lockup.
 */
export function Logo({
  brand,
  tagline,
  tone = 'dark',
  className,
}: {
  readonly brand: string
  readonly tagline: string
  readonly tone?: 'dark' | 'light'
  readonly className?: string
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="h-9 w-9 shrink-0"
        fill="none"
        strokeWidth="2.2"
        strokeLinecap="round"
      >
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="7"
          className={tone === 'light' ? 'stroke-white/30' : 'stroke-ink-100'}
        />
        <path
          d="M6 22h11a4 4 0 1 0-4-4"
          className={tone === 'light' ? 'stroke-primary-300' : 'stroke-primary-600'}
        />
        <path d="M6 15h7a3 3 0 1 1-3 3" className="stroke-primary-400" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'text-lg font-bold tracking-tight',
            tone === 'light' ? 'text-white' : 'text-ink-800 dark:text-white',
          )}
        >
          {brand}
        </span>
        <span
          className={cn(
            'mt-1 text-[0.65rem] font-medium uppercase tracking-[0.18em]',
            tone === 'light' ? 'text-white/50' : 'text-ink-400 dark:text-gray-400',
          )}
        >
          {tagline}
        </span>
      </span>
    </span>
  )
}

/** Band heading block: eyebrow, `h2`, lede — the same three parts in five bands. */
export function BandHeading({
  eyebrow,
  heading,
  lede,
  centered = false,
  className,
}: {
  readonly eyebrow?: string
  readonly heading: string
  readonly lede?: string
  readonly centered?: boolean
  readonly className?: string
}) {
  return (
    <div className={cn(centered && 'text-center', className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          'text-3xl font-bold leading-[1.1] tracking-[-0.9px] text-ink-800 sm:text-4xl dark:text-white',
          eyebrow && 'mt-3',
        )}
      >
        {heading}
      </h2>
      {lede ? (
        <p
          className={cn(
            'mt-3 text-lg leading-7 text-ink-500 dark:text-gray-300',
            centered && 'mx-auto max-w-xl',
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  )
}

/**
 * Scroll reveal used across the page. Falls back to visible when
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
        visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0',
        className,
      )}
    >
      {children}
    </div>
  )
}
