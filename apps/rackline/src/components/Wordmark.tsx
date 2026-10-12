import { Layers } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface WordmarkProps {
  className?: string
}

/**
 * The Rackline wordmark: a tinted square holding a stacked-layer glyph beside
 * the name set at 32px / weight 200. Decorative tile, so the glyph is hidden
 * from assistive tech while the name stays readable text.
 */
export function Wordmark({ className }: WordmarkProps) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <span aria-hidden="true" className="grid h-11 w-11 place-items-center bg-soft text-lime">
        <Layers className="h-6 w-6" strokeWidth={1.5} />
      </span>
      <span className="text-[2rem] leading-none font-extralight tracking-tight text-ink">
        Rackline
      </span>
    </span>
  )
}
