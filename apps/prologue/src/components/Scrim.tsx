import { cn } from '@free-react-templates/ui'

export interface ScrimProps {
  className?: string
}

/**
 * The page's only overlay: one half-black layer filling the whole row. It sits
 * at a negative z-index inside the row, so both panels paint over it — the
 * white panel hides it on its side and the photographic panel's own background
 * hides it on the other, which is why the photograph reads at full contrast.
 * Markup-only, and it stays exactly one layer: there is no gradient.
 */
export function Scrim({ className }: ScrimProps) {
  return (
    <div
      aria-hidden="true"
      data-testid="scrim"
      className={cn('absolute inset-0 z-[-1] bg-scrim', className)}
    />
  )
}
