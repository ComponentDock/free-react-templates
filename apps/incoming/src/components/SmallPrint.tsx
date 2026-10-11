import { cn } from '@free-react-templates/ui'

export interface SmallPrintProps {
  className?: string
}

/** The reassurance line under the form, with one underlined word. */
export function SmallPrint({ className }: SmallPrintProps) {
  return (
    <p
      className={cn(
        'pt-[10px] text-center font-sans text-[14px] leading-[1.5] text-muted',
        className,
      )}
    >
      I promise to <span className="border-b border-muted">never</span> spam
    </p>
  )
}
