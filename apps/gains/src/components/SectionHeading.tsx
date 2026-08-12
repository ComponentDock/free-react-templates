import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  kicker?: string
  title: string
  copy?: string
  light?: boolean
  className?: string
}

/**
 * SectionHeading — centered section title block: red uppercase kicker,
 * Teko condensed uppercase h2, and optional 14px body copy. `light` renders
 * white text for dark/photo sections (calculate, subscribe).
 */
export function SectionHeading({
  kicker,
  title,
  copy,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-12 text-center', className)}>
      {kicker && (
        <p className="mb-4 text-base font-semibold uppercase leading-none tracking-wide text-brand">
          {kicker}
        </p>
      )}
      <h2
        className={cn('text-4xl font-bold uppercase text-ink lg:text-5xl', light && 'text-white')}
      >
        {title}
      </h2>
      {copy && (
        <p className={cn('mx-auto mt-4 max-w-2xl text-sm', light ? 'text-white/80' : 'text-body')}>
          {copy}
        </p>
      )}
    </div>
  )
}
