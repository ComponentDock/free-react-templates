import { cn } from '@free-react-templates/ui'

interface SectionTitleProps {
  title: string
  light?: boolean
}

/** Section title with the 1px line + 80x5px brand underline treatment. */
export function SectionTitle({ title, light = false }: SectionTitleProps) {
  return (
    <div className="relative mb-[30px] pb-[15px]">
      <h4
        className={cn('font-heading text-lg font-semibold', light ? 'text-white' : 'text-[#111]')}
      >
        {title}
      </h4>
      <span
        aria-hidden="true"
        className={cn('absolute bottom-0 left-0 h-px w-full', light ? 'bg-[#777]' : 'bg-[#ccc]')}
      />
      <span
        aria-hidden="true"
        className={cn('absolute bottom-0 left-0 h-[5px] w-20', light ? 'bg-white' : 'bg-primary')}
      />
    </div>
  )
}
