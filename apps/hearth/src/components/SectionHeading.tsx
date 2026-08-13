import { cn } from '@free-react-templates/ui'

export type SectionHeadingProps = {
  script: string
  title: string
  light?: boolean
  className?: string
}

/**
 * SectionHeading — the signature heading pair of the design (source
 * `.heading-section`): a 50px Lovers Quarrel script label in the soft brand
 * red pulled up with a negative bottom margin so it overlaps the top of the
 * bold h2 (z-index -1). The `light` variant renders the label in translucent
 * white for photo-background sections.
 */
export function SectionHeading({ script, title, light = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('text-center', className)}>
      <span
        className={cn(
          '-mb-5 block font-script text-[50px] leading-none text-brand-soft',
          light && 'text-white/70',
        )}
      >
        {script}
      </span>
      <h2 className={cn('text-3xl font-bold text-ink lg:text-[32px]', light && 'text-white')}>
        {title}
      </h2>
    </div>
  )
}
