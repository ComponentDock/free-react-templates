import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  title: string
  blurb?: string
  center?: boolean
}

/* .block-heading-1 — section heading: Oswald uppercase orange h2 (3rem,
   2rem below 992px) with an optional muted blurb paragraph below. */
export function SectionHeading({ title, blurb, center }: SectionHeadingProps) {
  return (
    <div className={cn('mb-12', center && 'text-center')}>
      <h2 className="font-display text-[2rem] font-medium uppercase text-brand lg:text-5xl">
        {title}
      </h2>
      {blurb && <p className="mt-3 max-w-2xl text-smoke">{blurb}</p>}
    </div>
  )
}
