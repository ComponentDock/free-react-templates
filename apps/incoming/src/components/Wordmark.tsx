import { Sun } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/**
 * The small centred brand mark at the top of the card: a Barlow-Bold wordmark
 * with a tiny purple glyph, echoing the reference mark-plus-word shape without
 * copying its asset.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <div className={cn('block w-full max-w-full text-center', className)}>
      <span
        className={cn(
          'inline-flex items-center gap-[6px] font-heading text-[34px] leading-none font-bold text-ink',
        )}
      >
        Incoming
        <Sun className="size-[22px] shrink-0 pt-[2px] text-brand" aria-hidden="true" />
      </span>
    </div>
  )
}
