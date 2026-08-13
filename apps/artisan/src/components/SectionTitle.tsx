import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  title: string
  intro?: string
  center?: boolean
  light?: boolean
}

/** Section heading with the reference's coral dot-and-line decoration. */
export function SectionTitle({ title, intro, center, light }: SectionTitleProps) {
  return (
    <div className={cn('mb-14', center && 'text-center')}>
      <h2
        className={cn('font-sans text-5xl font-bold capitalize', light ? 'text-white' : 'text-ink')}
      >
        {title}
      </h2>
      <div className={cn('mt-4 flex items-center', center && 'justify-center')}>
        <span className="h-2.5 w-2.5 rounded-full bg-brand" aria-hidden="true" />
        <span className="ml-1.5 h-0.5 w-[100px] bg-brand" aria-hidden="true" />
      </div>
      {intro && (
        <p
          className={cn(
            'mx-auto mt-5 max-w-[570px] font-body text-[15px] leading-relaxed',
            light ? 'text-white/90' : 'text-body',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
