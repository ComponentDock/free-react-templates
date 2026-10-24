import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  label: string
  title: string
  white?: boolean
  className?: string
}

export function SectionHeading({ label, title, white = false, className }: SectionHeadingProps) {
  return (
    <div className={cn('mb-[60px]', className)}>
      <h6 className="mb-[5px] bg-gradient-to-r from-lime-text to-brand bg-clip-text text-[14px] font-bold uppercase tracking-[0.08em] text-transparent">
        {label}
      </h6>
      <h2 className={cn('text-[30px] font-semibold md:text-[36px]', white ? 'text-white' : 'text-ink')}>
        {title}
      </h2>
    </div>
  )
}
