import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

/* Centered section heading — Playfair title with the turquoise 80×4px rule
   under it and an optional grey supporting line, the repeating title pattern
   of the reference layout. */
export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn('mx-auto mb-[50px] max-w-[620px] px-4 text-center', className)}>
      <h2 className="text-[28px] md:text-[34px]">{title}</h2>
      <span aria-hidden="true" className="mx-auto mt-[20px] block h-[4px] w-[80px] bg-brand" />
      {subtitle ? (
        <p className="mt-[20px] text-[14px] leading-[1.8] text-black/70">{subtitle}</p>
      ) : null}
    </div>
  )
}
