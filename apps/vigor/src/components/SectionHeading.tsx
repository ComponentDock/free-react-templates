import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  kicker: string
  title: string
  light?: boolean
  className?: string
}

/**
 * SectionHeading — centered section heading used across Vigor sections: an
 * uppercase kicker line clipped to the green gradient (`#b3e258 → #38b143`)
 * plus a 36px weight-600 title. The `light` variant renders white text for
 * photo-background sections (experts strip).
 */
export function SectionHeading({ kicker, title, light, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-15 text-center', className)}>
      <h6 className="bg-gradient-to-r from-kicker to-brand bg-clip-text text-sm font-semibold uppercase tracking-wide text-transparent">
        {kicker}
      </h6>
      <h2 className={cn('mt-3 text-4xl font-semibold', light ? 'text-white' : 'text-ink')}>
        {title}
      </h2>
    </div>
  )
}
