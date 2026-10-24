import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  title: string
  centered?: boolean
}

/* The reference paints a 50×2px brand rule above every section heading. */
export function SectionHeading({ title, centered = false }: SectionHeadingProps) {
  return (
    <>
      <div className={cn('mb-3 h-0.5 w-[50px] bg-brand', centered && 'mx-auto')} />
      <h2
        className={cn(
          'font-display text-[32px] font-bold leading-[1.2] text-ink',
          centered && 'mb-12 text-center',
        )}
      >
        {title}
      </h2>
    </>
  )
}
