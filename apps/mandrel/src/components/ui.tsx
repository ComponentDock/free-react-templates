import type { ReactNode } from 'react'
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

/** 14 / 20 uppercase steel-blue label above every band heading (+0.35 px). */
export function Eyebrow({
  children,
  deep = false,
  className,
}: {
  readonly children: ReactNode
  /** `#31485f` instead of the default `#3c5a78` — only `#process` uses it. */
  readonly deep?: boolean
  readonly className?: string
}) {
  return (
    <p
      className={cn(
        'text-sm font-bold uppercase leading-5 tracking-wide',
        deep ? 'text-primary-700' : 'text-primary-600 dark:text-primary-400',
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
    'border border-ink-300 text-ink-700 hover:border-primary-600 hover:text-primary-700 focus-visible:ring-primary-500/40 dark:border-gray-700 dark:text-gray-200',
  white:
    'bg-white text-primary-700 hover:bg-primary-50 focus-visible:ring-white/50 dark:bg-white dark:text-primary-700',
  onSteel:
    'border-2 border-white/40 text-white hover:border-white hover:bg-white/10 focus-visible:ring-white/40',
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
}

/** The page's button shapes: 8 px radius, no shadow, no gradient. */
export function ActionLink({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className,
}: LinkShapeProps) {
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
        'inline-flex items-center gap-1.5 rounded-full border border-ink-200 px-3 py-1.5 text-sm font-semibold text-ink-800 transition-colors hover:border-primary-500 hover:text-primary-700 dark:border-gray-700 dark:text-gray-200',
        className,
      )}
    >
      {icon}
      {children}
    </a>
  )
}

/** Original mark: a steel-blue mandrel glyph beside a tight wordmark. */
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
          d="M9 22V10h8a4 4 0 0 1 0 8h-4v4"
          className={tone === 'light' ? 'stroke-primary-300' : 'stroke-primary-600'}
        />
        <path
          d="M23 10v12"
          className={tone === 'light' ? 'stroke-primary-300' : 'stroke-primary-600'}
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

/** Four label / value rows on hairline rules — the hero's prequalification table. */
export function FactTable({
  rows,
  className,
}: {
  readonly rows: readonly { readonly label: string; readonly value: string }[]
  readonly className?: string
}) {
  return (
    <table className={cn('w-full border-collapse text-sm leading-5', className)}>
      <caption className="sr-only">Prequalification facts</caption>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label} className="border-b border-ink-100 last:border-b-0 dark:border-gray-800">
            <th
              scope="row"
              className="w-2/5 py-3 pr-4 text-left font-medium text-ink-400 dark:text-gray-400"
            >
              {row.label}
            </th>
            <td className="py-3 font-semibold text-ink-800 dark:text-white">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

/** Band heading block: eyebrow, `h2`, lede — the same three parts in five bands. */
export function BandHeading({
  eyebrow,
  heading,
  lede,
  deep = false,
  className,
}: {
  readonly eyebrow: string
  readonly heading: string
  readonly lede?: string
  readonly deep?: boolean
  readonly className?: string
}) {
  return (
    <div className={cn('max-w-2xl', className)}>
      <Eyebrow deep={deep}>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-tight text-ink-800 sm:text-4xl dark:text-white">
        {heading}
      </h2>
      {lede ? (
        <p className="mt-3 text-lg leading-7 text-ink-500 dark:text-gray-300">{lede}</p>
      ) : null}
    </div>
  )
}
