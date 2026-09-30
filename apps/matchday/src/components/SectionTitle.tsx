import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}

/** Centered/left section heading: uppercase title + brand-orange subtitle. */
export function SectionTitle({
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionTitleProps) {
  return (
    <div className={cn(align === 'center' ? 'text-center' : 'text-left')}>
      <h2
        className={cn(
          'text-3xl font-bold uppercase tracking-wide lg:text-4xl',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {subtitle ? <p className="mt-3 text-base font-medium text-brand">{subtitle}</p> : null}
    </div>
  )
}
