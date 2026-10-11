import { cn } from '@free-react-templates/ui'

export interface ColonProps {
  className?: string
}

/**
 * The clock's separator: a literal colon set at the same 70px as the digits,
 * decorative and therefore hidden from assistive tech.
 */
export function Colon({ className }: ColonProps) {
  return (
    <span
      aria-hidden="true"
      data-testid="countdown-colon"
      className={cn(
        'pb-[22px] font-sans text-[70px] leading-none font-light text-white',
        className,
      )}
    >
      :
    </span>
  )
}
