import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  title: string
  center?: boolean
}

/**
 * SectionHeading — 36px ink heading with the 8px brand-purple underline bar
 * directly beneath it (the demo's `.section_tittle h2:after`).
 */
export function SectionHeading({ title, center = false }: SectionHeadingProps) {
  return (
    <div data-testid="section-heading" className={cn('mb-10', center && 'text-center')}>
      <div className={cn('inline-flex flex-col', center && 'items-center')}>
        <h2 className="text-3xl font-bold leading-8 text-ink md:text-4xl">{title}</h2>
        <span
          data-testid="section-heading-bar"
          aria-hidden="true"
          className="mt-1 block h-2 w-full bg-underline"
        />
      </div>
    </div>
  )
}
