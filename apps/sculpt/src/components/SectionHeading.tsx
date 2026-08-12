import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  title: string
  intro?: string
  light?: boolean
}

/**
 * SectionHeading — centered 34px/300 section heading with an optional intro
 * paragraph, used by most Sculpt sections (services, schedule, shop, ...).
 */
export function SectionHeading({ title, intro, light = false }: SectionHeadingProps) {
  return (
    <div className={cn('sculpt-heading text-center', light && 'text-white')}>
      <h2
        className={cn(
          'text-3xl font-light leading-snug sm:text-[34px]',
          light ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cn('mx-auto mt-4 max-w-2xl', light ? 'text-white/70' : 'text-neutral-500')}>
          {intro}
        </p>
      )}
    </div>
  )
}
