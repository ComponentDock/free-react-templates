import { Gift } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

export interface GlyphProps {
  className?: string
}

/** The centred 60px white gift outline sitting above the heading. */
export function Glyph({ className }: GlyphProps) {
  return (
    <p data-testid="glyph" className={cn('pb-[23px] text-center', className)}>
      <Gift aria-hidden="true" className="inline-block size-[60px] text-white" />
    </p>
  )
}
