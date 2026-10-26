import { cn } from '@free-react-templates/ui'

interface ToastProps {
  /** The status line's current sentence; '' at rest, when the band is 1 px tall. */
  message: string
  canUndo: boolean
  onUndo: () => void
}

/**
 * A permanent `role="status"` node. At rest it is a 1 px band with no ground; a
 * message gives it padding, radius and the #262a35 plate, and an archive keeps an
 * Undo beside it until the slot is used or replaced.
 */
export function Toast({ message, canUndo, onUndo }: ToastProps) {
  return (
    <div
      role="status"
      className={cn(
        'mt-3.5 flex min-h-px items-center justify-between gap-3 text-[14px] leading-[1.5]',
        message ? 'rounded-xl bg-toast px-3.5 py-2.5' : '',
      )}
    >
      <span>{message}</span>
      {canUndo ? (
        <button
          type="button"
          onClick={onUndo}
          className="rounded-lg px-2.5 py-1 text-[14px] leading-[1.5] font-normal text-accent hover:bg-accent-wash focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Undo
        </button>
      ) : null}
    </div>
  )
}
