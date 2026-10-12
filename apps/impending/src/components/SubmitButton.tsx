import { Send } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface SubmitButtonProps {
  className?: string
}

/**
 * The 80px-wide, full-height lane flush against the right edge of the e-mail
 * well: transparent at rest, a faint white wash on hover, holding a small white
 * paper-plane glyph. Icon-only, so it carries its own accessible name.
 */
export function SubmitButton({ className }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      aria-label="Submit email"
      className={cn(
        'absolute top-0 right-0 flex h-full w-[80px] items-center justify-center',
        'bg-transparent text-white transition-all duration-[400ms] hover:bg-white/[0.12]',
        'focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:outline-none',
        className,
      )}
    >
      <Send aria-hidden="true" className="size-[15px]" />
    </button>
  )
}
