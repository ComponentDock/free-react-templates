import { cn } from '@free-react-templates/ui'
import { ContentPanel } from './ContentPanel'
import { PhotoPanel } from './PhotoPanel'

export interface LoomingProps {
  className?: string
}

/**
 * The whole page: one full-viewport row, stretched to its tallest child, split
 * into an opaque white content panel (first) and a photographic panel (second),
 * with a single 50% scrim layered behind both — which is why the scrim only
 * ever reads across the photograph. No navbar, no countdown, no footer band and
 * no scrolling section.
 */
export function Looming({ className }: LoomingProps) {
  return (
    <main
      data-testid="looming"
      className={cn('relative z-1 flex min-h-screen w-full flex-wrap items-stretch', className)}
    >
      <div aria-hidden="true" data-testid="scrim" className="absolute inset-0 z-[-1] bg-scrim" />

      <ContentPanel />

      <PhotoPanel />
    </main>
  )
}
