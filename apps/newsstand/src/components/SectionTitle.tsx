import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  title: string
  center?: boolean
}

/* Reference `.section-title`: 28px, capitalized, 40px bottom margin;
   `.text-center` variant for the grey band. */
export function SectionTitle({ title, center = false }: SectionTitleProps) {
  return (
    <h2
      className={cn(
        'mb-10 font-heading text-[28px] font-bold capitalize text-ink',
        center && 'text-center',
      )}
    >
      {title}
    </h2>
  )
}
