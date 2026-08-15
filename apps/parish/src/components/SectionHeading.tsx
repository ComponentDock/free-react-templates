import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  label: string
  heading: string
  light?: boolean
}

export function SectionHeading({ label, heading, light = false }: SectionHeadingProps) {
  return (
    <div className="mb-10 text-center">
      <span className="mb-2 block text-sm font-semibold tracking-[2px] text-brand uppercase">
        {label}
      </span>
      <h2
        className={cn(
          'font-heading text-3xl font-bold tracking-[2px] uppercase md:text-[34px]',
          light ? 'text-white' : 'text-heading',
        )}
      >
        {heading}
      </h2>
    </div>
  )
}
