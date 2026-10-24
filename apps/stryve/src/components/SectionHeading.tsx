import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  label: string
  title: string
  className?: string
}

/** 12px/900 brand label with 6px tracking over a 48px UPPERCASE white h2. */
export function SectionHeading({ label, title, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-[84px]', className)}>
      <span className="mb-[10px] block text-[12px] font-black uppercase leading-none tracking-[6px] text-brand">
        {label}
      </span>
      <h2 className="text-[30px] font-bold uppercase leading-none tracking-[6px] text-white md:text-[48px]">
        {title}
      </h2>
    </div>
  )
}
