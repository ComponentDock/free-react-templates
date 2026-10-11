import { forwardRef } from 'react'
import { Button, cn } from '@free-react-templates/ui'

export interface ModalTriggerProps {
  className?: string
  /** Opens the subscribe dialog. */
  onOpen: () => void
}

/**
 * The outlined transparent pill that opens the dialog. Hovering the pill fades
 * in a diagonal gradient wash clipped to its 25px radius, so the shape never
 * changes — only the fill.
 */
export const ModalTrigger = forwardRef<HTMLButtonElement, ModalTriggerProps>(
  ({ className, onOpen, ...props }, ref) => (
    <Button
      ref={ref}
      variant="ghost"
      aria-haspopup="dialog"
      onClick={onOpen}
      className={cn(
        'group relative inline-flex min-h-[50px] min-w-[280px] max-w-full items-center',
        'justify-center overflow-hidden rounded-pill border-2 border-white bg-transparent px-5 py-[10px]',
        'font-heading text-[15px] leading-[1.2] font-bold text-white hover:bg-transparent',
        className,
      )}
      {...props}
    >
      <span
        aria-hidden="true"
        className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-[400ms] group-hover:opacity-100',
          'bg-[linear-gradient(45deg,var(--color-grad-a),var(--color-grad-b),var(--color-grad-c))]',
        )}
      />
      <span className="relative">Follow us for updates</span>
    </Button>
  ),
)

ModalTrigger.displayName = 'ModalTrigger'
