import { cn } from '@free-react-templates/ui'

interface SectionHeadingProps {
  label: string
  title: string
  white?: boolean
}

/** Uppercase pink section label with 50px flanking pink rules + 40px heading. */
export function SectionHeading({ label, title, white = false }: SectionHeadingProps) {
  return (
    <div className={cn('mb-14 text-center', white ? 'text-white' : 'text-ink')}>
      <span
        className={cn(
          'relative mb-4 inline-block text-xs font-semibold tracking-[2px] uppercase',
          white ? 'text-white/90' : 'text-brand',
        )}
      >
        <span
          aria-hidden="true"
          className="absolute top-1/2 -left-[60px] h-px w-[50px] -translate-y-1/2 bg-brand"
        />
        {label}
        <span
          aria-hidden="true"
          className="absolute top-1/2 -right-[60px] h-px w-[50px] -translate-y-1/2 bg-brand"
        />
      </span>
      <h2 className="text-[28px] font-semibold md:text-[40px]">{title}</h2>
    </div>
  )
}
