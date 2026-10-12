import { cn } from '@free-react-templates/ui'
import { ContentPanel } from './ContentPanel'
import { PhotoPanel } from './PhotoPanel'
import { Scrim } from './Scrim'

export interface PrologueProps {
  className?: string
}

/**
 * The whole page: one full-viewport row stretched to its tallest child, split
 * into an opaque white content panel (first) and a photographic panel (second),
 * with a single 50% scrim layered behind both. There is no navbar, no footer
 * band, no second section and nothing to scroll at desktop width.
 */
export function Prologue({ className }: PrologueProps) {
  return (
    <main
      data-testid="prologue"
      className={cn('relative z-[1] flex min-h-screen w-full flex-wrap items-stretch', className)}
    >
      <Scrim />

      <ContentPanel />

      <PhotoPanel />
    </main>
  )
}
