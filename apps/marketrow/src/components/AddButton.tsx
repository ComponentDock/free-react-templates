import { cn } from '@free-react-templates/ui'
import { BAG_LABELS } from '../content'
import { PlusIcon, TickIcon } from './icons'

interface AddButtonProps {
  added: boolean
  product: string
  onToggle: (product: string) => void
}

/**
 * Ink button inset by the card's own padding, not 100% of the plate. In the
 * added state it is the page's only pale surface — lime ground, green text and
 * a tick where the plus was.
 */
export function AddButton({ added, product, onToggle }: AddButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={added}
      onClick={() => onToggle(product)}
      className={cn(
        'mx-[18px] mb-[18px] mt-[14px] flex items-center justify-center gap-2 rounded-[12px] border-[1.5px] px-4 py-3 text-[15px] font-bold leading-[1.45]',
        'border-ink bg-ink text-white transition-[background-color,color,border-color,transform] duration-200 ease-out',
        'hover:border-ink-hover hover:bg-ink-hover active:scale-[0.98]',
        'focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-ring',
        added && 'border-ok bg-ok-soft text-ok hover:border-ok hover:bg-ok-hover',
      )}
    >
      {added ? (
        <TickIcon className="tick-pop h-[18px] w-[18px]" />
      ) : (
        <PlusIcon className="h-[18px] w-[18px]" />
      )}
      <span>{added ? BAG_LABELS.added : BAG_LABELS.add}</span>
    </button>
  )
}
