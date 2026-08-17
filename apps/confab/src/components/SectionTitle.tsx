import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  heading: string
  className?: string
}

/* Centered section heading — Mitr uppercase with the muted gray sub-line
   the source renders under every section header. */
export function SectionTitle({ heading, className }: SectionTitleProps) {
  return (
    <div className={cn('mb-14 text-center', className)}>
      <h2 className="text-[26px] font-medium uppercase leading-[1.3] text-white sm:text-[40px] lg:text-[50px]">
        {heading}
      </h2>
    </div>
  )
}
