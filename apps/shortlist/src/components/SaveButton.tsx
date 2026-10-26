import { Bookmark } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface SaveButtonProps {
  saved: boolean
  title: string
  company: string
  onToggle: () => void
}

/**
 * The card's only control: a 40 × 40 square bookmark. Both halves of the state
 * are exposed — `aria-pressed` for the toggle role and a label that flips from
 * "Save …" to "Remove …", so a screen reader never offers to save an already
 * saved job.
 */
export function SaveButton({ saved, title, company, onToggle }: SaveButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={saved}
      aria-label={saved ? `Remove ${title} from saved jobs` : `Save ${title} at ${company}`}
      onClick={onToggle}
      className={cn(
        'relative z-[2] grid size-10 flex-none place-items-center rounded-xl border transition-[background-color,border-color,transform] duration-200 focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-focus active:scale-[.92] motion-reduce:transition-none motion-reduce:active:scale-100',
        saved
          ? 'border-ink bg-ink text-lime'
          : 'border-line bg-white text-ink hover:border-[#9fb3a7] hover:bg-ground',
      )}
    >
      <Bookmark
        aria-hidden="true"
        size={19}
        strokeWidth={2}
        className={cn('flex-none', saved ? 'fill-current' : 'fill-none')}
      />
    </button>
  )
}
