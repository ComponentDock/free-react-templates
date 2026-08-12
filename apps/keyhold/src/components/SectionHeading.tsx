import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  subheading: string
  title: string
  align?: 'center' | 'left'
}

/**
 * SectionHeading — gold uppercase subheading with rule lines on either side
 * and a black h2 title (source `.subheading` + `.heading-section h2`).
 */
export function SectionHeading({ subheading, title, align = 'center' }: SectionHeadingProps) {
  const isLeft = align === 'left'

  return (
    <div className={cn(!isLeft && 'text-center')}>
      <p
        className={cn(
          'flex items-center gap-3 text-xs font-semibold uppercase tracking-[2px] text-brand',
          isLeft ? 'justify-start' : 'justify-center',
        )}
      >
        <span aria-hidden="true" className="h-px w-[50px] bg-brand" />
        {subheading}
        {!isLeft && <span aria-hidden="true" className="h-px w-[50px] bg-brand" />}
      </p>
      <h2
        className={cn(
          'mt-3 text-3xl font-semibold text-ink lg:text-[40px] lg:leading-tight',
          isLeft && 'text-left',
        )}
      >
        {title}
      </h2>
    </div>
  )
}
