import { cn } from '@free-react-templates/ui'

export interface SectionHeadProps {
  eyebrow: string
  title: string
  lede: string
  /**
   * `pill` is the `primary-100` label used on the species, testimonials and FAQ
   * bands; `plumPill` is the inverted one the health plans use; `bar` is the
   * 12 px uppercase label the out-of-hours and fee guide bands carry.
   */
  variant?: 'pill' | 'plumPill' | 'bar'
  align?: 'left' | 'center'
  /** Renders the heading and lede in the light palette (dark grounds). */
  onDark?: boolean
  className?: string
}

const ALIGN: Record<'left' | 'center', string> = {
  left: 'max-w-2xl',
  center: 'mx-auto max-w-2xl text-center',
}

const PILL: Record<'pill' | 'plumPill', string> = {
  pill: 'bg-primary-100 text-primary-800',
  plumPill: 'bg-primary-700 text-white',
}

/** Eyebrow + h2 + lede. Every band opens with one of these. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  variant = 'pill',
  align = 'left',
  onDark = false,
  className,
}: SectionHeadProps) {
  return (
    <div className={cn(ALIGN[align], className)}>
      {variant === 'bar' ? (
        <p className="text-xs font-bold tracking-wider text-primary-700 uppercase">{eyebrow}</p>
      ) : (
        <span
          className={cn(
            'inline-flex items-center rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase',
            PILL[variant],
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-3 text-3xl font-bold tracking-tight sm:text-4xl',
          onDark ? 'text-white' : 'text-gray-900',
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          'mt-4 text-lg leading-relaxed',
          onDark ? 'text-primary-200' : 'text-gray-600',
        )}
      >
        {lede}
      </p>
    </div>
  )
}
